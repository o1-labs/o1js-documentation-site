```ts
Provable: {
  Array: <A>(elementType: A, length: number) => InferredProvable<ToProvable<A>[]>;
  asProver: (f: () => void) => void;
  assertEqual: <T>(type: FlexibleProvableType<T>, x: T, y: T) => void<T>(x: T, y: T) => void;
  assertEqualIf: <A, T>(enabled: Bool, type: A, x: T, y: T) => void;
  constraintSystem: (f: () => Promise<void> | () => void) => Promise<ConstraintSystemSummary>;
  equal: <T>(type: FlexibleProvableType<T>, x: T, y: T) => Bool;
  if: <T>(condition: Bool, type: FlexibleProvableType<T>, x: T, y: T) => T<T>(condition: Bool, x: T, y: T) => T;
  inCheckedComputation: () => boolean;
  inProver: () => boolean;
  log: (...args: any) => void;
  switch: <T, A>(mask: Bool[], type: A, values: T[], __namedParameters: {
     allowNonExclusive: boolean;
    }) => T;
  witness: <A, T>(type: A, compute: () => T) => InferProvable<ToProvable<A>>;
  witnessAsync: <A, T>(type: A, compute: () => Promise<T>) => Promise<T>;
  witnessFields: <N, C>(size: N, compute: C) => TupleN<Field, N>;
  runAndCheck: Promise<void>;
  runUnchecked: Promise<void>;
  toCanonical: T;
  toConstant: T;
};
```

