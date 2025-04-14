```ts
ProvableType: {
  get: ToProvable<A>;
  synthesize: T;
};
```

Defined in: [lib/provable/types/provable-intf.ts:132](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L132)

## Type declaration

### get()

#### Type Parameters

• **A** *extends* `unknown`

#### Parameters

##### type

`A`

#### Returns

[`ToProvable`](../type-aliases/ToProvable.md)\<`A`\>

### synthesize()

Create some value of type `T` from its provable type description.

#### Type Parameters

• **T**

#### Parameters

##### type

[`ProvableType`](../type-aliases/ProvableType.md)\<`T`, `any`\>

#### Returns

`T`
