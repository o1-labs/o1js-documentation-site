```ts
Permissions: {
  allImpossible: () => Permissions;
  default: () => Permissions;
  dummy: () => Permissions;
  fromJSON: (permissions: {}) => Permissions;
  fromString: (permission: AuthRequired) => AuthRequired;
  impossible: () => AuthRequired;
  initial: () => Permissions;
  none: () => AuthRequired;
  proof: () => AuthRequired;
  proofOrSignature: () => AuthRequired;
  signature: () => AuthRequired;
  VerificationKey: {
     impossibleDuringCurrentVersion: () => VerificationKeyPermission;
     none: () => VerificationKeyPermission;
     proofDuringCurrentVersion: () => VerificationKeyPermission;
     proofOrSignature: () => VerificationKeyPermission;
     signature: () => VerificationKeyPermission;
    };
};
```

Defined in: [lib/mina/v1/account-update.ts:291](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L291)

## Type declaration

### allImpossible()

```ts
allImpossible: () => Permissions;
```

#### Returns

[`Permissions`](../interfaces/Permissions.md)

### default()

```ts
default: () => Permissions;
```

Default permissions are:

  [Permissions.editState](../interfaces/Permissions.md#editstate) = [Permission.proof](Permissions.md#proof)

  [Permissions.send](../interfaces/Permissions.md#send) = [Permission.signature](Permissions.md#signature)

  [Permissions.receive](../interfaces/Permissions.md#receive) = [Permission.none](Permissions.md#none)

  [Permissions.setDelegate](../interfaces/Permissions.md#setdelegate) = [Permission.signature](Permissions.md#signature)

  [Permissions.setPermissions](../interfaces/Permissions.md#setpermissions) = [Permission.signature](Permissions.md#signature)

  [Permissions.setVerificationKey](../interfaces/Permissions.md#setverificationkey) = [Permission.signature](Permissions.md#signature)

  [Permissions.setZkappUri](../interfaces/Permissions.md#setzkappuri) = [Permission.signature](Permissions.md#signature)

  [Permissions.editActionState](../interfaces/Permissions.md#editactionstate) = [Permission.proof](Permissions.md#proof)

  [Permissions.setTokenSymbol](../interfaces/Permissions.md#settokensymbol) = [Permission.signature](Permissions.md#signature)

#### Returns

[`Permissions`](../interfaces/Permissions.md)

### dummy()

```ts
dummy: () => Permissions;
```

#### Returns

[`Permissions`](../interfaces/Permissions.md)

### fromJSON()

```ts
fromJSON: (permissions: {}) => Permissions;
```

#### Parameters

##### permissions

#### Returns

[`Permissions`](../interfaces/Permissions.md)

### fromString()

```ts
fromString: (permission: AuthRequired) => AuthRequired;
```

#### Parameters

##### permission

`AuthRequired`

#### Returns

`AuthRequired`

### impossible()

```ts
impossible: () => AuthRequired;
```

Modification is impossible.

#### Returns

`AuthRequired`

### initial()

```ts
initial: () => Permissions;
```

#### Returns

[`Permissions`](../interfaces/Permissions.md)

### none()

```ts
none: () => AuthRequired;
```

Modification is always permitted

#### Returns

`AuthRequired`

### proof()

```ts
proof: () => AuthRequired;
```

Modification is permitted by zkapp proofs only

#### Returns

`AuthRequired`

### proofOrSignature()

```ts
proofOrSignature: () => AuthRequired;
```

Modification is permitted by zkapp proofs or signatures

#### Returns

`AuthRequired`

### signature()

```ts
signature: () => AuthRequired;
```

Modification is permitted by signatures only, using the private key of the zkapp account

#### Returns

`AuthRequired`

### VerificationKey

```ts
VerificationKey: {
  impossibleDuringCurrentVersion: () => VerificationKeyPermission;
  none: () => VerificationKeyPermission;
  proofDuringCurrentVersion: () => VerificationKeyPermission;
  proofOrSignature: () => VerificationKeyPermission;
  signature: () => VerificationKeyPermission;
};
```

Special Verification key permissions.

The difference to normal permissions is that `Permission.proof` and `Permission.impossible` are replaced by less restrictive permissions:
- `impossible` is replaced by `impossibleDuringCurrentVersion`
- `proof` is replaced by `proofDuringCurrentVersion`

The issue is that a future hardfork which changes the proof system could mean that old verification keys can no longer
be used to verify proofs in the new proof system, and the zkApp would have to be redeployed to adapt the verification key.

Having either `impossible` or `proof` would mean that these zkApps can't be upgraded after this hypothetical hardfork, and would become unusable.

Such a future hardfork would manifest as an increment in the "transaction version" of zkApps, which you can check with [()](TransactionVersion.md#current).

The `impossibleDuringCurrentVersion` and `proofDuringCurrentVersion` have an additional `txnVersion` field.
These permissions follow the same semantics of not upgradable, or only upgradable with proofs,
_as long as_ the current transaction version is the same as the one on the permission.

Once the current transaction version is higher than the one on the permission, the permission is treated as `signature`,
and the zkApp can be redeployed with a signature of the original account owner.

#### VerificationKey.impossibleDuringCurrentVersion()

```ts
impossibleDuringCurrentVersion: () => VerificationKeyPermission;
```

Modification is impossible, as long as the network accepts the current [TransactionVersion](TransactionVersion.md).

After a hardfork that increments the transaction version, the permission is treated as `signature`.

##### Returns

`VerificationKeyPermission`

#### VerificationKey.none()

```ts
none: () => VerificationKeyPermission;
```

Modification is always permitted

##### Returns

`VerificationKeyPermission`

#### VerificationKey.proofDuringCurrentVersion()

```ts
proofDuringCurrentVersion: () => VerificationKeyPermission;
```

Modification is permitted by zkapp proofs only; as long as the network accepts the current [TransactionVersion](TransactionVersion.md).

After a hardfork that increments the transaction version, the permission is treated as `signature`.

##### Returns

`VerificationKeyPermission`

#### VerificationKey.proofOrSignature()

```ts
proofOrSignature: () => VerificationKeyPermission;
```

Modification is permitted by zkapp proofs or signatures

##### Returns

`VerificationKeyPermission`

#### VerificationKey.signature()

```ts
signature: () => VerificationKeyPermission;
```

Modification is permitted by signatures only, using the private key of the zkapp account

##### Returns

`VerificationKeyPermission`
