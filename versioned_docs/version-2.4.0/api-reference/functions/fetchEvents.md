```ts
function fetchEvents(
   accountInfo: {
  publicKey: string;
  tokenId: string;
 }, 
   graphqlEndpoint?: string, 
   filterOptions?: EventActionFilterOptions, 
   headers?: HeadersInit): Promise<{
  blockHash: string;
  blockHeight: UInt32;
  chainStatus: string;
  events: {
     data: string[];
     transactionInfo: {
        hash: string;
        memo: string;
        status: string;
       };
    }[];
  globalSlot: UInt32;
  parentBlockHash: string;
}[]>
```

Defined in: [lib/mina/v1/fetch.ts:648](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L648)

Asynchronously fetches event data for an account from the Mina Archive Node GraphQL API.

## Parameters

### accountInfo

The account information object.

#### publicKey

`string`

The account public key.

#### tokenId

`string`

The optional token ID for the account.

### graphqlEndpoint?

`string` = `networkConfig.archiveEndpoint`

The GraphQL endpoint to query. Defaults to the Archive Node GraphQL API.

### filterOptions?

`EventActionFilterOptions` = `{}`

The optional filter options object.

### headers?

`HeadersInit`

Optional headers to pass to the fetch request

## Returns

`Promise`\<\{
  `blockHash`: `string`;
  `blockHeight`: [`UInt32`](../classes/UInt32.md);
  `chainStatus`: `string`;
  `events`: \{
     `data`: `string`[];
     `transactionInfo`: \{
        `hash`: `string`;
        `memo`: `string`;
        `status`: `string`;
       \};
    \}[];
  `globalSlot`: [`UInt32`](../classes/UInt32.md);
  `parentBlockHash`: `string`;
 \}[]\>

A promise that resolves to an array of objects containing event data, block information and transaction information for the account.

## Throws

If the GraphQL request fails or the response is invalid.

## Example

```ts
const accountInfo = { publicKey: 'B62qiwmXrWn7Cok5VhhB3KvCwyZ7NHHstFGbiU5n7m8s2RqqNW1p1wF' };
const events = await fetchEvents(accountInfo);
console.log(events);
```
