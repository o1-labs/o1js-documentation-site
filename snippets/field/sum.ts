import { Field } from "o1js";

const sum1 = new Field(1).add(new Field(3));

// Note that the `3` is automatically converted to a Field instance.
const sum2 = new Field(1).add(3);
