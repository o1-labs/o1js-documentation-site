Defined in: [lib/provable/bool.ts:29](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L29)

A boolean value. You can use it like this:

```
const x = new Bool(true);
```

You can also combine multiple booleans via [[`not`]], [[`and`]], [[`or`]].

Use [[assertEquals]] to enforce the value of a Bool.

## Constructors

### new Bool()

```ts
new Bool(x: boolean | FieldVar | Bool): Bool
```

Defined in: [lib/provable/bool.ts:32](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L32)

#### Parameters

##### x

`boolean` | `FieldVar` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

## Properties

### value

```ts
value: FieldVar;
```

Defined in: [lib/provable/bool.ts:30](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L30)

***

### sizeInBytes

```ts
static sizeInBytes: number = 1;
```

Defined in: [lib/provable/bool.ts:400](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L400)

***

### Unsafe

```ts
static Unsafe: {
  fromField: Bool;
};
```

Defined in: [lib/provable/bool.ts:406](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L406)

#### fromField()

Converts a [Field](Field.md) into a [Bool](Bool.md). This is an **unsafe** operation
as it assumes that the field element is either 0 or 1 (which might not be true).

Only use this if you have already constrained the Field element to be 0 or 1.

##### Parameters

###### x

[`Field`](Field.md)

a [Field](Field.md)

##### Returns

[`Bool`](Bool.md)

## Methods

### and()

```ts
and(y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:72](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L72)

#### Parameters

##### y

A [Bool](Bool.md) to AND with this [Bool](Bool.md).

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is set to true only if
this [Bool](Bool.md) and `y` are also true.

***

### assertEquals()

```ts
assertEquals(y: boolean | Bool, message?: string): void
```

Defined in: [lib/provable/bool.ts:113](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L113)

Proves that this [Bool](Bool.md) is equal to `y`.

#### Parameters

##### y

a [Bool](Bool.md).

`boolean` | [`Bool`](Bool.md)

##### message?

`string`

#### Returns

`void`

***

### assertFalse()

```ts
assertFalse(message?: string): void
```

Defined in: [lib/provable/bool.ts:144](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L144)

Proves that this [Bool](Bool.md) is `false`.

#### Parameters

##### message?

`string`

#### Returns

`void`

***

### assertTrue()

```ts
assertTrue(message?: string): void
```

Defined in: [lib/provable/bool.ts:130](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L130)

Proves that this [Bool](Bool.md) is `true`.

#### Parameters

##### message?

`string`

#### Returns

`void`

***

### equals()

```ts
equals(y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:159](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L159)

Returns true if this [Bool](Bool.md) is equal to `y`.

#### Parameters

##### y

a [Bool](Bool.md).

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

***

### implies()

```ts
implies(y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:105](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L105)

Whether this Bool implies another Bool `y`.

This is the same as `x.not().or(y)`: if `x` is true, then `y` must be true for the implication to be true.

#### Parameters

##### y

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Example

```ts
let isZero = x.equals(0);
let lessThan10 = x.lessThan(10);
assert(isZero.implies(lessThan10), 'x = 0 implies x < 10');
```

***

### isConstant()

```ts
isConstant(): this is { value: ConstantBoolVar }
```

Defined in: [lib/provable/bool.ts:44](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L44)

#### Returns

`this is { value: ConstantBoolVar }`

***

### not()

```ts
not(): Bool
```

Defined in: [lib/provable/bool.ts:58](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L58)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is the negation of this [Bool](Bool.md).

***

### or()

```ts
or(y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:85](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L85)

#### Parameters

##### y

a [Bool](Bool.md) to OR with this [Bool](Bool.md).

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is set to true if either
this [Bool](Bool.md) or `y` is true.

***

### sizeInFields()

```ts
sizeInFields(): number
```

Defined in: [lib/provable/bool.ts:184](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L184)

Returns the size of this type.

#### Returns

`number`

***

### toBoolean()

```ts
toBoolean(): boolean
```

Defined in: [lib/provable/bool.ts:215](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L215)

This converts the [Bool](Bool.md) to a JS `boolean`.
This can only be called on non-witness values.

#### Returns

`boolean`

***

### toField()

```ts
toField(): Field
```

Defined in: [lib/provable/bool.ts:51](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L51)

Converts a [Bool](Bool.md) to a [Field](Field.md). `false` becomes 0 and `true` becomes 1.

#### Returns

[`Field`](Field.md)

***

### toFields()

```ts
toFields(): Field[]
```

Defined in: [lib/provable/bool.ts:191](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L191)

Serializes this [Bool](Bool.md) into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

***

### toJSON()

```ts
toJSON(): boolean
```

Defined in: [lib/provable/bool.ts:207](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L207)

