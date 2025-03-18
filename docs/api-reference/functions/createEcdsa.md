```ts
function createEcdsa(curve: CurveParams | typeof ForeignCurve): typeof EcdsaSignature
```

Defined in: [lib/provable/crypto/foreign-ecdsa.ts:241](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-ecdsa.ts#L241)

Create a class [EcdsaSignature](../classes/EcdsaSignature.md) for verifying ECDSA signatures on the given curve.

## Parameters

### curve

`CurveParams` | *typeof* [`ForeignCurve`](../classes/ForeignCurve.md)

## Returns

*typeof* [`EcdsaSignature`](../classes/EcdsaSignature.md)
