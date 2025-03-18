```ts
const Keccak: {
  ethereum: Bytes;
  nistSha3: Bytes;
  preNist: Bytes;
};
```

Defined in: [lib/provable/crypto/keccak.ts:11](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/keccak.ts#L11)

## Type declaration

### ethereum()

Ethereum-Compatible Keccak-256 Hash Function.
This is a specialized variant of [Keccak.preNist](Keccak.md#prenist) configured for a 256-bit output length.

Primarily used in Ethereum for hashing transactions, messages, and other types of payloads.

The function accepts [Bytes](../functions/Bytes.md) as the input message, which is a type that represents a static-length list of byte-sized field elements (range-checked using [Gadgets.rangeCheck8](Gadgets.md#rangecheck8)).
Alternatively, you can pass plain `number[]` of `Uint8Array` to perform a hash outside provable code.

Produces an output of [Bytes](../functions/Bytes.md) of length 32. Both input and output bytes are big-endian.

#### Parameters

##### message

[`FlexibleBytes`](../type-aliases/FlexibleBytes.md)

Big-endian [Bytes](../functions/Bytes.md) representing the message to hash.

```ts
let preimage = Bytes.fromString("hello world");
let digest = Keccak.ethereum(preimage);
```

#### Returns

`Bytes`

### nistSha3()

Implementation of [NIST SHA-3](https://csrc.nist.gov/pubs/fips/202/final) Hash Function.
Supports output lengths of 256, 384, or 512 bits.

Applies the SHA-3 hash function to a list of big-endian byte-sized [Field](../classes/Field.md) elements, flexible to handle varying output lengths (256, 384, 512 bits) as specified.

The function accepts [Bytes](../functions/Bytes.md) as the input message, which is a type that represents a static-length list of byte-sized field elements (range-checked using [Gadgets.rangeCheck8](Gadgets.md#rangecheck8)).
Alternatively, you can pass plain `number[]` of `Uint8Array` to perform a hash outside provable code.

Produces an output of [Bytes](../functions/Bytes.md) that conforms to the chosen bit length.
Both input and output bytes are big-endian.

#### Parameters

##### len

Desired output length in bits. Valid options: 256, 384, 512.

`256` | `384` | `512`

##### message

[`FlexibleBytes`](../type-aliases/FlexibleBytes.md)

Big-endian [Bytes](../functions/Bytes.md) representing the message to hash.

```ts
let preimage = Bytes.fromString("hello world");
let digest256 = Keccak.nistSha3(256, preimage);
let digest384 = Keccak.nistSha3(384, preimage);
let digest512 = Keccak.nistSha3(512, preimage);
```

#### Returns

`Bytes`

### preNist()

Implementation of [pre-NIST Keccak](https://keccak.team/keccak.html) hash function.
Supports output lengths of 256, 384, or 512 bits.

Keccak won the SHA-3 competition and was slightly altered before being standardized as SHA-3 by NIST in 2015.
This variant was used in Ethereum before the NIST standardization, by specifying `len` as 256 bits you can obtain the same hash function as used by Ethereum [Keccak.ethereum](Keccak.md#ethereum).

The function applies the pre-NIST Keccak hash function to a list of byte-sized [Field](../classes/Field.md) elements and is flexible to handle varying output lengths (256, 384, 512 bits) as specified.

[Keccak.preNist](Keccak.md#prenist) accepts [Bytes](../functions/Bytes.md) as the input message, which is a type that represents a static-length list of byte-sized field elements (range-checked using [Gadgets.rangeCheck8](Gadgets.md#rangecheck8)).
Alternatively, you can pass plain `number[]` of `Uint8Array` to perform a hash outside provable code.

Produces an output of [Bytes](../functions/Bytes.md) that conforms to the chosen bit length.
Both input and output bytes are big-endian.

#### Parameters

##### len

Desired output length in bits. Valid options: 256, 384, 512.

`256` | `384` | `512`

##### message

[`FlexibleBytes`](../type-aliases/FlexibleBytes.md)

Big-endian [Bytes](../functions/Bytes.md) representing the message to hash.

```ts
let preimage = Bytes.fromString("hello world");
let digest256 = Keccak.preNist(256, preimage);
let digest384 = Keccak.preNist(384, preimage);
let digest512= Keccak.preNist(512, preimage);
```

#### Returns

`Bytes`
