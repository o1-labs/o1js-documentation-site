Defined in: [lib/mina/v1/account-update.ts:1278](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1278)

Class which represents a forest (list of trees) of account updates,
in a compressed way which allows iterating and selectively witnessing the account updates.

The (recursive) type signature is:
```
type AccountUpdateForest = MerkleList<AccountUpdateTree>;
type AccountUpdateTree = {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
};
```

## Extends

- [`MerkleList`](MerkleList.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}, `this`\>

## Constructors

### new AccountUpdateForest()

```ts
new AccountUpdateForest(__namedParameters: MerkleListBase<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
 }>): AccountUpdateForest
```

Defined in: [lib/provable/merkle-list.ts:85](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L85)

#### Parameters

##### \_\_namedParameters

[`MerkleListBase`](../type-aliases/MerkleListBase.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}\>

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Inherited from

[`MerkleList`](MerkleList.md).[`constructor`](MerkleList.md#constructors)

## Properties

### data

```ts
data: Unconstrained<WithHash<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}>[]>;
```

Defined in: [lib/provable/merkle-list.ts:83](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L83)

#### Inherited from

[`MerkleList`](MerkleList.md).[`data`](MerkleList.md#data)

***

### hash

```ts
hash: Field;
```

Defined in: [lib/provable/merkle-list.ts:82](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L82)

#### Inherited from

[`MerkleList`](MerkleList.md).[`hash`](MerkleList.md#hash)

***

### \_emptyHash

```ts
static _emptyHash: undefined | Field;
```

Defined in: [lib/provable/merkle-list.ts:348](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L348)

#### Inherited from

[`MerkleList`](MerkleList.md).[`_emptyHash`](MerkleList.md#_emptyhash)

***

### \_innerProvable

```ts
static _innerProvable: 
  | undefined
| ProvableHashable<any>;
```

Defined in: [lib/provable/merkle-list.ts:351](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L351)

#### Inherited from

[`MerkleList`](MerkleList.md).[`_innerProvable`](MerkleList.md#_innerprovable)

***

### \_nextHash

```ts
static _nextHash: 
  | undefined
  | (hash: Field, t: any) => Field;
```

Defined in: [lib/provable/merkle-list.ts:347](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L347)

#### Inherited from

[`MerkleList`](MerkleList.md).[`_nextHash`](MerkleList.md#_nexthash)

***

### \_provable

```ts
static _provable: 
  | undefined
| ProvableHashable<MerkleList<any>>;
```

Defined in: [lib/provable/merkle-list.ts:350](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L350)

#### Inherited from

[`MerkleList`](MerkleList.md).[`_provable`](MerkleList.md#_provable)

***

### provable

```ts
static provable: {
  check: void;
  empty: AccountUpdateForest;
  fromFields: AccountUpdateForest;
  fromValue: AccountUpdateForest;
  sizeInFields: number;
  toAuxiliary: any[];
  toFields: Field[];
  toInput: HashInput;
  toValue: any;
};
```

Defined in: [lib/mina/v1/account-update.ts:1279](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1279)

#### check()

##### Parameters

###### value

[`AccountUpdateForest`](AccountUpdateForest.md) | [`MerkleList`](MerkleList.md)\<\{
`accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
`children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
`id`: `number`;
\}\>

##### Returns

`void`

#### empty()

##### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### fromFields()

##### Parameters

###### fields

[`Field`](Field.md)[]

###### aux

`any`[]

##### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### fromValue()

##### Parameters

###### value

`any`

##### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### sizeInFields()

##### Returns

`number`

#### toAuxiliary()

##### Parameters

###### value?

[`AccountUpdateForest`](AccountUpdateForest.md) | [`MerkleList`](MerkleList.md)\<\{
`accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
`children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
`id`: `number`;
\}\>

##### Returns

`any`[]

#### toFields()

##### Parameters

###### value

[`AccountUpdateForest`](AccountUpdateForest.md) | [`MerkleList`](MerkleList.md)\<\{
`accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
`children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
`id`: `number`;
\}\>

##### Returns

[`Field`](Field.md)[]

#### toInput()

##### Parameters

###### value

[`AccountUpdateForest`](AccountUpdateForest.md) | [`MerkleList`](MerkleList.md)\<\{
`accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
`children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
`id`: `number`;
\}\>

##### Returns

`HashInput`

#### toValue()

##### Parameters

###### value

[`AccountUpdateForest`](AccountUpdateForest.md) | [`MerkleList`](MerkleList.md)\<\{
`accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
`children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
`id`: `number`;
\}\>

##### Returns

`any`

#### Overrides

```ts
MerkleList.create(AccountUpdateTreeBase, merkleListHash).provable
```

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof MerkleList
```

Defined in: [lib/provable/merkle-list.ts:353](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L353)

##### Returns

*typeof* [`MerkleList`](MerkleList.md)

#### Inherited from

[`MerkleList`](MerkleList.md).[`Constructor`](MerkleList.md#constructor)

***

### innerProvable

#### Get Signature

```ts
get innerProvable(): ProvableHashable<T>
```

Defined in: [lib/provable/merkle-list.ts:367](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L367)

##### Returns

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`innerProvable`](MerkleList.md#innerprovable)

***

### emptyHash

#### Get Signature

```ts
get static emptyHash(): Field
```

Defined in: [lib/provable/merkle-list.ts:362](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L362)

##### Returns

[`Field`](Field.md)

#### Inherited from

[`MerkleList`](MerkleList.md).[`emptyHash`](MerkleList.md#emptyhash)

## Methods

### clone()

```ts
clone(): MerkleList<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}>
```

Defined in: [lib/provable/merkle-list.ts:236](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L236)

#### Returns

[`MerkleList`](MerkleList.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`clone`](MerkleList.md#clone)

***

### forEach()

```ts
forEach(length: number, callback: (element: {
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
 }, isDummy: Bool, i: number) => void): void
```

Defined in: [lib/provable/merkle-list.ts:250](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L250)

Iterate through the list in a fixed number of steps any apply a given callback on each element.

Proves that the iteration traverses the entire list.
Once past the last element, dummy elements will be passed to the callback.

Note: There are no guarantees about the contents of dummy elements, so the callback is expected
to handle the `isDummy` flag separately.

#### Parameters

##### length

`number`

##### callback

(`element`: \{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}, `isDummy`: [`Bool`](Bool.md), `i`: `number`) => `void`

#### Returns

`void`

#### Inherited from

[`MerkleList`](MerkleList.md).[`forEach`](MerkleList.md#foreach)

***

### isEmpty()

```ts
isEmpty(): Bool
```

Defined in: [lib/provable/merkle-list.ts:90](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L90)

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[`MerkleList`](MerkleList.md).[`isEmpty`](MerkleList.md#isempty)

***

### lengthUnconstrained()

```ts
lengthUnconstrained(): Unconstrained<number>
```

Defined in: [lib/provable/merkle-list.ts:273](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L273)

#### Returns

[`Unconstrained`](Unconstrained.md)\<`number`\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`lengthUnconstrained`](MerkleList.md#lengthunconstrained)

***

### nextHash()

```ts
nextHash(hash: Field, value: {
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
 }): Field
```

Defined in: [lib/provable/merkle-list.ts:357](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L357)

#### Parameters

##### hash

[`Field`](Field.md)

##### value

###### accountUpdate

[`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate`

###### children

[`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\> = `...`

###### id

`number` = `RandomId`

#### Returns

[`Field`](Field.md)

#### Inherited from

[`MerkleList`](MerkleList.md).[`nextHash`](MerkleList.md#nexthash)

***

### pop()

```ts
pop(): {
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

Defined in: [lib/provable/merkle-list.ts:152](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L152)

Remove the last element from the list and return it.

If the list is empty, returns a dummy element.

#### Returns

```ts
{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

##### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

##### children

```ts
children: MerkleListBase<AccountUpdateTreeBase>;
```

##### id

```ts
id: number = RandomId;
```

#### Inherited from

[`MerkleList`](MerkleList.md).[`pop`](MerkleList.md#pop)

***

### popExn()

```ts
popExn(): {
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

Defined in: [lib/provable/merkle-list.ts:137](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L137)

Remove the last element from the list and return it.

This proves that the list is non-empty, and fails otherwise.

#### Returns

```ts
{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

##### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

##### children

```ts
children: MerkleListBase<AccountUpdateTreeBase>;
```

##### id

```ts
id: number = RandomId;
```

#### Inherited from

[`MerkleList`](MerkleList.md).[`popExn`](MerkleList.md#popexn)

***

### popIf()

```ts
popIf(condition: Bool): {
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

Defined in: [lib/provable/merkle-list.ts:192](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L192)

Return the last element, but only remove it if `condition` is true.

If the list is empty, returns a dummy element.

#### Parameters

##### condition

[`Bool`](Bool.md)

#### Returns

```ts
{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

##### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

##### children

```ts
children: MerkleListBase<AccountUpdateTreeBase>;
```

##### id

```ts
id: number = RandomId;
```

#### Inherited from

[`MerkleList`](MerkleList.md).[`popIf`](MerkleList.md#popif)

***

### popIfUnsafe()

```ts
popIfUnsafe(shouldPop: Bool): {
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

Defined in: [lib/provable/merkle-list.ts:216](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L216)

Low-level, minimal version of `pop()` which lets the _caller_ decide whether there is an element to pop.

I.e. this proves:
- If the input condition is true, this returns the last element and removes it from the list.
- If the input condition is false, the list is unchanged and the return value is garbage.

Note that if the caller passes `true` but the list is empty, this will fail.
If the caller passes `false` but the list is non-empty, this succeeds and just doesn't pop off an element.

#### Parameters

##### shouldPop

[`Bool`](Bool.md)

#### Returns

```ts
{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}
```

##### accountUpdate

```ts
accountUpdate: Hashed<AccountUpdate> = HashedAccountUpdate;
```

##### children

```ts
children: MerkleListBase<AccountUpdateTreeBase>;
```

##### id

```ts
id: number = RandomId;
```

#### Inherited from

[`MerkleList`](MerkleList.md).[`popIfUnsafe`](MerkleList.md#popifunsafe)

***

### popOption()

```ts
popOption(): Option<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}>
```

Defined in: [lib/provable/merkle-list.ts:172](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L172)

Remove the last element from the list and return it as an option:
Some(element) if the list is non-empty, None if the list is empty.

**Warning**: If the list is empty, the the option's .value is entirely unconstrained.

#### Returns

[`Option`](../type-aliases/Option.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`popOption`](MerkleList.md#popoption)

***

### push()

```ts
push(update: AccountUpdate | AccountUpdateTreeBase): void
```

Defined in: [lib/mina/v1/account-update.ts:1281](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1281)

Push a new element to the list.

#### Parameters

##### update

[`AccountUpdate`](AccountUpdate.md) | `AccountUpdateTreeBase`

#### Returns

`void`

#### Overrides

[`MerkleList`](MerkleList.md).[`push`](MerkleList.md#push)

***

### pushIf()

```ts
pushIf(condition: Bool, update: AccountUpdate | AccountUpdateTreeBase): void
```

Defined in: [lib/mina/v1/account-update.ts:1284](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1284)

Push a new element to the list, if the `condition` is true.

#### Parameters

##### condition

[`Bool`](Bool.md)

##### update

[`AccountUpdate`](AccountUpdate.md) | `AccountUpdateTreeBase`

#### Returns

`void`

#### Overrides

[`MerkleList`](MerkleList.md).[`pushIf`](MerkleList.md#pushif)

***

### startIterating()

```ts
startIterating(): MerkleListIterator<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}>
```

Defined in: [lib/provable/merkle-list.ts:259](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L259)

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`startIterating`](MerkleList.md#startiterating)

***

### startIteratingFromLast()

```ts
startIteratingFromLast(): MerkleListIterator<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}>
```

Defined in: [lib/provable/merkle-list.ts:264](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L264)

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`startIteratingFromLast`](MerkleList.md#startiteratingfromlast)

***

### toArrayUnconstrained()

```ts
toArrayUnconstrained(): Unconstrained<{
  accountUpdate: Hashed<AccountUpdate>;
  children: MerkleListBase<AccountUpdateTreeBase>;
  id: number;
}[]>
```

Defined in: [lib/provable/merkle-list.ts:269](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L269)

#### Returns

[`Unconstrained`](Unconstrained.md)\<\{
  `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\>;
  `children`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`AccountUpdateTreeBase`\>;
  `id`: `number`;
 \}[]\>

#### Inherited from

[`MerkleList`](MerkleList.md).[`toArrayUnconstrained`](MerkleList.md#toarrayunconstrained)

***

### toFlatArray()

```ts
toFlatArray(mutate: boolean, depth: number): AccountUpdate[]
```

Defined in: [lib/mina/v1/account-update.ts:1296](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1296)

#### Parameters

##### mutate

`boolean` = `true`

##### depth

`number` = `0`

#### Returns

[`AccountUpdate`](AccountUpdate.md)[]

***

### assertConstant()

```ts
static assertConstant(forest: AccountUpdateForestBase): void
```

Defined in: [lib/mina/v1/account-update.ts:1321](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1321)

#### Parameters

##### forest

`AccountUpdateForestBase`

#### Returns

`void`

***

### create()

```ts
static create<T>(
   type: WithProvable<ProvableHashable<T>>, 
   nextHash: (hash: Field, value: T) => Field, 
   emptyHash_: Field): typeof MerkleList & {
  empty: () => MerkleList<T>;
  from: (array: T[]) => MerkleList<T>;
  fromReverse: (array: T[]) => MerkleList<T>;
  provable: ProvableHashable<MerkleList<T>>;
}
```

Defined in: [lib/provable/merkle-list.ts:289](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L289)

Create a Merkle list type

Optionally, you can tell `create()` how to do the hash that pushes a new list element, by passing a `nextHash` function.

#### Type Parameters

• **T**

#### Parameters

##### type

[`WithProvable`](../type-aliases/WithProvable.md)\<[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>\>

##### nextHash

(`hash`: [`Field`](Field.md), `value`: `T`) => [`Field`](Field.md)

##### emptyHash\_

[`Field`](Field.md) = `emptyHash`

#### Returns

*typeof* [`MerkleList`](MerkleList.md) & \{
  `empty`: () => [`MerkleList`](MerkleList.md)\<`T`\>;
  `from`: (`array`: `T`[]) => [`MerkleList`](MerkleList.md)\<`T`\>;
  `fromReverse`: (`array`: `T`[]) => [`MerkleList`](MerkleList.md)\<`T`\>;
  `provable`: [`ProvableHashable`](../type-aliases/ProvableHashable.md)\<[`MerkleList`](MerkleList.md)\<`T`\>\>;
 \}

#### Example

```ts
class MyList extends MerkleList.create(Field, (hash, x) =>
  Poseidon.hashWithPrefix('custom', [hash, x])
) {}
```

#### Inherited from

[`MerkleList`](MerkleList.md).[`create`](MerkleList.md#create)

***

### empty()

```ts
static empty(): AccountUpdateForest
```

Defined in: [lib/mina/v1/account-update.ts:1334](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1334)

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Overrides

```ts
MerkleList.create(AccountUpdateTreeBase, merkleListHash).empty
```

***

### from()

```ts
static from(array: AccountUpdateTreeBase[]): AccountUpdateForest
```

Defined in: [lib/mina/v1/account-update.ts:1337](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1337)

#### Parameters

##### array

`AccountUpdateTreeBase`[]

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Overrides

```ts
MerkleList.create(AccountUpdateTreeBase, merkleListHash).from
```

***

### fromFlatArray()

```ts
static fromFlatArray(updates: AccountUpdate[]): AccountUpdateForest
```

Defined in: [lib/mina/v1/account-update.ts:1291](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1291)

#### Parameters

##### updates

[`AccountUpdate`](AccountUpdate.md)[]

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

***

### fromReverse()

```ts
static fromReverse(array: AccountUpdateTreeBase[]): AccountUpdateForest
```

Defined in: [lib/mina/v1/account-update.ts:1340](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1340)

#### Parameters

##### array

`AccountUpdateTreeBase`[]

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Overrides

```ts
MerkleList.create(AccountUpdateTreeBase, merkleListHash).fromReverse
```

***

### toFlatArray()

```ts
static toFlatArray(
   forest: AccountUpdateForestBase, 
   mutate: boolean, 
   depth: number): AccountUpdate[]
```

Defined in: [lib/mina/v1/account-update.ts:1300](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1300)

#### Parameters

##### forest

`AccountUpdateForestBase`

##### mutate

`boolean` = `true`

##### depth

`number` = `0`

#### Returns

[`AccountUpdate`](AccountUpdate.md)[]
