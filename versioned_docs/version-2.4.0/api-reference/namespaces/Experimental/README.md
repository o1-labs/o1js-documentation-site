This module exposes APIs that are unstable, in the sense that the API surface is expected to change.
(Not unstable in the sense that they are less functional or tested than other parts.)

## Classes

| Class | Description |
| ------ | ------ |
| [BatchReducer](classes/BatchReducer.md) | A reducer to process actions in fixed-size batches. |
| [OffchainStateCommitments](classes/OffchainStateCommitments.md) | Commitments that keep track of the current state of an offchain Merkle tree constructed from actions. Intended to be stored on-chain. |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [ActionBatch](type-aliases/ActionBatch.md) | - |
| [IndexedMerkleMap](type-aliases/IndexedMerkleMap.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [ActionBatch](functions/ActionBatch.md) | Provable type that represents a batch of actions. |
| [IndexedMerkleMap](functions/IndexedMerkleMap.md) | Class factory for an Indexed Merkle Map with a given height. |
| [memoizeWitness](functions/memoizeWitness.md) | Like Provable.witness, but memoizes the witness during transaction construction for reuse by the prover. This is needed to witness non-deterministic values. |
| [OffchainState](functions/OffchainState.md) | Offchain state for a `SmartContract`. |
| [Recursive](functions/Recursive.md) | - |
