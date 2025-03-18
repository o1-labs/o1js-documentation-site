```ts
const Group: typeof Group & (...args: [{
  x: string | number | bigint | FieldVar | Field;
  y: string | number | bigint | FieldVar | Field;
 }]) => Group;
```

Defined in: [lib/provable/wrapped.ts:76](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/wrapped.ts#L76)

An element of a Group.
