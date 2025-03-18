```ts
function listAcquiredKeyPairs(options: {
  lightnetAccountManagerEndpoint: string;
 }): Promise<
  | {
  privateKey: PrivateKey;
  publicKey: PublicKey;
 }[]
| null>
```

Defined in: [lib/mina/v1/fetch.ts:979](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L979)

Gets previously acquired key pairs list.

## Parameters

### options

#### lightnetAccountManagerEndpoint

`string`

Account manager endpoint to fetch from

## Returns

`Promise`\<
  \| \{
  `privateKey`: [`PrivateKey`](../../../classes/PrivateKey.md);
  `publicKey`: [`PublicKey`](../../../classes/PublicKey.md);
 \}[]
  \| `null`\>

Key pairs list or null if the request failed
