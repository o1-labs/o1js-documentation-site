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

// start_reducer
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
// end_reducer
