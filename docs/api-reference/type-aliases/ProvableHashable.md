```ts
type ProvableHashable<T, TValue> = ProvableWithEmpty<T, TValue> & {
  toInput: (x: T) => HashInput;
};
```

Defined in: [lib/provable/types/provable-intf.ts:124](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L124)

## Type declaration

### toInput()

```ts
toInput: (x: T) => HashInput;
```

#### Parameters

##### x

`T`

#### Returns

`HashInput`

## Type Parameters

• **T**

• **TValue** = `any`
