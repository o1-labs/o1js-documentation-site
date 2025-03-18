Defined in: [lib/provable/merkle-map.ts:10](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L10)

## Constructors

### new MerkleMap()

```ts
new MerkleMap(): MerkleMap
```

Defined in: [lib/provable/merkle-map.ts:21](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L21)

Creates a new, empty Merkle Map.

#### Returns

[`MerkleMap`](MerkleMap.md)

A new MerkleMap

#### Example

```ts
const merkleMap = new MerkleMap();
```

## Properties

### tree

```ts
tree: MerkleTree;
```

Defined in: [lib/provable/merkle-map.ts:11](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L11)

## Methods

### \_keyToIndex()

```ts
_keyToIndex(key: Field): bigint
```

Defined in: [lib/provable/merkle-map.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L25)

#### Parameters

##### key

[`Field`](Field.md)

#### Returns

`bigint`

***

### get()

```ts
get(key: Field): Field
```

Defined in: [lib/provable/merkle-map.ts:71](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L71)

Returns a value given a key. Values are by default Field(0).

#### Parameters

##### key

[`Field`](Field.md)

The key to get the value from.

#### Returns

[`Field`](Field.md)

The value stored at the key.

#### Example

```ts
const key = Field(5);
const value = merkleMap.get(key);
console.log(value); // Output: the value at key 5 or Field(0) if key does not exist
```

***

### getRoot()

```ts
getRoot(): Field
```

Defined in: [lib/provable/merkle-map.ts:84](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L84)

Returns the root of the Merkle Map.

#### Returns

[`Field`](Field.md)

The root of the Merkle Map.

#### Example

```ts
const root = merkleMap.getRoot();
```

***

### getWitness()

```ts
getWitness(key: Field): MerkleMapWitness
```

Defined in: [lib/provable/merkle-map.ts:98](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L98)

Returns a circuit-compatible witness (also known as [Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof)) for the given key.

#### Parameters

##### key

[`Field`](Field.md)

The key to make a witness for.

#### Returns

[`MerkleMapWitness`](MerkleMapWitness.md)

A MerkleMapWitness, which can be used to assert changes to the MerkleMap, and the witness's key.

#### Example

```ts
const key = Field(5);
const witness = merkleMap.getWitness(key);
```

***

### set()

```ts
set(key: Field, value: Field): void
```

Defined in: [lib/provable/merkle-map.ts:55](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-map.ts#L55)

Sets a key of the merkle map to a given value.

#### Parameters

##### key

[`Field`](Field.md)

The key to set in the map.

##### value

[`Field`](Field.md)

The value to set.

#### Returns

`void`

#### Example

```ts
const key = Field(5);
const value = Field(10);
merkleMap.set(key, value);
```
