import { describe, expect, it } from "vitest";
import { fibonacci, queue_compression, eligibility } from "./recursion";

const { Fibonacci, proof1, proof2, proof3, proof4, proof5 } = await fibonacci();

const { SumBlocks, blocks, proof: sumProof } = await queue_compression();

const {
  Eligibility,
  ExampleApplication,
  approvedUsers,
  eligibilityProof,
  exampleProof: applicationProof,
} = await eligibility();

describe("Fibonacci", () => {
  it("proof3 is valid", async () => {
    expect(await Fibonacci.verify(proof3.proof)).toBe(true);
  });

  it("Public output includes correct Fibonacci number", async () => {
    expect(proof1.proof.publicOutput.n_1.toBigint()).toBe(1n);
    expect(proof2.proof.publicOutput.n_1.toBigint()).toBe(2n);
    expect(proof3.proof.publicOutput.n_1.toBigint()).toBe(3n);
    expect(proof4.proof.publicOutput.n_1.toBigint()).toBe(5n);
    expect(proof5.proof.publicOutput.n_1.toBigint()).toBe(8n);
  });
});

describe("Queue Compression", () => {
  it("sumProof is valid", async () => {
    expect(await SumBlocks.verify(sumProof.proof)).toBe(true);
  });
  it("Proof matches blocks", async () => {
    expect(sumProof.proof.publicOutput.currentSum.toBigint()).toBe(
      blocks.reduce((acc, block) => acc + block.value.toBigint(), 0n)
    );
    expect(sumProof.proof.publicOutput.startingHash.toString()).toBe(
      blocks[0].hash.toString()
    );
    expect(sumProof.proof.publicOutput.endingHash.toString()).toBe(
      blocks[blocks.length - 1].hash.toString()
    );
  });
});

describe("Eligibility", () => {
  it("eligibilityProof is valid", async () => {
    expect(await Eligibility.verify(eligibilityProof.proof)).toBe(true);
  });

  it("applicationProof is valid", async () => {
    expect(await ExampleApplication.verify(applicationProof.proof)).toBe(true);
  });
});
