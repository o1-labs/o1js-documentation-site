```ts
const TokenId: {
  default: Field;
  derive: Field;
  fromBase58: Field;
  toBase58: string;
};
```

Defined in: [lib/mina/v1/account-update.ts:624](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L624)

## Type declaration

### default

```ts
default: Field;
```

### derive()

#### Parameters

##### tokenOwner

[`PublicKey`](../classes/PublicKey.md)

##### parentTokenId

[`Field`](../classes/Field.md) = `...`

#### Returns

[`Field`](../classes/Field.md)

### fromBase58()

#### Parameters

##### base58

`string`

#### Returns

[`Field`](../classes/Field.md)

### toBase58()

#### Parameters

##### t

[`Field`](../classes/Field.md)

#### Returns

`string`