Serialize the [Bool](Bool.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`boolean`

***

### toString()

```ts
toString(): string
```

Defined in: [lib/provable/bool.ts:199](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L199)

Serialize the [Bool](Bool.md) to a string, e.g. for printing.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

***

### allTrue()

```ts
static allTrue(list: (boolean | Bool)[]): Bool
```

Defined in: [lib/provable/bool.ts:263](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L263)

Boolean AND operation across a list of booleans, returns `Bool(true)` if all elements in the list are true.

#### Parameters

##### list

(`boolean` \| [`Bool`](Bool.md))[]

#### Returns

[`Bool`](Bool.md)

***

### and()

```ts
static and(x: boolean | Bool, y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:243](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L243)

Boolean AND operation.

#### Parameters

##### x

`boolean` | [`Bool`](Bool.md)

##### y

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

***

### anyTrue()

```ts
static anyTrue(list: (boolean | Bool)[]): Bool
```

Defined in: [lib/provable/bool.ts:280](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L280)

Boolean OR operation across a list of booleans, returns `Bool(true)` if any element in the list is true.

#### Parameters

##### list

(`boolean` \| [`Bool`](Bool.md))[]

#### Returns

[`Bool`](Bool.md)

***

### assertEqual()

```ts
static assertEqual(x: Bool, y: boolean | Bool): void
```

Defined in: [lib/provable/bool.ts:297](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L297)

Asserts if both [Bool](Bool.md) are equal.

#### Parameters

##### x

[`Bool`](Bool.md)

##### y

`boolean` | [`Bool`](Bool.md)

#### Returns

`void`

***

### check()

```ts
static check(x: Bool): void
```

Defined in: [lib/provable/bool.ts:402](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L402)

#### Parameters

##### x

[`Bool`](Bool.md)

#### Returns

`void`

***

### empty()

```ts
static empty(): Bool
```

Defined in: [lib/provable/bool.ts:377](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L377)

#### Returns

[`Bool`](Bool.md)

***

### equal()

```ts
static equal(x: boolean | Bool, y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:308](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L308)

Checks two [Bool](Bool.md) for equality.

#### Parameters

##### x

`boolean` | [`Bool`](Bool.md)

##### y

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

***

### fromBytes()

```ts
static fromBytes(bytes: number[]): Bool
```

Defined in: [lib/provable/bool.ts:389](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L389)

#### Parameters

##### bytes

`number`[]

#### Returns

[`Bool`](Bool.md)

***

### fromFields()

```ts
static fromFields(fields: Field[]): Bool
```

Defined in: [lib/provable/bool.ts:332](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L332)

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

##### fields

[`Field`](Field.md)[]

#### Returns

[`Bool`](Bool.md)

***

### fromJSON()

```ts
static fromJSON(b: boolean): Bool
```

Defined in: [lib/provable/bool.ts:366](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L366)

Deserialize a JSON structure into a [Bool](Bool.md).
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

##### b

`boolean`

#### Returns

[`Bool`](Bool.md)

***

### fromValue()

```ts
static fromValue(b: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:349](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L349)

`Provable<Bool>.fromValue()`

#### Parameters

##### b

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

***

### not()

```ts
static not(x: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:233](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L233)

Boolean negation.

#### Parameters

##### x

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

***

### or()

```ts
static or(x: boolean | Bool, y: boolean | Bool): Bool
```

Defined in: [lib/provable/bool.ts:253](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L253)

Boolean OR operation.

#### Parameters

##### x

`boolean` | [`Bool`](Bool.md)

##### y

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

***

### readBytes()

```ts
static readBytes<N>(bytes: number[], offset: NonNegativeInteger<N>): [Bool, number]
```

Defined in: [lib/provable/bool.ts:393](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L393)

#### Type Parameters

• **N** *extends* `number`

#### Parameters

##### bytes

`number`[]

##### offset

`NonNegativeInteger`\<`N`\>

#### Returns

\[[`Bool`](Bool.md), `number`\]

***

### sizeInFields()

```ts
static sizeInFields(): number
```

Defined in: [lib/provable/bool.ts:373](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L373)

Returns the size of this type.

#### Returns

`number`

***

### toAuxiliary()

```ts
static toAuxiliary(_?: Bool): []
```

Defined in: [lib/provable/bool.ts:325](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L325)

Static method to serialize a [Bool](Bool.md) into its auxiliary data.

#### Parameters

##### \_?

[`Bool`](Bool.md)

#### Returns

\[\]

***

### toBytes()

```ts
static toBytes(b: Bool): number[]
```

Defined in: [lib/provable/bool.ts:385](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L385)

#### Parameters

##### b

[`Bool`](Bool.md)

#### Returns

`number`[]

***

### toField()

```ts
static toField(x: boolean | Bool): Field
```

Defined in: [lib/provable/bool.ts:226](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L226)

#### Parameters

##### x

`boolean` | [`Bool`](Bool.md)

#### Returns

[`Field`](Field.md)

***

### toFields()

```ts
static toFields(x: Bool): Field[]
```

Defined in: [lib/provable/bool.ts:318](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L318)

Static method to serialize a [Bool](Bool.md) into an array of [Field](Field.md) elements.

#### Parameters

##### x

[`Bool`](Bool.md)

#### Returns

[`Field`](Field.md)[]

***

### toInput()

```ts
static toInput(x: Bool): {
  packed: [Field, number][];
}
```

Defined in: [lib/provable/bool.ts:381](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L381)

#### Parameters

##### x

[`Bool`](Bool.md)

#### Returns

```ts
{
  packed: [Field, number][];
}
```

##### packed

```ts
packed: [Field, number][];
```

***

### toJSON()

```ts
static toJSON(x: Bool): boolean
```

Defined in: [lib/provable/bool.ts:358](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L358)

Serialize a [Bool](Bool.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

##### x

[`Bool`](Bool.md)

#### Returns

`boolean`

***

### toValue()

```ts
static toValue(x: Bool): boolean
```

Defined in: [lib/provable/bool.ts:342](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/bool.ts#L342)

`Provable<Bool>.toValue()`

#### Parameters

##### x

[`Bool`](Bool.md)

#### Returns

`boolean`
