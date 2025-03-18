```ts
type Transaction<Proven, Signed> = TransactionCommon & {
  safeSend: Promise<
     | PendingTransaction
     | RejectedTransaction>;
  send: PendingTransactionPromise;
  setFee: TransactionPromise<Proven, false>;
  setFeePerSnarkCost: TransactionPromise<Proven, false>;
 } & Proven extends false ? {
  prove: Promise<Transaction<true, Signed>>;
 } : {
  proofs: (
     | Proof<ZkappPublicInput, Empty>
     | undefined)[];
 } & Signed extends false ? {
  sign: Transaction<Proven, true>;
} : {};
```

Defined in: [lib/mina/v1/transaction.ts:85](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L85)

Defines the structure and operations associated with a transaction.
This type encompasses methods for serializing the transaction, signing it, generating proofs,
and submitting it to the network.

## Type declaration

### safeSend()

Sends the [Transaction](Transaction.md) to the network. Unlike the standard Transaction.send, this function does not throw an error if internal errors are detected. Instead, it returns a [PendingTransaction](PendingTransaction.md) if the transaction is successfully sent for processing or a [RejectedTransaction](RejectedTransaction.md) if it encounters errors during processing or is outright rejected by the Mina daemon.

#### Returns

`Promise`\<
  \| [`PendingTransaction`](PendingTransaction.md)
  \| [`RejectedTransaction`](RejectedTransaction.md)\>

A promise that resolves to a [PendingTransaction](PendingTransaction.md) if the transaction is accepted for processing, or a [RejectedTransaction](RejectedTransaction.md) if the transaction fails or is rejected.

#### Example

```ts
const result = await transaction.safeSend();
if (result.status === 'pending') {
  console.log('Transaction sent successfully to the Mina daemon.');
} else if (result.status === 'rejected') {
  console.error('Transaction failed with errors:', result.errors);
}
```

### send()

#### Returns

[`PendingTransactionPromise`](PendingTransactionPromise.md)

### setFee()

Modifies a transaction to set the fee to the new fee provided. Because this change invalidates proofs and signatures both are removed. The nonce is not increased so sending both transitions will not risk both being accepted.

#### Parameters

##### newFee

[`UInt64`](../../../classes/UInt64.md)

#### Returns

[`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`Proven`, `false`\>

The same transaction with the new fee and the proofs and signatures removed.

#### Example

```ts
tx.send();
// Waits for some time and decide to resend with a higher fee

tx.setFee(newFee);
await tx.sign([feePayerKey]));
await tx.send();
```

### setFeePerSnarkCost()

setFeePerSnarkCost behaves identically to Transaction.setFee but the fee is given per estimated cost of snarking the transition as given by getTotalTimeRequired. This is useful because it should reflect what snark workers would charge in times of network contention.

#### Parameters

##### newFeePerSnarkCost

`number`

#### Returns

[`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`Proven`, `false`\>

## Type Parameters

• **Proven** *extends* `boolean`

• **Signed** *extends* `boolean`
