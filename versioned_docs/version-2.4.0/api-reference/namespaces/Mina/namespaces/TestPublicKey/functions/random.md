```ts
function random<N>(count: N): N extends 1 ? TestPublicKey : TupleN<TestPublicKey, N>
```

Defined in: [lib/mina/v1/local-blockchain.ts:50](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/local-blockchain.ts#L50)

## Type Parameters

• **N** *extends* `number` = `1`

## Parameters

### count

`N` = `...`

## Returns

`N` *extends* `1` ? [`TestPublicKey`](../../../type-aliases/TestPublicKey.md) : [`TupleN`](../../../../../type-aliases/TupleN.md)\<[`TestPublicKey`](../../../type-aliases/TestPublicKey.md), `N`\>
