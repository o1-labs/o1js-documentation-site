```ts
const Poseidon: {
  Sponge: typeof Sponge;
  Unsafe: {
     hashToGroup: Group;
    };
  hash: Field;
  hashPacked: Field;
  hashToGroup: Group;
  hashWithPrefix: Field;
  initialState: [Field, Field, Field];
  update: [Field, Field, Field];
};
```

Defined in: [lib/provable/crypto/poseidon.ts:56](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/poseidon.ts#L56)

## Type declaration

### Sponge

```ts
Sponge: typeof Sponge;
```

### Unsafe

```ts
Unsafe: {
  hashToGroup: Group;
};
```

#### Unsafe.hashToGroup()

Low-level version of `Poseidon.hashToGroup()`.

**Warning**: This function is marked unsafe because its output is not deterministic.
It returns the square root of a value without constraining which of the two possible
square roots is chosen. This allows the prover to choose between two different hashes,
which can be a vulnerability if consuming code treats the output as unique.

##### Parameters

###### input

[`Field`](../classes/Field.md)[]

##### Returns

[`Group`](../classes/Group.md)

### hash()

#### Parameters

##### input

[`Field`](../classes/Field.md)[]

#### Returns

[`Field`](../classes/Field.md)

### hashPacked()

Hashes a provable type efficiently.

```ts
let skHash = Poseidon.hashPacked(PrivateKey, secretKey);
```

Note: Instead of just doing `Poseidon.hash(value.toFields())`, this
uses the `toInput()` method on the provable type to pack the input into as few
field elements as possible. This saves constraints because packing has a much
lower per-field element cost than hashing.

#### Type Parameters

• **T**

#### Parameters

##### type

[`WithProvable`](../type-aliases/WithProvable.md)\<`Hashable`\<`T`\>\>

##### value

`T`

#### Returns

[`Field`](../classes/Field.md)

### hashToGroup()

Hashes a list of field elements to a point on the Pallas curve.

The output point is deterministic and its discrete log is not efficiently computable.

#### Parameters

##### input

[`Field`](../classes/Field.md)[]

#### Returns

[`Group`](../classes/Group.md)

### hashWithPrefix()

#### Parameters

##### prefix

`string`

##### input

[`Field`](../classes/Field.md)[]

#### Returns

[`Field`](../classes/Field.md)

### initialState()

#### Returns

\[[`Field`](../classes/Field.md), [`Field`](../classes/Field.md), [`Field`](../classes/Field.md)\]

### update()

#### Parameters

##### state

\[[`Field`](../classes/Field.md), [`Field`](../classes/Field.md), [`Field`](../classes/Field.md)\]

##### input

[`Field`](../classes/Field.md)[]

#### Returns

\[[`Field`](../classes/Field.md), [`Field`](../classes/Field.md), [`Field`](../classes/Field.md)\]
