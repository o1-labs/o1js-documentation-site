```ts
function getActions(
   publicKey: PublicKey, 
   actionStates?: ActionStates, 
   tokenId?: Field): {
  actions: string[][];
  hash: string;
 }[]
```

Defined in: [lib/mina/v1/mina-instance.ts:203](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina-instance.ts#L203)

## Parameters

### publicKey

[`PublicKey`](../../../classes/PublicKey.md)

### actionStates?

[`ActionStates`](../type-aliases/ActionStates.md)

### tokenId?

[`Field`](../../../classes/Field.md)

## Returns

\{
  `actions`: `string`[][];
  `hash`: `string`;
 \}[]

A list of emitted sequencing actions associated to the given public key.
