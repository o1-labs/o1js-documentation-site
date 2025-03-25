import { Field } from "o1js";
import { describe, expect, it } from "vitest";

import constants from "./constants.json";
import { sum1, sum2 } from "./sum";

describe("sum", () => {
  it("sum1 and sum2 should be equal", () => {
    expect(sum1).toEqual(sum2);
  });
});

describe("constants", () => {
  it("max_size should be the order of Field", () => {
    expect(Field.ORDER).toBe(BigInt(constants.max_size));
  });
});