Defined in: [lib/provable/provable.ts:46](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/provable.ts#L46)

## Type declaration

### Array()

```ts
Array: <A>(elementType: A, length: number) => InferredProvable<ToProvable<A>[]> = provableArray;
```

Creates a [Provable](Provable.md) for a generic array.

#### Type Parameters

• **A** *extends* `FlexibleProvableType`\<`any`\>

#### Parameters

##### elementType

`A`

##### length

`number`

#### Returns

`InferredProvable`\<[`ToProvable`](../type-aliases/ToProvable.md)\<`A`\>[]\>

#### Example

```ts
const ProvableArray = Provable.Array(Field, 5);
```

### asProver()

```ts
asProver: (f: () => void) => void;
```

Runs code as a prover.

#### Parameters

##### f

() => `void`

#### Returns

`void`

#### Example

```ts
Provable.asProver(() => {
  // Your prover code here
});
```

### assertEqual()

```ts
assertEqual: <T>(type: FlexibleProvableType<T>, x: T, y: T) => void<T>(x: T, y: T) => void;
```

Asserts that two values are equal.

#### Type Parameters

• **T**

#### Parameters

##### type

`FlexibleProvableType`\<`T`\>

##### x

`T`

##### y

`T`

#### Returns

`void`

#### Type Parameters

• **T** *extends* `ToFieldable`

#### Parameters

##### x

`T`

##### y

`T`

#### Returns

`void`

#### Example

```ts
class MyStruct extends Struct({ a: Field, b: Bool }) {};
const a: MyStruct = { a: Field(0), b: Bool(false) };
const b: MyStruct = { a: Field(1), b: Bool(true) };
Provable.assertEqual(MyStruct, a, b);
```

### assertEqualIf()

```ts
assertEqualIf: <A, T>(enabled: Bool, type: A, x: T, y: T) => void;
```

Asserts that two values are equal, if an enabling condition is true.

If the condition is false, the assertion is skipped.

#### Type Parameters

• **A** *extends* [`ProvableType`](../type-aliases/ProvableType.md)\<`any`\>

• **T** *extends* `any` = `InferProvableType`\<`A`\>

#### Parameters

##### enabled

[`Bool`](../classes/Bool.md)

##### type

`A`

##### x

`T`

##### y

`T`

#### Returns

`void`

### constraintSystem()

```ts
constraintSystem: (f: () => Promise<void> | () => void) => Promise<ConstraintSystemSummary>;
```

Returns information about the constraints created by the callback function.

#### Parameters

##### f

() => `Promise`\<`void`\> | () => `void`

#### Returns

`Promise`\<`ConstraintSystemSummary`\>

#### Example

```ts
const result = await Provable.constraintSystem(circuit);
console.log(result);
```

### equal()

```ts
equal: <T>(type: FlexibleProvableType<T>, x: T, y: T) => Bool;
```

Checks if two elements are equal.

#### Type Parameters

• **T**

#### Parameters

##### type

`FlexibleProvableType`\<`T`\>

##### x

`T`

##### y

`T`

#### Returns

[`Bool`](../classes/Bool.md)

#### Example

```ts
class MyStruct extends Struct({ a: Field, b: Bool }) {};
const a: MyStruct = { a: Field(0), b: Bool(false) };
const b: MyStruct = { a: Field(1), b: Bool(true) };
const isEqual = Provable.equal(MyStruct, a, b);
```

### if()

```ts
if: <T>(condition: Bool, type: FlexibleProvableType<T>, x: T, y: T) => T<T>(condition: Bool, x: T, y: T) => T = if_;
```

Proof-compatible if-statement.
This behaves like a ternary conditional statement in JS.

**Warning**: Since `Provable.if()` is a normal JS function call, both the if and the else branch
are evaluated before calling it. Therefore, you can't use this function
to guard against execution of one of the branches. It only allows you to pick one of two values.

#### Type Parameters

• **T**

#### Parameters

##### condition

[`Bool`](../classes/Bool.md)

##### type

`FlexibleProvableType`\<`T`\>

##### x

`T`

##### y

`T`

#### Returns

`T`

#### Type Parameters

• **T** *extends* `ToFieldable`

#### Parameters

##### condition

[`Bool`](../classes/Bool.md)

##### x

`T`

##### y

`T`

#### Returns

`T`

#### Example

```ts
const condition = Bool(true);
const result = Provable.if(condition, Field(1), Field(2)); // returns Field(1)
```

### inCheckedComputation()

```ts
inCheckedComputation: () => boolean;
```

Checks if the code is run in checked computation mode.

#### Returns

`boolean`

#### Example

```ts
if (Provable.inCheckedComputation()) {
  // Checked computation-specific code
}
```

### inProver()

```ts
inProver: () => boolean;
```

Checks if the code is run in prover mode.

#### Returns

`boolean`

#### Example

```ts
if (Provable.inProver()) {
  // Prover-specific code
}
```

### log()

```ts
log: (...args: any) => void;
```

Interface to log elements within a circuit. Similar to `console.log()`.

#### Parameters

##### args

...`any`

#### Returns

`void`

#### Example

```ts
const element = Field(42);
Provable.log(element);
```

### switch()

```ts
switch: <T, A>(mask: Bool[], type: A, values: T[], __namedParameters: {
  allowNonExclusive: boolean;
 }) => T = switch_;
```

Generalization of [Provable.if](Provable.md#if) for choosing between more than two different cases.
It takes a "mask", which is an array of `Bool`s that contains only one `true` element, a type/constructor, and an array of values of that type.
The result is that value which corresponds to the true element of the mask.

#### Type Parameters

• **T**

• **A** *extends* `FlexibleProvableType`\<`T`\>

#### Parameters

##### mask

[`Bool`](../classes/Bool.md)[]

##### type

`A`

##### values

`T`[]

##### \_\_namedParameters

###### allowNonExclusive

`boolean` = `false`

#### Returns

`T`

#### Example

```ts
let x = Provable.switch([Bool(false), Bool(true)], Field, [Field(1), Field(2)]);
x.assertEquals(2);
```

### witness()

```ts
witness: <A, T>(type: A, compute: () => T) => InferProvable<ToProvable<A>>;
```

Create a new witness. A witness, or variable, is a value that is provided as input
by the prover. This provides a flexible way to introduce values from outside into the circuit.
However, note that nothing about how the value was created is part of the proof - `Provable.witness`
behaves exactly like user input. So, make sure that after receiving the witness you make any assertions
that you want to associate with it.

#### Type Parameters

• **A** *extends* [`ProvableType`](../type-aliases/ProvableType.md)\<`any`, `any`\>

• **T** *extends* `any` = `From`\<[`ToProvable`](../type-aliases/ToProvable.md)\<`A`\>\>

#### Parameters

##### type

`A`

##### compute

() => `T`

#### Returns

[`InferProvable`](../type-aliases/InferProvable.md)\<[`ToProvable`](../type-aliases/ToProvable.md)\<`A`\>\>

#### Example

Example for re-implementing `Field.inv` with the help of `witness`:
```ts
let invX = Provable.witness(Field, () => {
  // compute the inverse of `x` outside the circuit, however you like!
  return Field.inv(x);
}
// prove that `invX` is really the inverse of `x`:
invX.mul(x).assertEquals(1);
```

### witnessAsync()

```ts
witnessAsync: <A, T>(type: A, compute: () => Promise<T>) => Promise<T>;
```

Create a new witness from an async callback.

See [Provable.witness](Provable.md#witness) for more information.

#### Type Parameters

• **A** *extends* [`ProvableType`](../type-aliases/ProvableType.md)\<`any`, `any`\>

• **T** *extends* `any` = `From`\<[`ToProvable`](../type-aliases/ToProvable.md)\<`A`\>\>

#### Parameters

##### type

`A`

##### compute

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

### witnessFields()

```ts
witnessFields: <N, C>(size: N, compute: C) => TupleN<Field, N>;
```

Witness a tuple of field elements. This works just like [Provable.witness](Provable.md#witness),
but optimized for witnessing plain field elements, which is especially common
in low-level provable code.

#### Type Parameters

• **N** *extends* `number`

• **C** *extends* () => [`TupleN`](../type-aliases/TupleN.md)\<`bigint` \| [`Field`](../classes/Field.md), `N`\>

#### Parameters

##### size

`N`

##### compute

`C`

#### Returns

[`TupleN`](../type-aliases/TupleN.md)\<[`Field`](../classes/Field.md), `N`\>

### runAndCheck()

Runs provable code quickly, without creating a proof, but still checking whether constraints are satisfied.

#### Parameters

##### f

() => `Promise`\<`void`\> | () => `void`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await Provable.runAndCheck(() => {
  // Your code to check here
});
```

### runUnchecked()

Runs provable code quickly, without creating a proof, and not checking whether constraints are satisfied.

#### Parameters

##### f

() => `Promise`\<`void`\> | () => `void`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await Provable.runUnchecked(() => {
  // Your code to run here
});
```

### toCanonical()

Return a canonical version of a value, where
canonical is defined by the `type`.

#### Type Parameters

• **T**

#### Parameters

##### type

[`Provable`](../type-aliases/Provable.md)\<`T`, `any`\>

##### value

`T`

#### Returns

`T`

### toConstant()

Returns a constant version of a provable type.

#### Type Parameters

• **T**

#### Parameters

##### type

[`ProvableType`](../type-aliases/ProvableType.md)\<`T`\>

##### value

`T`

#### Returns

`T`
