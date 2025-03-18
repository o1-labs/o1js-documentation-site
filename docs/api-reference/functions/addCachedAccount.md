```ts
function addCachedAccount(partialAccount: PartialAccount, graphqlEndpoint: string): void
```

Defined in: [lib/mina/v1/fetch.ts:418](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L418)

Adds an account to the local cache, indexed by a GraphQL endpoint.

## Parameters

### partialAccount

`PartialAccount`

### graphqlEndpoint

`string` = `networkConfig.minaEndpoint`

## Returns

`void`
