## Call Signature

```ts
function transaction(sender: FeePayerSpec, f: () => Promise<void>): TransactionPromise<false, false>
```

Defined in: [lib/mina/v1/transaction.ts:582](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L582)

Construct a smart contract transaction. Within the callback passed to this function,
you can call into the methods of smart contracts.

```
let tx = await Mina.transaction(sender, async () => {
  await myZkapp.update();
  await someOtherZkapp.someOtherMethod();
});
```

### Parameters

#### sender

[`FeePayerSpec`](../type-aliases/FeePayerSpec.md)

#### f

() => `Promise`\<`void`\>

### Returns

[`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`false`, `false`\>

A transaction that can subsequently be submitted to the chain.

## Call Signature

```ts
function transaction(f: () => Promise<void>): TransactionPromise<false, false>
```

Defined in: [lib/mina/v1/transaction.ts:586](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/transaction.ts#L586)

Construct a smart contract transaction. Within the callback passed to this function,
you can call into the methods of smart contracts.

```
let tx = await Mina.transaction(sender, async () => {
  await myZkapp.update();
  await someOtherZkapp.someOtherMethod();
});
```

### Parameters

#### f

() => `Promise`\<`void`\>

### Returns

[`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`false`, `false`\>

A transaction that can subsequently be submitted to the chain.
