```ts
function Bytes(size: number): typeof Bytes
```

Defined in: [lib/provable/wrapped-classes.ts:16](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/wrapped-classes.ts#L16)

A provable type representing an array of bytes.

```ts
class Bytes32 extends Bytes(32) {}

let bytes = Bytes32.fromHex('deadbeef');
```

## Parameters

### size

`number`

## Returns

*typeof* `Bytes`
