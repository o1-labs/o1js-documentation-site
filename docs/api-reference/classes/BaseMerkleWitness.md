Defined in: [lib/provable/merkle-tree.ts:168](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L168)

The [BaseMerkleWitness](BaseMerkleWitness.md) class defines a circuit-compatible base class for [Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof).

## Extends

- `CircuitValue`

## Constructors

### new BaseMerkleWitness()

```ts
new BaseMerkleWitness(witness: Witness): BaseMerkleWitness
```

Defined in: [lib/provable/merkle-tree.ts:181](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L181)

Takes a [Witness](../type-aliases/Witness.md) and turns it into a circuit-compatible Witness.

#### Parameters

##### witness

[`Witness`](../type-aliases/Witness.md)

Witness.

#### Returns

[`BaseMerkleWitness`](BaseMerkleWitness.md)

A circuit-compatible Witness.

#### Overrides

```ts
CircuitValue.constructor
```

## Properties

### isLeft

```ts
isLeft: Bool[];
```

Defined in: [lib/provable/merkle-tree.ts:171](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L171)

***

### path

```ts
path: Field[];
```

Defined in: [lib/provable/merkle-tree.ts:170](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L170)

***

### height

```ts
static height: number;
```

Defined in: [lib/provable/merkle-tree.ts:169](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L169)

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

### calculateIndex()

```ts
calculateIndex(): Field
```

Defined in: [lib/provable/merkle-tree.ts:215](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L215)

Calculates the index of the leaf node that belongs to this Witness.

#### Returns

[`Field`](Field.md)

Index of the leaf.

***

### calculateRoot()

```ts
calculateRoot(leaf: Field): Field
```

Defined in: [lib/provable/merkle-tree.ts:198](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L198)

Calculates a root depending on the leaf value.

#### Parameters

##### leaf

[`Field`](Field.md)

Value of the leaf node that belongs to this Witness.

#### Returns

[`Field`](Field.md)

The calculated root.

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

### height()

```ts
height(): number
```

Defined in: [lib/provable/merkle-tree.ts:172](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-tree.ts#L172)

#### Returns

`number`

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

### check()

```ts
static check<T>(this: T, v: InstanceType<T>): void
```

Defined in: [lib/provable/types/circuit-value.ts:148](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L148)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### v

`InstanceType`\<`T`\>

#### Returns

`void`

#### Inherited from

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
static fromJSON<T>(this: T, value: any): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:186](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L186)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### value

`any`

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

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
static fromValue<T>(this: T, value: any): InstanceType<T>
```

Defined in: [lib/provable/types/circuit-value.ts:92](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L92)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### value

`any`

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

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
static toInput<T>(this: T, v: InstanceType<T>): HashInput
```

Defined in: [lib/provable/types/circuit-value.ts:60](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L60)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### v

`InstanceType`\<`T`\>

#### Returns

`HashInput`

#### Inherited from

```ts
CircuitValue.toInput
```

***

### toJSON()

```ts
static toJSON<T>(this: T, v: InstanceType<T>): any
```

Defined in: [lib/provable/types/circuit-value.ts:175](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L175)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### v

`InstanceType`\<`T`\>

#### Returns

`any`

#### Inherited from

```ts
CircuitValue.toJSON
```

***

### toValue()

```ts
static toValue<T>(this: T, v: InstanceType<T>): any
```

Defined in: [lib/provable/types/circuit-value.ts:83](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/circuit-value.ts#L83)

#### Type Parameters

• **T** *extends* `AnyConstructor`

#### Parameters

##### this

`T`

##### v

`InstanceType`\<`T`\>

#### Returns

`any`

#### Inherited from

```ts
CircuitValue.toValue
```
