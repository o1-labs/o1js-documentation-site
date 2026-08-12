import { describe, expect, it } from "vitest";

import { element, list, map, MyMerkleWitness, tree } from "./merkle-trees";
import { Field } from "o1js";

describe("IndexedMerkleMap", () => {
  it("should insert and get values correctly", () => {
    expect(map.get(1n).toBigInt()).toBe(20n);
    expect(map.get(2n).toBigInt()).toBe(30n);
    expect(map.getOption(3n).orElse(0n).toBigInt()).toBe(0n); // default value
  });
});

describe("MerkleTree", () => {
  it("should set and get leaves correctly", () => {
    expect(tree.getLeaf(0n)).toEqual(Field(10));
    expect(tree.getLeaf(1n)).toEqual(Field(20));
    expect(tree.getLeaf(2n)).toEqual(Field(0)); // default value
  });

  it("witness with correct value should match tree root", () => {
    const leaf = tree.getLeaf(1n);
    const root = tree.getRoot();
    const witness = new MyMerkleWitness(tree.getWitness(1n));
    const computedRoot = witness.calculateRoot(leaf);
    expect(computedRoot).toEqual(root);
  });
});

describe("MerkleList", () => {
  it("should track list length", () => {
    expect(list.lengthUnconstrained().get()).toBe(0);
    list.push(Field(10));
    list.push(Field(20));
    expect(list.lengthUnconstrained().get()).toBe(2);
  });

  it("pops elements correctly", () => {
    expect(element).toEqual(Field(5)); // defined in src
  });
});
