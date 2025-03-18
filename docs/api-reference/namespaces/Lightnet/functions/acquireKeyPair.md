```ts
function acquireKeyPair(options: {
  isRegularAccount: boolean;
  lightnetAccountManagerEndpoint: string;
 }): Promise<{
  privateKey: PrivateKey;
  publicKey: PublicKey;
}>
```

Defined in: [lib/mina/v1/fetch.ts:902](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L902)

Gets random key pair (public and private keys) from account manager
that operates with accounts configured in target network Genesis Ledger.

If an error is returned by the specified endpoint, an error is thrown. Otherwise,
the data is returned.

## Parameters

### options

#### isRegularAccount

`boolean`

Whether to acquire key pair of regular or zkApp account (one with already configured verification key)

#### lightnetAccountManagerEndpoint

`string`

Account manager endpoint to fetch from

## Returns

`Promise`\<\{
  `privateKey`: [`PrivateKey`](../../../classes/PrivateKey.md);
  `publicKey`: [`PublicKey`](../../../classes/PublicKey.md);
 \}\>

Key pair
