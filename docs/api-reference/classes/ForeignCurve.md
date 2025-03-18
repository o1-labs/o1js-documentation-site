Defined in: [lib/provable/crypto/foreign-curve.ts:30](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L30)

## Extended by

- [`ForeignCurveNotNeeded`](ForeignCurveNotNeeded.md)

## Constructors

### new ForeignCurve()

```ts
new ForeignCurve(g: {
  x: number | bigint | Field3 | AlmostForeignField;
  y: number | bigint | Field3 | AlmostForeignField;
 }): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:48](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L48)

Create a new [ForeignCurve](ForeignCurve.md) from an object representing the (affine) x and y coordinates.

Note: Inputs must be range checked if they originate from a different field with a different modulus or if they are not constants. Please refer to the [ForeignField](ForeignField.md) constructor comments for more details.

#### Parameters

##### g

###### x

`number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md)

###### y

`number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md)

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Example

```ts
let x = new ForeignCurve({ x: 1n, y: 1n });
```

**Important**: By design, there is no way for a `ForeignCurve` to represent the zero point.

**Warning**: This fails for a constant input which does not represent an actual point on the curve.

## Properties

### x

```ts
x: AlmostForeignField;
```

Defined in: [lib/provable/crypto/foreign-curve.ts:31](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L31)

***

### y

```ts
y: AlmostForeignField;
```

Defined in: [lib/provable/crypto/foreign-curve.ts:32](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L32)

***

### \_Bigint?

```ts
static optional _Bigint: {};
```

Defined in: [lib/provable/crypto/foreign-curve.ts:360](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L360)

***

### \_Field?

```ts
static optional _Field: typeof AlmostForeignField;
```

Defined in: [lib/provable/crypto/foreign-curve.ts:361](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L361)

***

### \_provable?

```ts
static optional _provable: ProvablePureExtended<ForeignCurve, {
  x: bigint;
  y: bigint;
 }, {
  x: string;
  y: string;
}>;
```

Defined in: [lib/provable/crypto/foreign-curve.ts:363](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L363)

***

### \_Scalar?

```ts
static optional _Scalar: typeof AlmostForeignField;
```

Defined in: [lib/provable/crypto/foreign-curve.ts:362](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L362)

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:357](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L357)

##### Returns

*typeof* [`ForeignCurve`](ForeignCurve.md)

***

### modulus

#### Get Signature

```ts
get modulus(): bigint
```

Defined in: [lib/provable/crypto/foreign-curve.ts:200](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L200)

The size of the curve's base field.

##### Returns

`bigint`

***

### Bigint

#### Get Signature

```ts
get static Bigint(): {}
```

Defined in: [lib/provable/crypto/foreign-curve.ts:372](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L372)

Curve arithmetic on JS bigints.

##### Returns

```ts
{}
```

***

### Field

#### Get Signature

```ts
get static Field(): typeof AlmostForeignField
```

Defined in: [lib/provable/crypto/foreign-curve.ts:379](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L379)

The base field of this curve as a [ForeignField](ForeignField.md).

##### Returns

*typeof* [`AlmostForeignField`](AlmostForeignField.md)

***

### generator

#### Get Signature

```ts
get static generator(): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:188](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L188)

The constant generator point.

##### Returns

[`ForeignCurve`](ForeignCurve.md)

***

### modulus

#### Get Signature

```ts
get static modulus(): bigint
```

Defined in: [lib/provable/crypto/foreign-curve.ts:194](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L194)

The size of the curve's base field.

##### Returns

`bigint`

***

### provable

#### Get Signature

```ts
get static provable(): ProvablePureExtended<ForeignCurve, {
  x: bigint;
  y: bigint;
 }, {
  x: string;
  y: string;
}>
```

Defined in: [lib/provable/crypto/foreign-curve.ts:393](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L393)

`Provable<ForeignCurve>`

##### Returns

