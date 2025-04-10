import { describe, expect, it } from "vitest";

import { uint8, uint32, uint64, int64, alternative_int64 } from "./int";

describe("instantiation", () => {
  it("all instances are generated successfully", () => {
    expect(uint8.toBigInt()).toBe(1n);
    expect(uint32.toBigint()).toBe(BigInt(2 ** 32 - 1));
    expect(uint64.toBigInt()).toBe(10n);
    expect(int64.toBigint()).toBe(-10n);
    expect(alternative_int64.toBigint()).toBe(20n);
  });
});
