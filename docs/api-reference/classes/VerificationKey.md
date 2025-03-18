Defined in: [lib/proof-system/zkprogram.ts:613](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L613)

## Extends

- \{
  `data`: `string`;
  `hash`: [`Field`](Field.md);
 \}

## Constructors

### new VerificationKey()

```ts
new VerificationKey(value: {
  data: string;
  hash: Field;
 }): VerificationKey
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Parameters

##### value

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

[`VerificationKey`](VerificationKey.md)

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).constructor
```

## Properties

### data

```ts
data: string = String;
```

Defined in: [lib/proof-system/zkprogram.ts:614](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L614)

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).data
```

***

### hash

```ts
hash: Field = Field;
```

Defined in: [lib/proof-system/zkprogram.ts:614](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L614)

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).hash
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
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
})._isStruct
```

***

### check()

```ts
static check: (value: {
  data: string;
  hash: Field;
 }) => void;
```

Defined in: [lib/provable/types/provable-intf.ts:76](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L76)

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

the element of type `T` to put assertions on.

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

`void`

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).check
```

***

### empty()

```ts
static empty: () => {
  data: string;
  hash: Field;
};
```

Defined in: [lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L143)

#### Returns

```ts
{
  data: string;
  hash: Field;
}
```

##### data

```ts
data: string = String;
```

##### hash

```ts
hash: Field = Field;
```

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).empty
```

***

### fromFields()

```ts
static fromFields: (fields: Field[], aux: any[]) => {
  data: string;
  hash: Field;
};
```

Defined in: [lib/provable/types/provable-intf.ts:59](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L59)

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](VerificationKey.md#tofields) and [toAuxiliary](VerificationKey.md#toauxiliary) methods on an element of type `T`.

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
  data: string;
  hash: Field;
}
```

An element of type `T` generated from the given provable and "auxiliary" data.

##### data

```ts
data: string = String;
```

##### hash

```ts
hash: Field = Field;
```

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromFields
```

***

### fromJSON()

```ts
static fromJSON: (x: string) => {
  data: string;
  hash: Field;
};
```

Defined in: [lib/provable/types/struct.ts:142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L142)

#### Parameters

##### x

`string`

#### Returns

```ts
{
  data: string;
  hash: Field;
}
```

##### data

```ts
data: string = String;
```

##### hash

```ts
hash: Field = Field;
```

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromJSON
```

***

### fromValue

```ts
static fromValue: (x: 
  | {
  data: string;
  hash: Field;
 }
  | {
  data: string;
  hash: bigint;
 }) => {
  data: string;
  hash: Field;
 } & (value: 
  | {
  data: string;
  hash: Field;
 }
  | {
  data: string;
  hash: bigint;
 }) => {
  data: string;
  hash: Field;
};
```

Defined in: [lib/provable/types/provable-intf.ts:86](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L86)

Convert provable type from a normal JS type.

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromValue
```

***

### toAuxiliary()

```ts
static toAuxiliary: (value?: {
  data: string;
  hash: Field;
 }) => any[];
```

Defined in: [lib/provable/types/provable-intf.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L47)

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toAuxiliary
```

***

### toCanonical()?

```ts
static optional toCanonical: (x: {
  data: string;
  hash: Field;
 }) => {
  data: string;
  hash: Field;
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

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

```ts
{
  data: string;
  hash: Field;
}
```

##### data

```ts
data: string = String;
```

##### hash

```ts
hash: Field = Field;
```

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toCanonical
```

***

### toFields()

```ts
static toFields: (value: {
  data: string;
  hash: Field;
 }) => Field[];
```

Defined in: [lib/provable/types/provable-intf.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L36)

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the [Field](Field.md) array from.

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toFields
```

***

### toInput()

```ts
static toInput: (x: {
  data: string;
  hash: Field;
 }) => {
  fields: Field[];
  packed: [Field, number][];
};
```

Defined in: [lib/provable/types/struct.ts:137](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L137)

#### Parameters

##### x

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

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
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toInput
```

***

### toJSON()

```ts
static toJSON: (x: {
  data: string;
  hash: Field;
 }) => string;
```

Defined in: [lib/provable/types/struct.ts:141](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L141)

#### Parameters

##### x

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

`string`

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toJSON
```

***

### toValue()

```ts
static toValue: (x: {
  data: string;
  hash: Field;
 }) => {
  data: string;
  hash: bigint;
};
```

Defined in: [lib/provable/types/provable-intf.ts:81](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L81)

Convert provable type to a normal JS type.

#### Parameters

##### x

###### data

`string` = `String`

###### hash

[`Field`](Field.md) = `Field`

#### Returns

```ts
{
  data: string;
  hash: bigint;
}
```

##### data

```ts
data: string = String;
```

##### hash

```ts
hash: bigint = Field;
```

#### Inherited from

```ts
Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toValue
```

## Methods

### dummy()

```ts
static dummy(): Promise<VerificationKey>
```

Defined in: [lib/proof-system/zkprogram.ts:619](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L619)

#### Returns

`Promise`\<[`VerificationKey`](VerificationKey.md)\>

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
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).sizeInFields
```
