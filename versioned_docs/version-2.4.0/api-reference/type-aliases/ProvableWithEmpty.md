```ts
type ProvableWithEmpty<T, TValue> = Provable<T, TValue> & {
  empty: () => T;
};
```

Defined in: [lib/provable/types/provable-intf.ts:118](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L118)

## Type declaration

### empty()

```ts
empty: () => T;
```

#### Returns

`T`

## Type Parameters

• **T**

• **TValue** = `any`
