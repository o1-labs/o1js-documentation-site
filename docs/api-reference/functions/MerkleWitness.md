```ts
function MerkleWitness(height: number): typeof BaseMerkleWitness
```

Defined in: [lib/provable/merkle-tree.ts:234](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L234)

Returns a circuit-compatible Witness for a specific Tree height.

## Parameters

### height

`number`

Height of the Merkle Tree that this Witness belongs to.

## Returns

*typeof* [`BaseMerkleWitness`](../classes/BaseMerkleWitness.md)

A circuit-compatible Merkle Witness.
