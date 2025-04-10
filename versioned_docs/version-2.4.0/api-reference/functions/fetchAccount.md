```ts
function fetchAccount(
   accountInfo: {
  publicKey: string | PublicKey;
  tokenId: string | Field;
 }, 
   graphqlEndpoint: string, 
   config: FetchConfig): Promise<
  | {
  account: Types.Account;
  error: undefined;
 }
  | {
  account: undefined;
  error: FetchError;
}>
```

Defined in: [lib/mina/v1/fetch.ts:203](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L203)

Gets account information on the specified publicKey by performing a GraphQL query
to the specified endpoint. This will call the 'GetAccountInfo' query which fetches
zkapp related account information.

If an error is returned by the specified endpoint, an error is thrown. Otherwise,
the data is returned.

## Parameters

### accountInfo

The public key and token id of the account to fetch

#### publicKey

`string` \| [`PublicKey`](../classes/PublicKey.md)

The specified publicKey to get account information on

#### tokenId

`string` \| [`Field`](../classes/Field.md)

The specified tokenId to get account information on

### graphqlEndpoint

`string` = `networkConfig.minaEndpoint`

The graphql endpoint to fetch from

### config

`FetchConfig` = `{}`

An object that exposes an additional timeout and header options

## Returns

`Promise`\<
  \| \{
  `account`: `Types.Account`;
  `error`: `undefined`;
 \}
  \| \{
  `account`: `undefined`;
  `error`: `FetchError`;
 \}\>

zkapp information on the specified account or an error is thrown
