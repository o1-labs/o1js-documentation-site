Defined in: [index.ts:153](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/index.ts#L153)

Commitments that keep track of the current state of an offchain Merkle tree constructed from actions.
Intended to be stored on-chain.

Fields:
- `root`: The root of the current Merkle tree
- `actionState`: The hash pointing to the list of actions that have been applied to form the current Merkle tree

## Extends

- `OffchainStateCommitments`

## Constructors

### new OffchainStateCommitments()

```ts
new OffchainStateCommitments(value: {
  actionState: Field;
  length: Field;
  root: Field;
 }): OffchainStateCommitments
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Parameters

##### value

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

[`OffchainStateCommitments`](OffchainStateCommitments.md)

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.constructor
```

## Properties

### actionState

```ts
actionState: Field = Field;
```

Defined in: [lib/mina/v1/actions/offchain-state-rollup.ts:45](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/offchain-state-rollup.ts#L45)

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.actionState
```

***

### length

```ts
length: Field = Field;
```

Defined in: [lib/mina/v1/actions/offchain-state-rollup.ts:42](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/offchain-state-rollup.ts#L42)

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.length
```

***

### root

```ts
root: Field = Field;
```

Defined in: [lib/mina/v1/actions/offchain-state-rollup.ts:41](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/offchain-state-rollup.ts#L41)

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.root
```

***

### \_isStruct

```ts
static _isStruct: true;
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments._isStruct
```

***

### check()

```ts
static check: (value: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => void;
```

Defined in: [lib/provable/types/provable-intf.ts:76](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L76)

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

the element of type `T` to put assertions on.

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

`void`

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.check
```

***

### empty()

```ts
static empty: () => {
  actionState: Field;
  length: Field;
  root: Field;
};
```

Defined in: [lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L143)

#### Returns

```ts
{
  actionState: Field;
  length: Field;
  root: Field;
}
```

##### actionState

```ts
actionState: Field = Field;
```

##### length

```ts
length: Field = Field;
```

##### root

```ts
root: Field = Field;
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.empty
```

***

### fromFields()

```ts
static fromFields: (fields: Field[]) => {
  actionState: Field;
  length: Field;
  root: Field;
};
```

Defined in: [lib/provable/types/provable-intf.ts:115](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L115)

#### Parameters

##### fields

[`Field`](../../../classes/Field.md)[]

#### Returns

```ts
{
  actionState: Field;
  length: Field;
  root: Field;
}
```

##### actionState

```ts
actionState: Field = Field;
```

##### length

```ts
length: Field = Field;
```

##### root

```ts
root: Field = Field;
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.fromFields
```

***

### fromJSON()

```ts
static fromJSON: (x: {
  actionState: string;
  length: string;
  root: string;
 }) => {
  actionState: Field;
  length: Field;
  root: Field;
};
```

Defined in: [lib/provable/types/struct.ts:142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L142)

#### Parameters

##### x

###### actionState

`string` = `Field`

###### length

`string` = `Field`

###### root

`string` = `Field`

#### Returns

```ts
{
  actionState: Field;
  length: Field;
  root: Field;
}
```

##### actionState

```ts
actionState: Field = Field;
```

##### length

```ts
length: Field = Field;
```

##### root

```ts
root: Field = Field;
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.fromJSON
```

***

### fromValue

```ts
static fromValue: (x: 
  | {
  actionState: Field;
  length: Field;
  root: Field;
 }
  | {
  actionState: bigint;
  length: bigint;
  root: bigint;
 }) => {
  actionState: Field;
  length: Field;
  root: Field;
 } & (value: {
  actionState: string | number | bigint | Field;
  length: string | number | bigint | Field;
  root: string | number | bigint | Field;
 }) => {
  actionState: Field;
  length: Field;
  root: Field;
};
```

Defined in: [lib/provable/types/provable-intf.ts:86](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L86)

Convert provable type from a normal JS type.

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.fromValue
```

***

### toAuxiliary()

```ts
static toAuxiliary: (value?: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => any[];
```

Defined in: [lib/provable/types/provable-intf.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L47)

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.toAuxiliary
```

***

### toCanonical()?

```ts
static optional toCanonical: (x: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => {
  actionState: Field;
  length: Field;
  root: Field;
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

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

```ts
{
  actionState: Field;
  length: Field;
  root: Field;
}
```

##### actionState

```ts
actionState: Field = Field;
```

##### length

```ts
length: Field = Field;
```

##### root

```ts
root: Field = Field;
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.toCanonical
```

***

### toFields()

```ts
static toFields: (value: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => Field[];
```

Defined in: [lib/provable/types/provable-intf.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L36)

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

[`Field`](../../../classes/Field.md)[]

A [Field](../../../classes/Field.md) array describing how this `T` element is made up of [Field](../../../classes/Field.md) elements.

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.toFields
```

***

### toInput()

```ts
static toInput: (x: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => {
  fields: Field[];
  packed: [Field, number][];
};
```

Defined in: [lib/provable/types/struct.ts:137](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L137)

#### Parameters

##### x

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

```ts
{
  fields: Field[];
  packed: [Field, number][];
}
```

##### fields?

```ts
optional fields: Field[];
```

##### packed?

```ts
optional packed: [Field, number][];
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.toInput
```

***

### toJSON()

```ts
static toJSON: (x: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => {
  actionState: string;
  length: string;
  root: string;
};
```

Defined in: [lib/provable/types/struct.ts:141](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L141)

#### Parameters

##### x

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

```ts
{
  actionState: string;
  length: string;
  root: string;
}
```

##### actionState

```ts
actionState: string = Field;
```

##### length

```ts
length: string = Field;
```

##### root

```ts
root: string = Field;
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.toJSON
```

***

### toValue()

```ts
static toValue: (x: {
  actionState: Field;
  length: Field;
  root: Field;
 }) => {
  actionState: bigint;
  length: bigint;
  root: bigint;
};
```

Defined in: [lib/provable/types/provable-intf.ts:81](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L81)

Convert provable type to a normal JS type.

#### Parameters

##### x

###### actionState

[`Field`](../../../classes/Field.md) = `Field`

###### length

[`Field`](../../../classes/Field.md) = `Field`

###### root

[`Field`](../../../classes/Field.md) = `Field`

#### Returns

```ts
{
  actionState: bigint;
  length: bigint;
  root: bigint;
}
```

##### actionState

```ts
actionState: bigint = Field;
```

##### length

```ts
length: bigint = Field;
```

##### root

```ts
root: bigint = Field;
```

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.toValue
```

## Methods

### emptyFromHeight()

```ts
static emptyFromHeight(height: number): OffchainStateCommitments
```

Defined in: [lib/mina/v1/actions/offchain-state-rollup.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/offchain-state-rollup.ts#L47)

#### Parameters

##### height

`number`

#### Returns

`OffchainStateCommitments`

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.emptyFromHeight
```

***

### sizeInFields()

```ts
static sizeInFields(): number
```

Defined in: [lib/provable/types/provable-intf.ts:66](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L66)

Return the size of the `T` type in terms of [Field](../../../classes/Field.md) type, as [Field](../../../classes/Field.md) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../../../classes/Field.md) type.

#### Inherited from

```ts
OffchainState_.OffchainStateCommitments.sizeInFields
```
