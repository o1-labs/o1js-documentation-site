```ts
type TransactionPromise<Proven, Signed> = Promise<Transaction<Proven, Signed>> & {
  send: PendingTransactionPromise;
 } & Proven extends false ? {
  prove: TransactionPromise<true, Signed>;
 } : {
  proofs: Promise<Transaction<true, Signed>["proofs"]>;
 } & Signed extends false ? {
  sign: TransactionPromise<Proven, true>;
} : {};
```

Defined in: [lib/mina/v1/transaction.ts:332](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L332)

A `Promise<Transaction>` with some additional methods for making chained method calls
into the pending value upon its resolution.

## Type declaration

### send()

Equivalent to calling the resolved `Transaction`'s `send` method.

#### Returns

[`PendingTransactionPromise`](../namespaces/Mina/type-aliases/PendingTransactionPromise.md)

## Type Parameters

• **Proven** *extends* `boolean`

• **Signed** *extends* `boolean`
