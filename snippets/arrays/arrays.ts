import { Field, Provable, Signature } from "o1js";

// start_provable_array
const FieldArray3 = Provable.Array(Field, 3);
const SignatureArray2 = Provable.Array(Signature, 2);
// end_provable_array

// start_in_witness
const fieldArray = Provable.witness(FieldArray3, () => {
  return [Field(1), Field(2), Field(3)];
});
console.log(fieldArray.map((x) => x.toBigInt())); // [1n, 2n, 3n]
// end_in_witness

export { FieldArray3, SignatureArray2, fieldArray };
