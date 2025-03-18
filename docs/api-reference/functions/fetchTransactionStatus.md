```ts
function fetchTransactionStatus(
   txId: string, 
   graphqlEndpoint: string, 
headers?: HeadersInit): Promise<TransactionStatus>
```

Defined in: [lib/mina/v1/fetch.ts:593](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L593)

Fetches the status of a transaction.

## Parameters

### txId

`string`

### graphqlEndpoint

`string` = `networkConfig.minaEndpoint`

### headers?

`HeadersInit`

## Returns

`Promise`\<[`TransactionStatus`](../type-aliases/TransactionStatus.md)\>
