Defined in: [lib/provable/int.ts:29](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L29)

A 64 bit unsigned integer with values ranging from 0 to 18,446,744,073,709,551,615.

## Extends

- `CircuitValue`

## Constructors

### new UInt64()

```ts
new UInt64(x: 
  | string
  | number
  | bigint
  | FieldVar
  | UInt64
  | UInt32): UInt64
```

Defined in: [lib/provable/int.ts:39](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L39)

Create a [UInt64](UInt64.md).
The max value of a [UInt64](UInt64.md) is `2^64 - 1 = UInt64.MAXINT()`.

**Warning**: Cannot overflow, an error is thrown if the result is greater than UInt64.MAXINT()

#### Parameters

##### x

`string` | `number` | `bigint` | `FieldVar` | [`UInt64`](UInt64.md) | [`UInt32`](UInt32.md)

#### Returns

[`UInt64`](UInt64.md)

#### Overrides

```ts
CircuitValue.constructor
```

## Properties

### value

```ts
value: Field;
```

Defined in: [lib/provable/int.ts:30](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L30)

***

### NUM\_BITS

```ts
static NUM_BITS: number = 64;
```

Defined in: [lib/provable/int.ts:31](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L31)

***

### Unsafe

```ts
static Unsafe: {
  fromField: UInt64;
};
```

Defined in: [lib/provable/int.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L47)

#### fromField()

Create a [UInt64](UInt64.md) from a [Field](../variables/Field.md) without constraining its range.

