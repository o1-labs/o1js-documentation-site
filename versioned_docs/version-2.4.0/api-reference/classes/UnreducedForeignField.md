Defined in: [lib/provable/foreign-field.ts:454](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L454)

## Extends

- [`ForeignField`](ForeignField.md)

## Extended by

- [`ScalarField`](ScalarField.md)

## Constructors

### new UnreducedForeignField()

```ts
new UnreducedForeignField(x: string | number | bigint | Field3 | ForeignField): UnreducedForeignField
```

Defined in: [lib/provable/foreign-field.ts:91](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L91)

Create a new [ForeignField](ForeignField.md) from a bigint, number, string or another ForeignField.

#### Parameters

##### x

`string` | `number` | `bigint` | `Field3` | [`ForeignField`](ForeignField.md)

#### Returns

[`UnreducedForeignField`](UnreducedForeignField.md)

#### Example

```ts
let x = new ForeignField(5);
```

Note: Inputs must be range checked if they originate from a different field with a different modulus or if they are not constants.

- When constructing from another [ForeignField](ForeignField.md) instance, ensure the modulus matches. If not, check the modulus using `Gadgets.ForeignField.assertLessThan()` and handle appropriately.
- When constructing from a `Field3` array, ensure all elements are valid Field elements and range checked.
- Ensure constants are correctly reduced to the modulus of the field.

#### Inherited from

