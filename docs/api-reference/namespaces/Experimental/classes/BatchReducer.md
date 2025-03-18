Defined in: [index.ts:177](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/index.ts#L177)

A reducer to process actions in fixed-size batches.

```ts
let batchReducer = new BatchReducer({ actionType: Action, batchSize: 5 });

// in contract: concurrent dispatching of actions
batchReducer.dispatch(action);

// reducer logic
// outside contract: prepare a list of { batch, proof } objects which cover all pending actions
let batches = await batchReducer.prepareBatches();

// in contract: process a single batch
// create one transaction that does this for each batch!
batchReducer.processBatch({ batch, proof }, (action, isDummy) => {
  // ...
});
```

## Extends

- `BatchReducer`\<`ActionType`, `BatchSize`, `Action`\>

## Type Parameters

• **ActionType** *extends* `Actionable`\<`any`\>

• **BatchSize** *extends* `number` = `number`

• **Action** = [`InferProvable`](../../../type-aliases/InferProvable.md)\<`ActionType`\>

## Constructors

### new BatchReducer()

```ts
new BatchReducer<ActionType, BatchSize, Action>(__namedParameters: {
  actionType: ActionType;
  batchSize: BatchSize;
  maxActionsPerUpdate: number;
  maxUpdatesFinalProof: number;
  maxUpdatesPerProof: number;
}): BatchReducer<ActionType, BatchSize, Action>
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:75](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L75)

#### Parameters

##### \_\_namedParameters

###### actionType

`ActionType`

The provable type of actions submitted by this reducer.

###### batchSize

`BatchSize`

The number of actions in a batch. The idea is to process one batch per transaction, by calling `processBatch()`.

The motivation for processing actions in small batches is to work around the protocol limit on the number of account updates.
If every action should result in an account update, then you have to set the batch size low enough to not exceed the limit.

If transaction limits are no concern, the `batchSize` could be set based on amount of logic you do per action.
A smaller batch size will make proofs faster, but you might need more individual transactions as more batches are needed to process all pending actions.

###### maxActionsPerUpdate

`number` = `...`

The maximum number of actions dispatched in any of the zkApp methods on the contract.

Note: This number just has to be an upper bound of the actual maximum, but if it's the precise number,
fewer constraints will be used. (The overhead of a higher number is fairly small though.)

A restriction is that the number has to be less or equal than the `batchSize`.
The reason is that actions in one account update are always processed together, so if you'd have more actions in one than the batch size, we couldn't process them at all.

By default, this is set to `Math.min(batchSize, 5)` which should be sensible for most applications.

###### maxUpdatesFinalProof

`number` = `100`

The maximum number of action lists (= all actions on an account update) to process inside `processBatch()`,
i.e. in your zkApp method.

Default: 100, which will take up about 3000 constraints.

The current default should be sensible for most applications, but here are some trade-offs to consider when changing it:

- Using a smaller number means a smaller circuit, so proofs of your method will be faster.
- Using a bigger number means it's more likely that you can prove _all_ actions in the method call and won't need a recursive proof.

So, go lower if you expect very few actions, and higher if you expect a lot of actions.

###### maxUpdatesPerProof

`number` = `300`

The maximum number of action lists (= all actions on an account update) to process in a single recursive proof, in `prepareBatches()`.

Default: 300, which will take up about 9000 constraints.

The current default should be sensible for most applications, but here are some trade-offs to consider when changing it:

- Using a smaller number means a smaller circuit, so recursive proofs will be faster.
- Using a bigger number means you'll need fewer recursive proofs in the case a lot of actions are pending.

So, go lower if you expect very few actions, and higher if you expect a lot of actions.
(Note: A larger circuit causes longer compilation and proof times for your zkApp even if you _never_ need a recursive proof)

#### Returns

[`BatchReducer`](BatchReducer.md)\<`ActionType`, `BatchSize`, `Action`\>

#### Inherited from

```ts
BatchReducer_.BatchReducer<ActionType, BatchSize, Action>.constructor
```

## Properties

### \_contract?

```ts
optional _contract: BatchReducerContract;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:164](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L164)

#### Inherited from

```ts
BatchReducer_.BatchReducer._contract
```

***

### \_contractClass?

```ts
optional _contractClass: BatchReducerContractClass;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:165](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L165)

#### Inherited from

```ts
BatchReducer_.BatchReducer._contractClass
```

***

### actionType

```ts
actionType: Provable<Action, any> & {
  empty: () => Action;
 } & {
  toInput: (x: Action) => HashInput;
 } & Omit<Provable<Action, any>, "fromFields"> & {
  fromFields: (fields: Field[]) => Action;
};
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:66](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L66)

#### Type declaration

##### empty()

```ts
empty: () => Action;
```

###### Returns

`Action`

#### Type declaration

##### toInput()

```ts
toInput: (x: Action) => HashInput;
```

###### Parameters

###### x

`Action`

###### Returns

`HashInput`

#### Type declaration

##### fromFields()

```ts
fromFields: (fields: Field[]) => Action;
```

###### Parameters

###### fields

[`Field`](../../../classes/Field.md)[]

###### Returns

`Action`

#### Inherited from

```ts
BatchReducer_.BatchReducer.actionType
```

***

### Batch

