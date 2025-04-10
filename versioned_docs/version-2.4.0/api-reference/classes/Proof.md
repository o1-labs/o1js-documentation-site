Defined in: [lib/proof-system/proof.ts:124](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L124)

## Extends

- [`ProofBase`](ProofBase.md)\<`Input`, `Output`\>

## Extended by

- [`SelfProof`](SelfProof.md)

## Type Parameters

• **Input**

• **Output**

## Constructors

### new Proof()

```ts
new Proof<Input, Output>(__namedParameters: {
  maxProofsVerified: 0 | 1 | 2;
  proof: unknown;
  publicInput: Input;
  publicOutput: Output;
}): Proof<Input, Output>
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

[`Proof`](Proof.md)\<`Input`, `Output`\>

#### Inherited from

[`ProofBase`](ProofBase.md).[`constructor`](ProofBase.md#constructors)

## Properties

### maxProofsVerified

```ts
maxProofsVerified: 0 | 1 | 2;
```

Defined in: [lib/proof-system/proof.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L36)

#### Inherited from

[`ProofBase`](ProofBase.md).[`maxProofsVerified`](ProofBase.md#maxproofsverified-1)

***

### proof

```ts
proof: unknown;
```

Defined in: [lib/proof-system/proof.ts:35](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L35)

#### Inherited from

[`ProofBase`](ProofBase.md).[`proof`](ProofBase.md#proof-1)

***

### publicInput

```ts
publicInput: Input;
```

Defined in: [lib/proof-system/proof.ts:33](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L33)

#### Inherited from

[`ProofBase`](ProofBase.md).[`publicInput`](ProofBase.md#publicinput-1)

***

### publicOutput

```ts
publicOutput: Output;
```

Defined in: [lib/proof-system/proof.ts:34](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L34)

#### Inherited from

[`ProofBase`](ProofBase.md).[`publicOutput`](ProofBase.md#publicoutput-1)

***

### shouldVerify

```ts
shouldVerify: Bool;
```

Defined in: [lib/proof-system/proof.ts:37](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L37)

#### Inherited from

[`ProofBase`](ProofBase.md).[`shouldVerify`](ProofBase.md#shouldverify)

***

### publicInputType

```ts
static publicInputType: FlexibleProvable<any>;
```

Defined in: [lib/proof-system/proof.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L25)

#### Inherited from

[`ProofBase`](ProofBase.md).[`publicInputType`](ProofBase.md#publicinputtype)

***

### publicOutputType

```ts
static publicOutputType: FlexibleProvable<any>;
```

Defined in: [lib/proof-system/proof.ts:26](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L26)

#### Inherited from

[`ProofBase`](ProofBase.md).[`publicOutputType`](ProofBase.md#publicoutputtype)

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

#### Inherited from

[`ProofBase`](ProofBase.md).[`tag`](ProofBase.md#tag)

## Accessors

### provable

#### Get Signature

```ts
get static provable(): ProvableProof<Proof<any, any>, any, any>
```

Defined in: [lib/proof-system/proof.ts:183](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L183)

##### Returns

`ProvableProof`\<[`Proof`](Proof.md)\<`any`, `any`\>, `any`, `any`\>

#### Overrides

[`ProofBase`](ProofBase.md).[`provable`](ProofBase.md#provable)

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

#### Inherited from

[`ProofBase`](ProofBase.md).[`declare`](ProofBase.md#declare)

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

#### Inherited from

[`ProofBase`](ProofBase.md).[`publicFields`](ProofBase.md#publicfields)

***

### toJSON()

```ts
toJSON(): JsonProof
```

Defined in: [lib/proof-system/proof.ts:60](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L60)

#### Returns

[`JsonProof`](../type-aliases/JsonProof.md)

#### Inherited from

[`ProofBase`](ProofBase.md).[`toJSON`](ProofBase.md#tojson)

***

### verify()

```ts
verify(): void
```

Defined in: [lib/proof-system/proof.ts:125](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L125)

#### Returns

`void`

***

### verifyIf()

```ts
verifyIf(condition: Bool): void
```

Defined in: [lib/proof-system/proof.ts:128](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L128)

#### Parameters

##### condition

[`Bool`](Bool.md)

#### Returns

`void`

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

#### Inherited from

[`ProofBase`](ProofBase.md).[`_proofFromBase64`](ProofBase.md#_prooffrombase64)

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

#### Inherited from

[`ProofBase`](ProofBase.md).[`_proofToBase64`](ProofBase.md#_prooftobase64)

***

### dummy()

```ts
static dummy<Input, OutPut>(
   publicInput: Input, 
   publicOutput: OutPut, 
   maxProofsVerified: 0 | 1 | 2, 
domainLog2: number): Promise<Proof<Input, OutPut>>
```

Defined in: [lib/proof-system/proof.ts:168](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L168)

Dummy proof. This can be useful for ZkPrograms that handle the base case in the same
method as the inductive case, using a pattern like this:

```ts
method(proof: SelfProof<I, O>, isRecursive: Bool) {
  proof.verifyIf(isRecursive);
  // ...
}
```

To use such a method in the base case, you need a dummy proof:

```ts
let dummy = await MyProof.dummy(publicInput, publicOutput, 1);
await myProgram.myMethod(dummy, Bool(false));
```

**Note**: The types of `publicInput` and `publicOutput`, as well as the `maxProofsVerified` parameter,
must match your ZkProgram. `maxProofsVerified` is the maximum number of proofs that any of your methods take as arguments.

#### Type Parameters

• **Input**

• **OutPut**

#### Parameters

##### publicInput

`Input`

##### publicOutput

`OutPut`

##### maxProofsVerified

`0` | `1` | `2`

##### domainLog2

`number` = `14`

#### Returns

`Promise`\<[`Proof`](Proof.md)\<`Input`, `OutPut`\>\>

***

### fromJSON()

```ts
static fromJSON<S>(this: S, __namedParameters: JsonProof): Promise<Proof<InferProvable<S["publicInputType"]>, InferProvable<S["publicOutputType"]>>>
```

Defined in: [lib/proof-system/proof.ts:132](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L132)

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* [`Proof`](Proof.md)\>

#### Parameters

##### this

`S`

##### \_\_namedParameters

[`JsonProof`](../type-aliases/JsonProof.md)

#### Returns

`Promise`\<[`Proof`](Proof.md)\<[`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicInputType"`\]\>, [`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicOutputType"`\]\>\>\>

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

#### Inherited from

[`ProofBase`](ProofBase.md).[`publicFields`](ProofBase.md#publicfields-2)
