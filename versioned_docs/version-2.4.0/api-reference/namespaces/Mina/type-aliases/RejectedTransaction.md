```ts
type RejectedTransaction = Pick<PendingTransaction, "transaction" | "toJSON" | "toPretty" | "hash" | "data"> & {
  errors: string[];
  status: "rejected";
};
```

Defined in: [lib/mina/v1/transaction.ts:300](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L300)

Represents a transaction that has been rejected and not included in a blockchain block.

## Type declaration

### errors

```ts
errors: string[];
```

### status

```ts
status: "rejected";
```

#### Example

```ts
try {
  const txResult = await pendingTransaction.wait();
  // This line will not execute if the transaction is rejected, as `.wait()` will throw an error instead.
  console.log(`Transaction ${txResult.hash} was successfully included in a block.`);
} catch (error) {
  console.error(`Transaction ${error.transaction.hash} was rejected.`);
  error.errors.forEach((error, i) => {
   console.error(`Error ${i + 1}: ${error}`);
  });
}
```
