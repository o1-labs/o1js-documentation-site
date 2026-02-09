import { expect, it } from "vitest";

import { fieldArray } from "./arrays";
import { Field } from "o1js";

it("Witnessed field array is equivalent to a JS array of Fields", () => {
  expect(fieldArray).toMatchObject([Field(1), Field(2), Field(3)]);
  expect(fieldArray.map((x) => x.toBigInt())).toMatchObject([1n, 2n, 3n]);
});
