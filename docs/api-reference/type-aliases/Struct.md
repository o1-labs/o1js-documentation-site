```ts
type Struct<T> = ProvableExtended<NonMethods<T>> & Constructor<T> & {
  _isStruct: true;
};
```

Defined in: [lib/provable/types/struct.ts:125](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L125)

## Type declaration

### \_isStruct

```ts
_isStruct: true;
```

## Type Parameters

• **T**
