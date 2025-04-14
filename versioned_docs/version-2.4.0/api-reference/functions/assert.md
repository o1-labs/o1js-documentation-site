```ts
function assert(stmt: boolean | Bool, message?: string): asserts stmt
```

Defined in: [lib/provable/gadgets/common.ts:46](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/gadgets/common.ts#L46)

Assert that a statement is true. If the statement is false, throws an error with the given message.
Can be used in provable code.

## Parameters

### stmt

`boolean` | [`Bool`](../classes/Bool.md)

### message?

`string`

## Returns

`asserts stmt`
