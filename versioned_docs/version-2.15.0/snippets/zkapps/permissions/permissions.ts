import { SmartContract, state, State, method, Field, Permissions } from "o1js";

// start_basic_permissions
export class BasicPermissionsContract extends SmartContract {
  @state(Field) value = State<Field>();

  init() {
    super.init();
    this.value.set(Field(0));

    // Set basic permissions
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.proof(), // Require proof to edit state
      setVerificationKey:
        Permissions.VerificationKey.impossibleDuringCurrentVersion(), // Cannot change verification key
      setPermissions: Permissions.impossible(), // Cannot change permissions
    });
  }

  @method async setValue(newValue: Field) {
    this.value.set(newValue);
  }
}
// end_basic_permissions
