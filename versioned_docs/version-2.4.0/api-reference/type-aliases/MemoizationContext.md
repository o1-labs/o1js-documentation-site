```ts
type MemoizationContext = {
  blindingValue: Field;
  currentIndex: number;
  memoized: {
     aux: any[];
     fields: Field[];
    }[];
};
```

Defined in: [lib/provable/provable.ts:455](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/provable.ts#L455)

## Type declaration

### blindingValue

```ts
blindingValue: Field;
```

### currentIndex

```ts
currentIndex: number;
```

### memoized

```ts
memoized: {
  aux: any[];
  fields: Field[];
 }[];
```
