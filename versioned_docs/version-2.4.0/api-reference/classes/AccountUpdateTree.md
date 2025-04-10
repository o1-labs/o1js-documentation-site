Defined in: [lib/mina/v1/account-update.ts:1358](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1358)

Class which represents a tree of account updates,
in a compressed way which allows iterating and selectively witnessing the account updates.

The (recursive) type signature is:
```
type AccountUpdateTree = {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
};
type AccountUpdateForest = MerkleList<AccountUpdateTree>;
```

## Extends

- \{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`AccountUpdateForest`](AccountUpdateForest.md);
  `id`: `number`;
 \}

## Constructors

### new AccountUpdateTree()

```ts
new AccountUpdateTree(value: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }): AccountUpdateTree
```

Defined in: [lib/provable/types/struct.ts:265](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L265)

#### Parameters

##### value

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).constructor
```

## Properties

### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

Defined in: [lib/mina/v1/account-update.ts:1360](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1360)

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).accountUpdate
```

***

### children

```ts
children: AccountUpdateForest = AccountUpdateForest;
```

Defined in: [lib/mina/v1/account-update.ts:1361](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1361)

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).children
```

***

### id

```ts
id: number = RandomId;
```

Defined in: [lib/mina/v1/account-update.ts:1359](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1359)

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).id
```

***

### \_isStruct

```ts
static _isStruct: true;
```

Defined in: [lib/provable/types/struct.ts:265](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L265)

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
})._isStruct
```

***

### check()

```ts
static check: (value: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }) => void;
```

Defined in: [lib/provable/types/provable-intf.ts:76](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L76)

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

the element of type `T` to put assertions on.

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

#### Returns

`void`

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).check
```

***

### fromValue()

```ts
static fromValue: (x: any) => {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
};
```

Defined in: [lib/provable/types/provable-intf.ts:86](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L86)

Convert provable type from a normal JS type.

#### Parameters

##### x

`any`

#### Returns

```ts
{
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
}
```

##### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

##### children

```ts
children: AccountUpdateForest = AccountUpdateForest;
```

##### id

```ts
id: number = RandomId;
```

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).fromValue
```

***

### toAuxiliary()

```ts
static toAuxiliary: (value?: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }) => any[];
```

Defined in: [lib/provable/types/provable-intf.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L47)

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).toAuxiliary
```

***

### toCanonical()?

```ts
static optional toCanonical: (x: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }) => {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
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

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

#### Returns

```ts
{
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
}
```

##### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

##### children

```ts
children: AccountUpdateForest = AccountUpdateForest;
```

##### id

```ts
id: number = RandomId;
```

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).toCanonical
```

***

### toFields()

```ts
static toFields: (value: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }) => Field[];
```

Defined in: [lib/provable/types/provable-intf.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L36)

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the [Field](Field.md) array from.

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).toFields
```

***

### toInput()

```ts
static toInput: (x: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }) => {
  fields: Field[];
  packed: [Field, number][];
};
```

Defined in: [lib/provable/types/struct.ts:268](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L268)

#### Parameters

##### x

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

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
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).toInput
```

***

### toValue()

```ts
static toValue: (x: {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
  id: number;
 }) => any;
```

Defined in: [lib/provable/types/provable-intf.ts:81](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L81)

Convert provable type to a normal JS type.

#### Parameters

##### x

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`AccountUpdateForest`](AccountUpdateForest.md) = `AccountUpdateForest`

###### id

`number` = `RandomId`

#### Returns

`any`

#### Inherited from

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).toValue
```

## Methods

### approve()

```ts
approve(update: 
  | AccountUpdate
  | AccountUpdateTree, hash?: Field): void
```

Defined in: [lib/mina/v1/account-update.ts:1380](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1380)

Add an [AccountUpdate](AccountUpdate.md) or [AccountUpdateTree](AccountUpdateTree.md) to the children of this tree's root.

See [AccountUpdate.approve](AccountUpdate.md#approve).

#### Parameters

##### update

[`AccountUpdate`](AccountUpdate.md) | [`AccountUpdateTree`](AccountUpdateTree.md)

##### hash?

[`Field`](Field.md)

#### Returns

`void`

***

### empty()

```ts
static empty(): AccountUpdateTree
```

Defined in: [lib/mina/v1/account-update.ts:1393](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1393)

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Overrides

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).empty
```

***

### from()

```ts
static from(update: 
  | AccountUpdate
  | AccountUpdateTree, hash?: Field): AccountUpdateTree
```

Defined in: [lib/mina/v1/account-update.ts:1366](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1366)

Create a tree of account updates which only consists of a root.

#### Parameters

##### update

[`AccountUpdate`](AccountUpdate.md) | [`AccountUpdateTree`](AccountUpdateTree.md)

##### hash?

[`Field`](Field.md)

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

***

### fromFields()

```ts
static fromFields(fields: Field[], aux: any): AccountUpdateTree
```

Defined in: [lib/mina/v1/account-update.ts:1390](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1390)

#### Parameters

##### fields

[`Field`](Field.md)[]

##### aux

`any`

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Overrides

```ts
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).fromFields
```

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
StructNoJson({
  id: RandomId,
  accountUpdate: HashedAccountUpdate,
  children: AccountUpdateForest,
}).sizeInFields
```
