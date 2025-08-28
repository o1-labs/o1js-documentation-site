import { SmartContract, state, State, method, Field, Mina, PrivateKey, PublicKey, AccountUpdate, UInt64, fetchAccount, Bool, Permissions } from 'o1js';

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
      setVerificationKey: Permissions.impossible(),
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
    mina: 'https://proxy.mainnet.minaexplorer.com/graphql',
    archive: 'https://archive.mainnet.minaexplorer.com',
    name: 'mainnet',
    networkId: 'mainnet',
  },
  
  // Mina Devnet configuration  
  devnet: {
    mina: 'https://proxy.devnet.minaexplorer.com/graphql',
    archive: 'https://archive.devnet.minaexplorer.com', 
    name: 'devnet',
    networkId: 'testnet',
  },
  
  // Zeko configuration
  zeko: {
    mina: 'https://devnet.zeko.io/graphql',
    archive: 'https://devnet.zeko.io',
    name: 'zeko',
    networkId: 'zeko:devnet',
  },
};
// end_network_configs

// start_mainnet_deployment
export async function deployToMainnet(
  contractClass: typeof SmartContract,
  contractPrivateKey: PrivateKey,
  deployerPrivateKey: PrivateKey
) {
  console.log('Configuring Mina instance for mainnet...');
  
  const Network = Mina.Network({
    mina: NetworkConfig.mainnet.mina,
    archive: NetworkConfig.mainnet.archive,
  });
  Mina.setActiveInstance(Network);
  
  const deployerPublicKey = deployerPrivateKey.toPublicKey();
  const contractPublicKey = contractPrivateKey.toPublicKey();
  
  console.log('Deployer address:', deployerPublicKey.toBase58());
  console.log('Contract address:', contractPublicKey.toBase58());
  
  // Check deployer account exists and has sufficient balance
  try {
    await fetchAccount({ publicKey: deployerPublicKey });
    const deployerAccount = Mina.getAccount(deployerPublicKey);
    console.log('Deployer balance:', deployerAccount.balance.toBigInt().toString());
    
    // Ensure sufficient balance (at least 1 MINA for fees + account creation)
    const minBalance = UInt64.from(2_000_000_000); // 2 MINA
    if (deployerAccount.balance.lessThan(minBalance)) {
      throw new Error('Insufficient balance for deployment. Need at least 2 MINA.');
    }
  } catch (error) {
    console.error('Error fetching deployer account:', error);
    throw new Error('Deployer account not found or network error');
  }
  
  // Check if contract already exists
  let contractExists = false;
  try {
    await fetchAccount({ publicKey: contractPublicKey });
    contractExists = true;
    console.log('Contract account already exists');
  } catch {
    console.log('Contract account does not exist, will create');
  }
  
  // Compile contract
  console.log('Compiling contract...');
  const { verificationKey } = await contractClass.compile();
  console.log('Contract compiled, verification key hash:', verificationKey.hash.toString());
  
  // Create contract instance
  const contract = new contractClass(contractPublicKey);
  
  // Create deployment transaction
  console.log('Creating deployment transaction...');
  const deployTx = await Mina.transaction(
    {
      sender: deployerPublicKey,
      fee: 100_000_000, // 0.1 MINA fee
      memo: 'zkApp deployment to mainnet',
    },
    () => {
      if (!contractExists) {
        AccountUpdate.fundNewAccount(deployerPublicKey);
      }
      contract.deploy({ verificationKey });
    }
  );
  
  // Generate proof
  console.log('Generating proof...');
  await deployTx.prove();
  
  // Sign transaction
  console.log('Signing transaction...');
  const signedTx = deployTx.sign([deployerPrivateKey, contractPrivateKey]);
  
  // Send transaction
  console.log('Sending transaction...');
  const txResult = await signedTx.send();
  
  console.log('Transaction sent!');
  console.log('Transaction hash:', txResult.hash);
  console.log('Transaction status:', txResult.status);
  
  if (txResult.status === 'pending') {
    console.log('Waiting for transaction confirmation...');
    await txResult.wait();
    console.log('Transaction confirmed!');
  }
  
  return {
    contractAddress: contractPublicKey.toBase58(),
    transactionHash: txResult.hash,
    verificationKeyHash: verificationKey.hash.toString(),
  };
}
// end_mainnet_deployment

