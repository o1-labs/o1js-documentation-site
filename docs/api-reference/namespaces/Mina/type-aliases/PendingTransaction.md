```ts
type PendingTransaction = Pick<TransactionCommon, "transaction" | "toJSON" | "toPretty"> & {
  data: SendZkAppResponse;
  errors: string[];
  hash: string;
  status: PendingTransactionStatus;
  safeWait: Promise<
     | RejectedTransaction
     | IncludedTransaction>;
  setFee: TransactionPromise<boolean, false>;
  setFeePerSnarkCost: TransactionPromise<boolean, false>;
  wait: Promise<IncludedTransaction>;
};
```

Defined in: [lib/mina/v1/transaction.ts:172](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L172)

Represents a transaction that has been submitted to the blockchain but has not yet reached a final state.
The [PendingTransaction](PendingTransaction.md) type extends certain functionalities from the base [Transaction](Transaction.md) type,
adding methods to monitor the transaction's progress towards being finalized (either included in a block or rejected).

## Type declaration

### data?

```ts
optional data: SendZkAppResponse;
```

Optional. Contains response data from a ZkApp transaction submission.

### errors

```ts
errors: string[];
```

An array of error messages related to the transaction processing.

#### Example

```ts
if (!pendingTransaction.status === 'rejected') {
  console.error(`Transaction errors: ${pendingTransaction.errors.join(', ')}`);
}
```

### hash

```ts
hash: string;
```

Returns the transaction hash as a string identifier.

#### Example

```ts
const txHash = pendingTransaction.hash;
console.log(`Transaction hash: ${txHash}`);
```

### status

```ts
status: PendingTransactionStatus;
```

#### Example

```ts
if (pendingTransaction.status === 'pending') {
  console.log('Transaction accepted for processing by the Mina daemon.');
  try {
    await pendingTransaction.wait();
    console.log('Transaction successfully included in a block.');
  } catch (error) {
    console.error('Transaction was rejected or failed to be included in a block:', error);
  }
} else {
  console.error('Transaction was not accepted for processing by the Mina daemon.');
}
```

### safeWait()

Waits for the transaction to be included in a block. This method polls the Mina daemon to check the transaction's status

#### Parameters

##### options?

Configuration options for polling behavior.

###### interval

`number`

The time interval, in milliseconds, between each polling attempt.

###### maxAttempts

`number`

The maximum number of polling attempts.

#### Returns

`Promise`\<
  \| [`RejectedTransaction`](RejectedTransaction.md)
  \| [`IncludedTransaction`](IncludedTransaction.md)\>

A promise that resolves to the transaction's final state.

#### Example

```ts
const transaction = await pendingTransaction.wait({ maxAttempts: 5, interval: 1000 });
console.log(transaction.status); // 'included' or 'rejected'
```

### setFee()

setFee is the same as (newFee) but for a [PendingTransaction](PendingTransaction.md).

#### Parameters

##### newFee

[`UInt64`](../../../classes/UInt64.md)

#### Returns

[`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`boolean`, `false`\>

### setFeePerSnarkCost()

setFeePerSnarkCost is the same as (newFeePerSnarkCost) but for a [PendingTransaction](PendingTransaction.md).

#### Parameters

##### newFeePerSnarkCost

`number`

#### Returns

[`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`boolean`, `false`\>

### wait()

Waits for the transaction to be included in a block. This method polls the Mina daemon to check the transaction's status, and throws an error if the transaction is rejected.

#### Parameters

##### options?

Configuration options for polling behavior.

###### interval

`number`

The interval, in milliseconds, between status checks.

###### maxAttempts

`number`

The maximum number of attempts to check the transaction status.

#### Returns

`Promise`\<[`IncludedTransaction`](IncludedTransaction.md)\>

A promise that resolves to the transaction's final state or throws an error.

#### Throws

If the transaction is rejected or fails to finalize within the given attempts.

#### Example

```ts
try {
  const transaction = await pendingTransaction.wait({ maxAttempts: 10, interval: 2000 });
  console.log('Transaction included in a block.');
} catch (error) {
  console.error('Transaction rejected or failed to finalize:', error);
}
```
