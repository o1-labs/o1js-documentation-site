import { Cache, VerificationKey, ZkProgram } from "o1js";
import fs from "fs";

// start_dummy
const Dummy = ZkProgram({
  name: "Dummy",
  publicOutput: null,
  methods: {
    dummy: {
      privateInputs: [],
      method: async () => {
        return { publicOutput: null };
      },
    },
  },
});
// end_dummy

const serializeProofsAndVks = async () => {
  // start_proofs_and_vks
  // Compile once to generate the Verification Key
  const dummy = await Dummy.compile();

  // Serialize the verification key
  fs.writeFileSync(
    "dummy_vk.json",
    VerificationKey.toJSON(dummy.verificationKey)
  );

  const proof = await Dummy.dummy();

  // Serialize the proof
  fs.writeFileSync("dummy_proof.json", JSON.stringify(proof.proof.toJSON()));
  // end_proofs_and_vks
};

const cacheArtifacts = async () => {
  // start_cache
  // Pass in a cache to write the artifacts to disk
  const cache = Cache.FileSystemDefault;
  await Dummy.compile({ cache });
  // end_cache
};

export { serializeProofsAndVks, cacheArtifacts };
