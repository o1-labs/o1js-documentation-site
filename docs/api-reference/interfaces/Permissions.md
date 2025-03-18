Defined in: [lib/mina/v1/account-update.ts:291](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L291)

Permissions specify how specific aspects of the zkapp account are allowed
to be modified. All fields are denominated by a Permission.

## Extends

- `Permissions_`

## Properties

### access

```ts
access: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:361](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L361)

Permission to control the ability to include _any_ account update for this
account in a transaction. Note that this is more restrictive than all other
permissions combined. For normal accounts it can safely be set to `none`,
but for token contracts this has to be more restrictive, to prevent
unauthorized token interactions -- for example, it could be
`proofOrSignature`.

#### Overrides

```ts
Permissions_.access
```

***

### editActionState

```ts
editActionState: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:340](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L340)

The Permission corresponding to the ability to emit actions to the account.

#### Overrides

```ts
Permissions_.editActionState
```

***

### editState

```ts
editState: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:296](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L296)

The Permission corresponding to the 8 state fields associated with
an account.

#### Overrides

```ts
Permissions_.editState
```

***

### incrementNonce

```ts
incrementNonce: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:349](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L349)

#### Overrides

```ts
Permissions_.incrementNonce
```

***

### receive

```ts
receive: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:308](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L308)

The Permission corresponding to the ability to receive transactions
to this account.

#### Overrides

```ts
Permissions_.receive
```

***

### send

```ts
send: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:302](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L302)

The Permission corresponding to the ability to send transactions
from this account.

#### Overrides

```ts
Permissions_.send
```

***

### setDelegate

```ts
setDelegate: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:314](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L314)

The Permission corresponding to the ability to set the delegate
field of the account.

#### Overrides

```ts
Permissions_.setDelegate
```

***

### setPermissions

```ts
setPermissions: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:320](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L320)

The Permission corresponding to the ability to set the permissions
field of the account.

#### Overrides

```ts
Permissions_.setPermissions
```

***

### setTiming

```ts
setTiming: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:351](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L351)

#### Overrides

```ts
Permissions_.setTiming
```

***

### setTokenSymbol

```ts
setTokenSymbol: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:346](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L346)

The Permission corresponding to the ability to set the token symbol
for this account.

#### Overrides

```ts
Permissions_.setTokenSymbol
```

***

### setVerificationKey

```ts
setVerificationKey: VerificationKeyPermission;
```

Defined in: [lib/mina/v1/account-update.ts:327](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L327)

The Permission corresponding to the ability to set the verification
key associated with the circuit tied to this account. Effectively
"upgradeability" of the smart contract.

#### Overrides

```ts
Permissions_.setVerificationKey
```

***

### setVotingFor

```ts
setVotingFor: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:350](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L350)

#### Overrides

```ts
Permissions_.setVotingFor
```

***

### setZkappUri

```ts
setZkappUri: AuthRequired;
```

Defined in: [lib/mina/v1/account-update.ts:335](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L335)

The Permission corresponding to the ability to set the zkapp uri
typically pointing to the source code of the smart contract. Usually this
should be changed whenever the [Permissions.setVerificationKey](Permissions.md#setverificationkey) is
changed. Effectively "upgradeability" of the smart contract.

#### Overrides

```ts
Permissions_.setZkappUri
```
