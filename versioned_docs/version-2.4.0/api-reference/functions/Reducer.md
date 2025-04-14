```ts
function Reducer<T, A>(reducer: {
  actionType: T;
}): ReducerReturn<A>
```

Defined in: [lib/mina/v1/actions/reducer.ts:14](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/reducer.ts#L14)

## Type Parameters

• **T** *extends* [`FlexibleProvablePure`](../type-aliases/FlexibleProvablePure.md)\<`any`\>

• **A** *extends* `any` = [`InferProvable`](../type-aliases/InferProvable.md)\<`T`\>

## Parameters

### reducer

#### actionType

`T`

## Returns

`ReducerReturn`\<`A`\>