`ProvablePureExtended`\<[`ForeignCurve`](ForeignCurve.md), \{
  `x`: `bigint`;
  `y`: `bigint`;
 \}, \{
  `x`: `string`;
  `y`: `string`;
 \}\>

***

### Scalar

#### Get Signature

```ts
get static Scalar(): typeof AlmostForeignField
```

Defined in: [lib/provable/crypto/foreign-curve.ts:386](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L386)

The scalar field of this curve as a [ForeignField](ForeignField.md).

##### Returns

*typeof* [`AlmostForeignField`](AlmostForeignField.md)

## Methods

### add()

```ts
add(h: 
  | ForeignCurve
  | FlexiblePoint): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:241](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L241)

Elliptic curve addition.

```ts
let r = p.add(q); // r = p + q
```

**Important**: this is _incomplete addition_ and does not handle the degenerate cases:
- Inputs are equal, `g = h` (where you would use [double](ForeignCurve.md#double)).
  In this case, the result of this method is garbage and can be manipulated arbitrarily by a malicious prover.
- Inputs are inverses of each other, `g = -h`, so that the result would be the zero point.
  In this case, the proof fails.

If you want guaranteed soundness regardless of the input, use [addSafe](ForeignCurve.md#addsafe) instead.

#### Parameters

##### h

[`ForeignCurve`](ForeignCurve.md) | [`FlexiblePoint`](../type-aliases/FlexiblePoint.md)

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Throws

if the inputs are inverses of each other.

***

### addSafe()

```ts
addSafe(h: 
  | ForeignCurve
  | FlexiblePoint): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:259](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L259)

Safe elliptic curve addition.

This is the same as [add](ForeignCurve.md#add), but additionally proves that the inputs are not equal.
Therefore, the method is guaranteed to either fail or return a valid addition result.

**Beware**: this is more expensive than [add](ForeignCurve.md#add), and is still incomplete in that
it does not succeed on equal or inverse inputs.

#### Parameters

##### h

[`ForeignCurve`](ForeignCurve.md) | [`FlexiblePoint`](../type-aliases/FlexiblePoint.md)

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Throws

if the inputs are equal or inverses of each other.

***

### assertInSubgroup()

```ts
assertInSubgroup(): void
```

Defined in: [lib/provable/crypto/foreign-curve.ts:339](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L339)

Assert that this point lies in the subgroup defined by `order*P = 0`.

Note: this is a no-op if the curve has cofactor equal to 1. Otherwise
it performs the full scalar multiplication `order*P` and is expensive.

#### Returns

`void`

***

### assertOnCurve()

```ts
assertOnCurve(): void
```

Defined in: [lib/provable/crypto/foreign-curve.ts:323](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L323)

Assert that this point lies on the elliptic curve, which means it satisfies the equation
`y^2 = x^3 + ax + b`

#### Returns

`void`

***

### double()

```ts
double(): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:278](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L278)

Elliptic curve doubling.

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Example

```ts
let r = p.double(); // r = 2 * p
```

***

### negate()

```ts
negate(): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:292](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L292)

Elliptic curve negation.

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Example

```ts
let r = p.negate(); // r = -p
```

***

### scale()

```ts
scale(scalar: number | bigint | AlmostForeignField): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:308](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L308)

Elliptic curve scalar multiplication, where the scalar is represented as a [ForeignField](ForeignField.md) element.

**Important**: this proves that the result of the scalar multiplication is not the zero point.

#### Parameters

##### scalar

`number` | `bigint` | [`AlmostForeignField`](AlmostForeignField.md)

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Throws

if the scalar multiplication results in the zero point; for example, if the scalar is zero.

#### Example

```ts
let r = p.scale(s); // r = s * p
```

***

### toBigint()

```ts
toBigint(): GroupAffine
```

Defined in: [lib/provable/crypto/foreign-curve.ts:217](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L217)

Convert this curve point to a point with bigint coordinates.

#### Returns

`GroupAffine`

***

### assertInSubgroup()

```ts
static assertInSubgroup(g: ForeignCurve): void
```

Defined in: [lib/provable/crypto/foreign-curve.ts:327](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L327)

#### Parameters

##### g

[`ForeignCurve`](ForeignCurve.md)

#### Returns

`void`

***

### assertOnCurve()

```ts
static assertOnCurve(g: ForeignCurve): void
```

Defined in: [lib/provable/crypto/foreign-curve.ts:315](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L315)

#### Parameters

##### g

[`ForeignCurve`](ForeignCurve.md)

#### Returns

`void`

***

### check()

```ts
static check(g: ForeignCurveNotNeeded): void
```

Defined in: [lib/provable/crypto/foreign-curve.ts:349](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L349)

Check that this is a valid element of the target subgroup of the curve:
- Check that the coordinates are valid field elements
- Use [()](ForeignCurve.md#assertoncurve-2) to check that the point lies on the curve
- If the curve has cofactor unequal to 1, use [()](ForeignCurve.md#assertinsubgroup-2).

#### Parameters

##### g

[`ForeignCurveNotNeeded`](ForeignCurveNotNeeded.md)

#### Returns

`void`

***

### from()

```ts
static from(g: 
  | ForeignCurve
  | FlexiblePoint): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:64](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L64)

