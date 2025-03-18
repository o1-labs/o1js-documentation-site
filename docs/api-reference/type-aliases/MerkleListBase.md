```ts
type MerkleListBase<T> = {
  data: Unconstrained<WithHash<T>[]>;
  hash: Field;
};
```

Defined in: [lib/provable/merkle-list.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L47)

Common base type for [MerkleList](../classes/MerkleList.md) and [MerkleListIterator](../classes/MerkleListIterator.md)

## Type Parameters

• **T**

## Type declaration

### data

```ts
data: Unconstrained<WithHash<T>[]>;
```

### hash

```ts
hash: Field;
```
