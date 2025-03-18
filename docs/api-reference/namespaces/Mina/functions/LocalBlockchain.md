```ts
function LocalBlockchain(__namedParameters: {
  enforceTransactionLimits: boolean;
  proofsEnabled: boolean;
 }): Promise<{
  addAccount: (publicKey: PublicKey, balance: string) => void;
  getNetworkId: () => NetworkId;
  proofsEnabled: boolean;
  testAccounts: [TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey, TestPublicKey];
  applyJsonTransaction: void;
  currentSlot: UInt32;
  fetchActions: Promise<{
     actions: string[][];
     hash: string;
    }[]>;
  fetchEvents: Promise<any>;
  getAccount: Account;
  getActions: {
     actions: string[][];
     hash: string;
    }[];
  getNetworkConstants: {
     accountCreationFee: UInt64;
     genesisTimestamp: UInt64;
     slotTime: UInt64;
    };
  getNetworkState: PreconditionBaseTypes<{}>;
  hasAccount: boolean;
  incrementGlobalSlot: void;
  resetProofsEnabled: void;
  sendTransaction: PendingTransactionPromise;
  setBlockchainLength: void;
  setGlobalSlot: void;
  setProofsEnabled: void;
  setTotalCurrency: void;
  transaction: TransactionPromise<false, false>;
}>
```

Defined in: [lib/mina/v1/local-blockchain.ts:67](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/local-blockchain.ts#L67)

A mock Mina blockchain running locally and useful for testing.

## Parameters

### \_\_namedParameters

#### enforceTransactionLimits

`boolean` = `true`

#### proofsEnabled

`boolean` = `true`

## Returns

`Promise`\<\{
  `addAccount`: (`publicKey`: [`PublicKey`](../../../classes/PublicKey.md), `balance`: `string`) => `void`;
  `getNetworkId`: () => `NetworkId`;
  `proofsEnabled`: `boolean`;
  `testAccounts`: \[[`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md), [`TestPublicKey`](../type-aliases/TestPublicKey.md)\];
  `applyJsonTransaction`: `void`;
  `currentSlot`: [`UInt32`](../../../classes/UInt32.md);
  `fetchActions`: `Promise`\<\{
     `actions`: `string`[][];
     `hash`: `string`;
    \}[]\>;
  `fetchEvents`: `Promise`\<`any`\>;
  `getAccount`: `Account`;
  `getActions`: \{
     `actions`: `string`[][];
     `hash`: `string`;
    \}[];
  `getNetworkConstants`: \{
     `accountCreationFee`: [`UInt64`](../../../classes/UInt64.md);
     `genesisTimestamp`: [`UInt64`](../../../classes/UInt64.md);
     `slotTime`: [`UInt64`](../../../classes/UInt64.md);
    \};
  `getNetworkState`: `PreconditionBaseTypes`\<\{\}\>;
  `hasAccount`: `boolean`;
  `incrementGlobalSlot`: `void`;
  `resetProofsEnabled`: `void`;
  `sendTransaction`: [`PendingTransactionPromise`](../type-aliases/PendingTransactionPromise.md);
  `setBlockchainLength`: `void`;
  `setGlobalSlot`: `void`;
  `setProofsEnabled`: `void`;
  `setTotalCurrency`: `void`;
  `transaction`: [`TransactionPromise`](../../../type-aliases/TransactionPromise.md)\<`false`, `false`\>;
 \}\>
