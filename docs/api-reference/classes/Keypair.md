Defined in: [lib/proof-system/circuit.ts:87](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L87)

## Constructors

### new Keypair()

```ts
new Keypair(value: unknown): Keypair
```

Defined in: [lib/proof-system/circuit.ts:90](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L90)

#### Parameters

##### value

`unknown`

#### Returns

[`Keypair`](Keypair.md)

## Properties

### value

```ts
value: unknown;
```

Defined in: [lib/proof-system/circuit.ts:88](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L88)

## Methods

### constraintSystem()

```ts
constraintSystem(): Gate[]
```

Defined in: [lib/proof-system/circuit.ts:107](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L107)

Returns a low-level JSON representation of the [Circuit](Circuit.md) from its [Keypair](Keypair.md):
a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs

#### Returns

`Gate`[]

#### Example

```ts
const keypair = await MyCircuit.generateKeypair();
const json = MyProvable.witnessFromKeypair(keypair);
```

***

### verificationKey()

```ts
verificationKey(): VerificationKey
```

Defined in: [lib/proof-system/circuit.ts:94](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L94)

#### Returns

`VerificationKey`
