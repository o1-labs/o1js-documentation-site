```ts
function encrypt(message: Field[], otherPublicKey: PublicKey): CipherText
```

Defined in: [lib/provable/crypto/encryption.ts:54](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/encryption.ts#L54)

Public Key Encryption, encrypts Field elements using a [PublicKey](../../../classes/PublicKey.md).

## Parameters

### message

[`Field`](../../../classes/Field.md)[]

### otherPublicKey

[`PublicKey`](../../../classes/PublicKey.md)

## Returns

[`CipherText`](../type-aliases/CipherText.md)
