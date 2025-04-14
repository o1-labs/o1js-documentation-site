```ts
Cache: {
  FileSystem: (cacheDirectory: string, debug?: boolean) => Cache;
  FileSystemDefault: Cache;
  None: Cache;
};
```

Defined in: [lib/proof-system/cache.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/cache.ts#L25)

## Type declaration

### FileSystem()

```ts
FileSystem: (cacheDirectory: string, debug?: boolean) => Cache;
```

Store data on the file system, in a directory of your choice.

Data will be stored in two files per cache entry: a data file and a `.header` file.
The header file just contains a unique string which is used to determine whether we can use the cached data.

Note: this [Cache](Cache.md) only caches data in Node.js.

#### Parameters

##### cacheDirectory

`string`

##### debug?

`boolean`

#### Returns

[`Cache`](../type-aliases/Cache.md)

### FileSystemDefault

```ts
FileSystemDefault: Cache;
```

Store data on the file system, in a standard cache directory depending on the OS.

Data will be stored in two files per cache entry: a data file and a `.header` file.
The header file just contains a unique string which is used to determine whether we can use the cached data.

Note: this [Cache](Cache.md) only caches data in Node.js.

### None

```ts
None: Cache;
```

Don't store anything.
