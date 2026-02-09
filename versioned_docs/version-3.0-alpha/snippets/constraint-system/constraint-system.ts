import {
  Field,
  method,
  Poseidon,
  Provable,
  SmartContract,
  State,
  state,
  ZkProgram,
} from "o1js";

// start_example_provable_function
function exampleProvableFunction() {
  const x = Provable.witness(Field, () => Field(10));
  const y = Provable.witness(Field, () => Field(20));

  y.assertGreaterThan(x);
  return Poseidon.hash([x, y]);
}
// end_example_provable_function

async function constraintSystemExample() {
  // start_constraint_system_example
  const cs = await Provable.constraintSystem(() => {
    exampleProvableFunction();
  });

  cs.summary(); // Count of constraints, grouped by gate type
  cs.rows; // Count of total constraints
  cs.gates; // Array of gates that make up the constraint system (essentially a serialization of the raw system)
  // end_constraint_system_example

  return { cs };
}

async function zkProgramExample() {
  // start_zk_program_example
  const zkp = ZkProgram({
    name: "Example",
    publicOutput: Field,
    methods: {
      example: {
        privateInputs: [],
        method: async () => {
          const publicOutput = exampleProvableFunction();
          return { publicOutput };
        },
      },
    },
  });

  const zkpAnalysis = await zkp.analyzeMethods();

  zkpAnalysis.example.summary();
  zkpAnalysis.example.rows;
  zkpAnalysis.example.gates;
  // end_zk_program_example

  return { zkp, zkpAnalysis };
}

async function smartContractExample() {
  // start_smart_contract_example
  class ExampleContract extends SmartContract {
    @state(Field) x = State<Field>();

    @method async example(y: Field, knownHash: Field) {
      const x = this.x.getAndRequireEquals();
      y.assertGreaterThan(x);
      Poseidon.hash([x, y]).assertEquals(knownHash);
      this.x.set(y);
    }

    // Helper function, totally out of scope for analyzeMethods
    get stringX() {
      return this.x.get().toString();
    }
  }

  const scAnalysis = await ExampleContract.analyzeMethods();

  scAnalysis.example.rows;
  scAnalysis.example.gates;
  // end_smart_contract_example
  // TODO: there is no scAnalysis.example.summary() method

  return { scAnalysis };
}

export { constraintSystemExample, zkProgramExample, smartContractExample };
