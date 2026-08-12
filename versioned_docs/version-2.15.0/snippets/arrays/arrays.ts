import { Field, Provable, Signature } from "o1js";

// start_provable_array
const FieldArray3 = Provable.Array(Field, 3);
const SignatureArray2 = Provable.Array(Signature, 2);
// end_provable_array

// start_in_witness
const fieldArray = Provable.witness(FieldArray3, () => {
  return [Field(1), Field(2), Field(3)];
});
fieldArray.map((x) => x.toBigInt()); // [1n, 2n, 3n]
// end_in_witness

export { FieldArray3, SignatureArray2, fieldArray };

// start_invalid_examples
// Invalid: Dynamic arrays are not allowed in provable code
// INVALID - DO NOT COPY
let dynamicArray = [];
dynamicArray.push(Field(1)); // Error: Cannot use dynamic array operations
dynamicArray.push(Field(2)); // Error: Array size must be known at compile time

// Invalid: Array size cannot change
// INVALID - DO NOT COPY
const arr = Provable.Array(Field, 2).empty();
arr.push(Field(1)); // Error: push() is not available on provable arrays
// end_invalid_examples