```ts
function fetchLastBlock(graphqlEndpoint: string, headers?: HeadersInit): Promise<PreconditionBaseTypes<{}>>
```

Defined in: [lib/mina/v1/fetch.ts:453](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L453)

Fetches the last block on the Mina network.

## Parameters

### graphqlEndpoint

`string` = `networkConfig.minaEndpoint`

### headers?

`HeadersInit`

## Returns

`Promise`\<`PreconditionBaseTypes`\<\{\}\>\>
