```ts
function createForeignField(modulus: bigint): typeof UnreducedForeignField
```

Defined in: [lib/provable/foreign-field.ts:622](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/foreign-field.ts#L622)

Create a class representing a prime order finite field, which is different from the native [Field](../classes/Field.md).

```ts
const SmallField = createForeignField(17n); // the finite field F_17
```

`createForeignField(p)` takes the prime modulus `p` of the finite field as input, as a bigint.
We support prime moduli up to a size of 259 bits.

The returned [ForeignField](../classes/ForeignField.md) class supports arithmetic modulo `p` (addition and multiplication),
as well as helper methods like `assertEquals()` and `equals()`.

_Advanced details:_

Internally, a foreign field element is represented as three native field elements, each of which
represents a limb of 88 bits. Therefore, being a valid foreign field element means that all 3 limbs
fit in 88 bits, and the foreign field element altogether is smaller than the modulus p.

Since the full `x < p` check is expensive, by default we only prove a weaker assertion, `x < 2^ceil(log2(p))`,
see [ForeignField.assertAlmostReduced](../classes/ForeignField.md#assertalmostreduced-2) for more details.

This weaker assumption is what we call "almost reduced", and it is represented by the [AlmostForeignField](../classes/AlmostForeignField.md) class.
Note that only [AlmostForeignField](../classes/AlmostForeignField.md) supports multiplication and inversion, while [UnreducedForeignField](../classes/UnreducedForeignField.md)
only supports addition and subtraction.

This function returns the `Unreduced` class, which will cause the minimum amount of range checks to be created by default.
If you want to do multiplication, you have two options:
- create your field elements using the [ForeignField.AlmostReduced](../classes/ForeignField.md#almostreduced) constructor.
```ts
let x = Provable.witness(ForeignField.AlmostReduced, () => 5n);
```
- create your field elements normally and convert them using `x.assertAlmostReduced()`.
```ts
let xChecked = x.assertAlmostReduced(); // asserts x < 2^ceil(log2(p)); returns `AlmostForeignField`
```

Similarly, there is a separate class [CanonicalForeignField](../classes/CanonicalForeignField.md) which represents fully reduced, "canonical" field elements.
To convert to a canonical field element, use `ForeignField.assertCanonical()`:

```ts
x.assertCanonical(); // asserts x < p; returns `CanonicalForeignField`
```
You will likely not need canonical fields most of the time.

Base types for all of these classes are separately exported as [UnreducedForeignField](../classes/UnreducedForeignField.md), [AlmostForeignField](../classes/AlmostForeignField.md) and [CanonicalForeignField](../classes/CanonicalForeignField.md).,

## Parameters

### modulus

`bigint`

the modulus of the finite field you are instantiating

## Returns

*typeof* [`UnreducedForeignField`](../classes/UnreducedForeignField.md)
