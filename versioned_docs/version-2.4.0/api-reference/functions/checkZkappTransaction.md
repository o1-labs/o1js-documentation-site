```ts
function checkZkappTransaction(transactionHash: string, blockLength: number): Promise<
  | {
  failureReason: string[][][];
  success: boolean;
 }
  | {
  failureReason: null;
  success: boolean;
}>
```

Defined in: [lib/mina/v1/fetch.ts:518](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/fetch.ts#L518)

## Parameters

### transactionHash

`string`

### blockLength

`number` = `20`

## Returns

`Promise`\<
  \| \{
  `failureReason`: `string`[][][];
  `success`: `boolean`;
 \}
  \| \{
  `failureReason`: `null`;
  `success`: `boolean`;
 \}\>