[`ForeignField`](ForeignField.md).[`constructor`](ForeignField.md#constructors)

## Properties

### type

```ts
type: "Unreduced" | "AlmostReduced" | "FullyReduced" = 'Unreduced';
```

Defined in: [lib/provable/foreign-field.ts:455](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L455)

***

### value

```ts
value: Field3;
```

Defined in: [lib/provable/foreign-field.ts:39](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L39)

The internal representation of a foreign field element, as a tuple of 3 limbs.

#### Inherited from

[`ForeignField`](ForeignField.md).[`value`](ForeignField.md#value)

***

### \_Bigint

```ts
static _Bigint: undefined | {} = undefined;
```

Defined in: [lib/provable/foreign-field.ts:17](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L17)

#### Inherited from

[`ForeignField`](ForeignField.md).[`_Bigint`](ForeignField.md#_bigint)

***

### \_modulus

```ts
static _modulus: undefined | bigint = undefined;
```

Defined in: [lib/provable/foreign-field.ts:18](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L18)

#### Inherited from

[`ForeignField`](ForeignField.md).[`_modulus`](ForeignField.md#_modulus)

***

### \_provable

```ts
static _provable: 
  | undefined
  | ProvablePureExtended<UnreducedForeignField, bigint, string> = undefined;
```

Defined in: [lib/provable/foreign-field.ts:457](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L457)

#### Overrides

[`ForeignField`](ForeignField.md).[`_provable`](ForeignField.md#_provable)

***

### \_variants

```ts
static _variants: 
  | undefined
  | {
  almostReduced: typeof AlmostForeignField;
  canonical: typeof CanonicalForeignField;
  unreduced: typeof UnreducedForeignField;
 } = undefined;
```

Defined in: [lib/provable/foreign-field.ts:48](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L48)

Sibling classes that represent different ranges of field elements.

#### Inherited from

[`ForeignField`](ForeignField.md).[`_variants`](ForeignField.md#_variants)

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof ForeignField
```

Defined in: [lib/provable/foreign-field.ts:41](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L41)

##### Returns

*typeof* [`ForeignField`](ForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`Constructor`](ForeignField.md#constructor)

***

### modulus

#### Get Signature

```ts
get modulus(): bigint
```

Defined in: [lib/provable/foreign-field.ts:29](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L29)

##### Returns

`bigint`

#### Inherited from

[`ForeignField`](ForeignField.md).[`modulus`](ForeignField.md#modulus)

***

### AlmostReduced

#### Get Signature

```ts
get static AlmostReduced(): typeof AlmostForeignField
```

Defined in: [lib/provable/foreign-field.ts:66](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L66)

Constructor for field elements that are "almost reduced", i.e. lie in the range [0, 2^ceil(log2(p))).

##### Returns

*typeof* [`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`AlmostReduced`](ForeignField.md#almostreduced)

***

### Bigint

#### Get Signature

```ts
get static Bigint(): {}
```

Defined in: [lib/provable/foreign-field.ts:21](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L21)

##### Returns

```ts
{}
```

#### Inherited from

[`ForeignField`](ForeignField.md).[`Bigint`](ForeignField.md#bigint)

***

### Canonical

#### Get Signature

```ts
get static Canonical(): typeof CanonicalForeignField
```

Defined in: [lib/provable/foreign-field.ts:73](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L73)

Constructor for field elements that are fully reduced, i.e. lie in the range [0, p).

##### Returns

*typeof* [`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`Canonical`](ForeignField.md#canonical)

***

### modulus

#### Get Signature

```ts
get static modulus(): bigint
```

Defined in: [lib/provable/foreign-field.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L25)

##### Returns

`bigint`

#### Inherited from

[`ForeignField`](ForeignField.md).[`modulus`](ForeignField.md#modulus-2)

***

### provable

#### Get Signature

```ts
get static provable(): ProvablePureExtended<UnreducedForeignField, bigint, string>
```

Defined in: [lib/provable/foreign-field.ts:459](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L459)

`Provable<ForeignField>`, see [Provable](../variables/Provable.md)

##### Returns

`ProvablePureExtended`\<[`UnreducedForeignField`](UnreducedForeignField.md), `bigint`, `string`\>

#### Overrides

[`ForeignField`](ForeignField.md).[`provable`](ForeignField.md#provable)

***

### sizeInBits

#### Get Signature

```ts
get static sizeInBits(): number
```

Defined in: [lib/provable/foreign-field.ts:32](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L32)

##### Returns

`number`

#### Inherited from

[`ForeignField`](ForeignField.md).[`sizeInBits`](ForeignField.md#sizeinbits)

***

### Unreduced

#### Get Signature

```ts
get static Unreduced(): typeof UnreducedForeignField
```

Defined in: [lib/provable/foreign-field.ts:59](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L59)

Constructor for unreduced field elements.

##### Returns

*typeof* [`UnreducedForeignField`](UnreducedForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`Unreduced`](ForeignField.md#unreduced)

## Methods

### add()

```ts
add(y: number | bigint | ForeignField): UnreducedForeignField
```

Defined in: [lib/provable/foreign-field.ts:210](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L210)

Finite field addition

#### Parameters

##### y

`number` | `bigint` | [`ForeignField`](ForeignField.md)

#### Returns

[`UnreducedForeignField`](UnreducedForeignField.md)

#### Example

```ts
x.add(2); // x + 2 mod p
```

#### Inherited from

[`ForeignField`](ForeignField.md).[`add`](ForeignField.md#add)

***

### assertAlmostReduced()

```ts
assertAlmostReduced(): AlmostForeignField
```

Defined in: [lib/provable/foreign-field.ts:165](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L165)

Assert that this field element lies in the range [0, 2^k),
where k = ceil(log2(p)) and p is the foreign field modulus.

Returns the field element as a [AlmostForeignField](AlmostForeignField.md).

For a more efficient version of this for multiple field elements, see [assertAlmostReduced](ForeignField.md#assertalmostreduced-2).

Note: this does not ensure that the field elements is in the canonical range [0, p).
To assert that stronger property, there is [assertCanonical](ForeignField.md#assertcanonical).
You should typically use [assertAlmostReduced](ForeignField.md#assertalmostreduced-2) though, because it is cheaper to prove and sufficient for
ensuring validity of all our non-native field arithmetic methods.

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`assertAlmostReduced`](ForeignField.md#assertalmostreduced)

***

### assertCanonical()

```ts
assertCanonical(): CanonicalForeignField
```

Defined in: [lib/provable/foreign-field.ts:196](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L196)

Assert that this field element is fully reduced,
i.e. lies in the range [0, p), where p is the foreign field modulus.

Returns the field element as a [CanonicalForeignField](CanonicalForeignField.md).

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`assertCanonical`](ForeignField.md#assertcanonical)

***

### assertEquals()

#### Call Signature

```ts
assertEquals(y: number | bigint | CanonicalForeignField, message?: string): CanonicalForeignField
```

Defined in: [lib/provable/foreign-field.ts:288](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L288)

Assert equality with a ForeignField-like value

##### Parameters

###### y

`number` | `bigint` | [`CanonicalForeignField`](CanonicalForeignField.md)

###### message?

`string`

##### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

##### Examples

```ts
x.assertEquals(0, "x is zero");
```

Since asserting equality can also serve as a range check,
this method returns `x` with the appropriate type:

```ts
let xChecked = x.assertEquals(1, "x is 1");
xChecked satisfies CanonicalForeignField;
```

##### Inherited from

[`ForeignField`](ForeignField.md).[`assertEquals`](ForeignField.md#assertequals)

#### Call Signature

```ts
assertEquals(y: AlmostForeignField, message?: string): AlmostForeignField
```

Defined in: [lib/provable/foreign-field.ts:289](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L289)

Assert equality with a ForeignField-like value

##### Parameters

###### y

[`AlmostForeignField`](AlmostForeignField.md)

###### message?

`string`

##### Returns

[`AlmostForeignField`](AlmostForeignField.md)

##### Examples

```ts
x.assertEquals(0, "x is zero");
```

Since asserting equality can also serve as a range check,
this method returns `x` with the appropriate type:

```ts
let xChecked = x.assertEquals(1, "x is 1");
xChecked satisfies CanonicalForeignField;
```

##### Inherited from

[`ForeignField`](ForeignField.md).[`assertEquals`](ForeignField.md#assertequals)

#### Call Signature

```ts
assertEquals(y: ForeignField, message?: string): ForeignField
```

Defined in: [lib/provable/foreign-field.ts:290](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L290)

Assert equality with a ForeignField-like value

##### Parameters

###### y

[`ForeignField`](ForeignField.md)

###### message?

`string`

##### Returns

[`ForeignField`](ForeignField.md)

##### Examples

```ts
x.assertEquals(0, "x is zero");
```

Since asserting equality can also serve as a range check,
this method returns `x` with the appropriate type:

```ts
let xChecked = x.assertEquals(1, "x is 1");
xChecked satisfies CanonicalForeignField;
```

##### Inherited from

[`ForeignField`](ForeignField.md).[`assertEquals`](ForeignField.md#assertequals)

***

### assertLessThan()

```ts
assertLessThan(c: number | bigint, message?: string): void
```

Defined in: [lib/provable/foreign-field.ts:325](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L325)

Assert that this field element is less than a constant c: `x < c`.

The constant must satisfy `0 <= c < 2^264`, otherwise an error is thrown.

#### Parameters

##### c

`number` | `bigint`

##### message?

`string`

#### Returns

`void`

#### Example

```ts
x.assertLessThan(10);
```

#### Inherited from

[`ForeignField`](ForeignField.md).[`assertLessThan`](ForeignField.md#assertlessthan)

***

### neg()

```ts
neg(): AlmostForeignField
```

Defined in: [lib/provable/foreign-field.ts:221](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L221)

Finite field negation

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Example

```ts
x.neg(); // -x mod p = p - x
```

#### Inherited from

[`ForeignField`](ForeignField.md).[`neg`](ForeignField.md#neg)

***

### sub()

```ts
sub(y: number | bigint | ForeignField): UnreducedForeignField
```

Defined in: [lib/provable/foreign-field.ts:236](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L236)

Finite field subtraction

#### Parameters

##### y

`number` | `bigint` | [`ForeignField`](ForeignField.md)

#### Returns

[`UnreducedForeignField`](UnreducedForeignField.md)

#### Example

```ts
x.sub(1); // x - 1 mod p
```

#### Inherited from

[`ForeignField`](ForeignField.md).[`sub`](ForeignField.md#sub)

***

### toBigInt()

```ts
toBigInt(): bigint
```

Defined in: [lib/provable/foreign-field.ts:148](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L148)

Convert this field element to a bigint.

#### Returns

`bigint`

#### Inherited from

[`ForeignField`](ForeignField.md).[`toBigInt`](ForeignField.md#tobigint)

***

### toBits()

```ts
toBits(length?: number): Bool[]
```

Defined in: [lib/provable/foreign-field.ts:344](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L344)

Unpack a field element to its bits, as a [Bool](Bool.md)[] array.

This method is provable!

#### Parameters

##### length?

`number`

#### Returns

[`Bool`](Bool.md)[]

#### Inherited from

[`ForeignField`](ForeignField.md).[`toBits`](ForeignField.md#tobits)

***

### toFields()

```ts
toFields(): Field[]
```

Defined in: [lib/provable/foreign-field.ts:392](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L392)

Instance version of `Provable<ForeignField>.toFields`, see [Provable.toFields](../type-aliases/Provable.md#tofields)

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[`ForeignField`](ForeignField.md).[`toFields`](ForeignField.md#tofields)

***

### assertAlmostReduced()

```ts
static assertAlmostReduced<T>(...xs: T): [...{ [i in string | number | symbol]: AlmostForeignField }[]]
```

Defined in: [lib/provable/foreign-field.ts:179](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L179)

Assert that one or more field elements lie in the range [0, 2^k),
where k = ceil(log2(p)) and p is the foreign field modulus.

This is most efficient than when checking a multiple of 3 field elements at once.

#### Type Parameters

• **T** *extends* `Tuple`\<[`ForeignField`](ForeignField.md)\>

#### Parameters

##### xs

...`T`

#### Returns

\[...\{ \[i in string \| number \| symbol\]: AlmostForeignField \}\[\]\]

#### Inherited from

[`ForeignField`](ForeignField.md).[`assertAlmostReduced`](ForeignField.md#assertalmostreduced-2)

***

### check()

```ts
static check(x: ForeignField): void
```

Defined in: [lib/provable/foreign-field.ts:464](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L464)

#### Parameters

##### x

[`ForeignField`](ForeignField.md)

#### Returns

`void`

#### Overrides

[`ForeignField`](ForeignField.md).[`check`](ForeignField.md#check)

***

### from()

#### Call Signature

```ts
static from(x: string | number | bigint): CanonicalForeignField
```

Defined in: [lib/provable/foreign-field.ts:114](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L114)

Coerce the input to a [ForeignField](ForeignField.md).

##### Parameters

###### x

`string` | `number` | `bigint`

##### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

##### Inherited from

[`ForeignField`](ForeignField.md).[`from`](ForeignField.md#from)

#### Call Signature

```ts
static from(x: string | number | bigint | ForeignField): ForeignField
```

Defined in: [lib/provable/foreign-field.ts:115](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L115)

Coerce the input to a [ForeignField](ForeignField.md).

##### Parameters

###### x

`string` | `number` | `bigint` | [`ForeignField`](ForeignField.md)

##### Returns

[`ForeignField`](ForeignField.md)

##### Inherited from

[`ForeignField`](ForeignField.md).[`from`](ForeignField.md#from)

***

### fromBits()

```ts
static fromBits(bits: Bool[]): AlmostForeignField
```

Defined in: [lib/provable/foreign-field.ts:374](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L374)

Create a field element from its bits, as a `Bool[]` array.

This method is provable!

#### Parameters

##### bits

[`Bool`](Bool.md)[]

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`fromBits`](ForeignField.md#frombits)

***

### random()

```ts
static random(): CanonicalForeignField
```

Defined in: [lib/provable/foreign-field.ts:385](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L385)

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

[`ForeignField`](ForeignField.md).[`random`](ForeignField.md#random)

***

### sum()

```ts
static sum(xs: (number | bigint | ForeignField)[], operations: (-1 | 1)[]): UnreducedForeignField
```

Defined in: [lib/provable/foreign-field.ts:261](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L261)

Sum (or difference) of multiple finite field elements.

#### Parameters

##### xs

(`number` \| `bigint` \| [`ForeignField`](ForeignField.md))[]

##### operations

(`-1` \| `1`)[]

#### Returns

[`UnreducedForeignField`](UnreducedForeignField.md)

#### Example

```ts
let z = ForeignField.sum([3, 2, 1], [-1, 1]); // 3 - 2 + 1
z.assertEquals(2);
```

This method expects a list of ForeignField-like values, `x0,...,xn`,
and a list of "operations" `op1,...,opn` where every op is 1 or -1 (plus or minus),
and returns

`x0 + op1*x1 + ... + opn*xn`

where the sum is computed in finite field arithmetic.

**Important:** For more than two summands, this is significantly more efficient
than chaining calls to [ForeignField.add](ForeignField.md#add) and [ForeignField.sub](ForeignField.md#sub).

#### Inherited from

[`ForeignField`](ForeignField.md).[`sum`](ForeignField.md#sum)
