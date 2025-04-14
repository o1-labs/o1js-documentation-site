Defined in: [lib/provable/crypto/poseidon.ts:242](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/poseidon.ts#L242)

## Extends

- \{
  `field`: [`Field`](Field.md);
  `symbol`: `string`;
 \}

## Constructors

### new TokenSymbol()

```ts
new TokenSymbol(value: {
  field: Field;
  symbol: string;
 }): TokenSymbol
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Parameters

##### value

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

[`TokenSymbol`](TokenSymbol.md)

#### Inherited from

```ts
Struct(TokenSymbolPure).constructor
```

## Properties

### field

```ts
field: Field;
```

Defined in: [lib/provable/crypto/poseidon.ts:201](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/poseidon.ts#L201)

#### Inherited from

```ts
Struct(TokenSymbolPure).field
```

***

### symbol

```ts
symbol: string;
```

Defined in: [lib/provable/crypto/poseidon.ts:201](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/poseidon.ts#L201)

#### Inherited from

```ts
Struct(TokenSymbolPure).symbol
```

***

### \_isStruct

```ts
static _isStruct: true;
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Inherited from

```ts
Struct(TokenSymbolPure)._isStruct
```

***

### check()

```ts
static check: (value: {
  field: Field;
  symbol: string;
 }) => void;
```

Defined in: [lib/provable/types/provable-intf.ts:76](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L76)

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

the element of type `T` to put assertions on.

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

`void`

#### Inherited from

```ts
Struct(TokenSymbolPure).check
```

***

### empty()

```ts
static empty: () => {
  field: Field;
  symbol: string;
};
```

Defined in: [lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L143)

#### Returns

```ts
{
  field: Field;
  symbol: string;
}
```

##### field

```ts
field: Field;
```

##### symbol

```ts
symbol: string;
```

#### Inherited from

```ts
Struct(TokenSymbolPure).empty
```

***

### fromFields()

```ts
static fromFields: (fields: Field[], aux: any[]) => {
  field: Field;
  symbol: string;
};
```

Defined in: [lib/provable/types/provable-intf.ts:59](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L59)

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](TokenSymbol.md#tofields) and [toAuxiliary](TokenSymbol.md#toauxiliary) methods on an element of type `T`.

#### Parameters

##### fields

[`Field`](Field.md)[]

an array of [Field](Field.md) elements describing the provable data of the new `T` element.

##### aux

`any`[]

an array of any type describing the "auxiliary" data of the new `T` element, optional.

#### Returns

```ts
{
  field: Field;
  symbol: string;
}
```

An element of type `T` generated from the given provable and "auxiliary" data.

##### field

```ts
field: Field;
```

##### symbol

```ts
symbol: string;
```

#### Inherited from

```ts
Struct(TokenSymbolPure).fromFields
```

***

### fromJSON()

```ts
static fromJSON: (x: string) => {
  field: Field;
  symbol: string;
};
```

Defined in: [lib/provable/types/struct.ts:142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L142)

#### Parameters

##### x

`string`

#### Returns

```ts
{
  field: Field;
  symbol: string;
}
```

##### field

```ts
field: Field;
```

##### symbol

```ts
symbol: string;
```

#### Inherited from

```ts
Struct(TokenSymbolPure).fromJSON
```

***

### fromValue

```ts
static fromValue: (x: 
  | string
  | {
  field: Field;
  symbol: string;
 }) => {
  field: Field;
  symbol: string;
 } & (value: 
  | string
  | {
  field: Field;
  symbol: string;
 }) => {
  field: Field;
  symbol: string;
};
```

Defined in: [lib/provable/types/provable-intf.ts:86](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L86)

Convert provable type from a normal JS type.

#### Inherited from

```ts
Struct(TokenSymbolPure).fromValue
```

***

### toAuxiliary()

```ts
static toAuxiliary: (value?: {
  field: Field;
  symbol: string;
 }) => any[];
```

Defined in: [lib/provable/types/provable-intf.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L47)

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

```ts
Struct(TokenSymbolPure).toAuxiliary
```

***

### toCanonical()?

```ts
static optional toCanonical: (x: {
  field: Field;
  symbol: string;
 }) => {
  field: Field;
  symbol: string;
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

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

```ts
{
  field: Field;
  symbol: string;
}
```

##### field

```ts
field: Field;
```

##### symbol

```ts
symbol: string;
```

#### Inherited from

```ts
Struct(TokenSymbolPure).toCanonical
```

***

### toFields()

```ts
static toFields: (value: {
  field: Field;
  symbol: string;
 }) => Field[];
```

Defined in: [lib/provable/types/provable-intf.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L36)

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the [Field](Field.md) array from.

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

```ts
Struct(TokenSymbolPure).toFields
```

***

### toInput()

```ts
static toInput: (x: {
  field: Field;
  symbol: string;
 }) => {
  fields: Field[];
  packed: [Field, number][];
};
```

Defined in: [lib/provable/types/struct.ts:137](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L137)

#### Parameters

##### x

###### field

[`Field`](Field.md)

###### symbol

`string`

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
Struct(TokenSymbolPure).toInput
```

***

### toJSON()

```ts
static toJSON: (x: {
  field: Field;
  symbol: string;
 }) => string;
```

Defined in: [lib/provable/types/struct.ts:141](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L141)

#### Parameters

##### x

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

`string`

#### Inherited from

```ts
Struct(TokenSymbolPure).toJSON
```

***

### toValue()

```ts
static toValue: (x: {
  field: Field;
  symbol: string;
 }) => string;
```

Defined in: [lib/provable/types/provable-intf.ts:81](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L81)

Convert provable type to a normal JS type.

#### Parameters

##### x

###### field

[`Field`](Field.md)

###### symbol

`string`

#### Returns

`string`

#### Inherited from

```ts
Struct(TokenSymbolPure).toValue
```

## Methods

### from()

```ts
static from(value: string | TokenSymbol): TokenSymbol
```

Defined in: [lib/provable/crypto/poseidon.ts:243](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/poseidon.ts#L243)

#### Parameters

##### value

`string` | [`TokenSymbol`](TokenSymbol.md)

#### Returns

[`TokenSymbol`](TokenSymbol.md)

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
Struct(TokenSymbolPure).sizeInFields
```
