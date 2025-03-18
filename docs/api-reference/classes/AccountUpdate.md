Defined in: [lib/mina/v1/account-update.ts:641](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L641)

An [AccountUpdate](AccountUpdate.md) is a set of instructions for the Mina network.
It includes Preconditions and a list of state updates, which need to
be authorized by either a [Signature](Signature.md) or [Proof](Proof.md).

## Implements

- `AccountUpdate`

## Constructors

### new AccountUpdate()

```ts
new AccountUpdate(body: Body, authorization?: {}): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:660](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L660)

#### Parameters

##### body

`Body`

##### authorization?

#### Returns

[`AccountUpdate`](AccountUpdate.md)

## Properties

### account

```ts
account: Account;
```

Defined in: [lib/mina/v1/account-update.ts:651](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L651)

***

### authorization

```ts
authorization: {};
```

Defined in: [lib/mina/v1/account-update.ts:649](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L649)

#### Implementation of

```ts
Types.AccountUpdate.authorization
```

***

### body

```ts
body: Body;
```

Defined in: [lib/mina/v1/account-update.ts:648](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L648)

#### Implementation of

```ts
Types.AccountUpdate.body
```

***

### currentSlot

```ts
currentSlot: CurrentSlot;
```

Defined in: [lib/mina/v1/account-update.ts:653](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L653)

***

### id

```ts
id: number;
```

Defined in: [lib/mina/v1/account-update.ts:642](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L642)

***

### label

```ts
label: string = '';
```

Defined in: [lib/mina/v1/account-update.ts:647](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L647)

A human-readable label for the account update, indicating how that update
was created. Can be modified by applications to add richer information.

***

### lazyAuthorization

```ts
lazyAuthorization: undefined | LazySignature | LazyProof | LazyNone = undefined;
```

Defined in: [lib/mina/v1/account-update.ts:650](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L650)

***

### network

```ts
network: Network;
```

Defined in: [lib/mina/v1/account-update.ts:652](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L652)

***

### Actions

```ts
static Actions: {
  emptyActionState: Field;
  fromList: Events;
  hash: Field;
  pushEvent: Events;
  updateSequenceState: Field;
};
```

Defined in: [lib/mina/v1/account-update.ts:657](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L657)

#### emptyActionState()

##### Returns

[`Field`](Field.md)

#### fromList()

##### Parameters

###### events

`Event`[]

##### Returns

`Events`

#### hash()

##### Parameters

###### events

`Event`[]

##### Returns

[`Field`](Field.md)

#### pushEvent()

##### Parameters

###### actions

`Events`

###### action

[`Field`](Field.md)[]

##### Returns

`Events`

#### updateSequenceState()

##### Parameters

###### state

[`Field`](Field.md)

###### sequenceEventsHash

[`Field`](Field.md)

##### Returns

[`Field`](Field.md)

***

### check()

```ts
static check: (x: AccountUpdate) => void = Types.AccountUpdate.check;
```

Defined in: [lib/mina/v1/account-update.ts:1115](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1115)

#### Parameters

##### x

`AccountUpdate`

#### Returns

`void`

***

### Events

```ts
static Events: {
  fromList: Events;
  hash: Field;
  pushEvent: Events;
};
```

Defined in: [lib/mina/v1/account-update.ts:658](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L658)

#### fromList()

##### Parameters

###### events

`Event`[]

##### Returns

`Events`

#### hash()

##### Parameters

###### events

`Event`[]

##### Returns

[`Field`](Field.md)

#### pushEvent()

##### Parameters

###### events

`Events`

###### event

[`Field`](Field.md)[]

##### Returns

`Events`

***

### MayUseToken

```ts
static MayUseToken: {
  InheritFromParent: {
     inheritFromParent: Bool;
     parentsOwnToken: Bool;
    };
  isInheritFromParent: (a: AccountUpdate) => Bool;
  isNo: (__namedParameters: AccountUpdate) => Bool;
  isParentsOwnToken: (a: AccountUpdate) => Bool;
  No: {
     inheritFromParent: Bool;
     parentsOwnToken: Bool;
    };
  ParentsOwnToken: {
     inheritFromParent: Bool;
     parentsOwnToken: Bool;
    };
  type: {};
};
```

Defined in: [lib/mina/v1/account-update.ts:1158](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1158)

#### InheritFromParent

```ts
InheritFromParent: {
  inheritFromParent: Bool;
  parentsOwnToken: Bool;
};
```

##### InheritFromParent.inheritFromParent

```ts
inheritFromParent: Bool;
```

##### InheritFromParent.parentsOwnToken

```ts
parentsOwnToken: Bool;
```

#### isInheritFromParent()

```ts
isInheritFromParent: (a: AccountUpdate) => Bool;
```

##### Parameters

###### a

[`AccountUpdate`](AccountUpdate.md)

##### Returns

[`Bool`](Bool.md)

#### isNo()

```ts
isNo: (__namedParameters: AccountUpdate) => Bool;
```

##### Parameters

###### \_\_namedParameters

[`AccountUpdate`](AccountUpdate.md)

##### Returns

[`Bool`](Bool.md)

#### isParentsOwnToken()

```ts
isParentsOwnToken: (a: AccountUpdate) => Bool;
```

##### Parameters

###### a

[`AccountUpdate`](AccountUpdate.md)

##### Returns

[`Bool`](Bool.md)

#### No

```ts
No: {
  inheritFromParent: Bool;
  parentsOwnToken: Bool;
};
```

##### No.inheritFromParent

```ts
inheritFromParent: Bool;
```

##### No.parentsOwnToken

```ts
parentsOwnToken: Bool;
```

#### ParentsOwnToken

```ts
ParentsOwnToken: {
  inheritFromParent: Bool;
  parentsOwnToken: Bool;
};
```

##### ParentsOwnToken.inheritFromParent

```ts
inheritFromParent: Bool;
```

##### ParentsOwnToken.parentsOwnToken

```ts
parentsOwnToken: Bool;
```

#### type

```ts
type: {} = BaseMayUseToken;
```

***

### sizeInFields()

```ts
static sizeInFields: () => number = Types.AccountUpdate.sizeInFields;
```

Defined in: [lib/mina/v1/account-update.ts:1102](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1102)

#### Returns

`number`

***

### toFields()

```ts
static toFields: (x: AccountUpdate) => Field[] = Types.AccountUpdate.toFields;
```

Defined in: [lib/mina/v1/account-update.ts:1103](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1103)

#### Parameters

##### x

`AccountUpdate`

#### Returns

[`Field`](Field.md)[]

***

### toInput()

```ts
static toInput: (x: AccountUpdate) => {} = Types.AccountUpdate.toInput;
```

Defined in: [lib/mina/v1/account-update.ts:1111](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1111)

#### Parameters

##### x

`AccountUpdate`

#### Returns

```ts
{}
```

***

### toValue()

```ts
static toValue: (x: AccountUpdate) => AccountUpdate = Types.AccountUpdate.toValue;
```

Defined in: [lib/mina/v1/account-update.ts:1120](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1120)

#### Parameters

##### x

`AccountUpdate`

#### Returns

`AccountUpdate`

## Accessors

### balance

#### Get Signature

```ts
get balance(): {
  addInPlace: void;
  subInPlace: void;
}
```

Defined in: [lib/mina/v1/account-update.ts:742](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L742)

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

***

### balanceChange

#### Get Signature

```ts
get balanceChange(): Int64
```

Defined in: [lib/mina/v1/account-update.ts:755](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L755)

##### Returns

[`Int64`](Int64.md)

#### Set Signature

```ts
set balanceChange(x: Int64): void
```

Defined in: [lib/mina/v1/account-update.ts:758](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L758)

##### Parameters

###### x

[`Int64`](Int64.md)

##### Returns

`void`

***

### publicKey

#### Get Signature

```ts
get publicKey(): PublicKey
```

Defined in: [lib/mina/v1/account-update.ts:823](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L823)

##### Returns

[`PublicKey`](PublicKey.md)

***

### tokenId

#### Get Signature

```ts
get tokenId(): Field
```

Defined in: [lib/mina/v1/account-update.ts:689](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L689)

##### Returns

[`Field`](Field.md)

***

### update

#### Get Signature

```ts
get update(): {}
```

Defined in: [lib/mina/v1/account-update.ts:762](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L762)

##### Returns

```ts
{}
```

## Methods

### approve()

```ts
approve(child: 
  | AccountUpdate
  | AccountUpdateTree
  | AccountUpdateForest): void
