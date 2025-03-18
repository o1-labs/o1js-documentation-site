Defined in: [lib/mina/v1/token/token-contract.ts:24](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L24)

Base token contract which
- implements the `Approvable` API, with the `approveBase()` method left to be defined by subclasses
- implements the `Transferable` API as a wrapper around the `Approvable` API

## Extends

- [`SmartContract`](SmartContract.md)

## Constructors

### new TokenContract()

```ts
new TokenContract(address: PublicKey, tokenId?: Field): TokenContract
```

Defined in: [lib/mina/v1/zkapp.ts:552](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L552)

#### Parameters

##### address

[`PublicKey`](PublicKey.md)

##### tokenId?

[`Field`](Field.md)

#### Returns

[`TokenContract`](TokenContract.md)

#### Inherited from

[`SmartContract`](SmartContract.md).[`constructor`](SmartContract.md#constructors)

## Properties

### address

```ts
address: PublicKey;
```

Defined in: [lib/mina/v1/zkapp.ts:517](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L517)

#### Inherited from

[`SmartContract`](SmartContract.md).[`address`](SmartContract.md#address-1)

***

### events

```ts
events: {} = {};
```

Defined in: [lib/mina/v1/zkapp.ts:915](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L915)

A list of event types that can be emitted using this.emitEvent()`.

#### Index Signature

```ts
[key: string]: FlexibleProvablePure<any>
```

#### Inherited from

[`SmartContract`](SmartContract.md).[`events`](SmartContract.md#events)

***

### sender

```ts
sender: {
  self: SmartContract;
  getAndRequireSignature: PublicKey;
  getUnconstrained: PublicKey;
};
```

Defined in: [lib/mina/v1/zkapp.ts:807](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L807)

#### self

```ts
self: SmartContract;
```

#### getAndRequireSignature()

Return a public key that is forced to sign this transaction.

Note: This doesn't prove that the return value is the transaction sender, but it proves that whoever created
the transaction controls the private key associated with the returned public key.

##### Returns

[`PublicKey`](PublicKey.md)

#### getUnconstrained()

The public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

**Warning**: The fact that this public key equals the current sender is not part of the proof.
A malicious prover could use any other public key without affecting the validity of the proof.

Consider using `this.sender.getAndRequireSignature()` if you need to prove that the sender controls this account.

##### Returns

[`PublicKey`](PublicKey.md)

#### Inherited from

[`SmartContract`](SmartContract.md).[`sender`](SmartContract.md#sender)

***

### tokenId

```ts
tokenId: Field;
```

Defined in: [lib/mina/v1/zkapp.ts:518](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L518)

#### Inherited from

[`SmartContract`](SmartContract.md).[`tokenId`](SmartContract.md#tokenid-1)

***

### \_methodMetadata?

```ts
static optional _methodMetadata: Record<string, {
  actions: number;
  digest: string;
  gates: Gate[];
  proofs: ProofClass[];
  rows: number;
}>;
```

Defined in: [lib/mina/v1/zkapp.ts:527](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L527)

#### Inherited from

[`SmartContract`](SmartContract.md).[`_methodMetadata`](SmartContract.md#_methodmetadata)

***

### \_methods?

```ts
static optional _methods: MethodInterface[];
```

Defined in: [lib/mina/v1/zkapp.ts:526](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L526)

#### Inherited from

[`SmartContract`](SmartContract.md).[`_methods`](SmartContract.md#_methods)

***

### \_provers?

```ts
static optional _provers: Prover[];
```

Defined in: [lib/mina/v1/zkapp.ts:537](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L537)

#### Inherited from

[`SmartContract`](SmartContract.md).[`_provers`](SmartContract.md#_provers)

***

### \_verificationKey?

```ts
static optional _verificationKey: {
  data: string;
  hash: Field;
};
```

Defined in: [lib/mina/v1/zkapp.ts:538](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L538)

#### data

```ts
data: string;
```

#### hash

```ts
hash: Field;
```

#### Inherited from

[`SmartContract`](SmartContract.md).[`_verificationKey`](SmartContract.md#_verificationkey)

***

### MAX\_ACCOUNT\_UPDATES

```ts
static MAX_ACCOUNT_UPDATES: number = 9;
```

Defined in: [lib/mina/v1/token/token-contract.ts:29](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L29)

The maximum number of account updates using the token in a single
transaction that this contract supports.

## Accessors

### account

#### Get Signature

```ts
get account(): Account
```

Defined in: [lib/mina/v1/zkapp.ts:859](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L859)

Current account of the [SmartContract](SmartContract.md).

##### Returns

`Account`

#### Inherited from

[`SmartContract`](SmartContract.md).[`account`](SmartContract.md#account)

***

### balance

#### Get Signature

```ts
get balance(): {
  addInPlace: void;
  subInPlace: void;
}
```

Defined in: [lib/mina/v1/zkapp.ts:909](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L909)

Balance of this [SmartContract](SmartContract.md).

##### Returns

```ts
{
  addInPlace: void;
  subInPlace: void;
}
```

###### addInPlace()

###### Parameters

###### x

`string` | `number` | `bigint` | [`UInt64`](UInt64.md) | [`UInt32`](UInt32.md) | [`Int64`](Int64.md)

###### Returns

`void`

###### subInPlace()

###### Parameters

###### x

`string` | `number` | `bigint` | [`UInt64`](UInt64.md) | [`UInt32`](UInt32.md) | [`Int64`](Int64.md)

###### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`balance`](SmartContract.md#balance)

***

### currentSlot

#### Get Signature

```ts
get currentSlot(): CurrentSlot
```

Defined in: [lib/mina/v1/zkapp.ts:873](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L873)

Current global slot on the network. This is the slot at which this transaction is included in a block. Since we cannot know this value
at the time of transaction construction, this only has the `assertBetween()` method but no `get()` (impossible to implement)
or `assertEquals()` (confusing, because the developer can't know the exact slot at which this will be included either)

##### Returns

`CurrentSlot`

#### Inherited from

[`SmartContract`](SmartContract.md).[`currentSlot`](SmartContract.md#currentslot)

***

### internal

#### Get Signature

```ts
get internal(): {
  burn: AccountUpdate;
  mint: AccountUpdate;
  send: AccountUpdate;
}
```

Defined in: [lib/mina/v1/token/token-contract.ts:77](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L77)

Helper methods to use from within a token contract.

##### Returns

```ts
{
  burn: AccountUpdate;
  mint: AccountUpdate;
  send: AccountUpdate;
}
```

###### burn()

Burn token balance on `address`. Returns the burn account update.

###### Parameters

###### \_\_namedParameters

###### address

  \| [`PublicKey`](PublicKey.md)
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`SmartContract`](SmartContract.md)

###### amount

`number` \| `bigint` \| [`UInt64`](UInt64.md)

###### Returns

[`AccountUpdate`](AccountUpdate.md)

###### mint()

Mints token balance to `address`. Returns the mint account update.

###### Parameters

###### \_\_namedParameters

###### address

  \| [`PublicKey`](PublicKey.md)
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`SmartContract`](SmartContract.md)

###### amount

`number` \| `bigint` \| [`UInt64`](UInt64.md)

###### Returns

[`AccountUpdate`](AccountUpdate.md)

###### send()

Move token balance from `from` to `to`. Returns the `to` account update.

###### Parameters

###### \_\_namedParameters

###### amount

`number` \| `bigint` \| [`UInt64`](UInt64.md)

###### from

  \| [`PublicKey`](PublicKey.md)
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`SmartContract`](SmartContract.md)

###### to

  \| [`PublicKey`](PublicKey.md)
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`SmartContract`](SmartContract.md)

###### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### network

#### Get Signature

```ts
get network(): Network
```

Defined in: [lib/mina/v1/zkapp.ts:865](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L865)

Current network state of the [SmartContract](SmartContract.md).

##### Returns

`Network`

#### Inherited from

[`SmartContract`](SmartContract.md).[`network`](SmartContract.md#network)

***

### self

#### Get Signature

```ts
get self(): AccountUpdate
```

Defined in: [lib/mina/v1/zkapp.ts:765](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L765)

Returns the current [AccountUpdate](AccountUpdate.md) associated to this [SmartContract](SmartContract.md).

##### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

[`SmartContract`](SmartContract.md).[`self`](SmartContract.md#self)

## Methods

### approve()

```ts
approve(update: 
  | AccountUpdate
  | AccountUpdateTree
  | AccountUpdateForest): void
```

Defined in: [lib/mina/v1/zkapp.ts:898](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L898)

Approve an account update or tree / forest of updates. Doing this means you include the account update in the zkApp's public input,
which allows you to read and use its content in a proof, make assertions about it, and modify it.

```ts
`@method` myApprovingMethod(update: AccountUpdate) {
  this.approve(update);

  // read balance on the account (for example)
  let balance = update.account.balance.getAndRequireEquals();
}
```

Under the hood, "approving" just means that the account update is made a child of the zkApp in the
tree of account updates that forms the transaction. Similarly, if you pass in an [AccountUpdateTree](AccountUpdateTree.md),
the entire tree will become a subtree of the zkApp's account update.

Passing in a forest is a bit different, because it means you set the entire children of the zkApp's account update
at once. `approve()` will fail if the zkApp's account update already has children, to prevent you from accidentally
excluding important information from the public input.

#### Parameters

##### update

[`AccountUpdate`](AccountUpdate.md) | [`AccountUpdateTree`](AccountUpdateTree.md) | [`AccountUpdateForest`](AccountUpdateForest.md)

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`approve`](SmartContract.md#approve)

***

### approveAccountUpdate()

```ts
approveAccountUpdate(accountUpdate: 
  | AccountUpdate
| AccountUpdateTree): Promise<void>
```

Defined in: [lib/mina/v1/token/token-contract.ts:137](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L137)

Approve a single account update (with arbitrarily many children).

#### Parameters

##### accountUpdate

[`AccountUpdate`](AccountUpdate.md) | [`AccountUpdateTree`](AccountUpdateTree.md)

#### Returns

`Promise`\<`void`\>

***

### approveAccountUpdates()

```ts
approveAccountUpdates(accountUpdates: (
  | AccountUpdate
| AccountUpdateTree)[]): Promise<void>
```

Defined in: [lib/mina/v1/token/token-contract.ts:145](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L145)

Approve a list of account updates (with arbitrarily many children).

#### Parameters

##### accountUpdates

(
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`AccountUpdateTree`](AccountUpdateTree.md))[]

#### Returns

`Promise`\<`void`\>

***

### approveBase()

```ts
abstract approveBase(forest: AccountUpdateForest): Promise<void>
```

Defined in: [lib/mina/v1/token/token-contract.ts:84](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L84)

#### Parameters

##### forest

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Returns

`Promise`\<`void`\>

***

### checkZeroBalanceChange()

```ts
checkZeroBalanceChange(updates: AccountUpdateForest): void
```

Defined in: [lib/mina/v1/token/token-contract.ts:121](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L121)

Use `forEachUpdate()` to prove that the total balance change of child account updates is zero.

This is provided out of the box as it is both a good example, and probably the most common implementation, of `approveBase()`.

#### Parameters

##### updates

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Returns

`void`

***

### deploy()

```ts
deploy(args?: DeployArgs): Promise<void>
```

Defined in: [lib/mina/v1/token/token-contract.ts:52](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L52)

Deploys a [TokenContract](TokenContract.md).

In addition to base smart contract deployment, this adds two steps:
- set the `access` permission to `proofOrSignature()`, to prevent against unauthorized token operations
  - not doing this would imply that anyone can bypass token contract authorization and simply mint themselves tokens
- require the zkapp account to be new, using the `isNew` precondition.
  this guarantees that the access permission is set from the very start of the existence of this account.
  creating the zkapp account before deployment would otherwise be a security vulnerability that is too easy to introduce.

Note that because of the `isNew` precondition, the zkapp account must not be created prior to calling `deploy()`.

If the contract needs to be re-deployed, you can switch off this behaviour by overriding the `isNew` precondition:
```ts
async deploy() {
  await super.deploy();
  // DON'T DO THIS ON THE INITIAL DEPLOYMENT!
  this.account.isNew.requireNothing();
}
```

#### Parameters

##### args?

[`DeployArgs`](../type-aliases/DeployArgs.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SmartContract`](SmartContract.md).[`deploy`](SmartContract.md#deploy)

***

### deriveTokenId()

```ts
deriveTokenId(): Field
```

Defined in: [lib/mina/v1/token/token-contract.ts:70](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L70)

Returns the `tokenId` of the token managed by this contract.

#### Returns

[`Field`](Field.md)

***

### emitEvent()

```ts
emitEvent<K>(type: K, event: any): void
```

Defined in: [lib/mina/v1/zkapp.ts:962](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L962)

Emits an event. Events will be emitted as a part of the transaction and can be collected by archive nodes.

#### Type Parameters

• **K** *extends* `string` \| `number`

#### Parameters

##### type

`K`

##### event

`any`

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`emitEvent`](SmartContract.md#emitevent)

***

### emitEventIf()

```ts
emitEventIf<K>(
   condition: Bool, 
   type: K, 
   event: any): void
```

Defined in: [lib/mina/v1/zkapp.ts:923](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L923)

Conditionally emits an event.

Events will be emitted as a part of the transaction and can be collected by archive nodes.

#### Type Parameters

• **K** *extends* `string` \| `number`

#### Parameters

##### condition

[`Bool`](Bool.md)

##### type

`K`

##### event

`any`

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`emitEventIf`](SmartContract.md#emiteventif)

***

### fetchEvents()

```ts
fetchEvents(start?: UInt32, end?: UInt32): Promise<{
  blockHash: string;
  blockHeight: UInt32;
  chainStatus: string;
  event: {
     data: ProvablePure<any>;
     transactionInfo: {
        transactionHash: string;
        transactionMemo: string;
        transactionStatus: string;
       };
    };
  globalSlot: UInt32;
  parentBlockHash: string;
  type: string;
}[]>
```

Defined in: [lib/mina/v1/zkapp.ts:978](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L978)

Asynchronously fetches events emitted by this [SmartContract](SmartContract.md) and returns an array of events with their corresponding types.

#### Parameters

##### start?

[`UInt32`](UInt32.md) = `...`

The start height of the events to fetch.

##### end?

[`UInt32`](UInt32.md)

The end height of the events to fetch. If not provided, fetches events up to the latest height.

#### Returns

`Promise`\<\{
  `blockHash`: `string`;
  `blockHeight`: [`UInt32`](UInt32.md);
  `chainStatus`: `string`;
  `event`: \{
     `data`: [`ProvablePure`](../type-aliases/ProvablePure.md)\<`any`\>;
     `transactionInfo`: \{
        `transactionHash`: `string`;
        `transactionMemo`: `string`;
        `transactionStatus`: `string`;
       \};
    \};
  `globalSlot`: [`UInt32`](UInt32.md);
  `parentBlockHash`: `string`;
  `type`: `string`;
 \}[]\>

A promise that resolves to an array of objects, each containing the event type and event data for the specified range.

#### Throws

If there is an error fetching events from the Mina network.

#### Example

```ts
const startHeight = UInt32.from(1000);
const endHeight = UInt32.from(2000);
const events = await myZkapp.fetchEvents(startHeight, endHeight);
console.log(events);
```

#### Inherited from

[`SmartContract`](SmartContract.md).[`fetchEvents`](SmartContract.md#fetchevents)

***

### forEachUpdate()

```ts
forEachUpdate(updates: AccountUpdateForest, callback: (update: AccountUpdate, usesToken: Bool) => void): void
```

Defined in: [lib/mina/v1/token/token-contract.ts:91](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L91)

Iterate through the account updates in `updates` and apply `callback` to each.

This method is provable and is suitable as a base for implementing `approveUpdates()`.

#### Parameters

##### updates

[`AccountUpdateForest`](AccountUpdateForest.md)

##### callback

(`update`: [`AccountUpdate`](AccountUpdate.md), `usesToken`: [`Bool`](Bool.md)) => `void`

#### Returns

`void`

***

### init()

```ts
init(): void
```

Defined in: [lib/mina/v1/zkapp.ts:713](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L713)

`SmartContract.init()` will be called only when a [SmartContract](SmartContract.md) will be first deployed, not for redeployment.
This method can be overridden as follows
```
class MyContract extends SmartContract {
 init() {
   super.init();
   this.account.permissions.set(...);
   this.x.set(Field(1));
 }
}
```

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`init`](SmartContract.md#init)

***

### newSelf()

```ts
newSelf(methodName?: string): AccountUpdate
```

Defined in: [lib/mina/v1/zkapp.ts:797](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L797)

Same as `SmartContract.self` but explicitly creates a new [AccountUpdate](AccountUpdate.md).

#### Parameters

##### methodName?

`string`

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

[`SmartContract`](SmartContract.md).[`newSelf`](SmartContract.md#newself)

***

### requireSignature()

```ts
requireSignature(): void
```

Defined in: [lib/mina/v1/zkapp.ts:746](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L746)

Use this command if the account update created by this SmartContract should be signed by the account owner,
instead of authorized with a proof.

Note that the smart contract's [Permissions](../variables/Permissions.md) determine which updates have to be (can be) authorized by a signature.

If you only want to avoid creating proofs for quicker testing, we advise you to
use `LocalBlockchain({ proofsEnabled: false })` instead of `requireSignature()`. Setting
`proofsEnabled` to `false` allows you to test your transactions with the same authorization flow as in production,
with the only difference being that quick mock proofs are filled in instead of real proofs.

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`requireSignature`](SmartContract.md#requiresignature)

***

### send()

```ts
send(args: {
  amount: number | bigint | UInt64;
  to:   | PublicKey
     | AccountUpdate
     | SmartContract;
 }): AccountUpdate
```

Defined in: [lib/mina/v1/zkapp.ts:902](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L902)

#### Parameters

##### args

###### amount

`number` \| `bigint` \| [`UInt64`](UInt64.md)

###### to

  \| [`PublicKey`](PublicKey.md)
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`SmartContract`](SmartContract.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

[`SmartContract`](SmartContract.md).[`send`](SmartContract.md#send)

***

### skipAuthorization()

```ts
skipAuthorization(): void
```

Defined in: [lib/mina/v1/zkapp.ts:758](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L758)

Use this command if the account update created by this SmartContract should have no authorization on it,
instead of being authorized with a proof.

WARNING: This is a method that should rarely be useful. If you want to disable proofs for quicker testing, take a look
at `LocalBlockchain({ proofsEnabled: false })`, which causes mock proofs to be created and doesn't require changing the
authorization flow.

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`skipAuthorization`](SmartContract.md#skipauthorization)

***

### transfer()

```ts
transfer(
   from: PublicKey | AccountUpdate, 
   to: PublicKey | AccountUpdate, 
amount: number | bigint | UInt64): Promise<void>
```

Defined in: [lib/mina/v1/token/token-contract.ts:155](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/token/token-contract.ts#L155)

Transfer `amount` of tokens from `from` to `to`.

#### Parameters

##### from

[`PublicKey`](PublicKey.md) | [`AccountUpdate`](AccountUpdate.md)

##### to

[`PublicKey`](PublicKey.md) | [`AccountUpdate`](AccountUpdate.md)

##### amount

`number` | `bigint` | [`UInt64`](UInt64.md)

#### Returns

`Promise`\<`void`\>

***

### analyzeMethods()

```ts
static analyzeMethods(__namedParameters: {
  printSummary: boolean;
 }): Promise<Record<string, {
  actions: number;
  digest: string;
  gates: Gate[];
  proofs: ProofClass[];
  rows: number;
}>>
```

Defined in: [lib/mina/v1/zkapp.ts:1098](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L1098)

This function is run internally before compiling a smart contract, to collect metadata about what each of your
smart contract methods does.

For external usage, this function can be handy because calling it involves running all methods in the same "mode" as `compile()` does,
so it serves as a quick-to-run check for whether your contract can be compiled without errors, which can greatly speed up iterating.

`analyzeMethods()` will also return the number of `rows` of each of your method circuits (i.e., the number of constraints in the underlying proof system),
which is a good indicator for circuit size and the time it will take to create proofs.
To inspect the created circuit in detail, you can look at the returned `gates`.

Note: If this function was already called before, it will short-circuit and just return the metadata collected the first time.

#### Parameters

##### \_\_namedParameters

###### printSummary

`boolean` = `false`

#### Returns

`Promise`\<`Record`\<`string`, \{
  `actions`: `number`;
  `digest`: `string`;
  `gates`: `Gate`[];
  `proofs`: `ProofClass`[];
  `rows`: `number`;
 \}\>\>

an object, keyed by method name, each entry containing:
 - `rows` the size of the constraint system created by this method
 - `digest` a digest of the method circuit
 - `actions` the number of actions the method dispatches
 - `gates` the constraint system, represented as an array of gates

#### Inherited from

[`SmartContract`](SmartContract.md).[`analyzeMethods`](SmartContract.md#analyzemethods)

***

### compile()

```ts
static compile(__namedParameters: {
  cache: Cache;
  forceRecompile: boolean;
 }): Promise<{
  provers: Prover[];
  verificationKey: {
     data: string;
     hash: Field;
    };
  verify: (statement: Statement<FieldConst>, proof: unknown) => Promise<boolean>;
}>
```

Defined in: [lib/mina/v1/zkapp.ts:580](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L580)

Compile your smart contract.

This generates both the prover functions, needed to create proofs for running `@method`s,
and the verification key, needed to deploy your zkApp.

Although provers and verification key are returned by this method, they are also cached internally and used when needed,
so you don't actually have to use the return value of this function.

Under the hood, "compiling" means calling into the lower-level [Pickles and Kimchi libraries](https://o1-labs.github.io/proof-systems/kimchi/overview.html) to
create multiple prover & verifier indices (one for each smart contract method as part of a "step circuit" and one for the "wrap circuit" which recursively wraps
it so that proofs end up in the original finite field). These are fairly expensive operations, so **expect compiling to take at least 20 seconds**,
up to several minutes if your circuit is large or your hardware is not optimal for these operations.

#### Parameters

##### \_\_namedParameters

###### cache

[`Cache`](../type-aliases/Cache.md) = `Cache.FileSystemDefault`

###### forceRecompile

`boolean` = `false`

#### Returns

`Promise`\<\{
  `provers`: `Prover`[];
  `verificationKey`: \{
     `data`: `string`;
     `hash`: [`Field`](Field.md);
    \};
  `verify`: (`statement`: `Statement`\<`FieldConst`\>, `proof`: `unknown`) => `Promise`\<`boolean`\>;
 \}\>

#### Inherited from

[`SmartContract`](SmartContract.md).[`compile`](SmartContract.md#compile)

***

### digest()

```ts
static digest(): Promise<string>
```

Defined in: [lib/mina/v1/zkapp.ts:621](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L621)

Computes a hash of your smart contract, which will reliably change _whenever one of your method circuits changes_.
This digest is quick to compute. it is designed to help with deciding whether a contract should be re-compiled or
a cached verification key can be used.

#### Returns

`Promise`\<`string`\>

the digest, as a hex string

#### Inherited from

[`SmartContract`](SmartContract.md).[`digest`](SmartContract.md#digest)

***

### getMaxProofsVerified()

```ts
static getMaxProofsVerified(): Promise<0 | 1 | 2>
```

Defined in: [lib/mina/v1/zkapp.ts:632](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L632)

The maximum number of proofs that are verified by any of the zkApp methods.
This is an internal parameter needed by the proof system.

#### Returns

`Promise`\<`0` \| `1` \| `2`\>

#### Inherited from

[`SmartContract`](SmartContract.md).[`getMaxProofsVerified`](SmartContract.md#getmaxproofsverified)

***

### Proof()

```ts
static Proof(): typeof __class
```

Defined in: [lib/mina/v1/zkapp.ts:543](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L543)

Returns a Proof type that belongs to this [SmartContract](SmartContract.md).

#### Returns

*typeof* `__class`

#### Inherited from

[`SmartContract`](SmartContract.md).[`Proof`](SmartContract.md#proof)

***

### runOutsideCircuit()

```ts
static runOutsideCircuit(run: () => void): void
```

Defined in: [lib/mina/v1/zkapp.ts:1074](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L1074)

#### Parameters

##### run

() => `void`

#### Returns

`void`

#### Inherited from

[`SmartContract`](SmartContract.md).[`runOutsideCircuit`](SmartContract.md#runoutsidecircuit)
