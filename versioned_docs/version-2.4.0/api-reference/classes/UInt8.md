Defined in: [lib/provable/int.ts:1424](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1424)

A 8 bit unsigned integer with values ranging from 0 to 255.

## Extends

- \{
  `value`: [`Field`](Field.md);
 \}

## Constructors

### new UInt8()

```ts
new UInt8(x: number | bigint | FieldVar | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1435](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1435)

Create a [UInt8](UInt8.md) from a bigint or number.
The max value of a [UInt8](UInt8.md) is `2^8 - 1 = 255`.

**Warning**: Cannot overflow past 255, an error is thrown if the result is greater than 255.

#### Parameters

##### x

`number` | `bigint` | `FieldVar` | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

#### Overrides

```ts
Struct({
  value: Field,
}).constructor
```

## Properties

### value

```ts
value: Field = Field;
```

Defined in: [lib/provable/int.ts:1425](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1425)

#### Inherited from

```ts
Struct({
  value: Field,
}).value
```

***

### \_isStruct

```ts
static _isStruct: true;
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Inherited from

```ts
Struct({
  value: Field,
})._isStruct
```

***

### empty()

```ts
static empty: () => {
  value: Field;
};
```

Defined in: [lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L143)

#### Returns

```ts
{
  value: Field;
}
```

##### value

```ts
value: Field = Field;
```

#### Inherited from

```ts
Struct({
  value: Field,
}).empty
```

***

### fromFields()

```ts
static fromFields: (fields: Field[]) => {
  value: Field;
};
```

Defined in: [lib/provable/types/provable-intf.ts:115](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L115)

#### Parameters

##### fields

[`Field`](Field.md)[]

#### Returns

```ts
{
  value: Field;
}
```

##### value

```ts
value: Field = Field;
```

#### Inherited from

```ts
Struct({
  value: Field,
}).fromFields
```

***

### fromJSON()

```ts
static fromJSON: (x: {
  value: string;
 }) => {
  value: Field;
};
```

Defined in: [lib/provable/types/struct.ts:142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L142)

#### Parameters

##### x

###### value

`string` = `Field`

#### Returns

```ts
{
  value: Field;
}
```

##### value

```ts
value: Field = Field;
```

#### Inherited from

```ts
Struct({
  value: Field,
}).fromJSON
```

***

### NUM\_BITS

```ts
static NUM_BITS: number = 8;
```

Defined in: [lib/provable/int.ts:1427](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1427)

***

### toAuxiliary()

```ts
static toAuxiliary: (value?: {
  value: Field;
 }) => any[];
```

Defined in: [lib/provable/types/provable-intf.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L47)

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### value

[`Field`](Field.md) = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

```ts
Struct({
  value: Field,
}).toAuxiliary
```

***

### toCanonical()?

```ts
static optional toCanonical: (x: {
  value: Field;
 }) => {
  value: Field;
};
```

Defined in: [lib/provable/types/provable-intf.ts:104](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L104)

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

#### Parameters

##### x

###### value

[`Field`](Field.md) = `Field`

#### Returns

```ts
{
  value: Field;
}
```

##### value

```ts
value: Field = Field;
```

#### Inherited from

```ts
Struct({
  value: Field,
}).toCanonical
```

***

### toFields()

```ts
static toFields: (value: {
  value: Field;
 }) => Field[];
```

Defined in: [lib/provable/types/provable-intf.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L36)

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the [Field](Field.md) array from.

###### value

[`Field`](Field.md) = `Field`

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

```ts
Struct({
  value: Field,
}).toFields
```

***

### toJSON()

```ts
static toJSON: (x: {
  value: Field;
 }) => {
  value: string;
};
```

Defined in: [lib/provable/types/struct.ts:141](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L141)

#### Parameters

##### x

###### value

[`Field`](Field.md) = `Field`

#### Returns

```ts
{
  value: string;
}
```

##### value

```ts
value: string = Field;
```

