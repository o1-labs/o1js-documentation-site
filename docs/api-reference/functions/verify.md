```ts
function verify(proof: 
  | ProofBase
| JsonProof, verificationKey: string | VerificationKey): Promise<boolean>
```

Defined in: [lib/proof-system/zkprogram.ts:110](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L110)

Initializes Pickles bindings, serializes the input proof and verification key for use in OCaml, then calls into the Pickles verify function and returns the result.

## Parameters

### proof

Either a `Proof` instance or a serialized JSON proof

[`ProofBase`](../classes/ProofBase.md) | [`JsonProof`](../type-aliases/JsonProof.md)

### verificationKey

Either a base64 serialized verification key or a `VerificationKey` instance which will be base64 serialized for use in the bindings.

`string` | [`VerificationKey`](../classes/VerificationKey.md)

## Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the proof is valid.
