---
title: intro
---

# o1js &nbsp; [![npm version](https://img.shields.io/npm/v/o1js.svg?style=flat)](https://www.npmjs.com/package/o1js) [![npm](https://img.shields.io/npm/dm/o1js)](https://www.npmjs.com/package/o1js) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/o1-labs/o1js/blob/main/CONTRIBUTING.md)

ℹ️ **o1js** is an evolution of [SnarkyJS](https://www.npmjs.com/package/snarkyjs) which saw
49 updated versions over two years of development with 43,141 downloads.

This name change to o1js reflects the evolution of our vision for the premiere toolkit used by developers to build zero knowledge-enabled applications, while paying homage to our technology's recursive proof generation capabilities.

Your favorite functionality stays the same and transitioning to o1js is a quick and easy process:

- To update zkApp-cli, run the following command:

  `npm i -g zkapp-cli@latest`

- To remove the now-deprecated SnarkyJS package and install o1js, run the following command:

  `npm remove snarkyjs && npm install o1js`

- For existing zkApps, make sure to update your imports from `snarkyjs` to `o1js`
- No need to redeploy, you are good to go!

## o1js

o1js helps developers build apps powered by zero knowledge (zk) cryptography.

The easiest way to write zk programs is using o1js.

o1js is a TypeScript library for [zk-SNARKs](https://minaprotocol.com/blog/what-are-zk-snarks) and zkApps. You can use o1js to write zk smart contracts based on zero-knowledge proofs for the Mina Protocol.

o1js is automatically included when you create a project using the [zkApp CLI](https://www.npmjs.com/package/zkapp-cli).

## Learn More

- To learn more about developing zkApps, see the [zkApp Developers](https://docs.minaprotocol.com/zkapps) docs.

- For guided steps building and using zkApps, see the [zkApp Developers Tutorials](https://docs.minaprotocol.com/zkapps/tutorials/hello-world).

- To meet other developers building zkApps with o1js, participate in the [#zkapps-developers](https://discord.com/channels/484437221055922177/915745847692636181) channel on Mina Protocol Discord.

- For a list of changes between versions, see the [CHANGELOG](https://github.com/o1-labs/o1js/blob/main/CHANGELOG.md).

- To stay up to date with o1js, see the [O(1) Labs Blog](https://www.o1labs.org/blog?topics=o1js).

## Contributing

o1js is an open source project. We appreciate all community contributions to o1js!

See the [Contributing guidelines](https://github.com/o1-labs/o1js/blob/main/CONTRIBUTING.md) for ways you can contribute.

## Development Workflow

For guidance on building o1js from source and understanding the development workflow, see [o1js README-dev](https://github.com/o1-labs/o1js/blob/main/README-dev.md).

## Community Packages

High-quality community packages from open source developers are available for your project.

- **o1js-elgamal** A partially homomorphic encryption library for o1js based on Elgamal encryption: [GitHub](https://github.com/Trivo25/o1js-elgamal) and [npm](https://www.npmjs.com/package/o1js-elgamal)
- **o1js-pack** A library for o1js that allows a zkApp developer to pack extra data into a single Field. [GitHub](https://github.com/45930/o1js-pack) and [npm](https://www.npmjs.com/package/o1js-pack)
- **zk-regex-o1js** A CLI tool for compiling ZK Regex circuits in o1js. [Github](https://github.com/Shigoto-dev19/zk-regex-o1js) and [npm](https://www.npmjs.com/package/zk-regex-o1js)

To include your package, see [Creating high-quality community packages](https://github.com/o1-labs/o1js/blob/main/CONTRIBUTING.md#creating-high-quality-community-packages).

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Crypto](namespaces/Crypto/README.md) | - |
| [Encryption](namespaces/Encryption/README.md) | - |
| [Experimental](namespaces/Experimental/README.md) | This module exposes APIs that are unstable, in the sense that the API surface is expected to change. (Not unstable in the sense that they are less functional or tested than other parts.) |
| [Lightnet](namespaces/Lightnet/README.md) | - |
| [Mina](namespaces/Mina/README.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [AccountUpdate](classes/AccountUpdate.md) | An [AccountUpdate](classes/AccountUpdate.md) is a set of instructions for the Mina network. It includes Preconditions and a list of state updates, which need to be authorized by either a [Signature](classes/Signature.md) or [Proof](classes/Proof.md). |
| [AccountUpdateForest](classes/AccountUpdateForest.md) | Class which represents a forest (list of trees) of account updates, in a compressed way which allows iterating and selectively witnessing the account updates. |
| [AccountUpdateTree](classes/AccountUpdateTree.md) | Class which represents a tree of account updates, in a compressed way which allows iterating and selectively witnessing the account updates. |
| [AlmostForeignField](classes/AlmostForeignField.md) | - |
| [BaseMerkleWitness](classes/BaseMerkleWitness.md) | The [BaseMerkleWitness](classes/BaseMerkleWitness.md) class defines a circuit-compatible base class for [Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof). |
| [Bool](classes/Bool.md) | A boolean value. You can use it like this: |
| [CanonicalForeignField](classes/CanonicalForeignField.md) | - |
| [Character](classes/Character.md) | - |
| [Circuit](classes/Circuit.md) | - |
| [CircuitString](classes/CircuitString.md) | - |
| [DynamicProof](classes/DynamicProof.md) | The `DynamicProof` class enables circuits to verify proofs using in-ciruit verfication keys. This is opposed to the baked-in verification keys of the `Proof` class. |
| [EcdsaSignature](classes/EcdsaSignature.md) | - |
| [Field](classes/Field.md) | A [Field](classes/Field.md) is an element of a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field). Every other provable type is built using the [Field](classes/Field.md) type. |
| [ForeignCurve](classes/ForeignCurve.md) | - |
| [ForeignCurveNotNeeded](classes/ForeignCurveNotNeeded.md) | @see: [ForeignCurve](classes/ForeignCurve.md) |
| [ForeignField](classes/ForeignField.md) | - |
| [Group](classes/Group.md) | An element of a Group. |
| [Hashed](classes/Hashed.md) | `Hashed<T>` represents a type `T` by its hash. |
| [Int64](classes/Int64.md) | A 64 bit signed integer with values ranging from -18,446,744,073,709,551,615 to 18,446,744,073,709,551,615. |
| [Keypair](classes/Keypair.md) | - |
| [Ledger](classes/Ledger.md) | Represents the Mina ledger. |
| [MerkleList](classes/MerkleList.md) | Dynamic-length list which is represented as a single hash |
| [MerkleListIterator](classes/MerkleListIterator.md) | MerkleListIterator helps iterating through a Merkle list. This works similar to calling `list.pop()` or `list.push()` repeatedly, but maintaining the entire list instead of removing elements. |
| [MerkleMap](classes/MerkleMap.md) | - |
| [MerkleMapWitness](classes/MerkleMapWitness.md) | - |
| [MerkleTree](classes/MerkleTree.md) | A [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree) is a binary tree in which every leaf is the cryptography hash of a piece of data, and every node is the hash of the concatenation of its two child nodes. |
| [Nullifier](classes/Nullifier.md) | Nullifiers are used as a public commitment to a specific anonymous account, to forbid actions like double spending, or allow a consistent identity between anonymous actions. |
| [Packed](classes/Packed.md) | `Packed<T>` is a "packed" representation of any type `T`. |
| [PrivateKey](classes/PrivateKey.md) | A signing key. You can generate one via [PrivateKey.random](classes/PrivateKey.md#random). |
| [Proof](classes/Proof.md) | - |
| [ProofBase](classes/ProofBase.md) | - |
| [PublicKey](classes/PublicKey.md) | A public key, which is also an address on the Mina network. You can derive a [PublicKey](classes/PublicKey.md) directly from a [PrivateKey](classes/PrivateKey.md). |
| [Scalar](classes/Scalar.md) | Represents a [Scalar](classes/Scalar.md). |
| [ScalarField](classes/ScalarField.md) | ForeignField representing the scalar field of Pallas and the base field of Vesta |
| [SelfProof](classes/SelfProof.md) | A class representing the type of Proof produced by the [ZkProgram](functions/ZkProgram.md) in which it is used. |
| [Sign](classes/Sign.md) | - |
| [Signature](classes/Signature.md) | A Schnorr [Signature](classes/Signature.md) over the Pasta Curves. |
| [SmartContract](classes/SmartContract.md) | The main zkapp class. To write a zkapp, extend this class as such: |
| [TokenAccountUpdateIterator](classes/TokenAccountUpdateIterator.md) | Data structure to represent a forest of account updates that is being iterated over, in the context of a token manager contract. |
| [TokenContract](classes/TokenContract.md) | Base token contract which - implements the `Approvable` API, with the `approveBase()` method left to be defined by subclasses - implements the `Transferable` API as a wrapper around the `Approvable` API |
| [TokenSymbol](classes/TokenSymbol.md) | - |
| [UInt32](classes/UInt32.md) | A 32 bit unsigned integer with values ranging from 0 to 4,294,967,295. |
| [UInt64](classes/UInt64.md) | A 64 bit unsigned integer with values ranging from 0 to 18,446,744,073,709,551,615. |
| [UInt8](classes/UInt8.md) | A 8 bit unsigned integer with values ranging from 0 to 255. |
| [Unconstrained](classes/Unconstrained.md) | Container which holds an unconstrained value. This can be used to pass values between the out-of-circuit blocks in provable code. |
| [UnreducedForeignField](classes/UnreducedForeignField.md) | - |
| [VerificationKey](classes/VerificationKey.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Permissions](interfaces/Permissions.md) | Permissions specify how specific aspects of the zkapp account are allowed to be modified. All fields are denominated by a Permission. |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [Account](type-aliases/Account.md) | - |
| [Bool](type-aliases/Bool.md) | - |
| [BoolVar](type-aliases/BoolVar.md) | - |
| [Bytes](type-aliases/Bytes.md) | - |
| [Cache](type-aliases/Cache.md) | Interface for storing and retrieving values, for caching. `read()` and `write()` can just throw errors on failure. |
| [CacheHeader](type-aliases/CacheHeader.md) | A header that is passed to the caching layer, to support rich caching strategies. |
| [ConstantField](type-aliases/ConstantField.md) | - |
| [DeployArgs](type-aliases/DeployArgs.md) | - |
| [Empty](type-aliases/Empty.md) | - |
| [FeatureFlags](type-aliases/FeatureFlags.md) | - |
| [Field](type-aliases/Field.md) | - |
| [FlexibleBytes](type-aliases/FlexibleBytes.md) | - |
| [FlexiblePoint](type-aliases/FlexiblePoint.md) | - |
| [FlexibleProvable](type-aliases/FlexibleProvable.md) | - |
| [FlexibleProvablePure](type-aliases/FlexibleProvablePure.md) | - |
| [Group](type-aliases/Group.md) | - |
| [InferProvable](type-aliases/InferProvable.md) | - |
| [JsonProof](type-aliases/JsonProof.md) | Serializable representation of a Pickles proof, useful for caching compiled proofs. |
| [MemoizationContext](type-aliases/MemoizationContext.md) | - |
| [MerkleListBase](type-aliases/MerkleListBase.md) | Common base type for [MerkleList](classes/MerkleList.md) and [MerkleListIterator](classes/MerkleListIterator.md) |
| [MerkleListIteratorBase](type-aliases/MerkleListIteratorBase.md) | - |
| [Option](type-aliases/Option.md) | - |
| [Provable](type-aliases/Provable.md) | `Provable<T>` is the general interface for provable types in o1js. |
| [Provable](type-aliases/Provable.md) | `Provable<T>` is the general interface for provable types in o1js. |
| [ProvableExtended](type-aliases/ProvableExtended.md) | - |
| [ProvableHashable](type-aliases/ProvableHashable.md) | - |
| [ProvableHashable](type-aliases/ProvableHashable.md) | - |
| [ProvablePure](type-aliases/ProvablePure.md) | `ProvablePure<T>` is a special kind of [Provable](type-aliases/Provable.md) interface, where the "auxiliary" (non-provable) data is empty. This means the type consists only of field elements, in that sense it is "pure". Any instance of `ProvablePure<T>` is also an instance of `Provable<T>` where the "auxiliary" data is empty. |
| [ProvableType](type-aliases/ProvableType.md) | - |
| [ProvableTypePure](type-aliases/ProvableTypePure.md) | - |
| [ProvableWithEmpty](type-aliases/ProvableWithEmpty.md) | - |
| [Reducer](type-aliases/Reducer.md) | - |
| [ScalarConst](type-aliases/ScalarConst.md) | - |
| [State](type-aliases/State.md) | Gettable and settable state that can be checked for equality. |
| [Struct](type-aliases/Struct.md) | - |
| [ToProvable](type-aliases/ToProvable.md) | - |
| [TransactionPromise](type-aliases/TransactionPromise.md) | A `Promise<Transaction>` with some additional methods for making chained method calls into the pending value upon its resolution. |
| [TransactionStatus](type-aliases/TransactionStatus.md) | INCLUDED: A transaction that is on the longest chain |
| [TupleN](type-aliases/TupleN.md) | tuple type that has the length as generic parameter |
| [Undefined](type-aliases/Undefined.md) | - |
| [VarField](type-aliases/VarField.md) | - |
| [Void](type-aliases/Void.md) | - |
| [WithHash](type-aliases/WithHash.md) | - |
| [WithProvable](type-aliases/WithProvable.md) | - |
| [Witness](type-aliases/Witness.md) | - |
| [ZkappPublicInput](type-aliases/ZkappPublicInput.md) | The public input for zkApps consists of certain hashes of the proving account update (and its child updates) which is constructed during method execution. |
| [ZkProgram](type-aliases/ZkProgram.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [Account](variables/Account.md) | - |
| [Bool](variables/Bool.md) | A boolean value. You can create it like this: |
| [Cache](variables/Cache.md) | - |
| [Crypto](variables/Crypto.md) | - |
| [Empty](variables/Empty.md) | - |
| [emptyHash](variables/emptyHash.md) | - |
| [FeatureFlags](variables/FeatureFlags.md) | Feature flags indicate what custom gates are used in a proof of circuit. Side loading, for example, requires a set of feature flags in advance (at compile time) in order to verify and side load proofs. If the side loaded proofs and verification keys do not match the specified feature flag configurations, the verification will fail. Flags specified as `undefined` are considered as `maybe` by Pickles. This means, proofs can be sided loaded that can, but don't have to, use a specific custom gate. _Note:_ `Maybe` feature flags incur a proving overhead. |
| [Field](variables/Field.md) | A [Field](variables/Field.md) is an element of a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field). Every other provable type is built using the [Field](variables/Field.md) type. |
| [Gadgets](variables/Gadgets.md) | - |
| [Group](variables/Group.md) | An element of a Group. |
| [Hash](variables/Hash.md) | A collection of hash functions which can be used in provable code. |
| [Keccak](variables/Keccak.md) | - |
| [Permissions](variables/Permissions.md) | - |
| [Poseidon](variables/Poseidon.md) | - |
| [Provable](variables/Provable.md) | - |
| [ProvableType](variables/ProvableType.md) | - |
| [TokenId](variables/TokenId.md) | - |
| [TransactionVersion](variables/TransactionVersion.md) | - |
| [TupleN](variables/TupleN.md) | - |
| [Undefined](variables/Undefined.md) | - |
| [Void](variables/Void.md) | - |
| [ZkappPublicInput](variables/ZkappPublicInput.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [addCachedAccount](functions/addCachedAccount.md) | Adds an account to the local cache, indexed by a GraphQL endpoint. |
| [assert](functions/assert.md) | Assert that a statement is true. If the statement is false, throws an error with the given message. Can be used in provable code. |
| [Bytes](functions/Bytes.md) | A provable type representing an array of bytes. |
| [checkBitLength](functions/checkBitLength.md) | - |
| [checkZkappTransaction](functions/checkZkappTransaction.md) | - |
| [circuitMain](functions/circuitMain.md) | - |
| [conditionalSwap](functions/conditionalSwap.md) | - |
| [ConstantField](functions/ConstantField.md) | - |
| [createEcdsa](functions/createEcdsa.md) | Create a class [EcdsaSignature](classes/EcdsaSignature.md) for verifying ECDSA signatures on the given curve. |
| [createForeignCurve](functions/createForeignCurve.md) | Create a class representing an elliptic curve group, which is different from the native [Group](classes/Group.md). |
| [createForeignField](functions/createForeignField.md) | Create a class representing a prime order finite field, which is different from the native [Field](classes/Field.md). |
| [declareMethods](functions/declareMethods.md) | `declareMethods` can be used in place of the `@method` decorator to declare SmartContract methods along with their list of arguments. It should be placed _after_ the class declaration. Here is an example of declaring a method `update`, which takes a single argument of type `Field`: `class MyContract extends SmartContract { // ... update(x: Field) { // ... } } declareMethods(MyContract, { update: [Field] }); // `[Field]` is the list of arguments!` Note that a method of the same name must still be defined on the class, just without the decorator. |
| [declareState](functions/declareState.md) | `declareState` can be used in place of the `@state` decorator to declare on-chain state on a SmartContract. It should be placed _after_ the class declaration. Here is an example of declaring a state property `x` of type `Field`. `class MyContract extends SmartContract { x = State<Field>(); // ... } declareState(MyContract, { x: Field });` |
| [fetchAccount](functions/fetchAccount.md) | Gets account information on the specified publicKey by performing a GraphQL query to the specified endpoint. This will call the 'GetAccountInfo' query which fetches zkapp related account information. |
| [fetchEvents](functions/fetchEvents.md) | Asynchronously fetches event data for an account from the Mina Archive Node GraphQL API. |
| [fetchLastBlock](functions/fetchLastBlock.md) | Fetches the last block on the Mina network. |
| [fetchTransactionStatus](functions/fetchTransactionStatus.md) | Fetches the status of a transaction. |
| [genericHash](functions/genericHash.md) | - |
| [getBlindingValue](functions/getBlindingValue.md) | - |
| [initializeBindings](functions/initializeBindings.md) | A function that has to finish before any bindings exports can be used. |
| [memoizationContext](functions/memoizationContext.md) | - |
| [memoizeWitness](functions/memoizeWitness.md) | Like Provable.witness, but memoizes the witness during transaction construction for reuse by the prover. This is needed to witness non-deterministic values. |
| [MerkleListBase](functions/MerkleListBase.md) | - |
| [merkleListHash](functions/merkleListHash.md) | - |
| [MerkleWitness](functions/MerkleWitness.md) | Returns a circuit-compatible Witness for a specific Tree height. |
| [method](functions/method.md) | A decorator to use in a zkApp to mark a method as provable. You can use inside your zkApp class as: |
| [Option](functions/Option.md) | Define an optional version of a provable type. |
| [provable](functions/provable.md) | - |
| [provablePure](functions/provablePure.md) | - |
| [public\_](functions/public.md) | - |
| [readVarMessage](functions/readVarMessage.md) | - |
| [Reducer](functions/Reducer.md) | - |
| [sendZkapp](functions/sendZkapp.md) | Sends a zkApp command (transaction) to the specified GraphQL endpoint. |
| [setArchiveGraphqlEndpoint](functions/setArchiveGraphqlEndpoint.md) | Sets up a GraphQL endpoint to be used for fetching information from an Archive Node. |
| [setGraphqlEndpoint](functions/setGraphqlEndpoint.md) | - |
| [setGraphqlEndpoints](functions/setGraphqlEndpoints.md) | - |
| [setNumberOfWorkers](functions/setNumberOfWorkers.md) | Set the number of workers to use for parallelizing the proof generation. By default the number of workers is set to the number of physical CPU cores on your machine, but there may be some instances where you want to set the number of workers manually. Some machines may have a large number of cores, but not enough memory to support that many workers. In that case, you can set the number of workers to a lower number to avoid running out of memory. On the other hand, some machines with heterogeneous cores may benefit from setting the number of workers to a lower number to avoid contention between core types if load-link/store-conditional multithreading is used. Feel free to experiment and see what works best for your use case. Maybe you can squeeze slightly more performance out by tweaking this value :) |
| [state](functions/state.md) | A decorator to use within a zkapp to indicate what will be stored on-chain. For example, if you want to store a field element `some_state` in a zkapp, you can use the following in the declaration of your zkapp: |
| [State](functions/State-1.md) | - |
| [Struct](functions/Struct.md) | `Struct` lets you declare composite types for use in o1js circuits. |
| [toConstantField](functions/toConstantField.md) | - |
| [toFp](functions/toFp.md) | - |
| [toPoint](functions/toPoint.md) | - |
| [VarField](functions/VarField.md) | - |
| [verify](functions/verify.md) | Initializes Pickles bindings, serializes the input proof and verification key for use in OCaml, then calls into the Pickles verify function and returns the result. |
| [WithHash](functions/WithHash.md) | - |
| [withHashes](functions/withHashes.md) | - |
| [withMessage](functions/withMessage.md) | - |
| [ZkProgram](functions/ZkProgram.md) | Wraps config + provable code into a program capable of producing [Proof](classes/Proof.md)s. |