**Warning**: This is unsafe, because it does not prove that the input [Field](../variables/Field.md) actually fits in 64 bits.\
Only use this if you know what you are doing, otherwise use the safe [UInt64.from](UInt64.md#from).

##### Parameters

###### x

[`Field`](Field.md)

##### Returns

[`UInt64`](UInt64.md)

## Accessors

### one

#### Get Signature

```ts
get static one(): UInt64
```

Defined in: [lib/provable/int.ts:68](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L68)

Static method to create a [UInt64](UInt64.md) with value `1`.

##### Returns

[`UInt64`](UInt64.md)

***

### zero

#### Get Signature

```ts
get static zero(): UInt64
```

Defined in: [lib/provable/int.ts:62](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L62)

Static method to create a [UInt64](UInt64.md) with value `0`.

##### Returns

[`UInt64`](UInt64.md)

## Methods

### add()

```ts
add(y: number | UInt64): UInt64
```

Defined in: [lib/provable/int.ts:231](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L231)

Addition with overflow checking.

#### Parameters

##### y

`number` | [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

***

### addMod64()

```ts
addMod64(y: UInt64): UInt64
```

Defined in: [lib/provable/int.ts:156](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L156)

Addition modulo 2^64. Check [Gadgets.addMod64](../variables/Gadgets.md#addmod64) for a detailed description.

#### Parameters

##### y

[`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

***

### and()

```ts
and(x: UInt64): UInt64
```

Defined in: [lib/provable/int.ts:399](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L399)

Bitwise AND gadget on [UInt64](UInt64.md) elements. Equivalent to the [bitwise AND `&` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND).
The AND gate works by comparing two bits and returning `1` if both bits are `1`, and `0` otherwise.

It can be checked by a double generic gate that verifies the following relationship between the values below.

The generic gate verifies:\
`a + b = sum` and the conjunction equation `2 * and = sum - xor`\
Where:\
`a + b = sum`\
`a ^ b = xor`\
`a & b = and`

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#and)

#### Parameters

##### x

[`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Example

```typescript
let a = UInt64.from(3);    // ... 000011
let b = UInt64.from(5);    // ... 000101

let c = a.and(b);    // ... 000001
c.assertEquals(1);
```

***

### assertEquals()

```ts
assertEquals(x: this): void
```

Defined in: [lib/provable/types/circuit-value.ts:121](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L121)

#### Parameters

##### x

`this`

#### Returns

`void`

#### Inherited from

```ts
CircuitValue.assertEquals
```

***

### assertGreaterThan()

```ts
assertGreaterThan(y: UInt64, message?: string): void
```

Defined in: [lib/provable/int.ts:481](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L481)

Asserts that a [UInt64](UInt64.md) is greater than another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

##### message?

`string`

#### Returns

`void`

***

### assertGreaterThanOrEqual()

```ts
assertGreaterThanOrEqual(y: UInt64, message?: string): void
```

Defined in: [lib/provable/int.ts:495](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L495)

Asserts that a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

##### message?

`string`

#### Returns

`void`

***

### assertLessThan()

```ts
assertLessThan(y: UInt64, message?: string): void
```

Defined in: [lib/provable/int.ts:461](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L461)

Asserts that a [UInt64](UInt64.md) is less than another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

##### message?

`string`

#### Returns

`void`

***

### assertLessThanOrEqual()

```ts
assertLessThanOrEqual(y: UInt64, message?: string): void
```

Defined in: [lib/provable/int.ts:435](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L435)

Asserts that a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

##### message?

`string`

#### Returns

`void`

***

### div()

```ts
div(y: number | UInt64): UInt64
```

Defined in: [lib/provable/int.ts:205](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L205)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `z * y <= x`.

#### Parameters

##### y

`number` | [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

***

### divMod()

```ts
divMod(y: string | number | UInt64): {
  quotient: UInt64;
  rest: UInt64;
}
```

Defined in: [lib/provable/int.ts:165](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L165)

Integer division with remainder.

`x.divMod(y)` returns the quotient and the remainder.

#### Parameters

##### y

`string` | `number` | [`UInt64`](UInt64.md)

#### Returns

```ts
{
  quotient: UInt64;
  rest: UInt64;
}
```

##### quotient

```ts
quotient: UInt64;
```

##### rest

```ts
rest: UInt64;
```

***

### equals()

```ts
equals(x: this): Bool
```

Defined in: [lib/provable/types/circuit-value.ts:117](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L117)

#### Parameters

##### x

`this`

#### Returns

[`Bool`](Bool.md)

#### Inherited from

```ts
CircuitValue.equals
```

***

### greaterThan()

```ts
greaterThan(y: UInt64): Bool
```

Defined in: [lib/provable/int.ts:474](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L474)

Checks if a [UInt64](UInt64.md) is greater than another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

#### Returns

[`Bool`](Bool.md)

***

### greaterThanOrEqual()

```ts
greaterThanOrEqual(y: UInt64): Bool
```

Defined in: [lib/provable/int.ts:488](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L488)

Checks if a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

#### Returns

[`Bool`](Bool.md)

***

### isConstant()

```ts
isConstant(): boolean
```

Defined in: [lib/provable/types/circuit-value.ts:125](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L125)

#### Returns

`boolean`

#### Inherited from

```ts
CircuitValue.isConstant
```

***

### leftShift()

```ts
leftShift(bits: number): UInt64
```

Defined in: [lib/provable/int.ts:349](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L349)

Performs a left shift operation on the provided [UInt64](UInt64.md) element.
This operation is similar to the `<<` shift operation in JavaScript,
where bits are shifted to the left, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number,
where the most significant (64th) bit is on the left end and the least significant bit is on the right end.

#### Parameters

##### bits

`number`

Amount of bits to shift the [UInt64](UInt64.md) element to the left. The amount should be between 0 and 64 (or else the shift will fail).

#### Returns

[`UInt64`](UInt64.md)

#### Example

```ts
const x = UInt64.from(0b001100); // 12 in binary
const y = x.leftShift(2); // left shift by 2 bits
y.assertEquals(0b110000); // 48 in binary
```

***

### lessThan()

```ts
lessThan(y: UInt64): Bool
```

Defined in: [lib/provable/int.ts:449](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L449)

Checks if a [UInt64](UInt64.md) is less than another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

#### Returns

[`Bool`](Bool.md)

***

### lessThanOrEqual()

```ts
lessThanOrEqual(y: UInt64): Bool
```

Defined in: [lib/provable/int.ts:423](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L423)

Checks if a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

##### y

[`UInt64`](UInt64.md)

#### Returns

[`Bool`](Bool.md)

***

### mod()

```ts
mod(y: number | UInt64): UInt64
```

Defined in: [lib/provable/int.ts:215](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L215)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisible by `y`.

#### Parameters

##### y

`number` | [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

***

### mul()

```ts
mul(y: number | UInt64): UInt64
```

Defined in: [lib/provable/int.ts:222](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L222)

Multiplication with overflow checking.

#### Parameters

##### y

`number` | [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

***

### not()

```ts
not(): UInt64
```

Defined in: [lib/provable/int.ts:296](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L296)

Bitwise NOT gate on [Field](../variables/Field.md) elements. Similar to the [bitwise
NOT `~` operator in JavaScript](https://developer.mozilla.org/en-US/docs/
Web/JavaScript/Reference/Operators/Bitwise_NOT).

**Note:** The NOT gate operates over 64 bit for UInt64 types.

A NOT gate works by returning `1` in each bit position if the
corresponding bit of the operand is `0`, and returning `0` if the
corresponding bit of the operand is `1`.

NOT is implemented as a subtraction of the input from the all one bitmask

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#not)

#### Returns

[`UInt64`](UInt64.md)

#### Example

```ts
// NOTing 4 bits with the unchecked version
let a = UInt64.from(0b0101);
let b = a.not(false);

console.log(b.toBigInt().toString(2));
// 1111111111111111111111111111111111111111111111111111111111111010

```

***

### or()

```ts
or(x: UInt64): UInt64
```

Defined in: [lib/provable/int.ts:416](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L416)

Bitwise OR gadget on [UInt64](UInt64.md) elements. Equivalent to the [bitwise OR `|` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR).
The OR gate works by comparing two bits and returning `1` if at least one bit is `1`, and `0` otherwise.

#### Parameters

##### x

[`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Example

```typescript
let a = UInt64.from(3);    // ... 000011
let b = UInt64.from(5);    // ... 000101

let c = a.or(b);    // ... 000111
c.assertEquals(7);
```

***

### rightShift()

```ts
rightShift(bits: number): UInt64
```

Defined in: [lib/provable/int.ts:370](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L370)

Performs a right shift operation on the provided [UInt64](UInt64.md) element.
This operation is similar to the `>>` shift operation in JavaScript,
where bits are shifted to the right, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number,
where the most significant (64th) bit is on the left end and the least significant bit is on the right end.

#### Parameters

##### bits

`number`

Amount of bits to shift the [UInt64](UInt64.md) element to the right. The amount should be between 0 and 64 (or else the shift will fail).

#### Returns

[`UInt64`](UInt64.md)

#### Example

```ts
const x = UInt64.from(0b001100); // 12 in binary
const y = x.rightShift(2); // right shift by 2 bits
y.assertEquals(0b000011); // 3 in binary
```

***

### rotate()

```ts
rotate(bits: number, direction: "left" | "right"): UInt64
```

Defined in: [lib/provable/int.ts:328](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L328)

A (left and right) rotation operates similarly to the shift operation (`<<` for left and `>>` for right) in JavaScript,
with the distinction that the bits are circulated to the opposite end of a 64-bit representation rather than being discarded.
For a left rotation, this means that bits shifted off the left end reappear at the right end.
Conversely, for a right rotation, bits shifted off the right end reappear at the left end.

It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number,
where the most significant (64th) bit is on the left end and the least significant bit is on the right end.
The `direction` parameter is a string that accepts either `'left'` or `'right'`, determining the direction of the rotation.

To safely use `rotate()`, you need to make sure that the value passed in is range-checked to 64 bits;
for example, using [Gadgets.rangeCheck64](../variables/Gadgets.md#rangecheck64).

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#rotation)

#### Parameters

##### bits

`number`

amount of bits to rotate this [UInt64](UInt64.md) element with.

##### direction

left or right rotation direction.

`"left"` | `"right"`

#### Returns

[`UInt64`](UInt64.md)

#### Example

```ts
const x = UInt64.from(0b001100);
const y = x.rotate(2, 'left');
const z = x.rotate(2, 'right'); // right rotation by 2 bits
y.assertEquals(0b110000);
z.assertEquals(0b000011);
```

***

### sub()

```ts
sub(y: number | UInt64): UInt64
```

Defined in: [lib/provable/int.ts:240](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L240)

Subtraction with underflow checking.

#### Parameters

##### y

`number` | [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

***

### toBigInt()

```ts
toBigInt(): bigint
```

Defined in: [lib/provable/int.ts:82](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L82)

Turns the [UInt64](UInt64.md) into a BigInt.

#### Returns

`bigint`

***

### toBytes()

```ts
toBytes(): [UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8]
```

Defined in: [lib/provable/int.ts:510](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L510)

Split a UInt64 into 8 UInt8s, in little-endian order.

#### Returns

\[[`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md)\]

***

### toBytesBE()

```ts
toBytesBE(): [UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8]
```

Defined in: [lib/provable/int.ts:517](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L517)

Split a UInt64 into 8 UInt8s, in big-endian order.

#### Returns

\[[`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md)\]

***

### toConstant()

```ts
toConstant(): this
```

Defined in: [lib/provable/types/circuit-value.ts:113](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L113)

#### Returns

`this`

#### Inherited from

```ts
CircuitValue.toConstant
```

***

### toFields()

```ts
toFields(): Field[]
```

Defined in: [lib/provable/types/circuit-value.ts:79](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L79)

#### Returns

[`Field`](Field.md)[]

#### Inherited from

```ts
CircuitValue.toFields
```

***

### toJSON()

```ts
toJSON(): any
```

Defined in: [lib/provable/types/circuit-value.ts:109](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L109)

#### Returns

`any`

#### Inherited from

```ts
CircuitValue.toJSON
```

***

### toString()

```ts
toString(): string
```

Defined in: [lib/provable/int.ts:75](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L75)

Turns the [UInt64](UInt64.md) into a string.

#### Returns

`string`

***

### toUInt32()

```ts
toUInt32(): UInt32
```

Defined in: [lib/provable/int.ts:89](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L89)

Turns the [UInt64](UInt64.md) into a [UInt32](UInt32.md), asserting that it fits in 32 bits.

#### Returns

[`UInt32`](UInt32.md)

***

### toUInt32Clamped()

```ts
toUInt32Clamped(): UInt32
```

Defined in: [lib/provable/int.ts:101](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L101)

Turns the [UInt64](UInt64.md) into a [UInt32](UInt32.md), clamping to the 32 bits range if it's too large.
```ts
UInt64.from(4294967296).toUInt32Clamped().toString(); // "4294967295"
```

#### Returns

[`UInt32`](UInt32.md)

***

### xor()

```ts
xor(x: UInt64): UInt64
```

Defined in: [lib/provable/int.ts:265](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L265)

Bitwise XOR gadget on [Field](../variables/Field.md) elements. Equivalent to the [bitwise XOR `^` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).
A XOR gate works by comparing two bits and returning `1` if two bits differ, and `0` if two bits are equal.

This gadget builds a chain of XOR gates recursively.

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#xor-1)

#### Parameters

##### x

[`UInt64`](UInt64.md)

[UInt64](UInt64.md) element to XOR.

#### Returns

[`UInt64`](UInt64.md)

#### Example

```ts
let a = UInt64.from(0b0101);
let b = UInt64.from(0b0011);

let c = a.xor(b);
c.assertEquals(0b0110);
```

***

### check()

```ts
static check(x: UInt64): void
```

Defined in: [lib/provable/int.ts:107](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L107)

#### Parameters

##### x

[`UInt64`](UInt64.md)

#### Returns

`void`

#### Overrides

```ts
CircuitValue.check
```

***

### empty()

```ts
static empty<T>(): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:205](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L205)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
CircuitValue.empty
```

***

### from()

```ts
static from(x: string | number | bigint | UInt64 | UInt32): UInt64
```

Defined in: [lib/provable/int.ts:141](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L141)

Creates a new [UInt64](UInt64.md).

#### Parameters

##### x

`string` | `number` | `bigint` | [`UInt64`](UInt64.md) | [`UInt32`](UInt32.md)

#### Returns

[`UInt64`](UInt64.md)

***

### fromBytes()

```ts
static fromBytes(bytes: UInt8[]): UInt64
```

Defined in: [lib/provable/int.ts:524](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L524)

Combine 8 UInt8s into a UInt64, in little-endian order.

#### Parameters

##### bytes

[`UInt8`](UInt8.md)[]

#### Returns

[`UInt64`](UInt64.md)

***

### fromBytesBE()

```ts
static fromBytesBE(bytes: UInt8[]): UInt64
```

Defined in: [lib/provable/int.ts:532](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L532)

Combine 8 UInt8s into a UInt64, in big-endian order.

#### Parameters

##### bytes

[`UInt8`](UInt8.md)[]

#### Returns

[`UInt64`](UInt64.md)

***

### fromFields()

```ts
static fromFields<T>(this: T, xs: Field[]): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:129](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L129)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### xs

[`Field`](Field.md)[]

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
CircuitValue.fromFields
```

***

### fromJSON()

```ts
static fromJSON<T>(x: string): InstanceType<T>
```

Defined in: [lib/provable/int.ts:125](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L125)

Decodes a JSON-like object into this structure.

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### x

`string`

#### Returns

`InstanceType`\<`T`\>

#### Overrides

```ts
CircuitValue.fromJSON
```

***

### fromObject()

```ts
static fromObject<T>(this: T, value: NonMethods<InstanceType<T>>): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:30](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L30)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### value

`NonMethods`\<`InstanceType`\<`T`\>\>

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
CircuitValue.fromObject
```

***

### fromValue()

```ts
static fromValue<T>(x: number | bigint | UInt64): InstanceType<T>
```

Defined in: [lib/provable/int.ts:503](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L503)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### x

`number` | `bigint` | [`UInt64`](UInt64.md)

#### Returns

`InstanceType`\<`T`\>

#### Overrides

```ts
CircuitValue.fromValue
```

***

### MAXINT()

```ts
static MAXINT(): UInt64
```

Defined in: [lib/provable/int.ts:149](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L149)

Creates a [UInt64](UInt64.md) with a value of 18,446,744,073,709,551,615.

#### Returns

[`UInt64`](UInt64.md)

***

### sizeInFields()

```ts
static sizeInFields(): number
```

Defined in: [lib/provable/types/circuit-value.ts:37](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L37)

#### Returns

`number`

#### Inherited from

```ts
CircuitValue.sizeInFields
```

***

### toAuxiliary()

```ts
static toAuxiliary(): []
```

Defined in: [lib/provable/types/circuit-value.ts:56](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L56)

#### Returns

\[\]

#### Inherited from

```ts
CircuitValue.toAuxiliary
```

***

### toCanonical()

```ts
static toCanonical<T>(this: T, value: InstanceType<T>): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:161](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L161)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### value

`InstanceType`\<`T`\>

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
CircuitValue.toCanonical
```

***

### toConstant()

```ts
static toConstant<T>(this: T, t: InstanceType<T>): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:170](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L170)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### t

`InstanceType`\<`T`\>

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
CircuitValue.toConstant
```

***

### toFields()

```ts
static toFields<T>(this: T, v: InstanceType<T>): Field[]
```

Defined in: [lib/provable/types/circuit-value.ts:42](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L42)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### v

`InstanceType`\<`T`\>

#### Returns

[`Field`](Field.md)[]

#### Inherited from

```ts
CircuitValue.toFields
```

***

### toInput()

```ts
static toInput(x: UInt64): HashInput
```

Defined in: [lib/provable/int.ts:111](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L111)

#### Parameters

##### x

[`UInt64`](UInt64.md)

#### Returns

`HashInput`

#### Overrides

```ts
CircuitValue.toInput
```

***

### toJSON()

```ts
static toJSON(x: UInt64): string
```

Defined in: [lib/provable/int.ts:118](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L118)

Encodes this structure into a JSON-like object.

#### Parameters

##### x

[`UInt64`](UInt64.md)

#### Returns

`string`

#### Overrides

```ts
CircuitValue.toJSON
```

***

### toValue()

```ts
static toValue(x: UInt64): bigint
```

Defined in: [lib/provable/int.ts:499](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L499)

#### Parameters

##### x

[`UInt64`](UInt64.md)

#### Returns

`bigint`

#### Overrides

```ts
CircuitValue.toValue
```
