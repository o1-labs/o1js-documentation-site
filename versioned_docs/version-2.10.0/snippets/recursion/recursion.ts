import {
  Bool,
  Experimental,
  Field,
  Poseidon,
  PrivateKey,
  PublicKey,
  SelfProof,
  Struct,
  UInt32,
  verify,
  ZkProgram,
} from "o1js";

const fibonacci = async () => {
  // start_fibonacci_state
  class FibonacciState extends Struct({
    index: UInt32,
    n_1: UInt32,
    n_2: UInt32,
  }) {
    static empty() {
      return new FibonacciState({
        index: UInt32.zero,
        n_1: UInt32.zero,
        n_2: UInt32.zero,
      });
    }
    assertEquals(other: FibonacciState) {
      this.index.assertEquals(other.index);
      this.n_1.assertEquals(other.n_1);
      this.n_2.assertEquals(other.n_2);
    }
  }

  // end_fibonacci_state

  // start_fibonacci_program
  const Fibonacci = ZkProgram({
    name: "Fibonacci",
    publicInput: FibonacciState,
    publicOutput: FibonacciState,

    methods: {
      base: {
        privateInputs: [],
        method: async (_: FibonacciState) => {
          return {
            publicOutput: new FibonacciState({
              index: UInt32.from(1),
              n_1: UInt32.from(1),
              n_2: UInt32.from(1),
            }),
          };
        },
      },
      recursive: {
        privateInputs: [SelfProof],
        method: async (
          input: FibonacciState,
          // Note that the `SelfProof` syntax here means that the proof has public input: FibonacciState and public output: FibonacciState
          previousProof: SelfProof<FibonacciState, FibonacciState>
        ) => {
          // Assert that the public input to this method matches the public output of the previous proof
          input.assertEquals(previousProof.publicOutput);
          // Verify the previous proof
          previousProof.verify();

          // Return the next Fibonacci number
          return {
            publicOutput: new FibonacciState({
              index: input.index.add(1),
              n_1: input.n_1.add(input.n_2),
              n_2: input.n_1,
            }),
          };
        },
      },
    },
  });
  // end_fibonacci_program

  // start_fibonacci_usage
  await Fibonacci.compile();
  const proof1 = await Fibonacci.base(FibonacciState.empty());
  const proof2 = await Fibonacci.recursive(
    proof1.proof.publicOutput,
    proof1.proof
  );
  const proof3 = await Fibonacci.recursive(
    proof2.proof.publicOutput,
    proof2.proof
  );
  const proof4 = await Fibonacci.recursive(
    proof3.proof.publicOutput,
    proof3.proof
  );
  const proof5 = await Fibonacci.recursive(
    proof4.proof.publicOutput,
    proof4.proof
  );
  // end_fibonacci_usage
  return {
    Fibonacci,
    proof1,
    proof2,
    proof3,
    proof4,
    proof5,
  };
};

const queue_compression = async () => {
  // start_queue_data
  let lastHash = Poseidon.hash([UInt32.zero.value]);
  const blocks = [{ value: UInt32.zero, hash: lastHash }];
  for (let i = 0; i < 3; i++) {
    const value = UInt32.from(Math.floor(Math.random() * 100));
    const block = { value, hash: Poseidon.hash([lastHash, value.value]) };
    blocks.push(block);
    lastHash = block.hash;
  }
  // end_queue_data

  // start_queue_program
  class BlockProofOutputs extends Struct({
    currentSum: UInt32,
    startingHash: Field,
    endingHash: Field,
  }) {}

  const SumBlocks = ZkProgram({
    name: "SumBlocks",
    publicInput: UInt32,
    publicOutput: BlockProofOutputs,

    methods: {
      base: {
        privateInputs: [],
        method: async (_: UInt32) => {
          return {
            publicOutput: new BlockProofOutputs({
              currentSum: UInt32.zero,
              startingHash: Poseidon.hash([UInt32.zero.value]),
              endingHash: Poseidon.hash([UInt32.zero.value]),
            }),
          };
        },
      },
      addNext: {
        privateInputs: [SelfProof],
        method: async (
          input: UInt32,
          previousProof: SelfProof<UInt32, BlockProofOutputs>
        ) => {
          previousProof.verify();

          return {
            publicOutput: new BlockProofOutputs({
              currentSum: previousProof.publicOutput.currentSum.add(input),
              startingHash: previousProof.publicOutput.startingHash,
              endingHash: Poseidon.hash([
                previousProof.publicOutput.endingHash,
                input.value,
              ]),
            }),
          };
        },
      },
    },
  });
  // end_queue_program

  // start_queue_usage
  await SumBlocks.compile();

  const baseProof = await SumBlocks.base(UInt32.zero);
  let proof = baseProof;
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const nextProof = await SumBlocks.addNext(block.value, proof.proof);
    proof = nextProof;
  }

  // end_queue_usage
  return {
    SumBlocks,
    blocks,
    proof,
  };
};

const eligibility = async () => {
  // start_branch
  // Example, generate list of public keys that are allowed to use a system
  const approvedUsers = Array.from({ length: 5 }, () => PrivateKey.random());
  class MyMerkleMap extends Experimental.IndexedMerkleMap(4) {}
  const approvedUsersMap = new MyMerkleMap();
  for (let i = 0; i < approvedUsers.length; i++) {
    approvedUsersMap.set(
      BigInt(i),
      Poseidon.hash(approvedUsers[i].toPublicKey().toFields())
    );
  }

  const Eligibility = ZkProgram({
    name: "Eligibility",
    publicOutput: null,

    methods: {
      check: {
        privateInputs: [Field, PrivateKey],
        method: async (index: Field, key: PrivateKey) => {
          approvedUsersMap
            .get(index)
            .assertEquals(Poseidon.hash(key.toPublicKey().toFields()));
        },
      },
    },
  });

  // Define the proof class of the eligibility program
  class EligibilityProof extends ZkProgram.Proof(Eligibility) {}

  const ExampleApplication = ZkProgram({
    name: "ExampleApplication",
    publicInput: null,
    publicOutput: null,
    methods: {
      use: {
        privateInputs: [EligibilityProof],
        method: async (eligibilityProof: EligibilityProof) => {
          // Verify the eligibility proof
          eligibilityProof.verify();

          // We now know that the user is eligible to use the system
          // This is comparable to `if( user in approvedUsers ) { ... }` but accounting for the lack of conditional execution in zk programs
          // Do something with the user
          // ...

          Field(0).assertEquals(0);
        },
      },
    },
  });
  // Usage
  const e = await Eligibility.compile();
  await ExampleApplication.compile();

  const eligibilityProof = await Eligibility.check(Field(0), approvedUsers[0]);
  // We can use the proof of eligibility from one program as an input to another program
  const exampleProof = await ExampleApplication.use(eligibilityProof.proof);
  // end_branch
  return {
    Eligibility,
    ExampleApplication,
    approvedUsers,
    eligibilityProof,
    exampleProof,
  };
};

export { fibonacci, queue_compression, eligibility };
