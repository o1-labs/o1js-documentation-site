```ts
type JsonProof = {
  maxProofsVerified: 0 | 1 | 2;
  proof: Base64ProofString;
  publicInput: string[];
  publicOutput: string[];
};
```

Defined in: [lib/proof-system/zkprogram.ts:140](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L140)

Serializable representation of a Pickles proof, useful for caching compiled proofs.

## Type declaration

### maxProofsVerified

```ts
maxProofsVerified: 0 | 1 | 2;
```

### proof

```ts
proof: Base64ProofString;
```

### publicInput

```ts
publicInput: string[];
```

Array of string, where each string is a `Field` in the publicInput of this proof

### publicOutput

```ts
publicOutput: string[];
```

Array of string, where each string is a `Field` in the publicOutput of this proof
