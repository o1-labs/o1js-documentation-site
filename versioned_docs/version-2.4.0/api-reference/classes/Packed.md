Defined in: [lib/provable/packed.ts:50](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L50)

`Packed<T>` is a "packed" representation of any type `T`.

"Packed" means that field elements which take up fewer than 254 bits are packed together into
as few field elements as possible.

For example, you can pack several Bools (1 bit) or UInt32s (32 bits) into a single field element.

Using a packed representation can make sense in provable code where the number of constraints
depends on the number of field elements per value.

For example, `Provable.if(bool, x, y)` takes O(n) constraints, where n is the number of field
elements in x and y.

Usage:

```ts
// define a packed type from a type
let PackedType = Packed.create(MyType);

// pack a value
let packed = PackedType.pack(value);

// ... operations on packed values, more efficient than on plain values ...

// unpack a value
let value = packed.unpack();
```

**Warning**: Packing only makes sense where packing actually reduces the number of field elements.
For example, it doesn't make sense to pack a _single_ Bool, because it will be 1 field element before
and after packing. On the other hand, it does makes sense to pack a type that holds 10 or 20 Bools.

**Warning**: When wrapping a type with `Packed`, make sure that that type is safe to automatically _pack_
and _unpack_ in provable code. In particular, do not use `Packed` with types that define a custom `toInput()`
(specifying a certain bit packing) but no corresponding `check()` method (that constrains the bit lengths of the packed parts).

## Type Parameters

• **T**

## Constructors

### new Packed()

```ts
new Packed<T>(packed: Field[], value: Unconstrained<T>): Packed<T>
```

Defined in: [lib/provable/packed.ts:109](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L109)

#### Parameters

##### packed

[`Field`](Field.md)[]

##### value

[`Unconstrained`](Unconstrained.md)\<`T`\>

#### Returns

[`Packed`](Packed.md)\<`T`\>

## Properties

### packed

```ts
packed: Field[];
```

Defined in: [lib/provable/packed.ts:51](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L51)

***

### value

```ts
value: Unconstrained<T>;
```

Defined in: [lib/provable/packed.ts:52](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L52)

***

### \_innerProvable

```ts
static _innerProvable: 
  | undefined
| ProvableHashable<any>;
```

Defined in: [lib/provable/packed.ts:136](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L136)

***

### \_provable

```ts
static _provable: 
  | undefined
| ProvableHashable<Packed<any>>;
```

Defined in: [lib/provable/packed.ts:135](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L135)

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof Packed
```

Defined in: [lib/provable/packed.ts:138](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L138)

##### Returns

*typeof* [`Packed`](Packed.md)

***

### innerProvable

#### Get Signature

```ts
get static innerProvable(): ProvableHashable<any>
```

Defined in: [lib/provable/packed.ts:142](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L142)

##### Returns

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`any`\>

## Methods

### toFields()

```ts
toFields(): Field[]
```

Defined in: [lib/provable/packed.ts:130](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L130)

#### Returns

[`Field`](Field.md)[]

***

### unpack()

```ts
unpack(): T
```

Defined in: [lib/provable/packed.ts:117](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L117)

Unpack a value.

#### Returns

`T`

***

### create()

```ts
static create<T, V>(type: WithProvable<ProvableHashable<T, V>>): typeof Packed & {
  provable: ProvableHashable<Packed<T>, V>;
  pack: Packed<T>;
}
```

Defined in: [lib/provable/packed.ts:57](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/packed.ts#L57)

Create a packed representation of `type`. You can then use `PackedType.pack(x)` to pack a value.

#### Type Parameters

• **T**

• **V**

#### Parameters

##### type

[`WithProvable`](../type-aliases/WithProvable.md)\<[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`, `V`\>\>

#### Returns

*typeof* [`Packed`](Packed.md) & \{
  `provable`: [`ProvableHashable`](../type-aliases/ProvableHashable.md)\<[`Packed`](Packed.md)\<`T`\>, `V`\>;
  `pack`: [`Packed`](Packed.md)\<`T`\>;
 \}
