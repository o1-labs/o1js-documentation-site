import { Int64, UInt8, UInt32, UInt64, Sign } from "o1js";

// start_int_instances
const uint8 = new UInt8(1n);
const uint32 = new UInt32(2 ** 32 - 1);
const uint64 = new UInt64("10");
const int64 = Int64.create(uint64, Sign.minusOne);
const alternative_int64 = Int64.from(20);
// end_int_instances

export { uint8, uint32, uint64, int64, alternative_int64 };