```

Defined in: [lib/mina/v1/account-update.ts:730](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L730)

Makes another [AccountUpdate](AccountUpdate.md) a child of this one.

The parent-child relationship means that the child becomes part of the "statement"
of the parent, and goes into the commitment that is authorized by either a signature
or a proof.

For a proof in particular, child account updates are contained in the public input
of the proof that authorizes the parent account update.

#### Parameters

##### child

[`AccountUpdate`](AccountUpdate.md) | [`AccountUpdateTree`](AccountUpdateTree.md) | [`AccountUpdateForest`](AccountUpdateForest.md)

#### Returns

`void`

***

### extractTree()

```ts
extractTree(): AccountUpdateTree
```

Defined in: [lib/mina/v1/account-update.ts:955](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L955)

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

***

### hash()

```ts
hash(): Field
```

Defined in: [lib/mina/v1/account-update.ts:918](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L918)

#### Returns

[`Field`](Field.md)

***

### isDummy()

```ts
isDummy(): Bool
```

Defined in: [lib/mina/v1/account-update.ts:980](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L980)

#### Returns

[`Bool`](Bool.md)

***

### requireSignature()

```ts
requireSignature(): void
```

Defined in: [lib/mina/v1/account-update.ts:842](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L842)

Use this command if this account update should be signed by the account
owner, instead of not having any authorization.

If you use this and are not relying on a wallet to sign your transaction,
then you should use the following code before sending your transaction:

```ts
let tx = await Mina.transaction(...); // create transaction as usual, using `requireSignature()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../variables/Permissions.md) determine which updates have to
be (can be) authorized by a signature.

