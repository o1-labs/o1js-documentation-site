import { describe, expect, it } from "vitest";
import { multiHash } from "./sideloaded-vks";

const {
  Sha2,
  Sha3,
  MultiHash,
  sha2Hash,
  sha2Proof,
  sha3Hash,
  sha3Proof,
  genericProofSha2,
  genericProofSha3,
} = await multiHash();

describe("Sideloaded Verification Keys", () => {
  it("Intermediate proofs should be valid", async () => {
    expect(await Sha2.verify(sha2Proof.proof)).toBe(true);
    expect(await Sha3.verify(sha3Proof.proof)).toBe(true);
  });
  it("Public input of intermediate proofs should match the hashes", async () => {
    expect(sha2Proof.proof.publicInput.toString()).toBe(sha2Hash.toString());
    expect(sha3Proof.proof.publicInput.toString()).toBe(sha3Hash.toString());
  });
  it("Generic proofs should be valid", async () => {
    const resultSha2 = await MultiHash.verify(genericProofSha2.proof);
    const resultSha3 = await MultiHash.verify(genericProofSha3.proof);
    expect(resultSha2).toBe(true);
    expect(resultSha3).toBe(true);
  });
});
