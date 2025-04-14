```ts
const Hash: {
  BLAKE2B: {
     hash: Bytes;
    };
  hash: (input: Field[]) => Field;
  Keccak256: {
     hash: Bytes;
    };
  Keccak384: {
     hash: Bytes;
    };
  Keccak512: {
     hash: Bytes;
    };
  Poseidon: {
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
  SHA2: {
     hash: <T>(length: T, data: FlexibleBytes) => Bytes;
    };
  SHA2_256: {
     hash: (data: FlexibleBytes) => Bytes;
    };
  SHA3_256: {
     hash: Bytes;
    };
  SHA3_384: {
     hash: Bytes;
    };
  SHA3_512: {
     hash: Bytes;
    };
};
```

Defined in: [lib/provable/crypto/hash.ts:11](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/hash.ts#L11)

A collection of hash functions which can be used in provable code.

## Type declaration

### BLAKE2B

```ts
BLAKE2B: {
  hash: Bytes;
};
```

#### BLAKE2B.hash()

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`

### hash()

```ts
hash: (input: Field[]) => Field = Poseidon.hash;
```

Hashes the given field elements using [Poseidon](https://eprint.iacr.org/2019/458.pdf). Alias for `Poseidon.hash()`.

```ts
let hash = Hash.hash([a, b, c]);
```

**Important:** This is by far the most efficient hash function o1js has available in provable code.
Use it by default, if no compatibility concerns require you to use a different hash function.

The Poseidon implementation operates over the native [Pallas base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/)
and uses parameters generated specifically for the [Mina](https://minaprotocol.com) blockchain.

We use a `rate` of 2, which means that 2 field elements are hashed per permutation.
A permutation causes 11 rows in the constraint system.

You can find the full set of Poseidon parameters [here](https://github.com/o1-labs/o1js-bindings/blob/main/crypto/constants.ts).

#### Parameters

##### input

[`Field`](../classes/Field.md)[]

#### Returns

[`Field`](../classes/Field.md)

### Keccak256

```ts
Keccak256: {
  hash: Bytes;
};
```

The pre-NIST Keccak hash function with an output length of 256 bits.

#### Keccak256.hash()

Hashes the given bytes using Keccak-256.

This is an alias for `Keccak.preNist(256, bytes)`.\
See [Keccak.preNist](Keccak.md#prenist) for details and usage examples.

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`

### Keccak384

```ts
Keccak384: {
  hash: Bytes;
};
```

The pre-NIST Keccak hash function with an output length of 384 bits.

#### Keccak384.hash()

Hashes the given bytes using Keccak-384.

This is an alias for `Keccak.preNist(384, bytes)`.\
See [Keccak.preNist](Keccak.md#prenist) for details and usage examples.

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`

### Keccak512

```ts
Keccak512: {
  hash: Bytes;
};
```

The pre-NIST Keccak hash function with an output length of 512 bits.

#### Keccak512.hash()

Hashes the given bytes using Keccak-512.

This is an alias for `Keccak.preNist(512, bytes)`.\
See [Keccak.preNist](Keccak.md#prenist) for details and usage examples.

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`

### Poseidon

```ts
Poseidon: {
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

The [Poseidon](https://eprint.iacr.org/2019/458.pdf) hash function.

See [Hash.hash](Hash.md#hash-2) for details and usage examples.

#### Poseidon.Sponge

```ts
Sponge: typeof Sponge;
```

#### Poseidon.Unsafe

```ts
Unsafe: {
  hashToGroup: Group;
};
```

#### Poseidon.Unsafe.hashToGroup()

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

#### Poseidon.hash()

##### Parameters

###### input

[`Field`](../classes/Field.md)[]

##### Returns

[`Field`](../classes/Field.md)

#### Poseidon.hashPacked()

Hashes a provable type efficiently.

```ts
let skHash = Poseidon.hashPacked(PrivateKey, secretKey);
```

Note: Instead of just doing `Poseidon.hash(value.toFields())`, this
uses the `toInput()` method on the provable type to pack the input into as few
field elements as possible. This saves constraints because packing has a much
lower per-field element cost than hashing.

##### Type Parameters

• **T**

##### Parameters

###### type

[`WithProvable`](../type-aliases/WithProvable.md)\<`Hashable`\<`T`\>\>

###### value

`T`

##### Returns

[`Field`](../classes/Field.md)

#### Poseidon.hashToGroup()

Hashes a list of field elements to a point on the Pallas curve.

The output point is deterministic and its discrete log is not efficiently computable.

##### Parameters

###### input

[`Field`](../classes/Field.md)[]

##### Returns

[`Group`](../classes/Group.md)

#### Poseidon.hashWithPrefix()

##### Parameters

###### prefix

`string`

###### input

[`Field`](../classes/Field.md)[]

##### Returns

[`Field`](../classes/Field.md)

#### Poseidon.initialState()

##### Returns

\[[`Field`](../classes/Field.md), [`Field`](../classes/Field.md), [`Field`](../classes/Field.md)\]

#### Poseidon.update()

##### Parameters

###### state

\[[`Field`](../classes/Field.md), [`Field`](../classes/Field.md), [`Field`](../classes/Field.md)\]

###### input

[`Field`](../classes/Field.md)[]

##### Returns

\[[`Field`](../classes/Field.md), [`Field`](../classes/Field.md), [`Field`](../classes/Field.md)\]

### SHA2

```ts
SHA2: {
  hash: <T>(length: T, data: FlexibleBytes) => Bytes;
};
```

The SHA2 hash function with an output length of 224 | 256 | 384 | 512 bits.

#### SHA2.hash()

```ts
hash: <T>(length: T, data: FlexibleBytes) => Bytes = Gadgets.SHA2.hash;
```

Hashes the given bytes using SHA2.

This is an alias for `Gadgets.SHA2.hash(length,bytes)`.\
See [Gadgets.SHA2.hash](Gadgets.md#hash-2) for details and usage examples.

Implementation of [NIST SHA-2](https://csrc.nist.gov/pubs/fips/180-4/upd1/final)
hash Function. Supports output lengths of 224, 256, 384, or 512 bits.

Applies the SHA-2 hash function to a list of big-endian byte-sized [Field](Field.md)
elements, flexible to handle varying output lengths (224, 256, 384, 512 bits) as specified.

The function accepts [Bytes](../functions/Bytes.md) as the input message, which is a type that
represents a static-length list of byte-sized field elements (range-checked
using [Gadgets.rangeCheck8](Gadgets.md#rangecheck8)).
Alternatively, you can pass plain `number[]` of `Uint8Array` to perform a hash
outside provable code.

Produces an output of [Bytes](../functions/Bytes.md) that conforms to the chosen bit length.
Both input and output bytes are big-endian.

##### Type Parameters

• **T** *extends* `Length`

##### Parameters

###### length

`T`

###### data

[`FlexibleBytes`](../type-aliases/FlexibleBytes.md)

##### Returns

`Bytes`

### SHA2\_256

```ts
SHA2_256: {
  hash: (data: FlexibleBytes) => Bytes;
};
```

The SHA2 hash function with an output length of 256 bits.

#### SHA2\_256.hash()

```ts
hash: (data: FlexibleBytes) => Bytes = Gadgets.SHA256.hash;
```

Hashes the given bytes using SHA2-256.

This is an alias for `Gadgets.SHA256.hash(bytes)`.\
See [Gadgets.SHA256.hash](Gadgets.md#hash-3) for details and usage examples.

##### Parameters

###### data

[`FlexibleBytes`](../type-aliases/FlexibleBytes.md)

##### Returns

`Bytes`

### SHA3\_256

```ts
SHA3_256: {
  hash: Bytes;
};
```

The SHA3 hash function with an output length of 256 bits.

#### SHA3\_256.hash()

Hashes the given bytes using SHA3-256.

This is an alias for `Keccak.nistSha3(256, bytes)`.\
See [Keccak.nistSha3](Keccak.md#nistsha3) for details and usage examples.

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`

### SHA3\_384

```ts
SHA3_384: {
  hash: Bytes;
};
```

The SHA3 hash function with an output length of 384 bits.

#### SHA3\_384.hash()

Hashes the given bytes using SHA3-384.

This is an alias for `Keccak.nistSha3(384, bytes)`.\
See [Keccak.nistSha3](Keccak.md#nistsha3) for details and usage examples.

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`

### SHA3\_512

```ts
SHA3_512: {
  hash: Bytes;
};
```

The SHA3 hash function with an output length of 512 bits.

#### SHA3\_512.hash()

Hashes the given bytes using SHA3-512.

This is an alias for `Keccak.nistSha3(512, bytes)`.\
See [Keccak.nistSha3](Keccak.md#nistsha3) for details and usage examples.

##### Parameters

###### bytes

`Bytes`

##### Returns

`Bytes`
