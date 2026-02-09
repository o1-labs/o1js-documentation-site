import { SmartContract, state, State, method, Field, Bool, ZkProgram, Proof, SelfProof, Struct, PublicKey, Signature, UInt32, Poseidon, Provable, verify } from 'o1js';

// start_basic_zkprogram
export const BasicMathProgram = ZkProgram({
  name: 'BasicMathProgram',
  publicInput: Field,
  publicOutput: Field,
  
  methods: {
    square: {
      privateInputs: [],
      async method(input: Field) {
        return input.mul(input);
      },
    },
    
    multiply: {
      privateInputs: [Field],
      async method(publicInput: Field, privateInput: Field) {
        return publicInput.mul(privateInput);
      },
    },
  },
});

export class BasicMathProof extends ZkProgram.Proof(BasicMathProgram) {}

export class ProofVerifierContract extends SmartContract {
  @state(Field) verifiedResult = State<Field>();
  @state(UInt32) proofCount = State<UInt32>();

  init() {
    super.init();
    this.verifiedResult.set(Field(0));
    this.proofCount.set(UInt32.from(0));
  }

  @method async verifySquareProof(proof: BasicMathProof) {
    // Verify the proof is valid
    proof.verify();
    
    // Ensure it's a square operation proof
    proof.publicOutput.assertEquals(proof.publicInput.mul(proof.publicInput));
    
    // Store the verified result
    this.verifiedResult.set(proof.publicOutput);
    
    // Increment proof count
    const currentCount = this.proofCount.getAndRequireEquals();
    this.proofCount.set(currentCount.add(1));
  }

  @method async verifyAndAccumulate(proof: BasicMathProof, multiplier: Field) {
    // Verify the proof
    proof.verify();
    
    // Use the proven result in further computation
    const provenResult = proof.publicOutput;
    const newResult = provenResult.mul(multiplier);
    
    // Accumulate with existing state
    const currentResult = this.verifiedResult.getAndRequireEquals();
    this.verifiedResult.set(currentResult.add(newResult));
  }
}
// end_basic_zkprogram

// start_recursive_proofs
export const RecursiveProgram = ZkProgram({
  name: 'RecursiveProgram',
  publicInput: Field,
  publicOutput: Field,
  
  methods: {
    baseCase: {
      privateInputs: [],
      async method(input: Field) {
        return input.add(1);
      },
    },
    
    recursiveCase: {
      privateInputs: [SelfProof],
      async method(input: Field, previousProof: SelfProof) {
        // Verify the previous proof
        previousProof.verify();
        
        // Ensure continuity: current input should be previous output + 1
        previousProof.publicOutput.add(1).assertEquals(input);
        
        // Continue the sequence
        return input.add(1);
      },
    },
  },
});

export class RecursiveProof extends ZkProgram.Proof(RecursiveProgram) {}

export class RecursiveContract extends SmartContract {
  @state(Field) finalValue = State<Field>();
  @state(UInt32) chainLength = State<UInt32>();

  init() {
    super.init();
    this.finalValue.set(Field(0));
    this.chainLength.set(UInt32.from(0));
  }

  @method async acceptRecursiveProof(proof: RecursiveProof, expectedLength: UInt32) {
    // Verify the proof
    proof.verify();
    
    // Store the final value from the proof chain
    this.finalValue.set(proof.publicOutput);
    this.chainLength.set(expectedLength);
  }
}
// end_recursive_proofs

// start_complex_zkprogram
export class MerkleNode extends Struct({
  left: Field,
  right: Field,
}) {
  hash(): Field {
    return Poseidon.hash([this.left, this.right]);
  }
}

