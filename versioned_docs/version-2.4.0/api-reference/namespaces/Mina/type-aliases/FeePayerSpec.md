```ts
type FeePayerSpec = 
  | PublicKey
  | {
  fee: number | string | UInt64;
  memo: string;
  nonce: number;
  sender: PublicKey;
 }
  | undefined;
```

Defined in: [lib/mina/v1/mina-instance.ts:48](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina-instance.ts#L48)

Allows you to specify information about the fee payer account and the transaction.
