```ts
TupleN: {
  fromArray: TupleN<T, N>;
  hasLength: tuple is TupleN<T, N>;
  map: [...{ [i in string | number | symbol]: B }[]];
};
```

Defined in: [lib/util/types.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/util/types.ts#L25)

## Type declaration

### fromArray()

#### Type Parameters

• **T**

• **N** *extends* `number`

#### Parameters

##### n

`N`

##### arr

`T`[]

#### Returns

[`TupleN`](../type-aliases/TupleN.md)\<`T`, `N`\>

### hasLength()

#### Type Parameters

• **T**

• **N** *extends* `number`

#### Parameters

##### n

`N`

##### tuple

`T`[]

#### Returns

`tuple is TupleN<T, N>`

### map()

#### Type Parameters

• **T** *extends* `Tuple`\<`any`\>

• **B**

#### Parameters

##### tuple

`T`

##### f

(`a`: `T`\[`number`\]) => `B`

#### Returns

\[...\{ \[i in string \| number \| symbol\]: B \}\[\]\]
