import { Bytes, Field, Hash, Poseidon, PrivateKey } from "o1js";

// start_poseidon
const h = Poseidon.hash([Field(1), Field(2), Field(3)]);
const h2 = Poseidon.hash(PrivateKey.random().toFields());
// end_poseidon

// start_other_hashes
class Bytes32 extends Bytes(32) {}

const blake = Hash.BLAKE2B.hash(Bytes32.random());
const sha256 = Hash.SHA2_256.hash(Bytes32.random());
const keccak = Hash.Keccak256.hash(Bytes32.random());
//end_other_hashes
