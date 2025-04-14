import { Provable, UInt32 } from "o1js";

// start_sqrt
const x = 10;

// unconstrained value of type UInt32
const w_sqrt = Provable.witness(UInt32, () => {
  return UInt32.from(x);
});

// constraint added to w_sqrt to prove that it satisfies the square root function
w_sqrt.mul(w_sqrt).assertEquals(UInt32.from(100));
// end_sqrt
