import {
  SmartContract,
  state,
  State,
  method,
  Field,
  Reducer,
  Struct,
  UInt32,
  Bool,
} from "o1js";

// start_basic_actions
// Simple action would be just a single Field
class SimpleAction extends Field {}

// You can also use a more complex Struct for actions
class ComplexAction extends Struct({
  id: UInt32,
  flag: Bool,
}) {}

// To represent different types of actions, use a key to discriminate
class DiscriminatedAction extends Struct({
  type: UInt32, // 1 = typeA, 2 = typeB
  payload: Field,
  aSpedicificField: Field, // only for typeA
  bSpecificField: Field, // only for typeB
}) {}

// Dispatch actions to a reducer within a Zkapp
class ActionContract extends SmartContract {
  @state(Field) actionState = State<Field>();

  reducer = Reducer({ actionType: SimpleAction });

  @method async dispatchAction(value: Field) {
    value.assertGreaterThan(Field(0));
    this.reducer.dispatch(value);
  }
}
// end_basic_actions

// start_reducer_ex
class ActionReducerContract extends SmartContract {
  @state(Field) sum = State<Field>();
  @state(Field) actionState = State<Field>();

  reducer = Reducer({ actionType: SimpleAction });

  @method async dispatchAction(value: Field) {
    value.assertGreaterThan(Field(0));
    this.reducer.dispatch(value);
  }

  // Write a method to reduce actions in your SmartContract
  @method async reduce() {
    const actions = this.reducer.getActions();
    const initial = this.sum.getAndRequireEquals();
    let newState = this.reducer.reduce(
      actions,
      Field,
      (state: Field, action: Field) => state.add(action),
      initial
    );
    this.actionState.set(newState);
  }
}
// end_reducer_ex

// start_fetch_actions
import { Mina, PublicKey } from "o1js";

let contractKey: PublicKey; // Address of deployed contract

// Fetch all actions for a contract
const actions = await Mina.fetchActions(contractKey);

// Fetch actions with block range filtering
const filteredActions = await Mina.fetchActions(
  contractKey,
  undefined, // actionStates, e.g. { fromActionState: X, toActionState: Y }
  undefined, // tokenId, default to Mina token, but can specify another custom token instead
  100, // from block
  200 // to block
);

console.log("Actions:", actions);
// end_fetch_actions

// start_reducer_fetch_actions

let contractAddress: PublicKey; // Address of deployed contract

class ActionStruct extends Struct({
  candidate: Field,
}) {}

class VotingContract extends SmartContract {
  @state(Field) totalVotes = State<Field>();

  reducer = Reducer({ actionType: ActionStruct });

  @method
  async vote(candidate: Field) {
    this.reducer.dispatch({ candidate });
  }
}

// Deploy and use the contract...
const contract = new VotingContract(contractAddress);

// Fetch typed actions from the reducer
const voteActions = await contract.reducer.fetchActions();
console.log("Vote actions:", voteActions);

let startState: Field; // The starting action state to query from
let endState: Field; // The ending action state to query to

// Fetch actions within a specific action state range
const rangedActions = await contract.reducer.fetchActions({
  fromActionState: startState,
  endActionState: endState,
});

console.log("Ranged vote actions:", rangedActions);
// end_reducer_fetch_actions
