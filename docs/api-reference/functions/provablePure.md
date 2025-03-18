```ts
function provablePure<A>(typeObj: A): ProvablePureExtended<InferProvable<A>, InferValue<A>, InferJson<A>>
```

Defined in: [lib/provable/types/provable-derivers.ts:75](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-derivers.ts#L75)

## Type Parameters

• **A**

## Parameters

### typeObj

`A`

## Returns

`ProvablePureExtended`\<[`InferProvable`](../type-aliases/InferProvable.md)\<`A`\>, `InferValue`\<`A`\>, `InferJson`\<`A`\>\>
