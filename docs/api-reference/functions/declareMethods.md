```ts
function declareMethods<T>(SmartContract: T, methodArguments: Record<string, Provable<unknown>[]>): void
```

Defined in: [lib/mina/v1/zkapp.ts:1183](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/zkapp.ts#L1183)

`declareMethods` can be used in place of the `@method` decorator
to declare SmartContract methods along with their list of arguments.
It should be placed _after_ the class declaration.
Here is an example of declaring a method `update`, which takes a single argument of type `Field`:
```ts
class MyContract extends SmartContract {
  // ...
  update(x: Field) {
    // ...
  }
}
declareMethods(MyContract, { update: [Field] }); // `[Field]` is the list of arguments!
```
Note that a method of the same name must still be defined on the class, just without the decorator.

## Type Parameters

• **T** *extends* *typeof* [`SmartContract`](../classes/SmartContract.md)

## Parameters

### SmartContract

`T`

### methodArguments

`Record`\<`string`, [`Provable`](../type-aliases/Provable.md)\<`unknown`\>[]\>

## Returns

`void`
