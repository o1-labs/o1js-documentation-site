```ts
type ZkappPublicInput = {
  accountUpdate: Field;
  calls: Field;
};
```

Defined in: [lib/mina/v1/account-update.ts:1916](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/mina/v1/account-update.ts#L1916)

The public input for zkApps consists of certain hashes of the proving
account update (and its child updates) which is constructed during method execution.

For SmartContract proving, a method is run twice: First outside the proof, to
obtain the public input, and once in the prover, which takes the public input
as input. The current transaction is hashed again inside the prover, which
asserts that the result equals the input public input, as part of the snark
circuit. The block producer will also hash the transaction they receive and
pass it as a public input to the verifier. Thus, the transaction is fully
constrained by the proof - the proof couldn't be used to attest to a different
transaction.

## Type declaration

### accountUpdate

```ts
accountUpdate: Field;
```

### calls

```ts
calls: Field;
```
