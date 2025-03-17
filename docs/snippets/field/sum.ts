import { Field } from "o1js";

// start_sum_1
const sum1 = new Field(1).add(new Field(3));
// end_sum_1

// start_sum_2
// Note that the `3` is automatically converted to a Field instance.
const sum2 = new Field(1).add(3);
// end_sum_2