```ts
Batch: (value: {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 }) => {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 } & {
  _isStruct: true;
 } & Provable<{
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 }, {
  isRecursive: boolean;
  onchainActionState: bigint;
  onchainStack: bigint;
  processedActionState: bigint;
  stack: any;
  useOnchainStack: boolean;
  witnesses: ActionWitnesses;
 }> & {
  empty: () => {
     isRecursive: Bool;
     onchainActionState: Field;
     onchainStack: Field;
     processedActionState: Field;
     stack: MerkleList<MerkleList<Hashed<any>>>;
     useOnchainStack: Bool;
     witnesses: Unconstrained<ActionWitnesses>;
    };
  fromJSON: (x: {
     isRecursive: boolean;
     onchainActionState: string;
     onchainStack: string;
     processedActionState: string;
     stack: {
        _emptyHash: null | string;
        _innerProvable:   | null
           | {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        _nextHash: null | {};
        _provable:   | null
           | {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        empty: {};
        emptyHash: string;
        from: {};
        fromReverse: {};
        prototype: {
           Constructor: {
              _emptyHash: null | string;
              _innerProvable:   | null
                 | {
                 check: {};
                 empty: {};
                 fromFields: {};
                 fromValue: {};
                 toAuxiliary: {};
                 toCanonical: null | {};
                 toFields: {};
                 toInput: {};
                 toValue: {};
                 sizeInFields: ;
                };
              _nextHash: null | {};
              _provable:   | null
                 | {
                 check: {};
                 empty: {};
                 fromFields: {};
                 fromValue: {};
                 toAuxiliary: {};
                 toCanonical: null | {};
                 toFields: {};
                 toInput: {};
                 toValue: {};
                 sizeInFields: ;
                };
              emptyHash: string;
              prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
              create: ;
             };
           data: {
              get: ;
              set: ;
              setTo: ;
              updateAsProver: ;
             };
           hash: string;
           innerProvable: {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           clone: ;
           forEach: ;
           isEmpty: ;
           lengthUnconstrained: ;
           nextHash: ;
           pop: ;
           popExn: ;
           popIf: ;
           popIfUnsafe: ;
           popOption: ;
           push: ;
           pushIf: ;
           startIterating: ;
           startIteratingFromLast: ;
           toArrayUnconstrained: ;
          };
        provable: {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        create: ;
       };
     useOnchainStack: boolean;
     witnesses: {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
    }) => {
     isRecursive: Bool;
     onchainActionState: Field;
     onchainStack: Field;
     processedActionState: Field;
     stack: MerkleList<MerkleList<Hashed<any>>>;
     useOnchainStack: Bool;
     witnesses: Unconstrained<ActionWitnesses>;
    };
  fromValue: (value: {
     isRecursive: boolean | Bool;
     onchainActionState: string | number | bigint | Field;
     onchainStack: string | number | bigint | Field;
     processedActionState: string | number | bigint | Field;
     stack: any;
     useOnchainStack: boolean | Bool;
     witnesses:   | ActionWitnesses
        | Unconstrained<ActionWitnesses>;
    }) => {
     isRecursive: Bool;
     onchainActionState: Field;
     onchainStack: Field;
     processedActionState: Field;
     stack: MerkleList<MerkleList<Hashed<any>>>;
     useOnchainStack: Bool;
     witnesses: Unconstrained<ActionWitnesses>;
    };
  toInput: (x: {
     isRecursive: Bool;
     onchainActionState: Field;
     onchainStack: Field;
     processedActionState: Field;
     stack: MerkleList<MerkleList<Hashed<any>>>;
     useOnchainStack: Bool;
     witnesses: Unconstrained<ActionWitnesses>;
    }) => {
     fields: Field[];
     packed: [Field, number][];
    };
  toJSON: (x: {
     isRecursive: Bool;
     onchainActionState: Field;
     onchainStack: Field;
     processedActionState: Field;
     stack: MerkleList<MerkleList<Hashed<any>>>;
     useOnchainStack: Bool;
     witnesses: Unconstrained<ActionWitnesses>;
    }) => {
     isRecursive: boolean;
     onchainActionState: string;
     onchainStack: string;
     processedActionState: string;
     stack: {
        _emptyHash: null | string;
        _innerProvable:   | null
           | {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        _nextHash: null | {};
        _provable:   | null
           | {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        empty: {};
        emptyHash: string;
        from: {};
        fromReverse: {};
        prototype: {
           Constructor: {
              _emptyHash: null | string;
              _innerProvable:   | null
                 | {
                 check: {};
                 empty: {};
                 fromFields: {};
                 fromValue: {};
                 toAuxiliary: {};
                 toCanonical: null | {};
                 toFields: {};
                 toInput: {};
                 toValue: {};
                 sizeInFields: ;
                };
              _nextHash: null | {};
              _provable:   | null
                 | {
                 check: {};
                 empty: {};
                 fromFields: {};
                 fromValue: {};
                 toAuxiliary: {};
                 toCanonical: null | {};
                 toFields: {};
                 toInput: {};
                 toValue: {};
                 sizeInFields: ;
                };
              emptyHash: string;
              prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
              create: ;
             };
           data: {
              get: ;
              set: ;
              setTo: ;
              updateAsProver: ;
             };
           hash: string;
           innerProvable: {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           clone: ;
           forEach: ;
           isEmpty: ;
           lengthUnconstrained: ;
           nextHash: ;
           pop: ;
           popExn: ;
           popIf: ;
           popIfUnsafe: ;
           popOption: ;
           push: ;
           pushIf: ;
           startIterating: ;
           startIteratingFromLast: ;
           toArrayUnconstrained: ;
          };
        provable: {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        create: ;
       };
     useOnchainStack: boolean;
     witnesses: {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
    };
};
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:67](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L67)

#### Type declaration

##### \_isStruct

```ts
_isStruct: true;
```

#### Type declaration

##### empty()

```ts
empty: () => {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
};
```

###### Returns

```ts
{
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
}
```

###### isRecursive

```ts
isRecursive: Bool = Bool;
```

###### onchainActionState

```ts
onchainActionState: Field = Field;
```

###### onchainStack

```ts
onchainStack: Field = Field;
```

###### processedActionState

```ts
processedActionState: Field = Field;
```

###### stack

```ts
stack: MerkleList<MerkleList<Hashed<any>>>;
```

###### useOnchainStack

```ts
useOnchainStack: Bool = Bool;
```

###### witnesses

```ts
witnesses: Unconstrained<ActionWitnesses>;
```

##### fromJSON()

```ts
fromJSON: (x: {
  isRecursive: boolean;
  onchainActionState: string;
  onchainStack: string;
  processedActionState: string;
  stack: {
     _emptyHash: null | string;
     _innerProvable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     _nextHash: null | {};
     _provable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     empty: {};
     emptyHash: string;
     from: {};
     fromReverse: {};
     prototype: {
        Constructor: {
           _emptyHash: null | string;
           _innerProvable:   | null
              | {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           _nextHash: null | {};
           _provable:   | null
              | {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           emptyHash: string;
           prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
           create: ;
          };
        data: {
           get: ;
           set: ;
           setTo: ;
           updateAsProver: ;
          };
        hash: string;
        innerProvable: {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        clone: ;
        forEach: ;
        isEmpty: ;
        lengthUnconstrained: ;
        nextHash: ;
        pop: ;
        popExn: ;
        popIf: ;
        popIfUnsafe: ;
        popOption: ;
        push: ;
        pushIf: ;
        startIterating: ;
        startIteratingFromLast: ;
        toArrayUnconstrained: ;
       };
     provable: {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     create: ;
    };
  useOnchainStack: boolean;
  witnesses: {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
 }) => {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
};
```

###### Parameters

###### x

###### isRecursive

`boolean` = `Bool`

###### onchainActionState

`string` = `Field`

###### onchainStack

`string` = `Field`

###### processedActionState

`string` = `Field`

###### stack

\{
  `_emptyHash`: `null` \| `string`;
  `_innerProvable`:   \| `null`
     \| \{
     `check`: \{\};
     `empty`: \{\};
     `fromFields`: \{\};
     `fromValue`: \{\};
     `toAuxiliary`: \{\};
     `toCanonical`: `null` \| \{\};
     `toFields`: \{\};
     `toInput`: \{\};
     `toValue`: \{\};
     `sizeInFields`: ;
    \};
  `_nextHash`: `null` \| \{\};
  `_provable`:   \| `null`
     \| \{
     `check`: \{\};
     `empty`: \{\};
     `fromFields`: \{\};
     `fromValue`: \{\};
     `toAuxiliary`: \{\};
     `toCanonical`: `null` \| \{\};
     `toFields`: \{\};
     `toInput`: \{\};
     `toValue`: \{\};
     `sizeInFields`: ;
    \};
  `empty`: \{\};
  `emptyHash`: `string`;
  `from`: \{\};
  `fromReverse`: \{\};
  `prototype`: \{
     `Constructor`: \{
        `_emptyHash`: `null` \| `string`;
        `_innerProvable`:   \| `null`
           \| \{
           `check`: \{\};
           `empty`: \{\};
           `fromFields`: \{\};
           `fromValue`: \{\};
           `toAuxiliary`: \{\};
           `toCanonical`: `null` \| \{\};
           `toFields`: \{\};
           `toInput`: \{\};
           `toValue`: \{\};
           `sizeInFields`: ;
          \};
        `_nextHash`: `null` \| \{\};
        `_provable`:   \| `null`
           \| \{
           `check`: \{\};
           `empty`: \{\};
           `fromFields`: \{\};
           `fromValue`: \{\};
           `toAuxiliary`: \{\};
           `toCanonical`: `null` \| \{\};
           `toFields`: \{\};
           `toInput`: \{\};
           `toValue`: \{\};
           `sizeInFields`: ;
          \};
        `emptyHash`: `string`;
        `prototype`: \{ hash: string; data: \{ get: \{\}; set: \{\}; setTo: \{\}; updateAsProver: \{\}; \}; isEmpty: \{\}; push: \{\}; pushIf: \{\}; popExn: \{\}; pop: \{\}; popOption: \{\}; popIf: \{\}; popIfUnsafe: \{\}; clone: \{\}; forEach: \{\}; startIterating: \{\}; ... 5 more ...; readonly innerProvable: \{ ...; \}; \};
        `create`: ;
       \};
     `data`: \{
        `get`: ;
        `set`: ;
        `setTo`: ;
        `updateAsProver`: ;
       \};
     `hash`: `string`;
     `innerProvable`: \{
        `check`: \{\};
        `empty`: \{\};
        `fromFields`: \{\};
        `fromValue`: \{\};
        `toAuxiliary`: \{\};
        `toCanonical`: `null` \| \{\};
        `toFields`: \{\};
        `toInput`: \{\};
        `toValue`: \{\};
        `sizeInFields`: ;
       \};
     `clone`: ;
     `forEach`: ;
     `isEmpty`: ;
     `lengthUnconstrained`: ;
     `nextHash`: ;
     `pop`: ;
     `popExn`: ;
     `popIf`: ;
     `popIfUnsafe`: ;
     `popOption`: ;
     `push`: ;
     `pushIf`: ;
     `startIterating`: ;
     `startIteratingFromLast`: ;
     `toArrayUnconstrained`: ;
    \};
  `provable`: \{
     `check`: \{\};
     `empty`: \{\};
     `fromFields`: \{\};
     `fromValue`: \{\};
     `toAuxiliary`: \{\};
     `toCanonical`: `null` \| \{\};
     `toFields`: \{\};
     `toInput`: \{\};
     `toValue`: \{\};
     `sizeInFields`: ;
    \};
  `create`: ;
 \} = `...`

###### stack._emptyHash

`null` \| `string`

###### stack._innerProvable

  \| `null`
  \| \{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack._nextHash

`null` \| \{\}

###### stack._provable

  \| `null`
  \| \{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.empty

\{\}

###### stack.emptyHash

`string`

###### stack.from

\{\}

###### stack.fromReverse

\{\}

###### stack.prototype

\{
  `Constructor`: \{
     `_emptyHash`: `null` \| `string`;
     `_innerProvable`:   \| `null`
        \| \{
        `check`: \{\};
        `empty`: \{\};
        `fromFields`: \{\};
        `fromValue`: \{\};
        `toAuxiliary`: \{\};
        `toCanonical`: `null` \| \{\};
        `toFields`: \{\};
        `toInput`: \{\};
        `toValue`: \{\};
        `sizeInFields`: ;
       \};
     `_nextHash`: `null` \| \{\};
     `_provable`:   \| `null`
        \| \{
        `check`: \{\};
        `empty`: \{\};
        `fromFields`: \{\};
        `fromValue`: \{\};
        `toAuxiliary`: \{\};
        `toCanonical`: `null` \| \{\};
        `toFields`: \{\};
        `toInput`: \{\};
        `toValue`: \{\};
        `sizeInFields`: ;
       \};
     `emptyHash`: `string`;
     `prototype`: \{ hash: string; data: \{ get: \{\}; set: \{\}; setTo: \{\}; updateAsProver: \{\}; \}; isEmpty: \{\}; push: \{\}; pushIf: \{\}; popExn: \{\}; pop: \{\}; popOption: \{\}; popIf: \{\}; popIfUnsafe: \{\}; clone: \{\}; forEach: \{\}; startIterating: \{\}; ... 5 more ...; readonly innerProvable: \{ ...; \}; \};
     `create`: ;
    \};
  `data`: \{
     `get`: ;
     `set`: ;
     `setTo`: ;
     `updateAsProver`: ;
    \};
  `hash`: `string`;
  `innerProvable`: \{
     `check`: \{\};
     `empty`: \{\};
     `fromFields`: \{\};
     `fromValue`: \{\};
     `toAuxiliary`: \{\};
     `toCanonical`: `null` \| \{\};
     `toFields`: \{\};
     `toInput`: \{\};
     `toValue`: \{\};
     `sizeInFields`: ;
    \};
  `clone`: ;
  `forEach`: ;
  `isEmpty`: ;
  `lengthUnconstrained`: ;
  `nextHash`: ;
  `pop`: ;
  `popExn`: ;
  `popIf`: ;
  `popIfUnsafe`: ;
  `popOption`: ;
  `push`: ;
  `pushIf`: ;
  `startIterating`: ;
  `startIteratingFromLast`: ;
  `toArrayUnconstrained`: ;
 \}

###### stack.prototype.Constructor

\{
  `_emptyHash`: `null` \| `string`;
  `_innerProvable`:   \| `null`
     \| \{
     `check`: \{\};
     `empty`: \{\};
     `fromFields`: \{\};
     `fromValue`: \{\};
     `toAuxiliary`: \{\};
     `toCanonical`: `null` \| \{\};
     `toFields`: \{\};
     `toInput`: \{\};
     `toValue`: \{\};
     `sizeInFields`: ;
    \};
  `_nextHash`: `null` \| \{\};
  `_provable`:   \| `null`
     \| \{
     `check`: \{\};
     `empty`: \{\};
     `fromFields`: \{\};
     `fromValue`: \{\};
     `toAuxiliary`: \{\};
     `toCanonical`: `null` \| \{\};
     `toFields`: \{\};
     `toInput`: \{\};
     `toValue`: \{\};
     `sizeInFields`: ;
    \};
  `emptyHash`: `string`;
  `prototype`: \{ hash: string; data: \{ get: \{\}; set: \{\}; setTo: \{\}; updateAsProver: \{\}; \}; isEmpty: \{\}; push: \{\}; pushIf: \{\}; popExn: \{\}; pop: \{\}; popOption: \{\}; popIf: \{\}; popIfUnsafe: \{\}; clone: \{\}; forEach: \{\}; startIterating: \{\}; ... 5 more ...; readonly innerProvable: \{ ...; \}; \};
  `create`: ;
 \}

###### stack.prototype.Constructor._emptyHash

`null` \| `string`

###### stack.prototype.Constructor._innerProvable

  \| `null`
  \| \{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.prototype.Constructor._nextHash

`null` \| \{\}

###### stack.prototype.Constructor._provable

  \| `null`
  \| \{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.prototype.Constructor.emptyHash

`string`

###### stack.prototype.Constructor.prototype

\{ hash: string; data: \{ get: \{\}; set: \{\}; setTo: \{\}; updateAsProver: \{\}; \}; isEmpty: \{\}; push: \{\}; pushIf: \{\}; popExn: \{\}; pop: \{\}; popOption: \{\}; popIf: \{\}; popIfUnsafe: \{\}; clone: \{\}; forEach: \{\}; startIterating: \{\}; ... 5 more ...; readonly innerProvable: \{ ...; \}; \}

###### stack.prototype.Constructor.create

###### stack.prototype.data

\{
  `get`: ;
  `set`: ;
  `setTo`: ;
  `updateAsProver`: ;
 \}

###### stack.prototype.data.get

###### stack.prototype.data.set

###### stack.prototype.data.setTo

###### stack.prototype.data.updateAsProver

###### stack.prototype.hash

`string`

###### stack.prototype.innerProvable

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.prototype.innerProvable.check

\{\}

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

**Param**

the element of type `T` to put assertions on.

###### stack.prototype.innerProvable.empty

\{\}

###### stack.prototype.innerProvable.fromFields

\{\}

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling toFields and toAuxiliary methods on an element of type `T`.

**Param**

an array of [Field](../../../classes/Field.md) elements describing the provable data of the new `T` element.

**Param**

an array of any type describing the "auxiliary" data of the new `T` element, optional.

###### stack.prototype.innerProvable.fromValue

\{\}

Convert provable type from a normal JS type.

###### stack.prototype.innerProvable.toAuxiliary

\{\}

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

**Param**

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### stack.prototype.innerProvable.toCanonical

`null` \| \{\}

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

###### stack.prototype.innerProvable.toFields

\{\}

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

**Param**

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### stack.prototype.innerProvable.toInput

\{\}

###### stack.prototype.innerProvable.toValue

\{\}

Convert provable type to a normal JS type.

###### stack.prototype.innerProvable.sizeInFields

###### stack.prototype.clone

###### stack.prototype.forEach

###### stack.prototype.isEmpty

###### stack.prototype.lengthUnconstrained

###### stack.prototype.nextHash

###### stack.prototype.pop

###### stack.prototype.popExn

###### stack.prototype.popIf

###### stack.prototype.popIfUnsafe

###### stack.prototype.popOption

###### stack.prototype.push

###### stack.prototype.pushIf

###### stack.prototype.startIterating

###### stack.prototype.startIteratingFromLast

###### stack.prototype.toArrayUnconstrained

###### stack.provable

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.provable.check

\{\}

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

**Param**

the element of type `T` to put assertions on.

###### stack.provable.empty

\{\}

###### stack.provable.fromFields

\{\}

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling toFields and toAuxiliary methods on an element of type `T`.

**Param**

an array of [Field](../../../classes/Field.md) elements describing the provable data of the new `T` element.

**Param**

an array of any type describing the "auxiliary" data of the new `T` element, optional.

###### stack.provable.fromValue

\{\}

Convert provable type from a normal JS type.

###### stack.provable.toAuxiliary

\{\}

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

**Param**

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### stack.provable.toCanonical

`null` \| \{\}

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

###### stack.provable.toFields

\{\}

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

**Param**

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### stack.provable.toInput

\{\}

###### stack.provable.toValue

\{\}

Convert provable type to a normal JS type.

###### stack.provable.sizeInFields

###### stack.create

###### useOnchainStack

`boolean` = `Bool`

###### witnesses

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \} = `...`

###### witnesses.check

\{\}

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

**Param**

the element of type `T` to put assertions on.

###### witnesses.empty

\{\}

###### witnesses.fromFields

\{\}

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling toFields and toAuxiliary methods on an element of type `T`.

**Param**

an array of [Field](../../../classes/Field.md) elements describing the provable data of the new `T` element.

**Param**

an array of any type describing the "auxiliary" data of the new `T` element, optional.

###### witnesses.fromValue

\{\}

Convert provable type from a normal JS type.

###### witnesses.toAuxiliary

\{\}

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

**Param**

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### witnesses.toCanonical

`null` \| \{\}

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

###### witnesses.toFields

\{\}

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

**Param**

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### witnesses.toInput

\{\}

###### witnesses.toValue

\{\}

Convert provable type to a normal JS type.

###### witnesses.sizeInFields

###### Returns

```ts
{
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
}
```

###### isRecursive

```ts
isRecursive: Bool = Bool;
```

###### onchainActionState

```ts
onchainActionState: Field = Field;
```

###### onchainStack

```ts
onchainStack: Field = Field;
```

###### processedActionState

```ts
processedActionState: Field = Field;
```

###### stack

```ts
stack: MerkleList<MerkleList<Hashed<any>>>;
```

###### useOnchainStack

```ts
useOnchainStack: Bool = Bool;
```

###### witnesses

```ts
witnesses: Unconstrained<ActionWitnesses>;
```

##### fromValue()

```ts
fromValue: (value: {
  isRecursive: boolean | Bool;
  onchainActionState: string | number | bigint | Field;
  onchainStack: string | number | bigint | Field;
  processedActionState: string | number | bigint | Field;
  stack: any;
  useOnchainStack: boolean | Bool;
  witnesses:   | ActionWitnesses
     | Unconstrained<ActionWitnesses>;
 }) => {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
};
```

###### Parameters

###### value

###### isRecursive

`boolean` \| [`Bool`](../../../classes/Bool.md) = `Bool`

###### onchainActionState

`string` \| `number` \| `bigint` \| [`Field`](../../../classes/Field.md) = `Field`

###### onchainStack

`string` \| `number` \| `bigint` \| [`Field`](../../../classes/Field.md) = `Field`

###### processedActionState

`string` \| `number` \| `bigint` \| [`Field`](../../../classes/Field.md) = `Field`

###### stack

`any` = `...`

###### useOnchainStack

`boolean` \| [`Bool`](../../../classes/Bool.md) = `Bool`

###### witnesses

  \| `ActionWitnesses`
  \| [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\> = `...`

###### Returns

```ts
{
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
}
```

###### isRecursive

```ts
isRecursive: Bool = Bool;
```

###### onchainActionState

```ts
onchainActionState: Field = Field;
```

###### onchainStack

```ts
onchainStack: Field = Field;
```

###### processedActionState

```ts
processedActionState: Field = Field;
```

###### stack

```ts
stack: MerkleList<MerkleList<Hashed<any>>>;
```

###### useOnchainStack

```ts
useOnchainStack: Bool = Bool;
```

###### witnesses

```ts
witnesses: Unconstrained<ActionWitnesses>;
```

##### toInput()

```ts
toInput: (x: {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 }) => {
  fields: Field[];
  packed: [Field, number][];
};
```

###### Parameters

###### x

###### isRecursive

[`Bool`](../../../classes/Bool.md) = `Bool`

###### onchainActionState

[`Field`](../../../classes/Field.md) = `Field`

###### onchainStack

[`Field`](../../../classes/Field.md) = `Field`

###### processedActionState

[`Field`](../../../classes/Field.md) = `Field`

###### stack

[`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`any`\>\>\> = `...`

###### useOnchainStack

[`Bool`](../../../classes/Bool.md) = `Bool`

###### witnesses

[`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\> = `...`

###### Returns

```ts
{
  fields: Field[];
  packed: [Field, number][];
}
```

###### fields?

```ts
optional fields: Field[];
```

###### packed?

```ts
optional packed: [Field, number][];
```

##### toJSON()

```ts
toJSON: (x: {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<any>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 }) => {
  isRecursive: boolean;
  onchainActionState: string;
  onchainStack: string;
  processedActionState: string;
  stack: {
     _emptyHash: null | string;
     _innerProvable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     _nextHash: null | {};
     _provable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     empty: {};
     emptyHash: string;
     from: {};
     fromReverse: {};
     prototype: {
        Constructor: {
           _emptyHash: null | string;
           _innerProvable:   | null
              | {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           _nextHash: null | {};
           _provable:   | null
              | {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           emptyHash: string;
           prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
           create: ;
          };
        data: {
           get: ;
           set: ;
           setTo: ;
           updateAsProver: ;
          };
        hash: string;
        innerProvable: {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        clone: ;
        forEach: ;
        isEmpty: ;
        lengthUnconstrained: ;
        nextHash: ;
        pop: ;
        popExn: ;
        popIf: ;
        popIfUnsafe: ;
        popOption: ;
        push: ;
        pushIf: ;
        startIterating: ;
        startIteratingFromLast: ;
        toArrayUnconstrained: ;
       };
     provable: {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     create: ;
    };
  useOnchainStack: boolean;
  witnesses: {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
};
```

###### Parameters

###### x

###### isRecursive

[`Bool`](../../../classes/Bool.md) = `Bool`

###### onchainActionState

[`Field`](../../../classes/Field.md) = `Field`

###### onchainStack

[`Field`](../../../classes/Field.md) = `Field`

###### processedActionState

[`Field`](../../../classes/Field.md) = `Field`

###### stack

[`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`any`\>\>\> = `...`

###### useOnchainStack

[`Bool`](../../../classes/Bool.md) = `Bool`

###### witnesses

[`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\> = `...`

###### Returns

```ts
{
  isRecursive: boolean;
  onchainActionState: string;
  onchainStack: string;
  processedActionState: string;
  stack: {
     _emptyHash: null | string;
     _innerProvable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     _nextHash: null | {};
     _provable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     empty: {};
     emptyHash: string;
     from: {};
     fromReverse: {};
     prototype: {
        Constructor: {
           _emptyHash: null | string;
           _innerProvable:   | null
              | {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           _nextHash: null | {};
           _provable:   | null
              | {
              check: {};
              empty: {};
              fromFields: {};
              fromValue: {};
              toAuxiliary: {};
              toCanonical: null | {};
              toFields: {};
              toInput: {};
              toValue: {};
              sizeInFields: ;
             };
           emptyHash: string;
           prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
           create: ;
          };
        data: {
           get: ;
           set: ;
           setTo: ;
           updateAsProver: ;
          };
        hash: string;
        innerProvable: {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        clone: ;
        forEach: ;
        isEmpty: ;
        lengthUnconstrained: ;
        nextHash: ;
        pop: ;
        popExn: ;
        popIf: ;
        popIfUnsafe: ;
        popOption: ;
        push: ;
        pushIf: ;
        startIterating: ;
        startIteratingFromLast: ;
        toArrayUnconstrained: ;
       };
     provable: {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     create: ;
    };
  useOnchainStack: boolean;
  witnesses: {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
}
```

###### isRecursive

```ts
isRecursive: boolean = Bool;
```

###### onchainActionState

```ts
onchainActionState: string = Field;
```

###### onchainStack

```ts
onchainStack: string = Field;
```

###### processedActionState

```ts
processedActionState: string = Field;
```

###### stack

```ts
stack: {
  _emptyHash: null | string;
  _innerProvable:   | null
     | {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
  _nextHash: null | {};
  _provable:   | null
     | {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
  empty: {};
  emptyHash: string;
  from: {};
  fromReverse: {};
  prototype: {
     Constructor: {
        _emptyHash: null | string;
        _innerProvable:   | null
           | {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        _nextHash: null | {};
        _provable:   | null
           | {
           check: {};
           empty: {};
           fromFields: {};
           fromValue: {};
           toAuxiliary: {};
           toCanonical: null | {};
           toFields: {};
           toInput: {};
           toValue: {};
           sizeInFields: ;
          };
        emptyHash: string;
        prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
        create: ;
       };
     data: {
        get: ;
        set: ;
        setTo: ;
        updateAsProver: ;
       };
     hash: string;
     innerProvable: {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     clone: ;
     forEach: ;
     isEmpty: ;
     lengthUnconstrained: ;
     nextHash: ;
     pop: ;
     popExn: ;
     popIf: ;
     popIfUnsafe: ;
     popOption: ;
     push: ;
     pushIf: ;
     startIterating: ;
     startIteratingFromLast: ;
     toArrayUnconstrained: ;
    };
  provable: {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
  create: ;
};
```

###### stack.\_emptyHash

```ts
_emptyHash: null | string;
```

###### stack.\_innerProvable

```ts
_innerProvable: 
  | null
  | {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### Type declaration

`null`

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.\_nextHash

```ts
_nextHash: null | {};
```

###### stack.\_provable

```ts
_provable: 
  | null
  | {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### Type declaration

`null`

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.empty

```ts
empty: {};
```

###### stack.emptyHash

```ts
emptyHash: string;
```

###### stack.from

```ts
from: {};
```

###### stack.fromReverse

```ts
fromReverse: {};
```

###### stack.prototype

```ts
prototype: {
  Constructor: {
     _emptyHash: null | string;
     _innerProvable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     _nextHash: null | {};
     _provable:   | null
        | {
        check: {};
        empty: {};
        fromFields: {};
        fromValue: {};
        toAuxiliary: {};
        toCanonical: null | {};
        toFields: {};
        toInput: {};
        toValue: {};
        sizeInFields: ;
       };
     emptyHash: string;
     prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
     create: ;
    };
  data: {
     get: ;
     set: ;
     setTo: ;
     updateAsProver: ;
    };
  hash: string;
  innerProvable: {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
  clone: ;
  forEach: ;
  isEmpty: ;
  lengthUnconstrained: ;
  nextHash: ;
  pop: ;
  popExn: ;
  popIf: ;
  popIfUnsafe: ;
  popOption: ;
  push: ;
  pushIf: ;
  startIterating: ;
  startIteratingFromLast: ;
  toArrayUnconstrained: ;
};
```

###### stack.prototype.Constructor

```ts
Constructor: {
  _emptyHash: null | string;
  _innerProvable:   | null
     | {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
  _nextHash: null | {};
  _provable:   | null
     | {
     check: {};
     empty: {};
     fromFields: {};
     fromValue: {};
     toAuxiliary: {};
     toCanonical: null | {};
     toFields: {};
     toInput: {};
     toValue: {};
     sizeInFields: ;
    };
  emptyHash: string;
  prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
  create: ;
};
```

###### stack.prototype.Constructor.\_emptyHash

```ts
_emptyHash: null | string;
```

###### stack.prototype.Constructor.\_innerProvable

```ts
_innerProvable: 
  | null
  | {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### Type declaration

`null`

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.prototype.Constructor.\_nextHash

```ts
_nextHash: null | {};
```

###### stack.prototype.Constructor.\_provable

```ts
_provable: 
  | null
  | {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### Type declaration

`null`

\{
  `check`: \{\};
  `empty`: \{\};
  `fromFields`: \{\};
  `fromValue`: \{\};
  `toAuxiliary`: \{\};
  `toCanonical`: `null` \| \{\};
  `toFields`: \{\};
  `toInput`: \{\};
  `toValue`: \{\};
  `sizeInFields`: ;
 \}

###### stack.prototype.Constructor.emptyHash

```ts
emptyHash: string;
```

###### stack.prototype.Constructor.prototype

```ts
prototype: { hash: string; data: { get: {}; set: {}; setTo: {}; updateAsProver: {}; }; isEmpty: {}; push: {}; pushIf: {}; popExn: {}; pop: {}; popOption: {}; popIf: {}; popIfUnsafe: {}; clone: {}; forEach: {}; startIterating: {}; ... 5 more ...; readonly innerProvable: { ...; }; };
```

###### stack.prototype.Constructor.create

```ts
create;
```

###### stack.prototype.data

```ts
data: {
  get: ;
  set: ;
  setTo: ;
  updateAsProver: ;
};
```

###### stack.prototype.data.get

```ts
get;
```

###### stack.prototype.data.set

```ts
set;
```

###### stack.prototype.data.setTo

```ts
setTo;
```

###### stack.prototype.data.updateAsProver

```ts
updateAsProver;
```

###### stack.prototype.hash

```ts
hash: string;
```

###### stack.prototype.innerProvable

```ts
innerProvable: {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### stack.prototype.innerProvable.check

```ts
check: {};
```

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

###### Param

the element of type `T` to put assertions on.

###### stack.prototype.innerProvable.empty

```ts
empty: {};
```

###### stack.prototype.innerProvable.fromFields

```ts
fromFields: {};
```

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling toFields and toAuxiliary methods on an element of type `T`.

###### Param

an array of [Field](../../../classes/Field.md) elements describing the provable data of the new `T` element.

###### Param

an array of any type describing the "auxiliary" data of the new `T` element, optional.

###### Returns

An element of type `T` generated from the given provable and "auxiliary" data.

###### stack.prototype.innerProvable.fromValue

```ts
fromValue: {};
```

Convert provable type from a normal JS type.

###### stack.prototype.innerProvable.toAuxiliary

```ts
toAuxiliary: {};
```

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

###### Param

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### Returns

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

###### stack.prototype.innerProvable.toCanonical?

```ts
optional toCanonical: null | {};
```

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

###### stack.prototype.innerProvable.toFields

```ts
toFields: {};
```

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

###### Param

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### Returns

A [Field](../../../classes/Field.md) array describing how this `T` element is made up of [Field](../../../classes/Field.md) elements.

###### stack.prototype.innerProvable.toInput

```ts
toInput: {};
```

###### stack.prototype.innerProvable.toValue

```ts
toValue: {};
```

Convert provable type to a normal JS type.

###### stack.prototype.innerProvable.sizeInFields

```ts
sizeInFields;
```

###### stack.prototype.clone

```ts
clone;
```

###### stack.prototype.forEach

```ts
forEach;
```

###### stack.prototype.isEmpty

```ts
isEmpty;
```

###### stack.prototype.lengthUnconstrained

```ts
lengthUnconstrained;
```

###### stack.prototype.nextHash

```ts
nextHash;
```

###### stack.prototype.pop

```ts
pop;
```

###### stack.prototype.popExn

```ts
popExn;
```

###### stack.prototype.popIf

```ts
popIf;
```

###### stack.prototype.popIfUnsafe

```ts
popIfUnsafe;
```

###### stack.prototype.popOption

```ts
popOption;
```

###### stack.prototype.push

```ts
push;
```

###### stack.prototype.pushIf

```ts
pushIf;
```

###### stack.prototype.startIterating

```ts
startIterating;
```

###### stack.prototype.startIteratingFromLast

```ts
startIteratingFromLast;
```

###### stack.prototype.toArrayUnconstrained

```ts
toArrayUnconstrained;
```

###### stack.provable

```ts
provable: {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### stack.provable.check

```ts
check: {};
```

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

###### Param

the element of type `T` to put assertions on.

###### stack.provable.empty

```ts
empty: {};
```

###### stack.provable.fromFields

```ts
fromFields: {};
```

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling toFields and toAuxiliary methods on an element of type `T`.

###### Param

an array of [Field](../../../classes/Field.md) elements describing the provable data of the new `T` element.

###### Param

an array of any type describing the "auxiliary" data of the new `T` element, optional.

###### Returns

An element of type `T` generated from the given provable and "auxiliary" data.

###### stack.provable.fromValue

```ts
fromValue: {};
```

Convert provable type from a normal JS type.

###### stack.provable.toAuxiliary

```ts
toAuxiliary: {};
```

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

###### Param

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### Returns

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

###### stack.provable.toCanonical?

```ts
optional toCanonical: null | {};
```

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

###### stack.provable.toFields

```ts
toFields: {};
```

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

###### Param

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### Returns

A [Field](../../../classes/Field.md) array describing how this `T` element is made up of [Field](../../../classes/Field.md) elements.

###### stack.provable.toInput

```ts
toInput: {};
```

###### stack.provable.toValue

```ts
toValue: {};
```

Convert provable type to a normal JS type.

###### stack.provable.sizeInFields

```ts
sizeInFields;
```

###### stack.create

```ts
create;
```

###### useOnchainStack

```ts
useOnchainStack: boolean = Bool;
```

###### witnesses

```ts
witnesses: {
  check: {};
  empty: {};
  fromFields: {};
  fromValue: {};
  toAuxiliary: {};
  toCanonical: null | {};
  toFields: {};
  toInput: {};
  toValue: {};
  sizeInFields: ;
};
```

###### witnesses.check

```ts
check: {};
```

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../../../classes/Bool.md) asserts that the value of the element is either 1 or 0.

###### Param

the element of type `T` to put assertions on.

###### witnesses.empty

```ts
empty: {};
```

###### witnesses.fromFields

```ts
fromFields: {};
```

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling toFields and toAuxiliary methods on an element of type `T`.

###### Param

an array of [Field](../../../classes/Field.md) elements describing the provable data of the new `T` element.

###### Param

an array of any type describing the "auxiliary" data of the new `T` element, optional.

###### Returns

An element of type `T` generated from the given provable and "auxiliary" data.

###### witnesses.fromValue

```ts
fromValue: {};
```

Convert provable type from a normal JS type.

###### witnesses.toAuxiliary

```ts
toAuxiliary: {};
```

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

###### Param

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### Returns

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

###### witnesses.toCanonical?

```ts
optional toCanonical: null | {};
```

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

###### witnesses.toFields

```ts
toFields: {};
```

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../../../classes/Field.md) elements that make up the provable data of `value`.

###### Param

the element of type `T` to generate the [Field](../../../classes/Field.md) array from.

###### Returns

A [Field](../../../classes/Field.md) array describing how this `T` element is made up of [Field](../../../classes/Field.md) elements.

###### witnesses.toInput

```ts
toInput: {};
```

###### witnesses.toValue

```ts
toValue: {};
```

Convert provable type to a normal JS type.

###### witnesses.sizeInFields

```ts
sizeInFields;
```

#### Inherited from

```ts
BatchReducer_.BatchReducer.Batch
```

***

### BatchProof

```ts
BatchProof: typeof Proof;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:70](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L70)

#### Inherited from

```ts
BatchReducer_.BatchReducer.BatchProof
```

***

### batchSize

```ts
batchSize: BatchSize;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:65](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L65)

#### Inherited from

```ts
BatchReducer_.BatchReducer.batchSize
```

***

### maxActionsPerUpdate

```ts
maxActionsPerUpdate: number;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:73](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L73)

#### Inherited from

```ts
BatchReducer_.BatchReducer.maxActionsPerUpdate
```

***

### maxUpdatesFinalProof

```ts
maxUpdatesFinalProof: number;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:72](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L72)

#### Inherited from

```ts
BatchReducer_.BatchReducer.maxUpdatesFinalProof
```

***

### program

```ts
program: ActionStackProgram;
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:69](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L69)

#### Inherited from

```ts
BatchReducer_.BatchReducer.program
```

## Accessors

### initialActionStack

#### Get Signature

```ts
get static initialActionStack(): Field
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:160](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L160)

##### Returns

[`Field`](../../../classes/Field.md)

#### Inherited from

```ts
BatchReducer_.BatchReducer.initialActionStack
```

***

### initialActionState

#### Get Signature

```ts
get static initialActionState(): Field
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:157](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L157)

##### Returns

[`Field`](../../../classes/Field.md)

#### Inherited from

```ts
BatchReducer_.BatchReducer.initialActionState
```

## Methods

### compile()

```ts
compile(): Promise<{
  verificationKey: {
     data: string;
     hash: Field;
    };
}>
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:367](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L367)

Compile the recursive action stack prover.

#### Returns

`Promise`\<\{
  `verificationKey`: \{
     `data`: `string`;
     `hash`: [`Field`](../../../classes/Field.md);
    \};
 \}\>

#### Inherited from

```ts
BatchReducer_.BatchReducer.compile
```

***

### contract()

```ts
contract(): BatchReducerContract
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:174](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L174)

#### Returns

`BatchReducerContract`

#### Inherited from

```ts
BatchReducer_.BatchReducer.contract
```

***

### contractClass()

```ts
contractClass(): BatchReducerContractClass
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:167](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L167)

#### Returns

`BatchReducerContractClass`

#### Inherited from

```ts
BatchReducer_.BatchReducer.contractClass
```

***

### dispatch()

```ts
dispatch(action: From<ActionType>): void
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:202](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L202)

Submit an action.

#### Parameters

##### action

`From`\<`ActionType`\>

#### Returns

`void`

#### Inherited from

```ts
BatchReducer_.BatchReducer.dispatch
```

***

### dispatchIf()

```ts
dispatchIf(condition: Bool, action: From<ActionType>): void
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:212](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L212)

Conditionally submit an action.

#### Parameters

##### condition

[`Bool`](../../../classes/Bool.md)

##### action

`From`\<`ActionType`\>

#### Returns

`void`

#### Inherited from

```ts
BatchReducer_.BatchReducer.dispatchIf
```

***

### prepareBatches()

```ts
prepareBatches(): Promise<{
  batch: ActionBatch<Action>;
  proof: ActionStackProof;
}[]>
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:374](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L374)

Create a proof which returns the next actions batch(es) to process and helps guarantee their correctness.

#### Returns

`Promise`\<\{
  `batch`: `ActionBatch`\<`Action`\>;
  `proof`: `ActionStackProof`;
 \}[]\>

#### Inherited from

```ts
BatchReducer_.BatchReducer.prepareBatches
```

***

### processBatch()

```ts
processBatch(__namedParameters: {
  batch: ActionBatch<Action>;
  proof: Proof<Field, ActionStackState>;
 }, callback: (action: Action, isDummy: Bool, i: number) => void): void
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:242](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L242)

Process a batch of actions which was created by `prepareBatches()`.

**Important**: The callback exposes the action's value along with an `isDummy` flag.
This is necessary because we process a dynamically-sized list in a fixed number of steps.
Dummies will be passed to your callback once the actual actions are exhausted.

Make sure to write your code to account for dummies. For example, when sending MINA from your contract for every action,
you probably want to zero out the balance decrease in the `isDummy` case:
```ts
processBatch({ batch, proof }, (action, isDummy) => {
  // ... other logic ...

  let amountToSend = Provable.if(isDummy, UInt64.zero, action.amount);
  this.balance.subInPlace(amountToSend);
});
```

**Warning**: Don't call `processBatch()` on two _different_ batches within the same method. The second call
would override the preconditions set by the first call, which would leave the method insecure.
To process more actions per method call, increase the `batchSize`.

#### Parameters

##### \_\_namedParameters

###### batch

`ActionBatch`\<`Action`\>

###### proof

[`Proof`](../../../classes/Proof.md)\<[`Field`](../../../classes/Field.md), `ActionStackState`\>

##### callback

(`action`: `Action`, `isDummy`: [`Bool`](../../../classes/Bool.md), `i`: `number`) => `void`

#### Returns

`void`

#### Inherited from

```ts
BatchReducer_.BatchReducer.processBatch
```

***

### setContractClass()

```ts
setContractClass(contractClass: BatchReducerContractClass): void
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:195](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L195)

Set the smart contract class this reducer is connected with.

Note: You can use either this method or `setContractInstance()` before calling `compile()`.
However, `setContractInstance()` is required for `proveNextBatch()`.

#### Parameters

##### contractClass

`BatchReducerContractClass`

#### Returns

`void`

#### Inherited from

```ts
BatchReducer_.BatchReducer.setContractClass
```

***

### setContractInstance()

```ts
setContractInstance(contract: BatchReducerContract): void
```

Defined in: [lib/mina/v1/actions/batch-reducer.ts:184](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/actions/batch-reducer.ts#L184)

Set the smart contract instance this reducer is connected with.

Note: This is a required step before using `dispatch()`, `proveNextBatch()` or `processNextBatch()`.

#### Parameters

##### contract

`BatchReducerContract`

#### Returns

`void`

#### Inherited from

```ts
BatchReducer_.BatchReducer.setContractInstance
```
