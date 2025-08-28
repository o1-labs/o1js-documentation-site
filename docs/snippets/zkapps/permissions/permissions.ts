import { SmartContract, state, State, method, Field, Permissions, PublicKey, Signature, Bool, PrivateKey } from 'o1js';

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
      setVerificationKey: Permissions.impossible(), // Cannot change verification key
      setPermissions: Permissions.impossible(), // Cannot change permissions
    });
  }

  @method async setValue(newValue: Field) {
    this.value.set(newValue);
  }
}
// end_basic_permissions

// start_signature_permissions
export class SignaturePermissionsContract extends SmartContract {
  @state(Field) adminValue = State<Field>();
  @state(PublicKey) admin = State<PublicKey>();

  init() {
    super.init();
    this.adminValue.set(Field(0));
    
    // Require signature for state changes
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.signature(),
      setVerificationKey: Permissions.signature(),
      setPermissions: Permissions.signature(),
    });
  }

  @method async setAdmin(adminPublicKey: PublicKey, adminSignature: Signature) {
    // Verify admin signature
    adminSignature.verify(adminPublicKey, adminPublicKey.toFields()).assertTrue();
    
    this.admin.set(adminPublicKey);
  }

  @method async updateAdminValue(newValue: Field, adminSignature: Signature) {
    const admin = this.admin.getAndRequireEquals();
    
    // Verify admin signature
    adminSignature.verify(admin, [newValue]).assertTrue();
    
    this.adminValue.set(newValue);
  }
}
// end_signature_permissions

// start_mixed_permissions
export class MixedPermissionsContract extends SmartContract {
  @state(Field) publicValue = State<Field>();
  @state(Field) adminValue = State<Field>();
  @state(PublicKey) admin = State<PublicKey>();

  init() {
    super.init();
    this.publicValue.set(Field(0));
    this.adminValue.set(Field(100));
    
    // Mixed permissions: some operations require proof, others signature
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.proofOrSignature(), // Either proof or signature
      send: Permissions.proof(), // Only proofs can send tokens
      setVerificationKey: Permissions.impossible(),
      setPermissions: Permissions.signature(), // Only admin can change permissions
    });
  }

  @method async setAdmin(adminKey: PublicKey) {
    // This requires a proof (via @method)
    this.admin.set(adminKey);
  }

  @method async updatePublicValue(newValue: Field) {
    // Anyone can call this with a proof
    this.publicValue.set(newValue);
  }

  @method async updateAdminValue(newValue: Field, adminSignature: Signature) {
    // This requires admin signature
    const admin = this.admin.getAndRequireEquals();
    adminSignature.verify(admin, [newValue]).assertTrue();
    
    this.adminValue.set(newValue);
  }
}
// end_mixed_permissions

// start_delegated_permissions
export class DelegatedPermissionsContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(PublicKey) delegate = State<PublicKey>();

  init() {
    super.init();
    this.value.set(Field(0));
  }

  @method async setDelegate(newDelegate: PublicKey) {
    this.delegate.set(newDelegate);
  }

  @method async delegatedUpdate(newValue: Field, delegateSignature: Signature) {
    const delegate = this.delegate.getAndRequireEquals();
    
    // Verify delegate signature
    delegateSignature.verify(delegate, [newValue]).assertTrue();
    
    this.value.set(newValue);
  }

  @method async directUpdate(newValue: Field) {
    // Direct update without signature (proof only)
    this.value.set(newValue);
  }
}
// end_delegated_permissions

// start_time_locked_permissions
export class TimeLockedContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(Field) unlockTime = State<Field>();

  init() {
    super.init();
    this.value.set(Field(0));
    // Set unlock time to 1 hour from now (in milliseconds)
    this.unlockTime.set(Field(Date.now() + 3600000));
    
    // Initially lock all operations
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.impossible(),
      setPermissions: Permissions.proof(), // Allow changing permissions with proof
    });
  }

  @method async unlock() {
    const currentTime = Field(Date.now());
    const unlockTime = this.unlockTime.getAndRequireEquals();
    
    // Require that unlock time has passed
    currentTime.assertGreaterThanOrEqual(unlockTime);
    
    // Update permissions to allow state edits
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.proof(),
      setPermissions: Permissions.impossible(),
    });
  }

  @method async setValue(newValue: Field) {
    // This will only work after unlock() has been called
    this.value.set(newValue);
  }
}
// end_time_locked_permissions

// start_multisig_permissions
export class MultisigContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(PublicKey) signer1 = State<PublicKey>();
  @state(PublicKey) signer2 = State<PublicKey>();

  init() {
    super.init();
    this.value.set(Field(0));
    
    // Require proof for operations (multisig implemented in methods)
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.proof(),
      setPermissions: Permissions.impossible(),
    });
  }

  @method async setSigners(signer1: PublicKey, signer2: PublicKey) {
    this.signer1.set(signer1);
    this.signer2.set(signer2);
  }

  @method async multisigUpdate(
    newValue: Field,
    signature1: Signature,
    signature2: Signature
  ) {
    const signer1 = this.signer1.getAndRequireEquals();
    const signer2 = this.signer2.getAndRequireEquals();
    
    // Verify both signatures
    signature1.verify(signer1, [newValue]).assertTrue();
    signature2.verify(signer2, [newValue]).assertTrue();
    
    this.value.set(newValue);
  }
}
// end_multisig_permissions