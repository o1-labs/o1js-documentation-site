import {
  Bool,
  Bytes,
  DynamicProof,
  FeatureFlags,
  Field,
  FlexibleProvable,
  Hash,
  Poseidon,
  Provable,
  VerificationKey,
  verify,
  ZkProgram,
} from "o1js";

const multiHash = async () => {
  // start_multi_hash_setup
  // Define our bytes input
  class Bytes32 extends Bytes(32) {
    static assertEquals(a: Bytes, b: Bytes) {
      Poseidon.hash(a.toFields()).assertEquals(Poseidon.hash(b.toFields()));
    }
  }

  const Sha2 = ZkProgram({
    name: "SHA2_256",
    publicInput: Bytes32,
    methods: {
      verifyPreimage: {
        privateInputs: [Bytes32],
        method: async (claimedHash: Bytes32, preimage: Bytes32) => {
          const calculatedHash = Hash.SHA2_256.hash(preimage);
          Bytes32.assertEquals(claimedHash, calculatedHash);
        },
      },
    },
  });

  const Sha3 = ZkProgram({
    name: "SHA3_256",
    publicInput: Bytes32,
    methods: {
      verifyPreimage: {
        privateInputs: [Bytes32],
        method: async (claimedHash: Bytes32, preimage: Bytes32) => {
          const calculatedHash = Hash.SHA3_256.hash(preimage);
          Bytes32.assertEquals(claimedHash, calculatedHash);
        },
      },
    },
  });
  // end_multi_hash_setup

  // start_multi_hash_proof
  // Define the proof shape that both hash implementations satisfy
  class HashProof extends DynamicProof<Bytes32, null> {
    /**
     * Bytes.provable is a little trick to access the provable type of the class - Not required for simpler types like Field or UInt32
     */
    static publicInputType = Bytes32.provable;
    /**
     * Hacky way to set the public output type to null
     */
    static publicOutputType = Sha2.publicOutputType;
    /**
     * maxProofsVerified sets the wrapping domain for this proof.
     * Essentially, it tells the compiler how many times `verify` may be called
     */
    static maxProofsVerified = 0 as const;
    /**
     * Set all feature flags to maybe to indicate that the sideloaded proof may use any gate types
     * NOTE: Failing to do this may result in a nasty error - unless you sepcifically want to exclude a feature, allMaybe is a safe default
     */
    static featureFlags = FeatureFlags.allMaybe;
  }
  // end_multi_hash_proof

  // Calculate the verification keys for both hash implementations
  // Once the VKs are known, we don't need to compile them again in the future
  const Sha2VK = await Sha2.compile();
  const Sha3VK = await Sha3.compile();

  console.log("SHA2_256 VK hash: ", Sha2VK.verificationKey.hash.toString());
  console.log("SHA3_256 VK hash: ", Sha3VK.verificationKey.hash.toString());

  // start_multi_hash_program
  // Define our generic multi-hash program
  const MultiHash = ZkProgram({
    name: "MultiHash",
    publicInput: Bytes32,
    methods: {
      verifyPreimage: {
        privateInputs: [HashProof, VerificationKey],
        method: async (
          claimedHash: Bytes32,
          proof: HashProof,
          verificationKey: VerificationKey
        ) => {
          // Pass verification key into `proof.verify` in the sideloaded case
          proof.verify(verificationKey);

          // Assert that the verification key matches one of our known programs
          // NOTE: A merkle map could be a more efficient check for larger sets
          // but this example uses a simpler check for clarity
          let match = Bool(false);
          match = match.or(
            // SHA2_256 VK
            verificationKey.hash.equals(
              "18946629726997484436154648354739477208964589603707310554296950898554384176434"
            )
          );
          match = match.or(
            // SHA3_256 VK
            verificationKey.hash.equals(
              "10594931916390393299319985652348439891528773201960631586652037259274667432468"
            )
          );
          match.assertEquals(true, "Invalid verification key");

          // Now we know that the proof is legitimate
          // The user provided proof that they know the preimage of _some_ hash
          // Finally, let's confirm that _some_ hash is the hash being claimed
          Bytes32.assertEquals(proof.publicInput, claimedHash);
        },
      },
    },
  });
  // end_multi_hash_program

  // Usage

  // start_multi_hash_verify
  const preimage = Bytes32.random();
  const sha2Hash = Hash.SHA2_256.hash(preimage);
  const sha3Hash = Hash.SHA3_256.hash(preimage);

  const sha2Proof = await Sha2.verifyPreimage(sha2Hash, preimage);
  const sha3Proof = await Sha3.verifyPreimage(sha3Hash, preimage);

  // Wrap the original proof in the dymamic proof class for compatibility
  const sha2ProofToBeSideloaded = HashProof.fromProof(sha2Proof.proof);
  const sha3ProofToBeSideloaded = HashProof.fromProof(sha3Proof.proof);

  await MultiHash.compile();
  const genericProofSha2 = await MultiHash.verifyPreimage(
    sha2Hash,
    sha2ProofToBeSideloaded,
    Sha2VK.verificationKey
  );
  const genericProofSha3 = await MultiHash.verifyPreimage(
    sha3Hash,
    sha3ProofToBeSideloaded,
    Sha3VK.verificationKey
  );

  // end_multi_hash_verify
  return {
    Sha2,
    Sha2VK,
    Sha3,
    Sha3VK,
    MultiHash,
    sha2Hash,
    sha2Proof,
    sha3Hash,
    sha3Proof,
    genericProofSha2,
    genericProofSha3,
  };
};

export { multiHash };