Coerce the input to a [ForeignCurve](ForeignCurve.md).

#### Parameters

##### g

[`ForeignCurve`](ForeignCurve.md) | [`FlexiblePoint`](../type-aliases/FlexiblePoint.md)

#### Returns

[`ForeignCurve`](ForeignCurve.md)

***

### fromEthers()

```ts
static fromEthers(hex: string): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L142)

Create a new [ForeignCurve](ForeignCurve.md) instance from an Ethereum public key in hex format, which may be either compressed or uncompressed.
This method is designed to handle the parsing of public keys as used by the ethers.js library.

The input should represent the affine x and y coordinates of the point, in hexadecimal format.
Compressed keys are 33 bytes long and begin with 0x02 or 0x03, while uncompressed keys are 65 bytes long and begin with 0x04.

**Warning:** This method is specifically designed for use with the Secp256k1 curve. Using it with other curves may result in incorrect behavior or errors.
Ensure that the curve setup matches Secp256k1, as shown in the example, to avoid unintended issues.

#### Parameters

##### hex

`string`

The public key as a hexadecimal string (without the "0x" prefix).

#### Returns

[`ForeignCurve`](ForeignCurve.md)

A new instance of the curve representing the given public key.

#### Example

```ts
import { Wallet, Signature, getBytes } from 'ethers';

class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}

const wallet = Wallet.createRandom();

const publicKey = Secp256k1.fromEthers(wallet.publicKey.slice(2));
```

***

### fromHex()

```ts
static fromHex(hex: string): ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:91](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L91)

Parses a hexadecimal string representing an uncompressed elliptic curve point and coerces it into a [ForeignCurve](ForeignCurve.md) point.

The method extracts the x and y coordinates from the provided hex string and verifies that the resulting point lies on the curve.

**Note:** This method only supports uncompressed elliptic curve points, which are 65 bytes in total (1-byte prefix + 32 bytes for x + 32 bytes for y).

#### Parameters

##### hex

`string`

The hexadecimal string representing the uncompressed elliptic curve point.

#### Returns

[`ForeignCurve`](ForeignCurve.md)

- A point on the foreign curve, parsed from the given hexadecimal string.

#### Throws

- Throws an error if the input is not a valid public key.

#### Example

```ts
class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}

const publicKeyHex = '04f8b8db25c619d0c66b2dc9e97ecbafafae...'; // Example hex string for uncompressed point
const point = Secp256k1.fromHex(publicKeyHex);
```

**Important:** This method is only designed to handle uncompressed elliptic curve points in hex format.
