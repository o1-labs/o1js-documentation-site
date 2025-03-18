Defined in: [snarky.d.ts:498](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/snarky.d.ts#L498)

Represents the Mina ledger.

## Constructors

### new Ledger()

```ts
new Ledger(): Ledger
```

#### Returns

[`Ledger`](Ledger.md)

## Methods

### addAccount()

```ts
addAccount(publicKey: MlPublicKey, balance: string): void
```

Defined in: [snarky.d.ts:507](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/snarky.d.ts#L507)

Adds an account and its balance to the ledger.

#### Parameters

##### publicKey

`MlPublicKey`

##### balance

`string`

#### Returns

`void`

***

### applyJsonTransaction()

```ts
applyJsonTransaction(
   txJson: string, 
   accountCreationFee: string, 
   networkState: string): void
```

Defined in: [snarky.d.ts:512](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/snarky.d.ts#L512)

Applies a JSON transaction to the ledger.

#### Parameters

##### txJson

`string`

##### accountCreationFee

`string`

##### networkState

`string`

#### Returns

`void`

***

### getAccount()

```ts
getAccount(publicKey: MlPublicKey, tokenId: FieldConst): undefined | Account
```

Defined in: [snarky.d.ts:521](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/snarky.d.ts#L521)

Returns an account.

#### Parameters

##### publicKey

`MlPublicKey`

##### tokenId

`FieldConst`

#### Returns

`undefined` \| `Account`

***

### create()

```ts
static create(): Ledger
```

Defined in: [snarky.d.ts:502](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/snarky.d.ts#L502)

Creates a fresh ledger.

#### Returns

[`Ledger`](Ledger.md)