#### Returns

`void`

***

### send()

```ts
send(__namedParameters: {
  amount: number | bigint | UInt64;
  to:   | PublicKey
     | AccountUpdate
     | SmartContract;
 }): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:693](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L693)

#### Parameters

##### \_\_namedParameters

###### amount

`number` \| `bigint` \| [`UInt64`](UInt64.md)

###### to

  \| [`PublicKey`](PublicKey.md)
  \| [`AccountUpdate`](AccountUpdate.md)
  \| [`SmartContract`](SmartContract.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### toJSON()

```ts
toJSON(): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:907](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L907)

#### Returns

`AccountUpdate`

***

### toPretty()

```ts
toPretty(): any
```

Defined in: [lib/mina/v1/account-update.ts:1164](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1164)

Returns a JSON representation of only the fields that differ from the
default [AccountUpdate](AccountUpdate.md).

#### Returns

`any`

***

### toPrettyLayout()

```ts
toPrettyLayout(): void
```

Defined in: [lib/mina/v1/account-update.ts:949](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L949)

#### Returns

`void`

***

### toPublicInput()

```ts
toPublicInput(__namedParameters: {
  accountUpdates: AccountUpdate[];
 }): ZkappPublicInput
```

Defined in: [lib/mina/v1/account-update.ts:923](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L923)

#### Parameters

##### \_\_namedParameters

###### accountUpdates

[`AccountUpdate`](AccountUpdate.md)[]

#### Returns

[`ZkappPublicInput`](../type-aliases/ZkappPublicInput.md)

***

### assertBetween()

```ts
static assertBetween<T>(
   property: OrIgnore<ClosedInterval<T>>, 
   lower: T, 
   upper: T): void
```

Defined in: [lib/mina/v1/account-update.ts:790](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L790)

Constrain a property to lie between lower and upper bounds.

#### Type Parameters

• **T**

#### Parameters

##### property

`OrIgnore`\<`ClosedInterval`\<`T`\>\>

The property to constrain

##### lower

`T`

The lower bound

##### upper

`T`

The upper bound

Example: To constrain the account balance of a SmartContract to lie between
0 and 20 MINA, you can use

```ts
\@method onlyRunsWhenBalanceIsLow() {
  let lower = UInt64.zero;
  let upper = UInt64.from(20e9);
  AccountUpdate.assertBetween(this.self.body.preconditions.account.balance, lower, upper);
  // ...
}
```

#### Returns

`void`

***

### assertEquals()

```ts
static assertEquals<T>(property: OrIgnore<T | ClosedInterval<T>>, value: T): void
```

