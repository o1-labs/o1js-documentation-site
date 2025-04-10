```ts
function fetchEvents(
   publicKey: PublicKey, 
   tokenId: Field, 
   filterOptions: EventActionFilterOptions, 
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

Defined in: [lib/mina/v1/mina-instance.ts:179](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina-instance.ts#L179)

## Parameters

### publicKey

[`PublicKey`](../../../classes/PublicKey.md)

### tokenId

[`Field`](../../../classes/Field.md)

### filterOptions

`EventActionFilterOptions` = `{}`

### headers?

`HeadersInit`

## Returns

`Promise`\<\{
  `blockHash`: `string`;
  `blockHeight`: [`UInt32`](../../../classes/UInt32.md);
  `chainStatus`: `string`;
  `events`: \{
     `data`: `string`[];
     `transactionInfo`: \{
        `hash`: `string`;
        `memo`: `string`;
        `status`: `string`;
       \};
    \}[];
  `globalSlot`: [`UInt32`](../../../classes/UInt32.md);
  `parentBlockHash`: `string`;
 \}[]\>

A list of emitted events associated to the given public key.
