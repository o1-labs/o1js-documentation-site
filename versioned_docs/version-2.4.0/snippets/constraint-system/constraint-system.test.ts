import { describe, expect, it } from "vitest";
import { constraintSystemExample, zkProgramExample } from "./constraint-system";
import constants from "./constants.json";

describe("Constraint System", () => {
  it("generates a valid constraint system", async () => {
    const { cs } = await constraintSystemExample();
    expect(cs.summary()).toEqual(constants.csSummary);
  });
});

describe("ZkProgram", () => {
  it("generates a valid constraint system", async () => {
    const { zkp_analysis } = await zkProgramExample();
    expect(zkp_analysis.example.summary()).toEqual(constants.zkpSummary);
  });

  it("summary is equivalent to the CS summary", async () => {
    // Update the content of docs/writing-constraint-systems/analyzing-constraint-systems.mdx
    // If this is no longer true
    const { cs } = await constraintSystemExample();
    const { zkp_analysis } = await zkProgramExample();
    expect(zkp_analysis.example.summary()).toEqual(cs.summary());
  });
});

// TODO: Add tests for SmartContract
// Decorator metadata is not supported by vitest, so we should probably switch to
// to node:test
