Defined in: [lib/provable/int.ts:1028](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1028)

## Extends

- `CircuitValue`

## Constructors

### new Sign()

```ts
new Sign(...props: any[]): Sign
```

Defined in: [lib/provable/types/circuit-value.ts:13](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L13)

#### Parameters

##### props

...`any`[]

#### Returns

[`Sign`](Sign.md)

#### Inherited from

```ts
CircuitValue.constructor
```

## Properties

### value

```ts
value: Field;
```

Defined in: [lib/provable/int.ts:1029](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1029)

## Accessors

### minusOne

#### Get Signature

```ts
get static minusOne(): Sign
```

Defined in: [lib/provable/int.ts:1034](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1034)

##### Returns

[`Sign`](Sign.md)

***

### one

#### Get Signature

```ts
get static one(): Sign
```

Defined in: [lib/provable/int.ts:1031](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1031)

##### Returns

[`Sign`](Sign.md)

## Methods

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

### isNegative()

```ts
isNegative(): Bool
```

Defined in: [lib/provable/int.ts:1064](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1064)

#### Returns

[`Bool`](Bool.md)

***

### isPositive()

```ts
isPositive(): Bool
```

Defined in: [lib/provable/int.ts:1061](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1061)

#### Returns

[`Bool`](Bool.md)

***

### mul()

```ts
mul(y: Sign): Sign
```

Defined in: [lib/provable/int.ts:1058](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1058)

#### Parameters

##### y

[`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

***

### neg()

```ts
neg(): Sign
```

Defined in: [lib/provable/int.ts:1055](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1055)

#### Returns

[`Sign`](Sign.md)

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

Defined in: [lib/provable/int.ts:1068](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1068)

Returns a string representation of an object.

#### Returns

`string`

***

### check()

```ts
static check(x: Sign): void
```

Defined in: [lib/provable/int.ts:1037](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1037)

#### Parameters

##### x

[`Sign`](Sign.md)

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

Defined in: [lib/provable/int.ts:1041](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1041)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Returns

`InstanceType`\<`T`\>

#### Overrides

```ts
CircuitValue.empty
```

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
static fromJSON<T>(x: "Positive" | "Negative"): InstanceType<T>
```

Defined in: [lib/provable/int.ts:1052](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1052)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### x

`"Positive"` | `"Negative"`

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
static fromValue<T>(x: number | bigint | Sign): InstanceType<T>
```

Defined in: [lib/provable/int.ts:1076](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1076)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### x

`number` | `bigint` | [`Sign`](Sign.md)

#### Returns

`InstanceType`\<`T`\>

#### Overrides

```ts
CircuitValue.fromValue
```

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
static toInput(x: Sign): HashInput
```

Defined in: [lib/provable/int.ts:1044](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1044)

#### Parameters

##### x

[`Sign`](Sign.md)

#### Returns

`HashInput`

#### Overrides

```ts
CircuitValue.toInput
```

***

### toJSON()

```ts
static toJSON(x: Sign): "Positive" | "Negative"
```

Defined in: [lib/provable/int.ts:1047](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1047)

#### Parameters

##### x

[`Sign`](Sign.md)

#### Returns

`"Positive"` \| `"Negative"`

#### Overrides

```ts
CircuitValue.toJSON
```

***

### toValue()

```ts
static toValue(x: Sign): Sign
```

Defined in: [lib/provable/int.ts:1072](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/int.ts#L1072)

#### Parameters

##### x

[`Sign`](Sign.md)

#### Returns

`Sign`

#### Overrides

```ts
CircuitValue.toValue
```
