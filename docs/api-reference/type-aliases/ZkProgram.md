```ts
type ZkProgram<Config> = ReturnType<typeof ZkProgram>;
```

Defined in: [lib/proof-system/zkprogram.ts:226](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/zkprogram.ts#L226)

## Type Parameters

• **Config** *extends* \{
  `methods`: `{ [I in string]: { auxiliaryOutput?: ProvableType; privateInputs: Tuple<PrivateInput> } }`;
  `publicInput`: [`ProvableType`](ProvableType.md);
  `publicOutput`: [`ProvableType`](ProvableType.md);
 \}
