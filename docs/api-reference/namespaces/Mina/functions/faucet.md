```ts
function faucet(
   pub: PublicKey, 
   network: string, 
headers?: HeadersInit): Promise<void>
```

Defined in: [lib/mina/v1/mina.ts:461](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina.ts#L461)

Requests the [testnet faucet](https://faucet.minaprotocol.com/api/v1/faucet) to fund a public key.

## Parameters

### pub

[`PublicKey`](../../../classes/PublicKey.md)

### network

`string` = `'berkeley-qanet'`

### headers?

`HeadersInit`

## Returns

`Promise`\<`void`\>
