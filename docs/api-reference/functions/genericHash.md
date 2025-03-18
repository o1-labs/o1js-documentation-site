```ts
function genericHash<T>(
   provable: ProvableHashable<T>, 
   prefix: string, 
   value: T): Field
```

Defined in: [lib/provable/merkle-list.ts:705](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L705)

## Type Parameters

• **T**

## Parameters

### provable

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>

### prefix

`string`

### value

`T`

## Returns

[`Field`](../classes/Field.md)
