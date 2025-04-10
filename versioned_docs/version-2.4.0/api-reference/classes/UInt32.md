Defined in: [lib/provable/int.ts:539](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L539)

A 32 bit unsigned integer with values ranging from 0 to 4,294,967,295.

## Extends

- `CircuitValue`

## Constructors

### new UInt32()

```ts
new UInt32(x: string | number | bigint | FieldVar | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:549](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L549)

Create a [UInt32](UInt32.md).
The max value of a [UInt32](UInt32.md) is `2^32 - 1 = UInt32.MAXINT()`.

**Warning**: Cannot overflow, an error is thrown if the result is greater than UInt32.MAXINT()

#### Parameters

##### x

`string` | `number` | `bigint` | `FieldVar` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Overrides

```ts
CircuitValue.constructor
```

## Properties

### value

```ts
value: Field;
```

Defined in: [lib/provable/int.ts:540](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L540)

***

### NUM\_BITS

```ts
static NUM_BITS: number = 32;
```

Defined in: [lib/provable/int.ts:541](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L541)

***

### Unsafe

```ts
static Unsafe: {
  fromField: UInt32;
};
```

Defined in: [lib/provable/int.ts:557](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L557)

#### fromField()

Create a [UInt32](UInt32.md) from a [Field](../variables/Field.md) without constraining its range.

**Warning**: This is unsafe, because it does not prove that the input [Field](../variables/Field.md) actually fits in 32 bits.\
Only use this if you know what you are doing, otherwise use the safe [UInt32.from](UInt32.md#from).

##### Parameters

###### x

[`Field`](Field.md)

##### Returns

[`UInt32`](UInt32.md)

## Accessors

### one

#### Get Signature

```ts
get static one(): UInt32
```

Defined in: [lib/provable/int.ts:579](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L579)

Static method to create a [UInt32](UInt32.md) with value `0`.

##### Returns

[`UInt32`](UInt32.md)

***

### zero

#### Get Signature

```ts
get static zero(): UInt32
```

Defined in: [lib/provable/int.ts:572](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L572)

Static method to create a [UInt32](UInt32.md) with value `0`.

##### Returns

[`UInt32`](UInt32.md)

## Methods

### add()

```ts
add(y: number | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:721](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L721)

Addition with overflow checking.

#### Parameters

##### y

`number` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### addMod32()

```ts
addMod32(y: UInt32): UInt32
```

Defined in: [lib/provable/int.ts:650](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L650)

