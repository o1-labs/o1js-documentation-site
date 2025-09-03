import { Field } from "o1js";
import { describe, expect, it } from "vitest";

import constants from "./constants.json" with { type: "json" };
import { sum1, sum2, overflow, underflow } from "./field";

describe("sum", () => {
  it("sum1 and sum2 should be equal", () => {
    expect(sum1).toEqual(sum2);
  });
});

describe("overflow", () => {
  it("overflow should be 1", () => {
    expect(overflow.toBigInt()).toEqual(0n);
  });

  it("underflow should be the order of the field", () => {
    expect(underflow.toBigInt()).toEqual(Field.ORDER - 1n);
  });
});

describe("constants", () => {
  it("max_size should be the order of Field", () => {
    expect(Field.ORDER).toBe(BigInt(constants.max_size));
  });
});
