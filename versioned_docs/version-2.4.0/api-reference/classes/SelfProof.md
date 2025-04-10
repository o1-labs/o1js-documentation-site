Defined in: [lib/proof-system/zkprogram.ts:611](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L611)

A class representing the type of Proof produced by the [ZkProgram](../functions/ZkProgram.md) in which it is used.

## Example

```ts
const ExampleProgram = ZkProgram({
  name: 'ExampleProgram',
  publicOutput: Field,
  methods: {
    baseCase: {
      privateInputs: [],
      method: async () => {
        return { publicOutput: Field(0) }
      }
    },
    add: {
      privateInputs: [SelfProof, Field],
      // `previous` is the type of proof produced by ExampleProgram
      method: async (previous: SelfProof<undefined, Field>, f: Field) => {
        previous.verify();
        return { publicOutput: previous.publicOutput.add(f) }
      }
    }
  }
});
```

## Extends

- [`Proof`](Proof.md)\<`PublicInput`, `PublicOutput`\>

## Type Parameters

• **PublicInput**

• **PublicOutput**

## Constructors

### new SelfProof()

```ts
new SelfProof<PublicInput, PublicOutput>(__namedParameters: {
  maxProofsVerified: 0 | 1 | 2;
  proof: unknown;
  publicInput: PublicInput;
  publicOutput: PublicOutput;
}): SelfProof<PublicInput, PublicOutput>
```

Defined in: [lib/proof-system/proof.ts:70](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L70)

#### Parameters

##### \_\_namedParameters

###### maxProofsVerified

`0` \| `1` \| `2`

###### proof

`unknown`

###### publicInput

`PublicInput`

###### publicOutput

`PublicOutput`

#### Returns

[`SelfProof`](SelfProof.md)\<`PublicInput`, `PublicOutput`\>

#### Inherited from

[`Proof`](Proof.md).[`constructor`](Proof.md#constructors)

## Properties

### maxProofsVerified

```ts
maxProofsVerified: 0 | 1 | 2;
```

Defined in: [lib/proof-system/proof.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L36)

#### Inherited from

[`Proof`](Proof.md).[`maxProofsVerified`](Proof.md#maxproofsverified-1)

***

### proof

```ts
proof: unknown;
```

Defined in: [lib/proof-system/proof.ts:35](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L35)

#### Inherited from

[`Proof`](Proof.md).[`proof`](Proof.md#proof-1)

***

### publicInput

```ts
publicInput: PublicInput;
```

Defined in: [lib/proof-system/proof.ts:33](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L33)

#### Inherited from

[`Proof`](Proof.md).[`publicInput`](Proof.md#publicinput-1)

***

### publicOutput

```ts
publicOutput: PublicOutput;
```

Defined in: [lib/proof-system/proof.ts:34](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L34)

#### Inherited from

[`Proof`](Proof.md).[`publicOutput`](Proof.md#publicoutput-1)

***

### shouldVerify

```ts
shouldVerify: Bool;
```

Defined in: [lib/proof-system/proof.ts:37](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L37)

#### Inherited from

[`Proof`](Proof.md).[`shouldVerify`](Proof.md#shouldverify)

***

### publicInputType

```ts
static publicInputType: FlexibleProvable<any>;
```

Defined in: [lib/proof-system/proof.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L25)

#### Inherited from

[`Proof`](Proof.md).[`publicInputType`](Proof.md#publicinputtype)

***

### publicOutputType

```ts
static publicOutputType: FlexibleProvable<any>;
```

Defined in: [lib/proof-system/proof.ts:26](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L26)

#### Inherited from

[`Proof`](Proof.md).[`publicOutputType`](Proof.md#publicoutputtype)

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

[`Proof`](Proof.md).[`tag`](Proof.md#tag)

## Accessors

### provable

#### Get Signature

```ts
get static provable(): ProvableProof<Proof<any, any>, any, any>
```

Defined in: [lib/proof-system/proof.ts:183](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L183)

##### Returns

`ProvableProof`\<[`Proof`](Proof.md)\<`any`, `any`\>, `any`, `any`\>

#### Inherited from

[`Proof`](Proof.md).[`provable`](Proof.md#provable)

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

[`Proof`](Proof.md).[`declare`](Proof.md#declare)

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

[`Proof`](Proof.md).[`publicFields`](Proof.md#publicfields)

***

### toJSON()

```ts
toJSON(): JsonProof
```

Defined in: [lib/proof-system/proof.ts:60](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L60)

#### Returns

[`JsonProof`](../type-aliases/JsonProof.md)

#### Inherited from

[`Proof`](Proof.md).[`toJSON`](Proof.md#tojson)

***

### verify()

```ts
verify(): void
```

Defined in: [lib/proof-system/proof.ts:125](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/proof.ts#L125)

#### Returns

`void`

#### Inherited from

[`Proof`](Proof.md).[`verify`](Proof.md#verify)

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

#### Inherited from

[`Proof`](Proof.md).[`verifyIf`](Proof.md#verifyif)

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

[`Proof`](Proof.md).[`_proofFromBase64`](Proof.md#_prooffrombase64)

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

[`Proof`](Proof.md).[`_proofToBase64`](Proof.md#_prooftobase64)

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

#### Inherited from

[`Proof`](Proof.md).[`dummy`](Proof.md#dummy)

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

#### Inherited from

[`Proof`](Proof.md).[`fromJSON`](Proof.md#fromjson)

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

[`Proof`](Proof.md).[`publicFields`](Proof.md#publicfields-2)
