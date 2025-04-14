```ts
function sender(): PublicKey
```

Defined in: [lib/mina/v1/mina.ts:413](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/mina.ts#L413)

Returns the public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

## Returns

[`PublicKey`](../../../classes/PublicKey.md)