#### Inherited from

```ts
Struct({
  value: Field,
}).toJSON
```

***

### toValue()

```ts
static toValue: (x: {
  value: Field;
 }) => {
  value: bigint;
};
```

Defined in: [lib/provable/types/provable-intf.ts:81](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L81)

Convert provable type to a normal JS type.

#### Parameters

##### x

###### value

[`Field`](Field.md) = `Field`

#### Returns

```ts
{
  value: bigint;
}
```

##### value

```ts
value: bigint = Field;
```

#### Inherited from

```ts
Struct({
  value: Field,
}).toValue
```

***

### Unsafe

```ts
static Unsafe: {
  fromField: UInt8;
};
```

Defined in: [lib/provable/int.ts:1441](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1441)

#### fromField()

Create a [UInt8](UInt8.md) from a [Field](../variables/Field.md) without constraining its range.

**Warning**: This is unsafe, because it does not prove that the input [Field](../variables/Field.md) actually fits in 8 bits.\
Only use this if you know what you are doing, otherwise use the safe [UInt8.from](UInt8.md#from).

##### Parameters

###### x

[`Field`](Field.md)

##### Returns

[`UInt8`](UInt8.md)

## Accessors

### one

#### Get Signature

```ts
get static one(): UInt8
```

Defined in: [lib/provable/int.ts:1462](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1462)

Static method to create a [UInt8](UInt8.md) with value `1`.

##### Returns

[`UInt8`](UInt8.md)

***

### zero

#### Get Signature

```ts
get static zero(): UInt8
```

Defined in: [lib/provable/int.ts:1456](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1456)

Static method to create a [UInt8](UInt8.md) with value `0`.

##### Returns

[`UInt8`](UInt8.md)

## Methods

### add()

```ts
add(y: number | bigint | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1478](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1478)

Add a [UInt8](UInt8.md) to another [UInt8](UInt8.md) without allowing overflow.

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

#### Example

```ts
const x = UInt8.from(3);
const sum = x.add(5);
sum.assertEquals(8);
```

#### Throws

if the result is greater than 255.

***

### assertEquals()

```ts
assertEquals(y: number | bigint | UInt8, message?: string): void
```

Defined in: [lib/provable/int.ts:1724](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1724)

Assert that this [UInt8](UInt8.md) is equal another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md).

`number` | `bigint` | [`UInt8`](UInt8.md)

##### message?

`string`

a string error message to print if the assertion fails, optional.

#### Returns

`void`

***

### assertGreaterThan()

```ts
assertGreaterThan(y: number | bigint | UInt8, message?: string): void
```

Defined in: [lib/provable/int.ts:1700](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1700)

Assert that this [UInt8](UInt8.md) is greater than another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md).

`number` | `bigint` | [`UInt8`](UInt8.md)

##### message?

`string`

a string error message to print if the assertion fails, optional.

#### Returns

`void`

***

### assertGreaterThanOrEqual()

```ts
assertGreaterThanOrEqual(y: UInt8, message?: string): void
```

Defined in: [lib/provable/int.ts:1712](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1712)

Assert that this [UInt8](UInt8.md) is greater than or equal to another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

[`UInt8`](UInt8.md)

the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md).

##### message?

`string`

a string error message to print if the assertion fails, optional.

#### Returns

`void`

***

### assertLessThan()

```ts
assertLessThan(y: number | bigint | UInt8, message?: string): void
```

Defined in: [lib/provable/int.ts:1628](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1628)

Assert that this [UInt8](UInt8.md) is less than another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md).

`number` | `bigint` | [`UInt8`](UInt8.md)

##### message?

`string`

a string error message to print if the assertion fails, optional.

#### Returns

`void`

***

### assertLessThanOrEqual()

```ts
assertLessThanOrEqual(y: number | bigint | UInt8, message?: string): void
```

Defined in: [lib/provable/int.ts:1650](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1650)

Assert that this [UInt8](UInt8.md) is less than or equal to another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md).

`number` | `bigint` | [`UInt8`](UInt8.md)

##### message?

`string`

a string error message to print if the assertion fails, optional.

#### Returns

`void`

***

### div()

```ts
div(y: number | bigint | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1531](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1531)

Divide a [UInt8](UInt8.md) by another [UInt8](UInt8.md).
This is integer division that rounds down.

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

#### Example

```ts
const x = UInt8.from(7);
const quotient = x.div(2);
quotient.assertEquals(3);
```

***

### divMod()

```ts
divMod(y: number | bigint | UInt8): {
  quotient: UInt8;
  remainder: UInt8;
}
```

Defined in: [lib/provable/int.ts:1558](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1558)

Get the quotient and remainder of a [UInt8](UInt8.md) divided by another [UInt8](UInt8.md):

`x == y * q + r`, where `0 <= r < y`.

#### Parameters

##### y

a [UInt8](UInt8.md) to get the quotient and remainder of another [UInt8](UInt8.md).

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

```ts
{
  quotient: UInt8;
  remainder: UInt8;
}
```

The quotient `q` and remainder `r`.

##### quotient

```ts
quotient: UInt8;
```

##### remainder

```ts
remainder: UInt8;
```

***

### greaterThan()

```ts
greaterThan(y: number | bigint | UInt8): Bool
```

Defined in: [lib/provable/int.ts:1674](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1674)

Check if this [UInt8](UInt8.md) is greater than another [UInt8](UInt8.md).
Returns a [Bool](../variables/Bool.md).

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`Bool`](Bool.md)