Defined in: [lib/mina/v1/account-update.ts:813](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L813)

Fix a property to a certain value.

#### Type Parameters

• **T** *extends* `object`

#### Parameters

##### property

`OrIgnore`\<`T` \| `ClosedInterval`\<`T`\>\>

The property to constrain

##### value

`T`

The value it is fixed to

Example: To fix the account nonce of a SmartContract to 0, you can use

```ts
\@method onlyRunsWhenNonceIsZero() {
  AccountUpdate.assertEquals(this.self.body.preconditions.account.nonce, UInt32.zero);
  // ...
}
```

#### Returns

`void`

***

### attachToTransaction()

```ts
static attachToTransaction(accountUpdate: AccountUpdate): void
```

Defined in: [lib/mina/v1/account-update.ts:1038](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1038)

Attach account update to the current transaction
-- if in a smart contract, to its children

#### Parameters

##### accountUpdate

[`AccountUpdate`](AccountUpdate.md)

#### Returns

`void`

***

### clone()

```ts
static clone(accountUpdate: AccountUpdate): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:675](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L675)

Clones the [AccountUpdate](AccountUpdate.md).

#### Parameters

##### accountUpdate

[`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### create()

```ts
static create(publicKey: PublicKey, tokenId?: Field): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1005](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1005)

Creates an account update. If this is inside a transaction, the account
update becomes part of the transaction. If this is inside a smart contract
method, the account update will not only become part of the transaction,
but also becomes available for the smart contract to modify, in a way that
becomes part of the proof.

#### Parameters

##### publicKey

[`PublicKey`](PublicKey.md)

##### tokenId?

[`Field`](Field.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### createIf()

```ts
static createIf(
   condition: Bool, 
   publicKey: PublicKey, 
   tokenId?: Field): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1025](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1025)

Create an account update that is added to the transaction only if a condition is met.

See [AccountUpdate.create](AccountUpdate.md#create) for more information. In this method, you can pass in
a condition that determines whether the account update should be added to the transaction.

#### Parameters

##### condition

[`Bool`](Bool.md)

##### publicKey

[`PublicKey`](PublicKey.md)

##### tokenId?

[`Field`](Field.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### createSigned()

```ts
static createSigned(publicKey: PublicKey, tokenId?: Field): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1074](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1074)

Creates an account update, like [AccountUpdate.create](AccountUpdate.md#create), but also
makes sure this account update will be authorized with a signature.

If you use this and are not relying on a wallet to sign your transaction,
then you should use the following code before sending your transaction:

```ts
let tx = await Mina.transaction(...); // create transaction as usual, using `createSigned()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../variables/Permissions.md) determine which updates have to
be (can be) authorized by a signature.

#### Parameters

##### publicKey

[`PublicKey`](PublicKey.md)

##### tokenId?

[`Field`](Field.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### default()

```ts
static default(address: PublicKey, tokenId?: Field): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:971](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L971)

Create an account update from a public key and an optional token id.

**Important**: This method is different from `AccountUpdate.create()`, in that it really just creates the account update object.
It does not attach the update to the current transaction or smart contract.
Use this method for lower-level operations with account updates.

#### Parameters

##### address

[`PublicKey`](PublicKey.md)

##### tokenId?

[`Field`](Field.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### defaultFeePayer()

```ts
static defaultFeePayer(address: PublicKey, nonce: UInt32): FeePayerUnsigned
```

Defined in: [lib/mina/v1/account-update.ts:984](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L984)

#### Parameters

##### address

[`PublicKey`](PublicKey.md)

##### nonce

[`UInt32`](UInt32.md)

#### Returns

`FeePayerUnsigned`

***

### dummy()

```ts
static dummy(): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:975](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L975)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### dummyFeePayer()

```ts
static dummyFeePayer(): FeePayerUnsigned
```

Defined in: [lib/mina/v1/account-update.ts:993](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L993)

#### Returns

`FeePayerUnsigned`

***

### empty()

```ts
static empty(): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1112](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1112)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### fromFields()

```ts
static fromFields(fields: Field[], __namedParameters: any[]): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1116](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1116)

#### Parameters

##### fields

[`Field`](Field.md)[]

##### \_\_namedParameters

`any`[]

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### fromJSON()

```ts
static fromJSON(json: AccountUpdate): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:913](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L913)

#### Parameters

##### json

`AccountUpdate`

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### fromValue()

```ts
static fromValue(value: AccountUpdate | AccountUpdate | AccountUpdate): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1121](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1121)