// start_devnet_deployment  
export async function deployToDevnet(
  contractClass: typeof SmartContract,
  contractPrivateKey: PrivateKey,
  deployerPrivateKey: PrivateKey
) {
  console.log('Configuring Mina instance for devnet...');
  
  const Network = Mina.Network({
    mina: NetworkConfig.devnet.mina,
    archive: NetworkConfig.devnet.archive,
  });
  Mina.setActiveInstance(Network);
  
  const deployerPublicKey = deployerPrivateKey.toPublicKey();
  const contractPublicKey = contractPrivateKey.toPublicKey();
  
  console.log('Deployer address:', deployerPublicKey.toBase58());
  console.log('Contract address:', contractPublicKey.toBase58());
  
  // Check/fund account using faucet if needed
  try {
    await fetchAccount({ publicKey: deployerPublicKey });
    const deployerAccount = Mina.getAccount(deployerPublicKey);
    console.log('Deployer balance:', deployerAccount.balance.toBigInt().toString());
    
    if (deployerAccount.balance.lessThan(UInt64.from(1_000_000_000))) {
      console.log('Low balance detected, requesting funds from faucet...');
      // Note: In practice, you would call the faucet API here
      console.log('Please visit https://faucet.minaprotocol.com to fund your account');
    }
  } catch (error) {
    console.log('Account not found, please fund it using the faucet');
    console.log('Faucet URL: https://faucet.minaprotocol.com');
    throw error;
  }
  
  // Compile contract
  console.log('Compiling contract...');
  const { verificationKey } = await contractClass.compile();
  
  const contract = new contractClass(contractPublicKey);
  
  // Create deployment transaction with lower fees for devnet
  console.log('Creating deployment transaction...');
  const deployTx = await Mina.transaction(
    {
      sender: deployerPublicKey,
      fee: 10_000_000, // 0.01 MINA fee (lower for devnet)
      memo: 'zkApp deployment to devnet',
    },
    () => {
      AccountUpdate.fundNewAccount(deployerPublicKey);
      contract.deploy({ verificationKey });
    }
  );
  
  await deployTx.prove();
  const signedTx = deployTx.sign([deployerPrivateKey, contractPrivateKey]);
  
  console.log('Sending transaction to devnet...');
  const txResult = await signedTx.send();
  
  console.log('Devnet deployment successful!');
  console.log('Transaction hash:', txResult.hash);
  
  return {
    contractAddress: contractPublicKey.toBase58(),
    transactionHash: txResult.hash,
    network: 'devnet',
  };
}
// end_devnet_deployment

// start_zeko_deployment
export async function deployToZeko(
  contractClass: typeof SmartContract,
  contractPrivateKey: PrivateKey,
  deployerPrivateKey: PrivateKey
) {
  console.log('Configuring Mina instance for Zeko...');
  
  const Network = Mina.Network({
    mina: NetworkConfig.zeko.mina,
    archive: NetworkConfig.zeko.archive,
  });
  Mina.setActiveInstance(Network);
  
  const deployerPublicKey = deployerPrivateKey.toPublicKey();
  const contractPublicKey = contractPrivateKey.toPublicKey();
  
  console.log('Deployer address:', deployerPublicKey.toBase58());
  console.log('Contract address:', contractPublicKey.toBase58());
  
  // Zeko-specific account setup
  try {
    await fetchAccount({ publicKey: deployerPublicKey });
    const deployerAccount = Mina.getAccount(deployerPublicKey);
    console.log('Deployer balance on Zeko:', deployerAccount.balance.toBigInt().toString());
  } catch (error) {
    console.log('Setting up account on Zeko network...');
    // Zeko may have different account setup requirements
  }
  
  // Compile with Zeko-specific optimizations if needed
  console.log('Compiling contract for Zeko...');
  const { verificationKey } = await contractClass.compile();
  
  const contract = new contractClass(contractPublicKey);
  
  // Zeko deployment transaction
  console.log('Creating Zeko deployment transaction...');
  const deployTx = await Mina.transaction(
    {
      sender: deployerPublicKey,
      fee: 5_000_000, // Lower fees on Zeko
      memo: 'zkApp deployment to Zeko',
    },
    () => {
      AccountUpdate.fundNewAccount(deployerPublicKey);
      contract.deploy({ verificationKey });
    }
  );
  
  await deployTx.prove();
  const signedTx = deployTx.sign([deployerPrivateKey, contractPrivateKey]);
  
  console.log('Sending transaction to Zeko...');
  const txResult = await signedTx.send();
  
  console.log('Zeko deployment successful!');
  console.log('Transaction hash:', txResult.hash);
  console.log('Zeko explorer: https://zekoscan.io/tx/', txResult.hash);
  
  return {
    contractAddress: contractPublicKey.toBase58(),
    transactionHash: txResult.hash,
    network: 'zeko',
  };
}
// end_zeko_deployment

// start_deployment_utilities
export class DeploymentUtils {
  static generateKeyPair() {
    const privateKey = PrivateKey.random();
    const publicKey = privateKey.toPublicKey();
    
    return {
      privateKey,
      publicKey,
      privateKeyBase58: privateKey.toBase58(),
      publicKeyBase58: publicKey.toBase58(),
    };
  }
  
