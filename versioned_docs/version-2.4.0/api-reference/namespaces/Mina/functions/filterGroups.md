```ts
function filterGroups(xs: AuthorizationKind[]): {
  proof: number;
  signedPair: number;
  signedSingle: number;
}
```

Defined in: [lib/mina/v1/transaction-validation.ts:134](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction-validation.ts#L134)

## Parameters

### xs

`AuthorizationKind`[]

## Returns

```ts
{
  proof: number;
  signedPair: number;
  signedSingle: number;
}
```

### proof

```ts
proof: number = proofCount;
```

### signedPair

```ts
signedPair: number = pairs.pairs;
```

### signedSingle

```ts
signedSingle: number = singleCount;
```
