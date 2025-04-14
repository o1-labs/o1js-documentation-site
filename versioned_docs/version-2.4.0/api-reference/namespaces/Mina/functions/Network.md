## Call Signature

```ts
function Network(graphqlEndpoint: string): Mina
```

Defined in: [lib/mina/v1/mina.ts:101](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina.ts#L101)

Represents the Mina blockchain running on a real network

### Parameters

#### graphqlEndpoint

`string`

### Returns

`Mina`

## Call Signature

```ts
function Network(options: {
  archive: string | string[];
  archiveDefaultHeaders: HeadersInit;
  bypassTransactionLimits: boolean;
  lightnetAccountManager: string;
  mina: string | string[];
  minaDefaultHeaders: HeadersInit;
  networkId: NetworkId;
 }): Mina
```

Defined in: [lib/mina/v1/mina.ts:102](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina.ts#L102)

Represents the Mina blockchain running on a real network

### Parameters

#### options

##### archive

`string` \| `string`[]

##### archiveDefaultHeaders

`HeadersInit`

##### bypassTransactionLimits

`boolean`

##### lightnetAccountManager

`string`

##### mina

`string` \| `string`[]

##### minaDefaultHeaders

`HeadersInit`

##### networkId

`NetworkId`

### Returns

`Mina`
