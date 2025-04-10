```ts
function declareState<T>(SmartContract: T, states: Record<string, FlexibleProvablePure<any>>): void
```

Defined in: [lib/mina/v1/state.ts:176](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/state.ts#L176)

`declareState` can be used in place of the `@state` decorator to declare on-chain state on a SmartContract.
It should be placed _after_ the class declaration.
Here is an example of declaring a state property `x` of type `Field`.
```ts
class MyContract extends SmartContract {
  x = State<Field>();
  // ...
}
declareState(MyContract, { x: Field });
```

If you're using pure JS, it's _not_ possible to use the built-in class field syntax,
i.e. the following will _not_ work:

```js
// THIS IS WRONG IN JS!
class MyContract extends SmartContract {
  x = State();
}
declareState(MyContract, { x: Field });
```

Instead, add a constructor where you assign the property:
```js
class MyContract extends SmartContract {
  constructor(x) {
    super();
    this.x = State();
  }
}
declareState(MyContract, { x: Field });
```

## Type Parameters

• **T** *extends* *typeof* [`SmartContract`](../classes/SmartContract.md)

## Parameters

### SmartContract

`T`

### states

`Record`\<`string`, [`FlexibleProvablePure`](../type-aliases/FlexibleProvablePure.md)\<`any`\>\>

## Returns

`void`
