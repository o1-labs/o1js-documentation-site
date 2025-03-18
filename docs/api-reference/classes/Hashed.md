Defined in: [lib/provable/packed.ts:195](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L195)

`Hashed<T>` represents a type `T` by its hash.

Since a hash is only a single field element, this can be more efficient in provable code
where the number of constraints depends on the number of field elements per value.

For example, `Provable.if(bool, x, y)` takes O(n) constraints, where n is the number of field
elements in x and y. With Hashed, this is reduced to O(1).

The downside is that you will pay the overhead of hashing your values, so it helps to experiment
in which parts of your code a hashed representation is beneficial.

Usage:

```ts
// define a hashed type from a type
let HashedType = Hashed.create(MyType);

// hash a value
let hashed = HashedType.hash(value);

// ... operations on hashes, more efficient than on plain values ...

// unhash to get the original value
let value = hashed.unhash();
```

**Warning**: When wrapping a type with `Hashed`, make sure that that type is safe to automatically _pack_
and _unpack_ in provable code. In particular, do not use `Hashed` with types that define a custom `toInput()`
(specifying a certain bit packing) but no corresponding `check()` method  (that constrains the bit lengths of the packed parts).

## Type Parameters

• **T**

## Constructors

### new Hashed()

```ts
new Hashed<T>(hash: Field, value: Unconstrained<T>): Hashed<T>
```

Defined in: [lib/provable/packed.ts:233](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L233)

#### Parameters

##### hash

[`Field`](Field.md)

##### value

[`Unconstrained`](Unconstrained.md)\<`T`\>

#### Returns

[`Hashed`](Hashed.md)\<`T`\>

## Properties

### hash

```ts
hash: Field;
```

Defined in: [lib/provable/packed.ts:196](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L196)

***

### value

```ts
value: Unconstrained<T>;
```

Defined in: [lib/provable/packed.ts:197](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L197)

***

### \_innerProvable

```ts
static _innerProvable: 
  | undefined
| ProvableHashable<any>;
```

Defined in: [lib/provable/packed.ts:276](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L276)

***

### \_provable

```ts
static _provable: 
  | undefined
| ProvableHashable<Hashed<any>>;
```

Defined in: [lib/provable/packed.ts:275](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L275)

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof Hashed
```

Defined in: [lib/provable/packed.ts:278](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L278)

##### Returns

*typeof* [`Hashed`](Hashed.md)

***

### innerProvable

#### Get Signature

```ts
get static innerProvable(): ProvableHashable<any>
```

Defined in: [lib/provable/packed.ts:282](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L282)

##### Returns

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`any`\>

## Methods

### toFields()

```ts
toFields(): Field[]
```

Defined in: [lib/provable/packed.ts:270](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L270)

#### Returns

[`Field`](Field.md)[]

***

### unhash()

```ts
unhash(): T
```

Defined in: [lib/provable/packed.ts:260](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L260)

Unwrap a value from its hashed variant.

#### Returns

`T`

***

### \_hash()

```ts
static _hash(_: any): Field
```

Defined in: [lib/provable/packed.ts:238](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L238)

#### Parameters

##### \_

`any`

#### Returns

[`Field`](Field.md)

***

### create()

```ts
static create<T>(type: WithProvable<ProvableHashable<T>>, hash?: (t: T) => Field): typeof Hashed & {
  provable: ProvableHashable<Hashed<T>>;
  empty: Hashed<T>;
}
```

Defined in: [lib/provable/packed.ts:202](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L202)

Create a hashed representation of `type`. You can then use `HashedType.hash(x)` to wrap a value in a `Hashed`.

#### Type Parameters

• **T**

#### Parameters

##### type

[`WithProvable`](../type-aliases/WithProvable.md)\<[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>\>

##### hash?

(`t`: `T`) => [`Field`](Field.md)

#### Returns

*typeof* [`Hashed`](Hashed.md) & \{
  `provable`: [`ProvableHashable`](../type-aliases/ProvableHashable.md)\<[`Hashed`](Hashed.md)\<`T`\>\>;
  `empty`: [`Hashed`](Hashed.md)\<`T`\>;
 \}

***

### hash()

```ts
static hash<T>(value: T, hash?: Field): Hashed<T>
```

Defined in: [lib/provable/packed.ts:251](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L251)

Wrap a value, and represent it by its hash in provable code.

```ts
let hashed = HashedType.hash(value);
```

Optionally, if you already have the hash, you can pass it in and avoid recomputing it.

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### hash?

[`Field`](Field.md)

#### Returns

[`Hashed`](Hashed.md)\<`T`\>