#### Example

```ts
// 5 > 3
UInt8.from(5).greaterThan(3);
```

***

### greaterThanOrEqual()

```ts
greaterThanOrEqual(y: number | bigint | UInt8): Bool
```

Defined in: [lib/provable/int.ts:1688](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1688)

Check if this [UInt8](UInt8.md) is greater than or equal another [UInt8](UInt8.md) value.
Returns a [Bool](../variables/Bool.md).

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`Bool`](Bool.md)

#### Example

```ts
// 3 >= 3
UInt8.from(3).greaterThanOrEqual(3);
```

***

### lessThan()

```ts
lessThan(y: number | bigint | UInt8): Bool
```

Defined in: [lib/provable/int.ts:1612](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1612)

Check if this [UInt8](UInt8.md) is less than another [UInt8](UInt8.md) value.
Returns a [Bool](../variables/Bool.md).

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`Bool`](Bool.md)

#### Example

```ts
UInt8.from(2).lessThan(UInt8.from(3));
```

***

### lessThanOrEqual()

```ts
lessThanOrEqual(y: number | bigint | UInt8): Bool
```

Defined in: [lib/provable/int.ts:1595](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1595)

Check if this [UInt8](UInt8.md) is less than or equal to another [UInt8](UInt8.md) value.
Returns a [Bool](../variables/Bool.md).

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`Bool`](Bool.md)

#### Example

```ts
UInt8.from(3).lessThanOrEqual(UInt8.from(5));
```

***

### mod()

```ts
mod(y: number | bigint | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1545](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1545)

Get the remainder a [UInt8](UInt8.md) of division of another [UInt8](UInt8.md).

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

#### Example

```ts
const x = UInt8.from(50);
const mod = x.mod(30);
mod.assertEquals(20);
```

***

### mul()

```ts
mul(y: number | bigint | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1514](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1514)

Multiply a [UInt8](UInt8.md) by another [UInt8](UInt8.md) without allowing overflow.

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

#### Example

```ts
const x = UInt8.from(3);
const product = x.mul(5);
product.assertEquals(15);
```

#### Throws

if the result is greater than 255.

***

### sub()