#### Parameters

##### value

`AccountUpdate` | `AccountUpdate` | [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

***

### fundNewAccount()

```ts
static fundNewAccount(feePayer: PublicKey, numberOfAccounts: number): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:1092](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1092)

Use this method to pay the account creation fee for another account (or, multiple accounts using the optional second argument).

Beware that you _don't_ need to specify the account that is created!
Instead, the protocol will automatically identify that accounts need to be created,
and require that the net balance change of the transaction covers the account creation fee.

#### Parameters

##### feePayer

[`PublicKey`](PublicKey.md)

the address of the account that pays the fee

##### numberOfAccounts

`number` = `1`

the number of new accounts to fund (default: 1)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

they [AccountUpdate](AccountUpdate.md) for the account which pays the fee

***

### getNonce()

```ts
static getNonce(accountUpdate: AccountUpdate | FeePayerUnsigned): UInt32
```

Defined in: [lib/mina/v1/account-update.ts:866](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L866)

#### Parameters

##### accountUpdate

[`AccountUpdate`](AccountUpdate.md) | `FeePayerUnsigned`

#### Returns

[`UInt32`](UInt32.md)

***

### setValue()

```ts
static setValue<T>(maybeValue: SetOrKeep<T>, value: T): void
```

Defined in: [lib/mina/v1/account-update.ts:766](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L766)

#### Type Parameters

• **T**

#### Parameters

##### maybeValue

`SetOrKeep`\<`T`\>

##### value

`T`

#### Returns

`void`

***

### signFeePayerInPlace()

```ts
static signFeePayerInPlace(feePayer: FeePayerUnsigned): void
```

Defined in: [lib/mina/v1/account-update.ts:860](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L860)

#### Parameters

##### feePayer

`FeePayerUnsigned`

#### Returns

`void`

***

### toAuxiliary()

```ts
static toAuxiliary(a?: AccountUpdate): (
  | any[]
  | {
  id: number;
  label: string;
  lazyAuthorization: undefined | LazySignature | LazyProof | LazyNone;
 })[]
```

Defined in: [lib/mina/v1/account-update.ts:1104](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1104)

#### Parameters

##### a?

[`AccountUpdate`](AccountUpdate.md)

#### Returns

(
  \| `any`[]
  \| \{
  `id`: `number`;
  `label`: `string`;
  `lazyAuthorization`: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone`;
 \})[]

***

### toJSON()

```ts
static toJSON(a: AccountUpdate): AccountUpdate
```

Defined in: [lib/mina/v1/account-update.ts:910](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L910)

#### Parameters

##### a

[`AccountUpdate`](AccountUpdate.md)

#### Returns

`AccountUpdate`

***

### unlink()

```ts
static unlink(accountUpdate: AccountUpdate): void
```

Defined in: [lib/mina/v1/account-update.ts:1055](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1055)

Disattach an account update from where it's currently located in the transaction

#### Parameters

##### accountUpdate

[`AccountUpdate`](AccountUpdate.md)

#### Returns

`void`

***

### witness()

```ts
static witness<T>(
   resultType: FlexibleProvable<T>, 
   compute: () => Promise<{
  accountUpdate: AccountUpdate;
  result: T;
 }>, 
   __namedParameters: {
  skipCheck: boolean;
 }): Promise<{
  accountUpdate: AccountUpdate;
  result: T;
}>
```

Defined in: [lib/mina/v1/account-update.ts:1142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1142)

#### Type Parameters

• **T**

#### Parameters

##### resultType

[`FlexibleProvable`](../type-aliases/FlexibleProvable.md)\<`T`\>

##### compute

() => `Promise`\<\{
  `accountUpdate`: [`AccountUpdate`](AccountUpdate.md);
  `result`: `T`;
 \}\>

##### \_\_namedParameters

###### skipCheck

`boolean` = `false`

#### Returns

`Promise`\<\{
  `accountUpdate`: [`AccountUpdate`](AccountUpdate.md);
  `result`: `T`;
 \}\>
