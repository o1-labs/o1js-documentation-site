```ts
type PendingTransactionPromise = Promise<PendingTransaction> & {
  wait: PendingTransaction["wait"];
};
```

Defined in: [lib/mina/v1/transaction.ts:391](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L391)

A `Promise<PendingTransaction>` with an additional `wait` method, which calls
into the inner `TransactionStatus`'s `wait` method upon its resolution.

## Type declaration

### wait

```ts
wait: PendingTransaction["wait"];
```

Equivalent to calling the resolved `PendingTransaction`'s `wait` method.
