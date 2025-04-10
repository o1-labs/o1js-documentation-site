import { describe, expect, it } from "vitest";
import { simpleZkProgram, complexZkProgram } from "./zk-program";
import { Field, Poseidon } from "o1js";

const { SimpleZkProgram, proof1, proof2 } = await simpleZkProgram();
const { VoteProgram, voteProof, election } = await complexZkProgram();

describe("Simple", () => {
  it("proofs 1 and 2 are both valid", async () => {
    expect(await SimpleZkProgram.verify(proof1.proof)).toBe(true);
    expect(await SimpleZkProgram.verify(proof2.proof)).toBe(true);
  });

  it("Proof public outputs are correct", async () => {
    expect(proof1.proof.publicOutput.toBigInt()).toBe(30n);
    expect(proof2.proof.publicOutput.toString()).toBe(
      Poseidon.hash([Field(10), Field(20), Field(30)]).toString()
    );
  });
});

describe("Complex", () => {
  it("proofs 1 and 2 are both valid", async () => {
    expect(await VoteProgram.verify(voteProof.proof)).toBe(true);
  });

  it("Public output includes correct votes", async () => {
    expect(voteProof.proof.publicOutput.totalVotes.toBigint()).toBe(1n);
    expect(voteProof.proof.publicOutput.candidates[4].votes.toBigint()).toBe(
      1n
    );
  });

  it("Didn't modify the input", async () => {
    expect(election.candidates[4].votes.toBigint()).toBe(0n);
    expect(election.totalVotes.toBigint()).toBe(0n);
  });
});
