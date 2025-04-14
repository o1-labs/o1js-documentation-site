```ts
type TupleN<T, N> = N extends N ? number extends N ? [...T[]] : [...TupleRec<T, N, []>] : never;
```

Defined in: [lib/util/types.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/util/types.ts#L25)

tuple type that has the length as generic parameter

## Type Parameters

• **T**

• **N** *extends* `number`
