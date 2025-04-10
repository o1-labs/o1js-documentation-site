```ts
function ActionBatch<A>(actionType: A): (value: {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 }) => {
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
  useOnchainStack: Bool;
  witnesses: Unconstrained<ActionWitnesses>;
 } & {
  _isStruct: true;
 } & Provable<{
  isRecursive: Bool;
  onchainActionState: Field;
  onchainStack: Field;
  processedActionState: Field;
  stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
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
     stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
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
     stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
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
     stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
     useOnchainStack: Bool;
     witnesses: Unconstrained<ActionWitnesses>;
    };
  toInput: (x: {
     isRecursive: Bool;
     onchainActionState: Field;
     onchainStack: Field;
     processedActionState: Field;
     stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
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
     stack: MerkleList<MerkleList<Hashed<InferProvable<A, Field>>>>;
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
}
```

Defined in: [index.ts:186](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/index.ts#L186)

Provable type that represents a batch of actions.

## Type Parameters

• **A** *extends* `Actionable`\<`any`\>

## Parameters

### actionType

`A`

## Returns

(`value`: \{
  `isRecursive`: [`Bool`](../../../classes/Bool.md);
  `onchainActionState`: [`Field`](../../../classes/Field.md);
  `onchainStack`: [`Field`](../../../classes/Field.md);
  `processedActionState`: [`Field`](../../../classes/Field.md);
  `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
  `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
  `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
 \}) => \{
  `isRecursive`: [`Bool`](../../../classes/Bool.md);
  `onchainActionState`: [`Field`](../../../classes/Field.md);
  `onchainStack`: [`Field`](../../../classes/Field.md);
  `processedActionState`: [`Field`](../../../classes/Field.md);
  `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
  `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
  `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
 \} & \{
  `_isStruct`: `true`;
 \} & [`Provable`](../../../type-aliases/Provable.md)\<\{
  `isRecursive`: [`Bool`](../../../classes/Bool.md);
  `onchainActionState`: [`Field`](../../../classes/Field.md);
  `onchainStack`: [`Field`](../../../classes/Field.md);
  `processedActionState`: [`Field`](../../../classes/Field.md);
  `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
  `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
  `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
 \}, \{
  `isRecursive`: `boolean`;
  `onchainActionState`: `bigint`;
  `onchainStack`: `bigint`;
  `processedActionState`: `bigint`;
  `stack`: `any`;
  `useOnchainStack`: `boolean`;
  `witnesses`: `ActionWitnesses`;
 \}\> & \{
  `empty`: () => \{
     `isRecursive`: [`Bool`](../../../classes/Bool.md);
     `onchainActionState`: [`Field`](../../../classes/Field.md);
     `onchainStack`: [`Field`](../../../classes/Field.md);
     `processedActionState`: [`Field`](../../../classes/Field.md);
     `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
     `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
     `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
    \};
  `fromJSON`: (`x`: \{
     `isRecursive`: `boolean`;
     `onchainActionState`: `string`;
     `onchainStack`: `string`;
     `processedActionState`: `string`;
     `stack`: \{
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
       \};
     `useOnchainStack`: `boolean`;
     `witnesses`: \{
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
    \}) => \{
     `isRecursive`: [`Bool`](../../../classes/Bool.md);
     `onchainActionState`: [`Field`](../../../classes/Field.md);
     `onchainStack`: [`Field`](../../../classes/Field.md);
     `processedActionState`: [`Field`](../../../classes/Field.md);
     `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
     `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
     `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
    \};
  `fromValue`: (`value`: \{
     `isRecursive`: `boolean` \| [`Bool`](../../../classes/Bool.md);
     `onchainActionState`: `string` \| `number` \| `bigint` \| [`Field`](../../../classes/Field.md);
     `onchainStack`: `string` \| `number` \| `bigint` \| [`Field`](../../../classes/Field.md);
     `processedActionState`: `string` \| `number` \| `bigint` \| [`Field`](../../../classes/Field.md);
     `stack`: `any`;
     `useOnchainStack`: `boolean` \| [`Bool`](../../../classes/Bool.md);
     `witnesses`:   \| `ActionWitnesses`
        \| [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
    \}) => \{
     `isRecursive`: [`Bool`](../../../classes/Bool.md);
     `onchainActionState`: [`Field`](../../../classes/Field.md);
     `onchainStack`: [`Field`](../../../classes/Field.md);
     `processedActionState`: [`Field`](../../../classes/Field.md);
     `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
     `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
     `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
    \};
  `toInput`: (`x`: \{
     `isRecursive`: [`Bool`](../../../classes/Bool.md);
     `onchainActionState`: [`Field`](../../../classes/Field.md);
     `onchainStack`: [`Field`](../../../classes/Field.md);
     `processedActionState`: [`Field`](../../../classes/Field.md);
     `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
     `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
     `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
    \}) => \{
     `fields`: [`Field`](../../../classes/Field.md)[];
     `packed`: \[[`Field`](../../../classes/Field.md), `number`\][];
    \};
  `toJSON`: (`x`: \{
     `isRecursive`: [`Bool`](../../../classes/Bool.md);
     `onchainActionState`: [`Field`](../../../classes/Field.md);
     `onchainStack`: [`Field`](../../../classes/Field.md);
     `processedActionState`: [`Field`](../../../classes/Field.md);
     `stack`: [`MerkleList`](../../../classes/MerkleList.md)\<[`MerkleList`](../../../classes/MerkleList.md)\<[`Hashed`](../../../classes/Hashed.md)\<`InferProvable`\<`A`, [`Field`](../../../classes/Field.md)\>\>\>\>;
     `useOnchainStack`: [`Bool`](../../../classes/Bool.md);
     `witnesses`: [`Unconstrained`](../../../classes/Unconstrained.md)\<`ActionWitnesses`\>;
    \}) => \{
     `isRecursive`: `boolean`;
     `onchainActionState`: `string`;
     `onchainStack`: `string`;
     `processedActionState`: `string`;
     `stack`: \{
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
       \};
     `useOnchainStack`: `boolean`;
     `witnesses`: \{
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
    \};
 \}
