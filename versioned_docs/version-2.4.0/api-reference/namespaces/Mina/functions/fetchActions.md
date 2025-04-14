```ts
function fetchActions(
   publicKey: PublicKey, 
   actionStates?: ActionStates, 
   tokenId?: Field, 
   headers?: HeadersInit): Promise<
  | {
  actions: string[][];
  hash: string;
 }[]
  | {
  error: FetchError;
}>
```

Defined in: [lib/mina/v1/mina-instance.ts:191](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina-instance.ts#L191)

## Parameters

### publicKey

[`PublicKey`](../../../classes/PublicKey.md)

### actionStates?

[`ActionStates`](../type-aliases/ActionStates.md)

### tokenId?

[`Field`](../../../classes/Field.md)

### headers?

`HeadersInit`

## Returns

`Promise`\<
  \| \{
  `actions`: `string`[][];
  `hash`: `string`;
 \}[]
  \| \{
  `error`: `FetchError`;
 \}\>

A list of emitted sequencing actions associated to the given public key.
