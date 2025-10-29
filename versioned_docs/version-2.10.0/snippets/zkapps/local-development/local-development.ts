import {
  SmartContract,
  state,
  State,
  method,
  Field,
  Mina,
  AccountUpdate,
} from "o1js";

async () => {
  // start_basic_setup
  // Development mode - fast execution, no proofs
  let Local = await Mina.LocalBlockchain({ proofsEnabled: false });
  Mina.setActiveInstance(Local);
  // end_basic_setup

  // start_configuration_options
  // Production-like testing with proofs
  let LocalWithProofs = await Mina.LocalBlockchain({
    proofsEnabled: true, // Generate real proofs (slower)
    enforceTransactionLimits: true, // Enforce network transaction limits
  });

  // Development testing without constraints
  let LocalFast = await Mina.LocalBlockchain({
    proofsEnabled: false, // Skip proof generation (faster)
    enforceTransactionLimits: false, // Allow complex transactions
  });
  // end_configuration_options
};

async () => {
  // start_test_accounts
  let LocalAccounts = await Mina.LocalBlockchain();
  let [feePayer, user1, user2, user3] = LocalAccounts.testAccounts;

  console.log(`Fee Payer: ${feePayer.toBase58()}`);
  // end_test_accounts
};

async () => {
  // start_deploy_and_test
  // Define a smart contract with state
  class CounterContract extends SmartContract {
    @state(Field) counter = State<Field>();

    init() {
      super.init();
      this.counter.set(Field(0));
    }

    @method async add(value: Field) {
      let currentCounter = this.counter.getAndRequireEquals();
      this.counter.set(currentCounter.add(value));
    }
  }

  // Set up LocalBlockchain
  let Local = await Mina.LocalBlockchain({ proofsEnabled: false });
  Mina.setActiveInstance(Local);

  let [feePayer] = Local.testAccounts;
  let contractAccount = Mina.TestPublicKey.random();
  let contract = new CounterContract(contractAccount);

  // If using proofs, compile the contract
  // Else, skip this step to save time
  if (Local.proofsEnabled) {
    console.time("Compiling smart contract...");
    await CounterContract.compile();
    console.timeEnd("Compiling smart contract...");
  }

  // Deploy contract
  let deployTx = await Mina.transaction(feePayer, async () => {
    AccountUpdate.fundNewAccount(feePayer);
    await contract.deploy();
  });
  await deployTx.prove();
  await deployTx.sign([feePayer.key, contractAccount.key]).send();

  console.log("Initial state:", contract.counter.get().toString());

  // Call the add method
  let addTx = await Mina.transaction(feePayer, async () => {
    await contract.add(Field(5));
  });
  await addTx.prove();
  await addTx.sign([feePayer.key]).send();

  console.log("State after adding 5:", contract.counter.get().toString());

  // Call add method again
  let addTx2 = await Mina.transaction(feePayer, async () => {
    await contract.add(Field(3));
  });
  await addTx2.prove();
  await addTx2.sign([feePayer.key]).send();

  console.log("State after adding 3:", contract.counter.get().toString());
  // Expected output: "8"
  // end_deploy_and_test
};