  static async waitForTransaction(txHash: string, network: string, maxWaitTime = 300000) {
    console.log(`Waiting for transaction ${txHash} to be confirmed...`);
    
    const startTime = Date.now();
    const pollInterval = 10000; // 10 seconds
    
    while (Date.now() - startTime < maxWaitTime) {
      try {
        // In a real implementation, you would query the network for transaction status
        console.log('Checking transaction status...');
        
        // Simulate transaction confirmation check
        await new Promise(resolve => setTimeout(resolve, pollInterval));
        
        // For demo purposes, assume transaction is confirmed after some time
        if (Date.now() - startTime > 30000) { // 30 seconds
          console.log('Transaction confirmed!');
          return true;
        }
      } catch (error) {
        console.log('Error checking transaction status:', error);
      }
      
      await new Promise(resolve => setTimeout(resolve, pollInterval));
    }
    
    console.log('Transaction confirmation timeout');
    return false;
  }
  
  static async estimateDeploymentFee(networkType: 'mainnet' | 'devnet' | 'zeko') {
    const baseFees = {
      mainnet: 100_000_000, // 0.1 MINA
      devnet: 10_000_000,   // 0.01 MINA  
      zeko: 5_000_000,      // 0.005 MINA
    };
    
    return {
      fee: baseFees[networkType],
      feeInMina: baseFees[networkType] / 1_000_000_000,
      accountCreationCost: 1_000_000_000, // 1 MINA for new account
    };
  }
  
  static validatePrivateKey(privateKeyBase58: string): boolean {
    try {
      const privateKey = PrivateKey.fromBase58(privateKeyBase58);
      return privateKey instanceof PrivateKey;
    } catch {
      return false;
    }
  }
  
  static async checkAccountBalance(publicKey: PublicKey, networkConfig: any) {
    try {
      // Configure network
      const Network = Mina.Network({
        mina: networkConfig.mina,
        archive: networkConfig.archive,
      });
      Mina.setActiveInstance(Network);
      
      await fetchAccount({ publicKey });
      const account = Mina.getAccount(publicKey);
      
      return {
        balance: account.balance.toBigInt(),
        balanceInMina: Number(account.balance.toBigInt()) / 1_000_000_000,
        nonce: account.nonce.toBigint(),
        exists: true,
      };
    } catch (error) {
      return {
        balance: 0n,
        balanceInMina: 0,
        nonce: 0n,
        exists: false,
        error: error.message,
      };
    }
  }
}
// end_deployment_utilities

// start_deployment_script
export async function deploymentScript() {
  console.log('🚀 Starting zkApp Deployment Script');
  
  // Generate or load keys
  const deployerKeys = DeploymentUtils.generateKeyPair();
  const contractKeys = DeploymentUtils.generateKeyPair();
  
  console.log('📋 Deployment Configuration:');
  console.log('Deployer address:', deployerKeys.publicKeyBase58);
  console.log('Contract address:', contractKeys.publicKeyBase58);
  
  // Choose deployment target
  const deploymentTarget = process.env.DEPLOY_TARGET || 'devnet';
  console.log('🎯 Deployment target:', deploymentTarget);
  
  try {
    let result;
    
    switch (deploymentTarget) {
      case 'mainnet':
        console.log('⚠️  Deploying to MAINNET - This will use real MINA tokens!');
        result = await deployToMainnet(
          DeployableContract, 
          contractKeys.privateKey, 
          deployerKeys.privateKey
        );
        break;
        
      case 'devnet':
        console.log('🧪 Deploying to devnet...');
        result = await deployToDevnet(
          DeployableContract,
          contractKeys.privateKey,
          deployerKeys.privateKey
        );
        break;
        
      case 'zeko':
        console.log('⚡ Deploying to Zeko...');
        result = await deployToZeko(
          DeployableContract,
          contractKeys.privateKey,
          deployerKeys.privateKey
        );
        break;
        
      default:
        throw new Error(`Unknown deployment target: ${deploymentTarget}`);
    }
    
    console.log('✅ Deployment successful!');
    console.log('📄 Deployment Summary:');
    console.log('  Contract Address:', result.contractAddress);
    console.log('  Transaction Hash:', result.transactionHash);
    if (result.verificationKeyHash) {
      console.log('  Verification Key Hash:', result.verificationKeyHash);
    }
    
    // Save deployment info
    const deploymentInfo = {
      network: deploymentTarget,
      contractAddress: result.contractAddress,
      transactionHash: result.transactionHash,
      deployerAddress: deployerKeys.publicKeyBase58,
      timestamp: new Date().toISOString(),
      contractPrivateKey: contractKeys.privateKeyBase58, // Store securely!
      deployerPrivateKey: deployerKeys.privateKeyBase58,  // Store securely!
    };
    
    console.log('💾 Save this deployment info securely:');
    console.log(JSON.stringify(deploymentInfo, null, 2));
    
    return deploymentInfo;
    
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    throw error;
  }
}
// end_deployment_script