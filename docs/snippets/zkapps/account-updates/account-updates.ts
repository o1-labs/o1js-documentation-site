import {
  SmartContract,
  state,
  State,
  method,
  Field,
  AccountUpdate,
  PublicKey,
  UInt64,
  Bool,
  TokenId,
  PrivateKey,
  UInt32,
} from "o1js";

// start_basic_account_update
// All AccountUpdates map to a single account - let's generate a random one
const randomPublicKey = PrivateKey.random().toPublicKey();

const au = AccountUpdate.create(randomPublicKey);

// Now we can edit the assertions and updates

// The AccountUpdate is only valid during the first hundred blocks
au.body.preconditions.network.blockchainLength.value = {
  lower: UInt32.from(0),
  upper: UInt32.from(100),
};

// Pay one Mina from this account
// NOTE: A transaction will fail if the balance changes of all the AccountUpdates do not sum to zero
au.body.balanceChange.sub(UInt64.from(1e9));

// Set the first Field of app state on chain for this account to 1234
au.body.update.appState[0] = {
  isSome: Bool(true),
  value: Field(1234),
};
// end_basic_account_update
