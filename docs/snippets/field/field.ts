import { Field } from "o1js";

// start_sum_1
const sum1 = Field(1).add(Field(3));
// end_sum_1

// start_sum_2
// Note that the `3` is automatically converted to a Field instance.
const sum2 = Field(1).add(3);
// end_sum_2

// start_overflow
// The result is 0 because the sum overflows.
const overflow = Field(Field.ORDER - 1n).add(1);
// end_overflow

// start_underflow
// The result is equivalent to the order of the field minus 1 because the subtraction underflows.
const underflow = Field(0).sub(1);
// end_underflow

export { sum1, sum2, overflow, underflow };
