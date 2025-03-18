```ts
type ToProvable<A> = A extends {
  provable: infer P;
 } ? P : A;
```

Defined in: [lib/provable/types/provable-intf.ts:135](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L135)

## Type Parameters

• **A** *extends* [`WithProvable`](WithProvable.md)\<`any`\>
