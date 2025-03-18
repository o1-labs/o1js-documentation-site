```ts
function createForeignCurve(params: CurveParams): typeof ForeignCurve
```

Defined in: [lib/provable/crypto/foreign-curve.ts:433](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/foreign-curve.ts#L433)

Create a class representing an elliptic curve group, which is different from the native [Group](../classes/Group.md).

```ts
const Curve = createForeignCurve(Crypto.CurveParams.Secp256k1);
```

`createForeignCurve(params)` takes curve parameters `CurveParams` as input.
We support `modulus` and `order` to be prime numbers up to 259 bits.

The returned [ForeignCurveNotNeeded](../classes/ForeignCurveNotNeeded.md) class represents a _non-zero curve point_ and supports standard
elliptic curve operations like point addition and scalar multiplication.

[ForeignCurveNotNeeded](../classes/ForeignCurveNotNeeded.md) also includes to associated foreign fields: `ForeignCurve.Field` and `ForeignCurve.Scalar`, see [createForeignField](createForeignField.md).

## Parameters

### params

`CurveParams`

## Returns

*typeof* [`ForeignCurve`](../classes/ForeignCurve.md)
