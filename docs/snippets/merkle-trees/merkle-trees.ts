import {
  Experimental,
  Field,
  MerkleList,
  MerkleTree,
  MerkleWitness,
} from "o1js";

// start_indexed_merkle_map
const { IndexedMerkleMap } = Experimental;

const height = 4; // 2 ^ 4 = 16 leaves
class MyIndexedMerkleMap extends IndexedMerkleMap(height) {}

const map = new MyIndexedMerkleMap();
map.insert(1n, 20n);
map.insert(2n, 30n);

map.get(1n); // 20n
map.getOption(2n).orElse(0n); // 30n, Use .getOption to safely access values that may not exist
map.getOption(3n).orElse(0n); // 0n, values default to 0n
// end_indexed_merkle_map

// start_merkle_tree
const tree = new MerkleTree(height);
tree.setLeaf(0n, Field(10));
tree.setLeaf(1n, Field(20));

tree.getLeaf(0n); // Field(10)
tree.getLeaf(1n); // Field(20)
tree.getLeaf(2n); // Field(0), values default to Field(0)

class MyMerkleWitness extends MerkleWitness(height) {}
const w = new MyMerkleWitness(tree.getWitness(1n));
// end_merkle_tree

// start_merkle_list
// Create a MerkleList with any provable type, e.g. Field
class MyList extends MerkleList.create(Field) {}

let list = MyList.empty();
list.push(Field(5));
let element = list.pop(); // Field(5)
// end_merkle_list

export { MyIndexedMerkleMap, map, MyMerkleWitness, tree, w, list, element };