export const MerkleProofProgram = ZkProgram({
  name: 'MerkleProofProgram',
  publicInput: Field, // Root hash
  publicOutput: Bool, // Whether leaf is in tree
  
  methods: {
    verifyLeaf: {
      privateInputs: [Field, Array<Field>], // leaf value, merkle path
      async method(root: Field, leaf: Field, path: Array<Field>) {
        // Verify merkle path leads to root
        let currentHash = leaf;
        
        for (let i = 0; i < path.length; i++) {
          const sibling = path[i];
          // Simplified: assume left path
          currentHash = Poseidon.hash([currentHash, sibling]);
        }
        
        // Check if computed hash equals root
        const isValid = currentHash.equals(root);
        return isValid;
      },
    },
    
    updateLeaf: {
      privateInputs: [Field, Field, Array<Field>], // old leaf, new leaf, merkle path
      async method(root: Field, oldLeaf: Field, newLeaf: Field, path: Array<Field>) {
        // Verify old leaf is in tree
        let currentHash = oldLeaf;
        for (let i = 0; i < path.length; i++) {
          currentHash = Poseidon.hash([currentHash, path[i]]);
        }
        currentHash.assertEquals(root);
        
        // Compute new root with updated leaf
        let newRoot = newLeaf;
        for (let i = 0; i < path.length; i++) {
          newRoot = Poseidon.hash([newRoot, path[i]]);
        }
        
        // Return success (always true if verification passes)
        return Bool(true);
      },
    },
  },
});

export class MerkleProof extends ZkProgram.Proof(MerkleProofProgram) {}

export class MerkleTreeContract extends SmartContract {
  @state(Field) root = State<Field>();
  @state(UInt32) verificationCount = State<UInt32>();

  init() {
    super.init();
    this.root.set(Field(0));
    this.verificationCount.set(UInt32.from(0));
  }

  @method async verifyMembership(proof: MerkleProof) {
    // Verify the merkle proof
    proof.verify();
    
    // Ensure the proof is for the current root
    const currentRoot = this.root.getAndRequireEquals();
    proof.publicInput.assertEquals(currentRoot);
    
    // Proof output should be true (membership verified)
    proof.publicOutput.assertTrue();
    
    // Update verification count
    const currentCount = this.verificationCount.getAndRequireEquals();
    this.verificationCount.set(currentCount.add(1));
  }

  @method async updateWithProof(proof: MerkleProof, newRoot: Field) {
    // Verify the update proof
    proof.verify();
    
    // Current root should match proof input
    const currentRoot = this.root.getAndRequireEquals();
    proof.publicInput.assertEquals(currentRoot);
    
    // Proof should indicate successful update
    proof.publicOutput.assertTrue();
    
    // Update to new root
    this.root.set(newRoot);
  }
}
// end_complex_zkprogram

// start_multi_program_composition
export const AuthProgram = ZkProgram({
  name: 'AuthProgram',
  publicInput: PublicKey,
  publicOutput: Bool,
  
  methods: {
    verifySignature: {
      privateInputs: [Field, Signature],
      async method(publicKey: PublicKey, message: Field, signature: Signature) {
        const isValid = signature.verify(publicKey, [message]);
        return isValid;
      },
    },
  },
});

export const ComputeProgram = ZkProgram({
  name: 'ComputeProgram',
  publicInput: Field,
  publicOutput: Field,
  
  methods: {
    complexComputation: {
      privateInputs: [Field, Field],
      async method(input: Field, secret1: Field, secret2: Field) {
        // Some complex private computation
        const intermediate = secret1.mul(secret2);
        const result = input.add(intermediate).mul(Field(3));
        return result;
      },
    },
  },
});

export class AuthProof extends ZkProgram.Proof(AuthProgram) {}
export class ComputeProof extends ZkProgram.Proof(ComputeProgram) {}

export class MultiProofContract extends SmartContract {
  @state(Field) authorizedResult = State<Field>();
  @state(PublicKey) lastAuthorizedUser = State<PublicKey>();

  init() {
    super.init();
    this.authorizedResult.set(Field(0));
  }

