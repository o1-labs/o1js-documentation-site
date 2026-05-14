import {
  SmartContract,
  state,
  State,
  method,
  Field,
  Mina,
  PrivateKey,
  PublicKey,
  AccountUpdate,
  UInt64,
  fetchAccount,
  Permissions,
} from "o1js";

// start_sample_contract
export class DeployableContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(UInt64) deployTime = State<UInt64>();

  init() {
    super.init();
    this.value.set(Field(0));
    this.deployTime.set(UInt64.from(Date.now()));

    // Set reasonable permissions for a production contract
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.proof(),
      setVerificationKey:
        Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: Permissions.impossible(),
    });
  }

  @method async setValue(newValue: Field) {
    newValue.assertGreaterThan(Field(0));
    this.value.set(newValue);
  }

  @method async increment() {
    const currentValue = this.value.getAndRequireEquals();
    this.value.set(currentValue.add(1));
  }
}
// end_sample_contract

// start_network_configs
export const NetworkConfig = {
  // Mina Mainnet configuration
  mainnet: {
    mina: "https://api.minascan.io/node/mainnet/v1/graphql",
    archive: "https://api.minascan.io/archive/mainnet/v1/graphql",
    name: "mainnet",
    networkId: "mainnet",
  },

  // Mina Devnet configuration
  devnet: {
    mina: "https://api.minascan.io/node/devnet/v1/graphql",
    archive: "https://api.minascan.io/archive/devnet/v1/graphql",
    name: "devnet",
    networkId: "testnet",
  },

  // Zeko configuration
  zeko_testnet: {
    mina: "https://devnet.zeko.io/graphql",
    archive: "https://devnet.zeko.io/graphql", // Zeko uses same endpoint for both
    name: "zeko testnet",
    networkId: "testnet",
  },
};
// end_network_configs

// start_devnet_deployment
export async function deployToDevnet(
  contractClass: typeof SmartContract, // In practice, use your specific contract class here
  contractPrivateKey: PrivateKey,
  deployerPrivateKey: PrivateKey
) {
  console.log("Configuring Mina instance for devnet...");

  const Network = Mina.Network({
    mina: NetworkConfig.devnet.mina,
    archive: NetworkConfig.devnet.archive,
  });
  Mina.setActiveInstance(Network);

  const deployerPublicKey = deployerPrivateKey.toPublicKey();
  const contractPublicKey = contractPrivateKey.toPublicKey();

  console.log("Deployer address:", deployerPublicKey.toBase58());
  console.log("Contract address:", contractPublicKey.toBase58());

  // Check/fund account using faucet if needed
  try {
    await fetchAccount({ publicKey: deployerPublicKey });
    const deployerAccount = Mina.getAccount(deployerPublicKey);
    console.log(
      "Deployer balance:",
      deployerAccount.balance.toBigInt().toString()
    );

    if (deployerAccount.balance.lessThan(UInt64.from(1_000_000_000))) {
      console.log(
        "Low balance detected, Please visit https://faucet.minaprotocol.com to fund your account..."
      );
    }
  } catch (error) {
    console.log("Account not found, please fund it using the faucet");
    console.log("Faucet URL: https://faucet.minaprotocol.com");
    throw error;
  }

  // Compile contract
  console.log("Compiling contract...");
  const { verificationKey } = await contractClass.compile();

  const contract = new contractClass(contractPublicKey);

  // Create deployment transaction
  console.log("Creating deployment transaction...");
  const deployTx = await Mina.transaction(
    {
      sender: deployerPublicKey,
      fee: 100_000_000, // 0.1 MINA fee
      memo: "zkApp deployment to devnet",
    },
    async () => {
      AccountUpdate.fundNewAccount(deployerPublicKey);
      contract.deploy({ verificationKey });
    }
  );

  await deployTx.prove();
  const signedTx = deployTx.sign([deployerPrivateKey, contractPrivateKey]);

  console.log("Sending transaction to devnet...");
  const txResult = await signedTx.send();

  console.log("Devnet deployment successful!");
  console.log("Transaction hash:", txResult.hash);

  return {
    contractAddress: contractPublicKey.toBase58(),
    transactionHash: txResult.hash,
    network: "devnet",
  };
}
// end_devnet_deployment
