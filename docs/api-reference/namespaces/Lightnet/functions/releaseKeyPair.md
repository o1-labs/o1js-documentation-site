```ts
function releaseKeyPair(options: {
  lightnetAccountManagerEndpoint: string;
  publicKey: string;
}): Promise<string | null>
```

Defined in: [lib/mina/v1/fetch.ts:945](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L945)

Releases previously acquired key pair by public key.

## Parameters

### options

#### lightnetAccountManagerEndpoint

`string`

Account manager endpoint to fetch from

#### publicKey

`string`

Public key of previously acquired key pair to release

## Returns

`Promise`\<`string` \| `null`\>

Response message from the account manager as string or null if the request failed
