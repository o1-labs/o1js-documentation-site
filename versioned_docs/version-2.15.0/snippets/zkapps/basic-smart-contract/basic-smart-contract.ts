import { SmartContract, state, State, method, Field, Bool, Permissions, PublicKey, Signature, UInt32, Struct } from 'o1js';

// start_basic_contract
export class SimpleCounter extends SmartContract {
  @state(Field) counter = State<Field>();

  @method async increment() {
    const currentCounter = this.counter.getAndRequireEquals();
    this.counter.set(currentCounter.add(1));
  }
}
// end_basic_contract

// start_multiple_state
export class MultiStateContract extends SmartContract {
  @state(Field) counter = State<Field>();
  @state(Bool) isActive = State<Bool>();
  @state(UInt32) lastUpdate = State<UInt32>();

  @method async updateState(newCounter: Field) {
    // Check that contract is active
    const active = this.isActive.getAndRequireEquals();
    active.assertTrue();

    // Update counter
    this.counter.set(newCounter);
    
    // Update timestamp
    this.lastUpdate.set(UInt32.from(Date.now()));
  }
}
// end_multiple_state

// start_conditional_logic
export class ConditionalContract extends SmartContract {
  @state(Field) accountBalance = State<Field>();

  @method async withdraw(amount: Field) {
    const currentBalance = this.accountBalance.getAndRequireEquals();
    
    // Require sufficient balance
    currentBalance.assertGreaterThanOrEqual(amount);
    
    // Update balance
    const newBalance = currentBalance.sub(amount);
    this.accountBalance.set(newBalance);
  }

  @method async deposit(amount: Field) {
    // Ensure positive amount
    amount.assertGreaterThan(Field(0));
    
    const currentBalance = this.accountBalance.getAndRequireEquals();
    const newBalance = currentBalance.add(amount);
    this.accountBalance.set(newBalance);
  }
}
// end_conditional_logic

// start_signature_auth
export class SignatureAuthContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(PublicKey) owner = State<PublicKey>();

  @method async setValue(newValue: Field, signature: Signature) {
    const owner = this.owner.getAndRequireEquals();
    
    // Verify signature
    signature.verify(owner, [newValue]).assertTrue();
    
    this.value.set(newValue);
  }

  @method async initializeOwner(ownerPublicKey: PublicKey) {
    // Only allow setting owner once
    const currentOwner = this.owner.get();
    this.owner.requireEquals(currentOwner);
    currentOwner.equals(PublicKey.empty()).assertTrue();
    
    this.owner.set(ownerPublicKey);
  }
}
// end_signature_auth

// start_custom_permissions
export class PermissionedContract extends SmartContract {
  @state(Field) adminValue = State<Field>();

  @method async updateAdminValue(newValue: Field) {
    this.adminValue.set(newValue);
  }
}
// end_custom_permissions

// start_events
export class MyEventType extends Struct({
  value: Field,
  timestamp: UInt32,
}) {}

export class EventContract extends SmartContract {
  @state(Field) value = State<Field>();

  events = {
    'value-updated': MyEventType,
  };

  @method async updateValue(newValue: Field) {
    this.value.set(newValue);
    
    // Emit event
    this.emitEvent('value-updated', {
      value: newValue,
      timestamp: UInt32.from(Date.now()),
    });
  }
}
// end_events