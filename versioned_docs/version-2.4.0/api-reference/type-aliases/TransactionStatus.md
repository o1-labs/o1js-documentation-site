```ts
type TransactionStatus = "INCLUDED" | "PENDING" | "UNKNOWN";
```

Defined in: [lib/mina/v1/graphql.ts:216](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/graphql.ts#L216)

INCLUDED: A transaction that is on the longest chain

PENDING: A transaction either in the transition frontier or in transaction pool but is not on the longest chain

UNKNOWN: The transaction has either been snarked, reached finality through consensus or has been dropped
