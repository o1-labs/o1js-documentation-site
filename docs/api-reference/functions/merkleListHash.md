```ts
function merkleListHash<T>(provable: ProvableHashable<T>, prefix: string): (hash: Field, value: T) => Field
```

Defined in: [lib/provable/merkle-list.ts:711](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L711)

## Type Parameters

• **T**

## Parameters

### provable

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>

### prefix

`string` = `''`

## Returns

`Function`

### Parameters

#### hash

[`Field`](../classes/Field.md)

#### value

`T`

### Returns

[`Field`](../classes/Field.md)
