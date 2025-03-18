Defined in: [lib/provable/crypto/foreign-ecdsa.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L25)

## Constructors

### new EcdsaSignature()

```ts
new EcdsaSignature(signature: {
  r: number | bigint | Field3 | AlmostForeignField;
  s: number | bigint | Field3 | AlmostForeignField;
 }): EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:34](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L34)

Create a new [EcdsaSignature](EcdsaSignature.md) from an object containing the scalars r and s.

Note: Inputs must be range checked if they originate from a different field with a different modulus or if they are not constants. Please refer to the [ForeignField](ForeignField.md) constructor comments for more details.

#### Parameters

##### signature

###### r

`number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md)

###### s

`number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md)

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

## Properties

### r

```ts
r: AlmostForeignField;
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:26](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L26)

***

### s

```ts
s: AlmostForeignField;
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:27](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L27)

***

### \_Curve?

```ts
static optional _Curve: typeof ForeignCurve;
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:215](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L215)

***

### \_provable?

```ts
static optional _provable: ProvablePureExtended<EcdsaSignature, {
  r: bigint;
  s: bigint;
 }, {
  r: string;
  s: string;
}>;
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:216](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L216)

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:212](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L212)

##### Returns

*typeof* [`EcdsaSignature`](EcdsaSignature.md)

***

### Curve

#### Get Signature

```ts
get static Curve(): typeof ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:225](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L225)

The [ForeignCurve](ForeignCurve.md) on which the ECDSA signature is defined.

##### Returns

*typeof* [`ForeignCurve`](ForeignCurve.md)

***

### provable

#### Get Signature

```ts
get static provable(): ProvablePureExtended<EcdsaSignature, {
  r: bigint;
  s: bigint;
 }, {
  r: string;
  s: string;
}>
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:232](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L232)

`Provable<EcdsaSignature>`

##### Returns

`ProvablePureExtended`\<[`EcdsaSignature`](EcdsaSignature.md), \{
  `r`: `bigint`;
  `s`: `bigint`;
 \}, \{
  `r`: `string`;
  `s`: `string`;
 \}\>

## Methods

### toBigInt()

```ts
toBigInt(): {
  r: bigint;
  s: bigint;
}
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:62](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L62)

Convert this signature to an object with bigint fields.

#### Returns

```ts
{
  r: bigint;
  s: bigint;
}
```

##### r

```ts
r: bigint;
```

##### s

```ts
s: bigint;
```

***

### verify()

```ts
verify(message: Bytes, publicKey: FlexiblePoint): Bool
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:100](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L100)

Verify the ECDSA signature given the message (an array of bytes) and public key (a [Curve](EcdsaSignature.md#curve) point).

**Important:** This method returns a [Bool](Bool.md) which indicates whether the signature is valid.
So, to actually prove validity of a signature, you need to assert that the result is true.

#### Parameters

##### message

`Bytes`

##### publicKey

[`FlexiblePoint`](../type-aliases/FlexiblePoint.md)

#### Returns

[`Bool`](Bool.md)

#### Throws

if one of the signature scalars is zero or if the public key is not on the curve.

#### Example

```ts
// create classes for your curve
class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}
class Scalar extends Secp256k1.Scalar {}
class Ecdsa extends createEcdsa(Secp256k1) {}

let message = 'my message';
let messageBytes = new TextEncoder().encode(message);

// outside provable code: create inputs
let privateKey = Scalar.random();
let publicKey = Secp256k1.generator.scale(privateKey);
let signature = Ecdsa.sign(messageBytes, privateKey.toBigInt());

// ...
// in provable code: create input witnesses (or use method inputs, or constants)
let pk = Provable.witness(Secp256k1, () => publicKey);
let msg = Provable.witness(Provable.Array(Field, 9), () => messageBytes.map(Field));
let sig = Provable.witness(Ecdsa, () => signature);

// verify signature
let isValid = sig.verify(msg, pk);
isValid.assertTrue('signature verifies');
```

***

### verifyEthers()

```ts
verifyEthers(message: Bytes, publicKey: FlexiblePoint): Bool
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:145](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L145)

