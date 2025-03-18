Defined in: [lib/provable/types/unconstrained.ts:39](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L39)

Container which holds an unconstrained value. This can be used to pass values
between the out-of-circuit blocks in provable code.

Invariants:
- An `Unconstrained`'s value can only be accessed in auxiliary contexts.
- An `Unconstrained` can be empty when compiling, but never empty when running as the prover.
  (there is no way to create an empty `Unconstrained` in the prover)

## Example

```ts
let x = Unconstrained.from(0n);

class MyContract extends SmartContract {
  `@method` myMethod(x: Unconstrained<bigint>) {

    Provable.witness(Field, () => {
      // we can access and modify `x` here
      let newValue = x.get() + otherField.toBigInt();
      x.set(newValue);

      // ...
    });

    // throws an error!
    x.get();
  }
```

## Type Parameters

• **T**

## Properties

### provable

```ts
static provable: UnconstrainedProvable<any> & {
  empty: () => Unconstrained<any>;
  toInput: (x: Unconstrained<any>) => {
     fields: Field[];
     packed: [Field, number][];
    };
};
```

Defined in: [lib/provable/types/unconstrained.ts:109](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L109)

#### Type declaration

##### empty()

```ts
empty: () => Unconstrained<any>;
```

###### Returns

[`Unconstrained`](Unconstrained.md)\<`any`\>

##### toInput()

```ts
toInput: (x: Unconstrained<any>) => {
  fields: Field[];
  packed: [Field, number][];
};
```

###### Parameters

###### x

[`Unconstrained`](Unconstrained.md)\<`any`\>

###### Returns

```ts
{
  fields: Field[];
  packed: [Field, number][];
}
```

###### fields?

```ts
optional fields: Field[];
```

###### packed?

```ts
optional packed: [Field, number][];
```

## Methods

### get()

```ts
get(): T
```

Defined in: [lib/provable/types/unconstrained.ts:51](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L51)

Read an unconstrained value.

Note: Can only be called outside provable code.

#### Returns

`T`

***

### set()

```ts
set(value: T): void
```

Defined in: [lib/provable/types/unconstrained.ts:65](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L65)

Modify the unconstrained value.

#### Parameters

##### value

`T`

#### Returns

`void`

***

### setTo()

```ts
setTo(value: Unconstrained<T>): void
```

Defined in: [lib/provable/types/unconstrained.ts:72](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L72)

Set the unconstrained value to the same as another `Unconstrained`.

#### Parameters

##### value

[`Unconstrained`](Unconstrained.md)\<`T`\>

#### Returns

`void`

***

### updateAsProver()

```ts
updateAsProver(compute: (value: T) => T): void
```

Defined in: [lib/provable/types/unconstrained.ts:102](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L102)

Update an `Unconstrained` by a witness computation.

#### Parameters

##### compute

(`value`: `T`) => `T`

#### Returns

`void`

***

### from()

```ts
static from<T>(value: T | Unconstrained<T>): Unconstrained<T>
```

Defined in: [lib/provable/types/unconstrained.ts:87](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L87)

Create an `Unconstrained` with the given `value`.

Note: If `T` contains provable types, `Unconstrained.from` is an anti-pattern,
because it stores witnesses in a space that's intended to be used outside the proof.
Something like the following should be used instead:

```ts
let xWrapped = Unconstrained.witness(() => Provable.toConstant(type, x));
```

#### Type Parameters

• **T**

#### Parameters

##### value

`T` | [`Unconstrained`](Unconstrained.md)\<`T`\>

#### Returns

[`Unconstrained`](Unconstrained.md)\<`T`\>

***

### withEmpty()

```ts
static withEmpty<T>(empty: T): Provable<Unconstrained<T>, T> & {
  empty: () => Unconstrained<T>;
  toInput: (x: Unconstrained<T>) => {
     fields: Field[];
     packed: [Field, number][];
    };
}
```

Defined in: [lib/provable/types/unconstrained.ts:129](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L129)

#### Type Parameters

• **T**

#### Parameters

##### empty

`T`

#### Returns

[`Provable`](../type-aliases/Provable.md)\<[`Unconstrained`](Unconstrained.md)\<`T`\>, `T`\> & \{
  `empty`: () => [`Unconstrained`](Unconstrained.md)\<`T`\>;
  `toInput`: (`x`: [`Unconstrained`](Unconstrained.md)\<`T`\>) => \{
     `fields`: [`Field`](Field.md)[];
     `packed`: \[[`Field`](Field.md), `number`\][];
    \};
 \}

***

### witness()

```ts
static witness<T>(compute: () => T): Unconstrained<T>
```

Defined in: [lib/provable/types/unconstrained.ts:95](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/unconstrained.ts#L95)

Create an `Unconstrained` from a witness computation.

#### Type Parameters

• **T**

#### Parameters

##### compute

() => `T`

#### Returns

[`Unconstrained`](Unconstrained.md)\<`T`\>