  @method async authorizedComputation(
    authProof: AuthProof,
    computeProof: ComputeProof,
    user: PublicKey
  ) {
    // Verify authentication proof
    authProof.verify();
    authProof.publicInput.assertEquals(user);
    authProof.publicOutput.assertTrue();
    
    // Verify computation proof
    computeProof.verify();
    
    // Use results from both proofs
    this.authorizedResult.set(computeProof.publicOutput);
    this.lastAuthorizedUser.set(user);
  }

  @method async chainedProofs(
    firstProof: ComputeProof,
    secondProof: ComputeProof
  ) {
    // Verify both proofs
    firstProof.verify();
    secondProof.verify();
    
    // Chain them: second proof input should use first proof output
    secondProof.publicInput.assertEquals(firstProof.publicOutput);
    
    // Store final result
    this.authorizedResult.set(secondProof.publicOutput);
  }
}
// end_multi_program_composition

// start_proof_aggregation
export class BatchData extends Struct({
  values: Array<Field>,
  sum: Field,
}) {
  validate() {
    // Verify sum matches values
    let computedSum = Field(0);
    for (const value of this.values) {
      computedSum = computedSum.add(value);
    }
    this.sum.assertEquals(computedSum);
  }
}

export const BatchProgram = ZkProgram({
  name: 'BatchProgram',
  publicInput: Field, // Expected total
  publicOutput: Bool, // Whether batch is valid
  
  methods: {
    processBatch: {
      privateInputs: [Array<Field>], // Array of values
      async method(expectedTotal: Field, values: Array<Field>) {
        values.length.assertLessThanOrEqual(10); // Max batch size
        
        let sum = Field(0);
        for (const value of values) {
          value.assertGreaterThan(Field(0)); // All values must be positive
          sum = sum.add(value);
        }
        
        // Check if sum matches expected
        const isValid = sum.equals(expectedTotal);
        return isValid;
      },
    },
    
    aggregateProofs: {
      privateInputs: [SelfProof, SelfProof],
      async method(expectedTotal: Field, proof1: SelfProof, proof2: SelfProof) {
        // Verify both proofs
        proof1.verify();
        proof2.verify();
        
        // Both should be valid
        proof1.publicOutput.assertTrue();
        proof2.publicOutput.assertTrue();
        
        // Combined total should match expected
        const combinedTotal = proof1.publicInput.add(proof2.publicInput);
        const isValid = combinedTotal.equals(expectedTotal);
        
        return isValid;
      },
    },
  },
});

export class BatchProof extends ZkProgram.Proof(BatchProgram) {}

export class AggregatorContract extends SmartContract {
  @state(Field) totalProcessed = State<Field>();
  @state(UInt32) batchCount = State<UInt32>();

  init() {
    super.init();
    this.totalProcessed.set(Field(0));
    this.batchCount.set(UInt32.from(0));
  }

  @method async processBatch(proof: BatchProof) {
    // Verify batch proof
    proof.verify();
    proof.publicOutput.assertTrue();
    
    // Add to total processed
    const currentTotal = this.totalProcessed.getAndRequireEquals();
    this.totalProcessed.set(currentTotal.add(proof.publicInput));
    
    // Increment batch count
    const currentCount = this.batchCount.getAndRequireEquals();
    this.batchCount.set(currentCount.add(1));
  }

  @method async aggregateMultipleBatches(proofs: Array<BatchProof>) {
    proofs.length.assertLessThanOrEqual(5); // Max aggregation size
    
    let aggregatedTotal = Field(0);
    
    // Verify all proofs and sum totals
    for (const proof of proofs) {
      proof.verify();
      proof.publicOutput.assertTrue();
      aggregatedTotal = aggregatedTotal.add(proof.publicInput);
    }
    
    // Update state with aggregated result
    const currentTotal = this.totalProcessed.getAndRequireEquals();
    this.totalProcessed.set(currentTotal.add(aggregatedTotal));
    
    const currentCount = this.batchCount.getAndRequireEquals();
    this.batchCount.set(currentCount.add(proofs.length));
  }
}
// end_proof_aggregation