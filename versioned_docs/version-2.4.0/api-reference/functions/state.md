```ts
function state<A>(type: 
  | ProvableTypePure<A>
  | FlexibleProvablePure<A>): (target: SmartContract & {
  constructor: any;
 }, key: string, _descriptor?: PropertyDescriptor) => void
```

Defined in: [lib/mina/v1/state.ts:100](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/state.ts#L100)

A decorator to use within a zkapp to indicate what will be stored on-chain.
For example, if you want to store a field element `some_state` in a zkapp,
you can use the following in the declaration of your zkapp:

```
@state(Field) some_state = State<Field>();
```

## Type Parameters

• **A**

## Parameters

### type

[`ProvableTypePure`](../type-aliases/ProvableTypePure.md)\<`A`\> | [`FlexibleProvablePure`](../type-aliases/FlexibleProvablePure.md)\<`A`\>

## Returns

`Function`

### Parameters

#### target

[`SmartContract`](../classes/SmartContract.md) & \{
  `constructor`: `any`;
 \}

#### key

`string`

#### \_descriptor?

`PropertyDescriptor`

### Returns

`void`
