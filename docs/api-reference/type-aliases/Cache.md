```ts
type Cache = {
  canWrite: boolean;
  debug: boolean;
  read: undefined | Uint8Array;
  write: void;
};
```

Defined in: [lib/proof-system/cache.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/cache.ts#L25)

Interface for storing and retrieving values, for caching.
`read()` and `write()` can just throw errors on failure.

The data that will be passed to the cache for writing is exhaustively described by the [CacheHeader](CacheHeader.md) type.
It represents one of the following:
- The SRS. This is a deterministic lists of curve points (one per curve) that needs to be generated just once,
  to be used for polynomial commitments.
- Lagrange basis commitments. Similar to the SRS, this will be created once for every power-of-2 circuit size.
- Prover and verifier keys for every compiled circuit.

Per smart contract or ZkProgram, several different keys are created:
- a step prover key (`step-pk`) and verification key (`step-vk`) _for every method_.
- a wrap prover key (`wrap-pk`) and verification key (`wrap-vk`) for the entire contract.

## Type declaration

### canWrite

```ts
canWrite: boolean;
```

Indicates whether the cache is writable.

### debug?

```ts
optional debug: boolean;
```

If `debug` is toggled, `read()` and `write()` errors are logged to the console.

By default, cache errors are silent, because they don't necessarily represent an error condition,
but could just be a cache miss, or file system permissions incompatible with writing data.

### read()

Read a value from the cache.

#### Parameters

##### header

[`CacheHeader`](CacheHeader.md)

A small header to identify what is read from the cache.

#### Returns

`undefined` \| `Uint8Array`

### write()

Write a value to the cache.

#### Parameters

##### header

[`CacheHeader`](CacheHeader.md)

A small header to identify what is written to the cache. This will be used by `read()` to retrieve the data.

##### value

`Uint8Array`

The value to write to the cache, as a byte array.

#### Returns

`void`
