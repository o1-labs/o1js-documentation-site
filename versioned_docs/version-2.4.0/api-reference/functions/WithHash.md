```ts
function WithHash<T>(type: ProvableHashable<T>): ProvableHashable<WithHash<T>>
```

Defined in: [lib/provable/merkle-list.ts:29](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L29)

## Type Parameters

• **T**

## Parameters

### type

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>

## Returns

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<[`WithHash`](../type-aliases/WithHash.md)\<`T`\>\>
