```ts
type Provable<T, TValue> = {
  check: (value: T) => void;
  fromFields: (fields: Field[], aux: any[]) => T;
  fromValue: (x: TValue | T) => T;
  toAuxiliary: (value?: T) => any[];
  toCanonical: (x: T) => T;
  toFields: (value: T) => Field[];
  toValue: (x: T) => TValue;
  sizeInFields: number;
};
```

Defined in: [lib/provable/types/provable-intf.ts:27](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L27)

`Provable<T>` is the general interface for provable types in o1js.

`Provable<T>` describes how a type `T` is made up of [Field](../classes/Field.md) elements and "auxiliary" (non-provable) data.

`Provable<T>` is the required input type in several methods in o1js.
One convenient way to create a `Provable<T>` is using `Struct`.

All built-in provable types in o1js ([Field](../classes/Field.md), [Bool](../classes/Bool.md), etc.) are instances of `Provable<T>` as well.

Note: These methods are meant to be used by the library internally and are not directly when writing provable code.

## Type Parameters

• **T**

• **TValue** = `any`

## Type declaration

### check()

```ts
check: (value: T) => void;
```

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../classes/Bool.md) asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

`T`

the element of type `T` to put assertions on.

#### Returns

`void`

### fromFields()

```ts
fromFields: (fields: Field[], aux: any[]) => T;
```

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](Provable.md#tofields) and [toAuxiliary](Provable.md#toauxiliary) methods on an element of type `T`.

#### Parameters

##### fields

[`Field`](../classes/Field.md)[]

an array of [Field](../classes/Field.md) elements describing the provable data of the new `T` element.

##### aux

`any`[]

an array of any type describing the "auxiliary" data of the new `T` element, optional.

#### Returns

`T`

An element of type `T` generated from the given provable and "auxiliary" data.

### fromValue()

```ts
fromValue: (x: TValue | T) => T;
```

Convert provable type from a normal JS type.

#### Parameters

##### x

`TValue` | `T`

#### Returns

`T`

### toAuxiliary()

```ts
toAuxiliary: (value?: T) => any[];
```

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

`T`

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

### toCanonical()?

```ts
optional toCanonical: (x: T) => T;
```

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

`T`

#### Returns

`T`

### toFields()

```ts
toFields: (value: T) => Field[];
```

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../classes/Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

`T`

the element of type `T` to generate the [Field](../classes/Field.md) array from.

#### Returns

[`Field`](../classes/Field.md)[]

A [Field](../classes/Field.md) array describing how this `T` element is made up of [Field](../classes/Field.md) elements.

### toValue()

```ts
toValue: (x: T) => TValue;
```

Convert provable type to a normal JS type.

#### Parameters

##### x

`T`

#### Returns

`TValue`

### sizeInFields()

Return the size of the `T` type in terms of [Field](../classes/Field.md) type, as [Field](../classes/Field.md) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../classes/Field.md) type.