```ts
sub(y: number | bigint | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1496](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1496)

Subtract a [UInt8](UInt8.md) from another [UInt8](UInt8.md) without allowing underflow.

#### Parameters

##### y

`number` | `bigint` | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

#### Example

```ts
const x = UInt8.from(8);
const difference = x.sub(5);
difference.assertEquals(3);
```

#### Throws

if the result is less than 0.

***

### toBigInt()

```ts
toBigInt(): bigint
```

Defined in: [lib/provable/int.ts:1752](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1752)

Serialize the [UInt8](UInt8.md) to a bigint.

**Warning**: This operation is not provable.

#### Returns

`bigint`

***

### toNumber()

```ts
toNumber(): number
```

Defined in: [lib/provable/int.ts:1743](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1743)

Serialize the [UInt8](UInt8.md) to a number.

**Warning**: This operation is not provable.

#### Returns

`number`

***

### toString()

```ts
toString(): string
```

Defined in: [lib/provable/int.ts:1734](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1734)

Serialize the [UInt8](UInt8.md) to a string, e.g. for printing.

**Warning**: This operation is not provable.

#### Returns

`string`

***

### toUInt32()

```ts
toUInt32(): UInt32
```

Defined in: [lib/provable/int.ts:1772](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1772)

Turns a [UInt8](UInt8.md) into a [UInt32](UInt32.md).

#### Returns

[`UInt32`](UInt32.md)

***

### toUInt64()

```ts
toUInt64(): UInt64
```

Defined in: [lib/provable/int.ts:1779](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1779)

Turns a [UInt8](UInt8.md) into a [UInt64](UInt64.md).

#### Returns

[`UInt64`](UInt64.md)

***

### check()

```ts
static check(x: 
  | Field
  | {
  value: Field;
 }): void
```

Defined in: [lib/provable/int.ts:1760](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1760)

[Provable.check](../type-aliases/Provable.md#check) for [UInt8](UInt8.md).
Proves that the input is in the [0, 255] range.

#### Parameters

##### x

[`Field`](Field.md) | \{
`value`: [`Field`](Field.md);
\}

#### Returns

`void`

#### Overrides

```ts
Struct({
  value: Field,
}).check
```

***

### from()

```ts
static from(x: 
  | number
  | bigint
  | Field
  | UInt64
  | UInt32
  | UInt8): UInt8
```

Defined in: [lib/provable/int.ts:1793](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1793)

Creates a new [UInt8](UInt8.md).

#### Parameters

##### x

`number` | `bigint` | [`Field`](Field.md) | [`UInt64`](UInt64.md) | [`UInt32`](UInt32.md) | [`UInt8`](UInt8.md)

#### Returns

[`UInt8`](UInt8.md)

***

### fromValue()

```ts
static fromValue(x: 
  | number
  | UInt8
  | {
  value: string | number | bigint | Field;
 }): UInt8
```

Defined in: [lib/provable/int.ts:1804](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1804)

#### Parameters

##### x

`number` | [`UInt8`](UInt8.md) | \{
`value`: `string` \| `number` \| `bigint` \| [`Field`](Field.md);
\}

#### Returns

[`UInt8`](UInt8.md)

#### Overrides

```ts
Struct({
  value: Field,
}).fromValue
```

***

### MAXINT()

```ts
static MAXINT(): UInt8
```

Defined in: [lib/provable/int.ts:1786](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1786)

Creates a [UInt8](UInt8.md) with a value of 255.

#### Returns

[`UInt8`](UInt8.md)

***

### sizeInFields()

```ts
static sizeInFields(): number
```

Defined in: [lib/provable/types/provable-intf.ts:66](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L66)

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

```ts
Struct({
  value: Field,
}).sizeInFields
```

***

### toInput()

```ts
static toInput(x: {
  value: Field;
 }): HashInput
```

Defined in: [lib/provable/int.ts:1765](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1765)

#### Parameters

##### x

###### value

[`Field`](Field.md)

#### Returns

`HashInput`

#### Overrides

```ts
Struct({
  value: Field,
}).toInput
```
