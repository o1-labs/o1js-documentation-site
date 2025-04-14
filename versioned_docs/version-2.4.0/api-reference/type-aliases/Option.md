```ts
type Option<T, V> = {
  isSome: Bool;
  value: T;
 } & {
  assertNone: void;
  assertSome: T;
  orElse: T;
};
```

Defined in: [lib/provable/option.ts:34](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/option.ts#L34)

## Type declaration

### isSome

```ts
isSome: Bool;
```

### value

```ts
value: T;
```

## Type declaration

### assertNone()

#### Parameters

##### message?

`string`

#### Returns

`void`

### assertSome()

#### Parameters

##### message?

`string`

#### Returns

`T`

### orElse()

#### Parameters

##### defaultValue

`T` | `V`

#### Returns

`T`

## Type Parameters

• **T**

• **V** = `any`
