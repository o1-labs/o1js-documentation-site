```ts
function Recursive<PublicInputType, PublicOutputType, PrivateInputs>(zkprogram: {
  maxProofsVerified: () => Promise<0 | 1 | 2>;
  name: string;
  privateInputTypes: PrivateInputs;
  publicInputType: PublicInputType;
  publicOutputType: PublicOutputType;
  rawMethods: { [Key in string | number | symbol]: (args: any) => Promise<{ publicOutput: InferProvable<PublicOutputType> }> };
 } & { [Key in string | number | symbol]: (args: any) => Promise<{ proof: Proof<InferProvable<PublicInputType>, InferProvable<PublicOutputType>> }> }): { [Key in keyof PrivateInputs]: RecursiveProver<InferProvable<PublicInputType>, PublicInputType, InferProvable<PublicOutputType>, PrivateInputs[Key]> & { if: ConditionalRecursiveProver<InferProvable<PublicInputType>, PublicInputType, InferProvable<PublicOutputType>, PrivateInputs[Key]> } }
```

Defined in: [index.ts:136](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/index.ts#L136)

## Type Parameters

• **PublicInputType** *extends* [`Provable`](../../../type-aliases/Provable.md)\<`any`\>

• **PublicOutputType** *extends* [`Provable`](../../../type-aliases/Provable.md)\<`any`\>

• **PrivateInputs** *extends* \{\}

## Parameters

### zkprogram

\{
  `maxProofsVerified`: () => `Promise`\<`0` \| `1` \| `2`\>;
  `name`: `string`;
  `privateInputTypes`: `PrivateInputs`;
  `publicInputType`: `PublicInputType`;
  `publicOutputType`: `PublicOutputType`;
  `rawMethods`: \{ \[Key in string \| number \| symbol\]: (args: any) =\> Promise\<\{ publicOutput: InferProvable\<PublicOutputType\> \}\> \};
 \} & \{ \[Key in string \| number \| symbol\]: (args: any) =\> Promise\<\{ proof: Proof\<InferProvable\<PublicInputType\>, InferProvable\<PublicOutputType\>\> \}\> \}

## Returns

`{ [Key in keyof PrivateInputs]: RecursiveProver<InferProvable<PublicInputType>, PublicInputType, InferProvable<PublicOutputType>, PrivateInputs[Key]> & { if: ConditionalRecursiveProver<InferProvable<PublicInputType>, PublicInputType, InferProvable<PublicOutputType>, PrivateInputs[Key]> } }`
