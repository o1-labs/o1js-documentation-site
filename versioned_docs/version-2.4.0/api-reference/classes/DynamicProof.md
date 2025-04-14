Defined in: [lib/proof-system/proof.ts:221](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L221)

The `DynamicProof` class enables circuits to verify proofs using in-ciruit verfication keys.
This is opposed to the baked-in verification keys of the `Proof` class.

In order to use this, a subclass of DynamicProof that specifies the public input and output types along with the maxProofsVerified number has to be created.

```ts
export class SideloadedProgramProof extends DynamicProof<MyStruct, Field> {
  static publicInputType = MyStruct;
  static publicOutputType = Field;
  static maxProofsVerified = 0 as const;
}
```

The `maxProofsVerified` constant is a product of the child circuit and indicates the maximum number that that circuit verifies itself.
If you are unsure about what that is for you, you should use `2`.

Any `DynamicProof` subclass can be used as private input to ZkPrograms or SmartContracts along with a `VerificationKey` input.
```ts
proof.verify(verificationKey)
```

NOTE: In the case of `DynamicProof`s, the circuit makes no assertions about the verificationKey used on its own.
This is the responsibility of the application developer and should always implement appropriate checks.
This pattern differs a lot from the usage of normal `Proof`, where the verification key is baked into the compiled circuit.

## See

src/examples/zkprogram/dynamic-keys-merkletree.ts for an example of how this can be done using merkle trees

Assertions generally only happen using the vk hash that is part of the `VerificationKey` struct along with the raw vk data as auxiliary data.
When using verify() on a `DynamicProof`, Pickles makes sure that the verification key data matches the hash.
Therefore all manual assertions have to be made on the vk's hash and it can be assumed that the vk's data is checked to match the hash if it is used with verify().

## Extends

- [`ProofBase`](ProofBase.md)\<`Input`, `Output`\>

## Type Parameters

• **Input**

• **Output**

## Constructors

### new DynamicProof()

```ts
new DynamicProof<Input, Output>(__namedParameters: {
  maxProofsVerified: 0 | 1 | 2;
  proof: unknown;
  publicInput: Input;
  publicOutput: Output;
}): DynamicProof<Input, Output>
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

[`DynamicProof`](DynamicProof.md)\<`Input`, `Output`\>

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

### usedVerificationKey?

```ts
optional usedVerificationKey: VerificationKey;
```

Defined in: [lib/proof-system/proof.ts:253](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L253)

***

### featureFlags

```ts
static featureFlags: FeatureFlags = FeatureFlags.allNone;
```

Defined in: [lib/proof-system/proof.ts:240](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L240)

As the name indicates, feature flags are features of the proof system.

If we want to side load proofs and verification keys, we first have to tell Pickles what _shape_ of proofs it should expect.

For example, if we want to side load proofs that use foreign field arithmetic custom gates, we have to make Pickles aware of that by defining
these custom gates.

_Note:_ Only proofs that use the exact same composition of custom gates which were expected by Pickles can be verified using side loading.
If you want to verify _any_ proof, no matter what custom gates it uses, you can use [FeatureFlags.allMaybe](../variables/FeatureFlags.md#allmaybe). Please note that this might incur a significant overhead.

You can also toggle specific feature flags manually by specifying them here.
Alternatively, you can use [FeatureFlags.fromZkProgram](../variables/FeatureFlags.md#fromzkprogram) to compute the set of feature flags that are compatible with a given program.

***

### maxProofsVerified

```ts
static maxProofsVerified: 0 | 1 | 2;
```

Defined in: [lib/proof-system/proof.ts:222](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L222)

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

## Accessors

### provable

#### Get Signature

```ts
get static provable(): ProvableProof<DynamicProof<any, any>, any, any>
```

Defined in: [lib/proof-system/proof.ts:319](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L319)

##### Returns

`ProvableProof`\<[`DynamicProof`](DynamicProof.md)\<`any`, `any`\>, `any`, `any`\>

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
verify(vk: VerificationKey): void
```

Defined in: [lib/proof-system/proof.ts:259](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L259)

Verifies this DynamicProof using a given verification key

#### Parameters

##### vk

[`VerificationKey`](VerificationKey.md)

The verification key this proof will be verified against

#### Returns

`void`

***

### verifyIf()

```ts
verifyIf(vk: VerificationKey, condition: Bool): void
```

Defined in: [lib/proof-system/proof.ts:263](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L263)

#### Parameters

##### vk

[`VerificationKey`](VerificationKey.md)

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
static dummy<S>(
   this: S, 
   publicInput: InferProvable<S["publicInputType"]>, 
   publicOutput: InferProvable<S["publicOutputType"]>, 
   maxProofsVerified: 0 | 1 | 2, 
domainLog2: number): Promise<InstanceType<S>>
```

Defined in: [lib/proof-system/proof.ts:285](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L285)

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* [`DynamicProof`](DynamicProof.md)\>

#### Parameters

##### this

`S`

##### publicInput

[`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicInputType"`\]\>

##### publicOutput

[`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicOutputType"`\]\>

##### maxProofsVerified

`0` | `1` | `2`

##### domainLog2

`number` = `14`

#### Returns

`Promise`\<`InstanceType`\<`S`\>\>

***

### fromJSON()

```ts
static fromJSON<S>(this: S, __namedParameters: JsonProof): Promise<DynamicProof<InferProvable<S["publicInputType"]>, InferProvable<S["publicOutputType"]>>>
```

Defined in: [lib/proof-system/proof.ts:268](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L268)

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* [`DynamicProof`](DynamicProof.md)\>

#### Parameters

##### this

`S`

##### \_\_namedParameters

[`JsonProof`](../type-aliases/JsonProof.md)

#### Returns

`Promise`\<[`DynamicProof`](DynamicProof.md)\<[`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicInputType"`\]\>, [`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicOutputType"`\]\>\>\>

***

### fromProof()

```ts
static fromProof<S>(this: S, proof: Proof<InferProvable<S["publicInputType"]>, InferProvable<S["publicOutputType"]>>): InstanceType<S>
```

Defined in: [lib/proof-system/proof.ts:307](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L307)

Converts a Proof into a DynamicProof carrying over all relevant data.
This method can be used to convert a Proof computed by a ZkProgram
into a DynamicProof that is accepted in a circuit that accepts DynamicProofs

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* [`DynamicProof`](DynamicProof.md)\>

#### Parameters

##### this

`S`

##### proof

[`Proof`](Proof.md)\<[`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicInputType"`\]\>, [`InferProvable`](../type-aliases/InferProvable.md)\<`S`\[`"publicOutputType"`\]\>\>

#### Returns

`InstanceType`\<`S`\>

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

***

### tag()

```ts
static tag(): {
  name: string;
}
```

Defined in: [lib/proof-system/proof.ts:242](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L242)

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

#### Overrides

```ts
ProofBase.tag
```
