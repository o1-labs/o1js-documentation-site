```ts
function sendZkapp(
   json: string, 
   graphqlEndpoint: string, 
   __namedParameters: FetchConfig): Promise<
  | [undefined, FetchError]
| [FetchResponse<SendZkAppResponse>, undefined]>
```

Defined in: [lib/mina/v1/fetch.ts:615](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L615)

Sends a zkApp command (transaction) to the specified GraphQL endpoint.

## Parameters

### json

`string`

### graphqlEndpoint

`string` = `networkConfig.minaEndpoint`

### \_\_namedParameters

`FetchConfig` = `{}`

## Returns

`Promise`\<
  \| \[`undefined`, `FetchError`\]
  \| \[`FetchResponse`\<`SendZkAppResponse`\>, `undefined`\]\>
