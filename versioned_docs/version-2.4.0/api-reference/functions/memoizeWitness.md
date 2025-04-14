```ts
function memoizeWitness<T>(type: FlexibleProvable<T>, compute: () => T): T
```

Defined in: [lib/provable/provable.ts:466](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/provable.ts#L466)

Like Provable.witness, but memoizes the witness during transaction construction
for reuse by the prover. This is needed to witness non-deterministic values.

## Type Parameters

• **T**

## Parameters

### type

[`FlexibleProvable`](../type-aliases/FlexibleProvable.md)\<`T`\>

### compute

() => `T`

## Returns

`T`