Verify an ECDSA signature generated by the ethers.js library, given the message (as a byte array) and a public key (a [Curve](EcdsaSignature.md#curve) point).
The message digest used for signing follows the format defined in EIP-191, with the Ethereum-specific prefix.

**Important:** This method returns a [Bool](Bool.md) which indicates whether the signature is valid.
So, to actually prove validity of a signature, you need to assert that the result is true.

**Note:** This method is specifically designed to verify signatures generated by ethers.js.
Ensure that the curve being used is Secp256k1, as demonstrated in the example.

#### Parameters

##### message

`Bytes`

The original message as a byte array.

##### publicKey

[`FlexiblePoint`](../type-aliases/FlexiblePoint.md)

The public key as a point on the Secp256k1 elliptic curve.

#### Returns

[`Bool`](Bool.md)

- A [Bool](Bool.md) indicating the validity of the signature.

#### Throws

An error will be thrown if one of the signature scalars is zero or if the public key does not lie on the curve.

#### Example

```ts
import { Wallet } from 'ethers';

// create the class for Secp256k1 curve
class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}
class Ecdsa extends createEcdsa(Secp256k1) {}

// outside provable code: create inputs
let message = 'my message';
let signatureRaw = await wallet.signMessage(message);
let compressedPublicKey = wallet.signingKey.compressedPublicKey;

// this also works for uncompressed public keys (wallet.signingKey.publicKey)
let publicKey = Secp256k1.fromEthers(compressedPublicKey.slice(2));
let signature = Ecdsa.fromHex(signatureRaw);

// ...
// in provable code: create input witnesses (or use method inputs, or constants)
// and verify the signature
let isValid = signature.verifyEthers(Bytes.fromString(message), publicKey);
isValid.assertTrue('signature verifies');
```

***

### verifySignedHash()

```ts
verifySignedHash(msgHash: bigint | Bytes | AlmostForeignField, publicKey: FlexiblePoint): Bool
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:162](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L162)

Verify the ECDSA signature given the message hash (a [Scalar](Scalar.md)) and public key (a [Curve](EcdsaSignature.md#curve) point).

This is a building block of [EcdsaSignature.verify](EcdsaSignature.md#verify), where the input message is also hashed.
In contrast, this method just takes the message hash (a curve scalar, or the output bytes of a hash function)
as input, giving you flexibility in choosing the hashing algorithm.

#### Parameters

##### msgHash

`bigint` | `Bytes` | [`AlmostForeignField`](AlmostForeignField.md)

##### publicKey

[`FlexiblePoint`](../type-aliases/FlexiblePoint.md)

#### Returns

[`Bool`](Bool.md)

***

### check()

```ts
static check(signature: EcdsaSignature): void
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:204](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L204)

#### Parameters

##### signature

[`EcdsaSignature`](EcdsaSignature.md)

#### Returns

`void`

***

### from()

```ts
static from(signature: FlexibleSignature): EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:45](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L45)

Coerce the input to a [EcdsaSignature](EcdsaSignature.md).

#### Parameters

##### signature

`FlexibleSignature`

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

***

### fromHex()

```ts
static fromHex(rawSignature: string): EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:54](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L54)

Create an [EcdsaSignature](EcdsaSignature.md) from a raw 130-char hex string as used in
[Ethereum transactions](https://ethereum.org/en/developers/docs/transactions/#typed-transaction-envelope).

#### Parameters

##### rawSignature

`string`

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

***

### sign()

```ts
static sign(message: Uint8Array | (number | bigint)[], privateKey: bigint): EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:181](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L181)

Create an [EcdsaSignature](EcdsaSignature.md) by signing a message with a private key.

Note: This method is not provable, and only takes JS bigints as input.

#### Parameters

##### message

`Uint8Array` | (`number` \| `bigint`)[]

##### privateKey

`bigint`

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

***

### signHash()

```ts
static signHash(msgHash: bigint | Bytes, privateKey: bigint): EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:196](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L196)

Create an [EcdsaSignature](EcdsaSignature.md) by signing a message hash with a private key.

This is a building block of [EcdsaSignature.sign](EcdsaSignature.md#sign), where the input message is also hashed.
In contrast, this method just takes the message hash (a curve scalar, or the output bytes of a hash function)
as input, giving you flexibility in choosing the hashing algorithm.

Note: This method is not provable, and only takes JS bigints or constant Bytes as input.

#### Parameters

##### msgHash

`bigint` | `Bytes`

##### privateKey

`bigint`

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)
