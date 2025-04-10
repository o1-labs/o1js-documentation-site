Defined in: [lib/proof-system/proof.ts:24](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L24)

## Extended by

- [`Proof`](Proof.md)
- [`DynamicProof`](DynamicProof.md)

## Type Parameters

• **Input** = `any`

• **Output** = `any`

## Constructors

### new ProofBase()

```ts
new ProofBase<Input, Output>(__namedParameters: {
  maxProofsVerified: 0 | 1 | 2;
  proof: unknown;
  publicInput: Input;
  publicOutput: Output;
}): ProofBase<Input, Output>
```

Defined in: [lib/proof-system/proof.ts:70](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L70)

#### Parameters

##### \_\_namedParameters

###### maxProofsVerified

`0` \| `1` \| `2`

###### proof

`unknown`

###### publicInput

`Input`

###### publicOutput

`Output`

#### Returns

[`ProofBase`](ProofBase.md)\<`Input`, `Output`\>

## Properties

### maxProofsVerified

```ts
maxProofsVerified: 0 | 1 | 2;
```

Defined in: [lib/proof-system/proof.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L36)

***

### proof

```ts
proof: unknown;
```

Defined in: [lib/proof-system/proof.ts:35](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L35)

***

### publicInput

```ts
publicInput: Input;
```

Defined in: [lib/proof-system/proof.ts:33](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L33)

***

### publicOutput

```ts
publicOutput: Output;
```

Defined in: [lib/proof-system/proof.ts:34](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L34)

***

### shouldVerify

```ts
shouldVerify: Bool;
```

Defined in: [lib/proof-system/proof.ts:37](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L37)

***

### publicInputType

```ts
static publicInputType: FlexibleProvable<any>;
```

Defined in: [lib/proof-system/proof.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L25)

***

### publicOutputType

```ts
static publicOutputType: FlexibleProvable<any>;
```

Defined in: [lib/proof-system/proof.ts:26](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L26)

***

### tag()

```ts
static tag: () => {
  name: string;
};
```

Defined in: [lib/proof-system/proof.ts:27](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L27)

#### Returns

```ts
{
  name: string;
}
```

##### name

```ts
name: string;
```

## Accessors

### provable

#### Get Signature

```ts
get static provable(): Provable<any>
```

Defined in: [lib/proof-system/proof.ts:87](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L87)

##### Returns

[`Provable`](../type-aliases/Provable.md)\<`any`\>

## Methods

### declare()

```ts
declare(): boolean
```

Defined in: [lib/proof-system/proof.ts:53](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L53)

To verify a recursive proof inside a ZkProgram method, it has to be "declared" as part of
the method. This is done by calling `declare()` on the proof.

Note: `declare()` is a low-level method that most users will not have to call directly.
For proofs that are inputs to the ZkProgram, it is done automatically.

You can think of declaring a proof as a similar step as witnessing a variable, which introduces
that variable to the circuit. Declaring a proof will tell Pickles to add the additional constraints
for recursive proof verification.

Similar to `Provable.witness()`, `declare()` is a no-op when run outside ZkProgram compilation or proving.
It returns `false` in that case, and `true` if the proof was actually declared.

#### Returns

`boolean`

***

### publicFields()

```ts
publicFields(): {
  input: Field[];
  output: Field[];
}
```

Defined in: [lib/proof-system/proof.ts:110](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L110)

#### Returns

```ts
{
  input: Field[];
  output: Field[];
}
```

##### input

```ts
input: Field[];
```

##### output

```ts
output: Field[];
```

***

### toJSON()

```ts
toJSON(): JsonProof
```

Defined in: [lib/proof-system/proof.ts:60](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L60)

#### Returns

[`JsonProof`](../type-aliases/JsonProof.md)

***

### \_proofFromBase64()

```ts
static _proofFromBase64(proofString: string, maxProofsVerified: 0 | 1 | 2): unknown
```

Defined in: [lib/proof-system/proof.ts:114](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L114)

#### Parameters

##### proofString

`string`

##### maxProofsVerified

`0` | `1` | `2`

#### Returns

`unknown`

***

### \_proofToBase64()

```ts
static _proofToBase64(proof: unknown, maxProofsVerified: 0 | 1 | 2): string
```

Defined in: [lib/proof-system/proof.ts:118](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L118)

#### Parameters

##### proof

`unknown`

##### maxProofsVerified

`0` | `1` | `2`

#### Returns

`string`

***

### publicFields()

```ts
static publicFields(value: ProofBase): {
  input: Field[];
  output: Field[];
}
```

Defined in: [lib/proof-system/proof.ts:102](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L102)

#### Parameters

##### value

[`ProofBase`](ProofBase.md)

#### Returns

```ts
{
  input: Field[];
  output: Field[];
}
```

##### input

```ts
input: Field[];
```

##### output

```ts
output: Field[];
```
