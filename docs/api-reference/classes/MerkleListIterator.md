Defined in: [lib/provable/merkle-list.ts:409](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L409)

MerkleListIterator helps iterating through a Merkle list.
This works similar to calling `list.pop()` or `list.push()` repeatedly, but maintaining the entire list instead of removing elements.

The core methods that support iteration are [()](MerkleListIterator.md#next-2) and [()](MerkleListIterator.md#previous-2).

```ts
let iterator = MerkleListIterator.startIterating(list);

let firstElement = iterator.next();
```

We maintain two commitments:
- One to the entire array, to be able to prove that we end iteration at the correct point.
- One to the array from the current index until the end, to efficiently step forward.

## Type Parameters

• **T**

## Implements

- [`MerkleListIteratorBase`](../type-aliases/MerkleListIteratorBase.md)\<`T`\>

## Constructors

### new MerkleListIterator()

```ts
new MerkleListIterator<T>(value: MerkleListIteratorBase<T>): MerkleListIterator<T>
```

Defined in: [lib/provable/merkle-list.ts:418](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L418)

#### Parameters

##### value

[`MerkleListIteratorBase`](../type-aliases/MerkleListIteratorBase.md)\<`T`\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

## Properties

### currentHash

```ts
currentHash: Field;
```

Defined in: [lib/provable/merkle-list.ts:415](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L415)

The merkle list hash of `[data[currentIndex], ..., data[length-1]]` (when hashing from right to left).

For example:
- If `currentIndex === 0`, then `currentHash === this.hash` is the hash of the entire array.
- If `currentIndex === length`, then `currentHash === emptyHash` is the hash of an empty array.

#### Implementation of

```ts
MerkleListIteratorBase.currentHash
```

***

### currentIndex

```ts
currentIndex: Unconstrained<number>;
```

Defined in: [lib/provable/merkle-list.ts:416](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L416)

The index of the element that will be returned by the next call to `next()`.

#### Implementation of

```ts
MerkleListIteratorBase.currentIndex
```

***

### data

```ts
readonly data: Unconstrained<WithHash<T>[]>;
```

Defined in: [lib/provable/merkle-list.ts:411](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L411)

#### Implementation of

```ts
MerkleListIteratorBase.data
```

***

### hash

```ts
readonly hash: Field;
```

Defined in: [lib/provable/merkle-list.ts:412](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L412)

#### Implementation of

```ts
MerkleListIteratorBase.hash
```

***

### \_emptyHash

```ts
static _emptyHash: undefined | Field;
```

Defined in: [lib/provable/merkle-list.ts:678](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L678)

***

### \_innerProvable

```ts
static _innerProvable: 
  | undefined
| ProvableHashable<any>;
```

Defined in: [lib/provable/merkle-list.ts:681](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L681)

***

### \_nextHash

```ts
static _nextHash: 
  | undefined
  | (hash: Field, value: any) => Field;
```

Defined in: [lib/provable/merkle-list.ts:677](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L677)

***

### \_provable

```ts
static _provable: 
  | undefined
| ProvableHashable<MerkleListIterator<any>>;
```

Defined in: [lib/provable/merkle-list.ts:680](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L680)

## Accessors

### Constructor

#### Get Signature

```ts
get Constructor(): typeof MerkleListIterator
```

Defined in: [lib/provable/merkle-list.ts:683](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L683)

##### Returns

*typeof* [`MerkleListIterator`](MerkleListIterator.md)

***

### innerProvable

#### Get Signature

```ts
get innerProvable(): ProvableHashable<T>
```

Defined in: [lib/provable/merkle-list.ts:697](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L697)

##### Returns

[`ProvableHashable`](../type-aliases/ProvableHashable.md)\<`T`\>

***

### Unsafe

#### Get Signature

```ts
get Unsafe(): {
  next: {
     element: T;
     isDummy: Bool;
    };
  previous: {
     element: T;
     isDummy: Bool;
    };
}
```

Defined in: [lib/provable/merkle-list.ts:530](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L530)

Low-level APIs for advanced uses

##### Returns

```ts
{
  next: {
     element: T;
     isDummy: Bool;
    };
  previous: {
     element: T;
     isDummy: Bool;
    };
}
```

###### next()

Version of [next](MerkleListIterator.md#next) which doesn't guarantee anything about
the returned element in case the iterator is at the end.

Instead, the `isDummy` flag is also returned so that this case can
be handled in a custom way.

###### Returns

```ts
{
  element: T;
  isDummy: Bool;
}
```

###### element

```ts
element: T;
```

###### isDummy

```ts
isDummy: Bool;
```

###### previous()

Version of [previous](MerkleListIterator.md#previous) which doesn't guarantee anything about
the returned element in case the iterator is at the start.

Instead, the `isDummy` flag is also returned so that this case can
be handled in a custom way.

###### Returns

```ts
{
  element: T;
  isDummy: Bool;
}
```

###### element

```ts
element: T;
```

###### isDummy

```ts
isDummy: Bool;
```

***

### emptyHash

#### Get Signature

```ts
get static emptyHash(): Field
```

Defined in: [lib/provable/merkle-list.ts:692](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L692)

##### Returns

[`Field`](Field.md)

## Methods

### \_index()

```ts
_index(direction: "next" | "previous", i?: number): number
```

Defined in: [lib/provable/merkle-list.ts:469](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L469)

#### Parameters

##### direction

`"next"` | `"previous"`

##### i?

`number`

#### Returns

`number`

***

### \_updateIndex()

```ts
_updateIndex(direction: "next" | "previous"): void
```

Defined in: [lib/provable/merkle-list.ts:477](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L477)

#### Parameters

##### direction

`"next"` | `"previous"`

#### Returns

`void`

***

### assertAtEnd()

```ts
assertAtEnd(message?: string): void
```

Defined in: [lib/provable/merkle-list.ts:444](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L444)

#### Parameters

##### message?

`string`

#### Returns

`void`

***

### assertAtStart()

```ts
assertAtStart(): void
```

Defined in: [lib/provable/merkle-list.ts:422](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L422)

#### Returns

`void`

***

### clone()

```ts
clone(): MerkleListIterator<T>
```

Defined in: [lib/provable/merkle-list.ts:584](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L584)

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

***

### isAtEnd()

```ts
isAtEnd(): Bool
```

Defined in: [lib/provable/merkle-list.ts:426](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L426)

#### Returns

[`Bool`](Bool.md)

***

### isAtStart()

```ts
isAtStart(): Bool
```

Defined in: [lib/provable/merkle-list.ts:451](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L451)

#### Returns

[`Bool`](Bool.md)

***

### jumpToEnd()

```ts
jumpToEnd(): void
```

Defined in: [lib/provable/merkle-list.ts:430](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L430)

#### Returns

`void`

***

### jumpToEndIf()

```ts
jumpToEndIf(condition: Bool): void
```

Defined in: [lib/provable/merkle-list.ts:435](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L435)

#### Parameters

##### condition

[`Bool`](Bool.md)

#### Returns

`void`

***

### jumpToStart()

```ts
jumpToStart(): void
```

Defined in: [lib/provable/merkle-list.ts:455](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L455)

#### Returns

`void`

***

### jumpToStartIf()

```ts
jumpToStartIf(condition: Bool): void
```

Defined in: [lib/provable/merkle-list.ts:460](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L460)

#### Parameters

##### condition

[`Bool`](Bool.md)

#### Returns

`void`

***

### next()

```ts
next(): T
```

Defined in: [lib/provable/merkle-list.ts:510](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L510)

#### Returns

`T`

***

### nextHash()

```ts
nextHash(hash: Field, value: T): Field
```

Defined in: [lib/provable/merkle-list.ts:687](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L687)

#### Parameters

##### hash

[`Field`](Field.md)

##### value

`T`

#### Returns

[`Field`](Field.md)

***

### previous()

```ts
previous(): T
```

Defined in: [lib/provable/merkle-list.ts:484](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L484)

#### Returns

`T`

***

### create()

```ts
static create<T>(
   type: WithProvable<ProvableHashable<T>>, 
   nextHash: (hash: Field, value: T) => Field, 
   emptyHash_: Field): typeof MerkleListIterator & {
  empty: () => MerkleListIterator<T>;
  from: (array: T[]) => MerkleListIterator<T>;
  provable: ProvableHashable<MerkleListIterator<T>>;
  startIterating: (list: MerkleListBase<T>) => MerkleListIterator<T>;
  startIteratingFromLast: (list: MerkleListBase<T>) => MerkleListIterator<T>;
}
```

Defined in: [lib/provable/merkle-list.ts:598](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L598)

Create a Merkle array type

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

*typeof* [`MerkleListIterator`](MerkleListIterator.md) & \{
  `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
  `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
  `provable`: [`ProvableHashable`](../type-aliases/ProvableHashable.md)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\>;
  `startIterating`: (`list`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
  `startIteratingFromLast`: (`list`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
 \}

***

### createFromList()

```ts
static createFromList<T>(merkleList: typeof MerkleList): (value: MerkleListIteratorBase<T>) => MerkleListIterator<T> & {
  empty: () => MerkleListIterator<T>;
  from: (array: T[]) => MerkleListIterator<T>;
  provable: ProvableHashable<MerkleListIterator<T>>;
  startIterating: (list: MerkleListBase<T>) => MerkleListIterator<T>;
  startIteratingFromLast: (list: MerkleListBase<T>) => MerkleListIterator<T>;
}
```

Defined in: [lib/provable/merkle-list.ts:668](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/merkle-list.ts#L668)

#### Type Parameters

• **T**

#### Parameters

##### merkleList

*typeof* [`MerkleList`](MerkleList.md)

#### Returns

(`value`: [`MerkleListIteratorBase`](../type-aliases/MerkleListIteratorBase.md)\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> & \{
  `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
  `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
  `provable`: [`ProvableHashable`](../type-aliases/ProvableHashable.md)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\>;
  `startIterating`: (`list`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
  `startIteratingFromLast`: (`list`: [`MerkleListBase`](../type-aliases/MerkleListBase.md)\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>;
 \}
