import {
  Field,
  Poseidon,
  PrivateKey,
  Provable,
  PublicKey,
  Struct,
  UInt32,
  ZkProgram,
} from "o1js";

async function simpleZkProgram() {
  // start_simple
  const SimpleZkProgram = ZkProgram({
    name: "SimpleZkProgram",
    publicInput: Field,
    publicOutput: Field,
    methods: {
      add: {
        privateInputs: [Field],
        method: async (publicInput: Field, privateInput: Field) => {
          return { publicOutput: publicInput.add(privateInput) };
        },
      },
      hash: {
        privateInputs: [Field, Field],
        method: async (
          publicInput: Field,
          privateInput1: Field,
          privateInput2: Field
        ) => {
          const publicOutput = Poseidon.hash([
            publicInput,
            privateInput1,
            privateInput2,
          ]);
          return { publicOutput };
        },
      },
    },
  });

  // usage
  await SimpleZkProgram.compile(); // Build the constraint system

  // Support for different types of inputs on the same type of proof
  const proof1 = await SimpleZkProgram.add(Field(10), Field(20));
  const proof2 = await SimpleZkProgram.hash(Field(10), Field(20), Field(30));

  SimpleZkProgram.verify(proof1.proof);
  SimpleZkProgram.verify(proof2.proof);
  // end_simple

  return { SimpleZkProgram, proof1, proof2 };
}

async function complexZkProgram() {
  // start_complex
  const MAX_CANDIDATES = 8;

  class Candidate extends Struct({
    publicKey: PublicKey,
    votes: UInt32,
  }) {}

  class Election extends Struct({
    candidates: Provable.Array(Candidate, MAX_CANDIDATES),
    totalVotes: UInt32,
  }) {
    /**
     * Clone method to create a deep copy of the Election instance.
     * This is useful to for avoiding side effects in provable code.
     */
    clone() {
      return new Election({
        candidates: this.candidates.map(
          (candidate) => new Candidate(candidate)
        ),
        totalVotes: UInt32.from(this.totalVotes),
      });
    }
  }

  const VoteProgram = ZkProgram({
    name: "VoteProgram",
    publicInput: Election,
    publicOutput: Election,
    methods: {
      vote: {
        privateInputs: [PublicKey],
        method: async (election: Election, candidateKey: PublicKey) => {
          const electionClone = election.clone();
          for (let i = 0; i < MAX_CANDIDATES; i++) {
            const candidate = election.candidates[i];
            const newVotes = Provable.if(
              candidate.publicKey.equals(candidateKey),
              candidate.votes.add(1),
              candidate.votes
            );
            electionClone.candidates[i].votes = newVotes;
          }
          electionClone.totalVotes = electionClone.totalVotes.add(1);
          return {
            publicOutput: electionClone,
          };
        },
      },
    },
  });

  // usage
  const candidates = Array.from({ length: MAX_CANDIDATES }, (_, i) => {
    return new Candidate({
      publicKey: PrivateKey.random().toPublicKey(),
      votes: UInt32.from(0),
    });
  });

  const election = new Election({
    candidates,
    totalVotes: UInt32.from(0),
  });

  await VoteProgram.compile();

  const voteProof = await VoteProgram.vote(election, candidates[4].publicKey);

  VoteProgram.verify(voteProof.proof);
  // end_complex

  return { VoteProgram, election, voteProof };
}

export { simpleZkProgram, complexZkProgram };
