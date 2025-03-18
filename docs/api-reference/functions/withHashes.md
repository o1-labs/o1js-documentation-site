```ts
function withHashes<T>(
   data: T[], 
   nextHash: (hash: Field, value: T) => Field, 
   emptyHash: Field): {
  data: WithHash<T>[];
  hash: Field;
}
```

Defined in: [lib/provable/merkle-list.ts:719](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L719)

## Type Parameters

• **T**

## Parameters

### data

`T`[]

### nextHash

(`hash`: [`Field`](../classes/Field.md), `value`: `T`) => [`Field`](../classes/Field.md)

### emptyHash

[`Field`](../classes/Field.md)

## Returns

```ts
{
  data: WithHash<T>[];
  hash: Field;
}
```

### data

```ts
data: WithHash<T>[];
```

### hash

```ts
hash: Field;
```
