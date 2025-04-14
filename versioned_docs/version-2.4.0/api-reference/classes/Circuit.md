Defined in: [lib/proof-system/circuit.ts:13](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L13)

## Constructors

### new Circuit()

```ts
new Circuit(): Circuit
```

#### Returns

[`Circuit`](Circuit.md)

## Properties

### \_main

```ts
static _main: CircuitData<any, any>;
```

Defined in: [lib/proof-system/circuit.ts:16](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L16)

## Methods

### generateKeypair()

```ts
static generateKeypair(): Promise<Keypair>
```

Defined in: [lib/proof-system/circuit.ts:25](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L25)

Generates a proving key and a verification key for this circuit.

#### Returns

`Promise`\<[`Keypair`](Keypair.md)\>

#### Example

```ts
const keypair = await MyCircuit.generateKeypair();
```

***

### prove()

```ts
static prove(
   privateInput: any[], 
   publicInput: any[], 
keypair: Keypair): Promise<Proof>
```

Defined in: [lib/proof-system/circuit.ts:45](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L45)

Proves a statement using the private input, public input, and the [Keypair](Keypair.md) of the circuit.

#### Parameters

##### privateInput

`any`[]

##### publicInput

`any`[]

##### keypair

[`Keypair`](Keypair.md)

#### Returns

`Promise`\<`Proof`\>

#### Example

```ts
const keypair = await MyCircuit.generateKeypair();
const proof = await MyCircuit.prove(privateInput, publicInput, keypair);
```

***

### verify()

```ts
static verify(
   publicInput: any[], 
   verificationKey: VerificationKey, 
proof: Proof): Promise<boolean>
```

Defined in: [lib/proof-system/circuit.ts:72](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/proof-system/circuit.ts#L72)

Verifies a proof using the public input, the proof, and the initial [Keypair](Keypair.md) of the circuit.

#### Parameters

##### publicInput

`any`[]

##### verificationKey

`VerificationKey`

##### proof

`Proof`

#### Returns

`Promise`\<`boolean`\>

#### Example

```ts
const keypair = await MyCircuit.generateKeypair();
const proof = await MyCircuit.prove(privateInput, publicInput, keypair);
const isValid = await MyCircuit.verify(publicInput, keypair.vk, proof);
```