Addition modulo 2^32. Check [Gadgets.addMod32](../variables/Gadgets.md#addmod32) for a detailed description.

#### Parameters

##### y

[`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### and()

```ts
and(x: UInt32): UInt32
```

Defined in: [lib/provable/int.ts:891](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L891)

Bitwise AND gadget on [UInt32](UInt32.md) elements. Equivalent to the [bitwise AND `&` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND).
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

[`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Example

```typescript
let a = UInt32.from(3);    // ... 000011
let b = UInt32.from(5);    // ... 000101

let c = a.and(b, 2);    // ... 000001
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
assertGreaterThan(y: UInt32, message?: string): void
```

Defined in: [lib/provable/int.ts:972](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L972)

Asserts that a [UInt32](UInt32.md) is greater than another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

##### message?

`string`

#### Returns

`void`

***

### assertGreaterThanOrEqual()

```ts
assertGreaterThanOrEqual(y: UInt32, message?: string): void
```

Defined in: [lib/provable/int.ts:986](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L986)

Asserts that a [UInt32](UInt32.md) is greater than or equal to another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

##### message?

`string`

#### Returns

`void`

***

### assertLessThan()

```ts
assertLessThan(y: UInt32, message?: string): void
```

Defined in: [lib/provable/int.ts:952](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L952)

Asserts that a [UInt32](UInt32.md) is less than another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

##### message?

`string`

#### Returns

`void`

***

### assertLessThanOrEqual()

```ts
assertLessThanOrEqual(y: UInt32, message?: string): void
```

Defined in: [lib/provable/int.ts:927](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L927)

Asserts that a [UInt32](UInt32.md) is less than or equal to another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

##### message?

`string`

#### Returns

`void`

***

### div()

```ts
div(y: number | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:698](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L698)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `x * y <= x`.

#### Parameters

##### y

`number` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### divMod()

```ts
divMod(y: string | number | UInt32): {
  quotient: UInt32;
  rest: UInt32;
}
```

Defined in: [lib/provable/int.ts:659](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L659)

Integer division with remainder.

`x.divMod(y)` returns the quotient and the remainder.

#### Parameters

##### y

`string` | `number` | [`UInt32`](UInt32.md)

#### Returns

```ts
{
  quotient: UInt32;
  rest: UInt32;
}
```

##### quotient

```ts
quotient: UInt32;
```

##### rest

```ts
rest: UInt32;
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
greaterThan(y: UInt32): Bool
```

Defined in: [lib/provable/int.ts:965](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L965)

Checks if a [UInt32](UInt32.md) is greater than another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

#### Returns

[`Bool`](Bool.md)

***

### greaterThanOrEqual()

```ts
greaterThanOrEqual(y: UInt32): Bool
```

Defined in: [lib/provable/int.ts:979](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L979)

Checks if a [UInt32](UInt32.md) is greater than or equal to another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

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
leftShift(bits: number): UInt32
```

Defined in: [lib/provable/int.ts:839](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L839)

Performs a left shift operation on the provided [UInt32](UInt32.md) element.
This operation is similar to the `<<` shift operation in JavaScript,
where bits are shifted to the left, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number,
where the most significant (32th) bit is on the left end and the least significant bit is on the right end.

The operation expects the input to be range checked to 32 bit.

#### Parameters

##### bits

`number`

Amount of bits to shift the [UInt32](UInt32.md) element to the left. The amount should be between 0 and 32 (or else the shift will fail).

#### Returns

[`UInt32`](UInt32.md)

#### Example

```ts
const x = UInt32.from(0b001100); // 12 in binary
const y = x.leftShift(2); // left shift by 2 bits
y.assertEquals(0b110000); // 48 in binary
```

***

### lessThan()

```ts
lessThan(y: UInt32): Bool
```

Defined in: [lib/provable/int.ts:940](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L940)

Checks if a [UInt32](UInt32.md) is less than another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

#### Returns

[`Bool`](Bool.md)

***

### lessThanOrEqual()

```ts
lessThanOrEqual(y: UInt32): Bool
```

Defined in: [lib/provable/int.ts:915](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L915)

Checks if a [UInt32](UInt32.md) is less than or equal to another one.

#### Parameters

##### y

[`UInt32`](UInt32.md)

#### Returns

[`Bool`](Bool.md)

***

### mod()

```ts
mod(y: number | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:707](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L707)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisible by `y`.

#### Parameters

##### y

`number` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### mul()

```ts
mul(y: number | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:713](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L713)

Multiplication with overflow checking.

#### Parameters

##### y

`number` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### not()

```ts
not(): UInt32
```

Defined in: [lib/provable/int.ts:784](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L784)

Bitwise NOT gate on [UInt32](UInt32.md) elements. Similar to the [bitwise
NOT `~` operator in JavaScript](https://developer.mozilla.org/en-US/docs/
Web/JavaScript/Reference/Operators/Bitwise_NOT).

**Note:** The NOT gate operates over 32 bit for UInt32 types.

A NOT gate works by returning `1` in each bit position if the
corresponding bit of the operand is `0`, and returning `0` if the
corresponding bit of the operand is `1`.

NOT is implemented as a subtraction of the input from the all one bitmask.

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#not)

#### Returns

[`UInt32`](UInt32.md)

#### Example

```ts
// NOTing 4 bits with the unchecked version
let a = UInt32.from(0b0101);
let b = a.not();

console.log(b.toBigInt().toString(2));
// 11111111111111111111111111111010
```

***

### or()

```ts
or(x: UInt32): UInt32
```

Defined in: [lib/provable/int.ts:908](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L908)

Bitwise OR gadget on [UInt32](UInt32.md) elements. Equivalent to the [bitwise OR `|` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR).
The OR gate works by comparing two bits and returning `1` if at least one bit is `1`, and `0` otherwise.

#### Parameters

##### x

[`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Example

```typescript
let a = UInt32.from(3);    // ... 000011
let b = UInt32.from(5);    // ... 000101

let c = a.or(b);    // ... 000111
c.assertEquals(7);
```

***

### rightShift()

```ts
rightShift(bits: number): UInt32
```

Defined in: [lib/provable/int.ts:862](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L862)

Performs a left right operation on the provided [UInt32](UInt32.md) element.
This operation is similar to the `>>` shift operation in JavaScript,
where bits are shifted to the right, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number,
where the most significant (32th) bit is on the left end and the least significant bit is on the right end.

#### Parameters

##### bits

`number`

Amount of bits to shift the [UInt32](UInt32.md) element to the right. The amount should be between 0 and 32 (or else the shift will fail).

The operation expects the input to be range checked to 32 bit.

#### Returns

[`UInt32`](UInt32.md)

#### Example

```ts
const x = UInt32.from(0b001100); // 12 in binary
const y = x.rightShift(2); // left shift by 2 bits
y.assertEquals(0b000011); // 48 in binary
```

***

### rotate()

```ts
rotate(bits: number, direction: "left" | "right"): UInt32
```

Defined in: [lib/provable/int.ts:816](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L816)

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

amount of bits to rotate this [UInt32](UInt32.md) element with.

##### direction

left or right rotation direction.

`"left"` | `"right"`

#### Returns

[`UInt32`](UInt32.md)

#### Example

```ts
const x = UInt32.from(0b001100);
const y = x.rotate(2, 'left');
const z = x.rotate(2, 'right'); // right rotation by 2 bits
y.assertEquals(0b110000);
z.assertEquals(0b000011);
```

***

### sub()

```ts
sub(y: number | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:729](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L729)

Subtraction with underflow checking.

#### Parameters

##### y

`number` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### toBigint()

```ts
toBigint(): bigint
```

Defined in: [lib/provable/int.ts:591](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L591)

Turns the [UInt32](UInt32.md) into a BigInt.

#### Returns

`bigint`

***

### toBytes()

```ts
toBytes(): [UInt8, UInt8, UInt8, UInt8]
```

Defined in: [lib/provable/int.ts:1001](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1001)

Split a UInt32 into 4 UInt8s, in little-endian order.

#### Returns

\[[`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md)\]

***

### toBytesBE()

```ts
toBytesBE(): [UInt8, UInt8, UInt8, UInt8]
```

Defined in: [lib/provable/int.ts:1008](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1008)

Split a UInt32 into 4 UInt8s, in big-endian order.

#### Returns

\[[`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md), [`UInt8`](UInt8.md)\]

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

Defined in: [lib/provable/int.ts:585](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L585)

Turns the [UInt32](UInt32.md) into a string.

#### Returns

`string`

***

### toUInt64()

```ts
toUInt64(): UInt64
```

Defined in: [lib/provable/int.ts:597](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L597)

Turns the [UInt32](UInt32.md) into a [UInt64](UInt64.md).

#### Returns

[`UInt64`](UInt64.md)

***

### xor()

```ts
xor(x: UInt32): UInt32
```

Defined in: [lib/provable/int.ts:754](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L754)

Bitwise XOR gadget on [UInt32](UInt32.md) elements. Equivalent to the [bitwise XOR `^` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).
A XOR gate works by comparing two bits and returning `1` if two bits differ, and `0` if two bits are equal.

This gadget builds a chain of XOR gates recursively.

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#xor-1)

#### Parameters

##### x

[`UInt32`](UInt32.md)

[UInt32](UInt32.md) element to compare.

#### Returns

[`UInt32`](UInt32.md)

#### Example

```ts
let a = UInt32.from(0b0101);
let b = UInt32.from(0b0011);

let c = a.xor(b);
c.assertEquals(0b0110);
```

***

### check()

```ts
static check(x: UInt32): void
```

Defined in: [lib/provable/int.ts:602](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L602)

#### Parameters

##### x

[`UInt32`](UInt32.md)

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
static from(x: string | number | bigint | UInt32): UInt32
```

Defined in: [lib/provable/int.ts:635](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L635)

Creates a new [UInt32](UInt32.md).

#### Parameters

##### x

`string` | `number` | `bigint` | [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

***

### fromBytes()

```ts
static fromBytes(bytes: UInt8[]): UInt32
```

Defined in: [lib/provable/int.ts:1015](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1015)

Combine 4 UInt8s into a UInt32, in little-endian order.

#### Parameters

##### bytes

[`UInt8`](UInt8.md)[]

#### Returns

[`UInt32`](UInt32.md)

***

### fromBytesBE()

```ts
static fromBytesBE(bytes: UInt8[]): UInt32
```

Defined in: [lib/provable/int.ts:1023](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1023)

Combine 4 UInt8s into a UInt32, in big-endian order.

#### Parameters

##### bytes

[`UInt8`](UInt8.md)[]

#### Returns

[`UInt32`](UInt32.md)

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

Defined in: [lib/provable/int.ts:618](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L618)

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
static fromValue<T>(x: number | bigint | UInt32): InstanceType<T>
```

Defined in: [lib/provable/int.ts:994](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L994)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### x

`number` | `bigint` | [`UInt32`](UInt32.md)

#### Returns

`InstanceType`\<`T`\>

#### Overrides

```ts
CircuitValue.fromValue
```

***

### MAXINT()

```ts
static MAXINT(): UInt32
```

Defined in: [lib/provable/int.ts:643](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L643)

Creates a [UInt32](UInt32.md) with a value of 4,294,967,295.

#### Returns

[`UInt32`](UInt32.md)

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
static toInput(x: UInt32): HashInput
```

Defined in: [lib/provable/int.ts:605](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L605)

#### Parameters

##### x

[`UInt32`](UInt32.md)

#### Returns

`HashInput`

#### Overrides

```ts
CircuitValue.toInput
```

***

### toJSON()

```ts
static toJSON(x: UInt32): string
```

Defined in: [lib/provable/int.ts:611](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L611)

Encodes this structure into a JSON-like object.

#### Parameters

##### x

[`UInt32`](UInt32.md)

#### Returns

`string`

#### Overrides

```ts
CircuitValue.toJSON
```

***

### toValue()

```ts
static toValue(x: UInt32): bigint
```

Defined in: [lib/provable/int.ts:990](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L990)

#### Parameters

##### x

[`UInt32`](UInt32.md)

#### Returns

`bigint`

#### Overrides

```ts
CircuitValue.toValue
```
