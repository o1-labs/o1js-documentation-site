```ts
type MerkleListIteratorBase<T> = {
  currentHash: Field;
  currentIndex: Unconstrained<number>;
  data: Unconstrained<WithHash<T>[]>;
  hash: Field;
};
```

Defined in: [lib/provable/merkle-list.ts:375](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L375)

## Type Parameters

• **T**

## Type declaration

### currentHash

```ts
currentHash: Field;
```

The merkle list hash of `[data[currentIndex], ..., data[length-1]]` (when hashing from right to left).

For example:
- If `currentIndex === 0`, then `currentHash === this.hash` is the hash of the entire array.
- If `currentIndex === length`, then `currentHash === emptyHash` is the hash of an empty array.

### currentIndex

```ts
currentIndex: Unconstrained<number>;
```

The index of the element that will be returned by the next call to `next()`.

### data

```ts
readonly data: Unconstrained<WithHash<T>[]>;
```

### hash

```ts
readonly hash: Field;
```
