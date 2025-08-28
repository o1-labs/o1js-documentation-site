import { SmartContract, state, State, method, Field, Bool, UInt32, UInt64, PublicKey, Signature, Struct, Poseidon, Character, CircuitString, Provable } from 'o1js';

// start_basic_provable_inputs
export class BasicInputsContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(Bool) isActive = State<Bool>();
  @state(UInt32) counter = State<UInt32>();

  init() {
    super.init();
    this.value.set(Field(0));
    this.isActive.set(Bool(true));
    this.counter.set(UInt32.from(0));
  }

  @method async updateValue(newValue: Field) {
    // Field input - most common provable type
    newValue.assertGreaterThan(Field(0));
    this.value.set(newValue);
  }

  @method async toggleActive(shouldActivate: Bool) {
    // Bool input for binary conditions
    const currentActive = this.isActive.getAndRequireEquals();
    
    // Conditional logic with Bool
    const newState = Provable.if(shouldActivate, Bool(true), Bool(false));
    this.isActive.set(newState);
  }

  @method async incrementBy(amount: UInt32) {
    // UInt32 input for bounded integers
    amount.assertLessThanOrEqual(UInt32.from(100)); // Max increment of 100
    
    const currentCounter = this.counter.getAndRequireEquals();
    const newCounter = currentCounter.add(amount);
    this.counter.set(newCounter);
  }
}
// end_basic_provable_inputs

// start_struct_inputs
export class UserData extends Struct({
  id: Field,
  age: UInt32,
  isVerified: Bool,
  publicKey: PublicKey,
}) {
  // Custom validation method
  validate() {
    this.age.assertGreaterThan(UInt32.from(0));
    this.age.assertLessThan(UInt32.from(150));
    this.id.assertGreaterThan(Field(0));
  }
}

export class UserRegistrationContract extends SmartContract {
  @state(Field) totalUsers = State<Field>();
  @state(Field) userHash = State<Field>(); // Hash of all user data

  init() {
    super.init();
    this.totalUsers.set(Field(0));
    this.userHash.set(Field(0));
  }

  @method async registerUser(userData: UserData) {
    // Validate the struct input
    userData.validate();
    
    // Additional business logic
    userData.isVerified.assertTrue(); // Only verified users
    
    // Update state
    const currentTotal = this.totalUsers.getAndRequireEquals();
    this.totalUsers.set(currentTotal.add(1));
    
    // Hash user data for commitment
    const currentHash = this.userHash.getAndRequireEquals();
    const userDataHash = Poseidon.hash(userData.toFields());
    const newHash = Poseidon.hash([currentHash, userDataHash]);
    this.userHash.set(newHash);
  }

  @method async updateUserData(oldData: UserData, newData: UserData) {
    // Both old and new data as struct inputs
    oldData.validate();
    newData.validate();
    
    // Verify same user (same ID and public key)
    oldData.id.assertEquals(newData.id);
    oldData.publicKey.assertEquals(newData.publicKey);
    
    // Allow age updates but verify they make sense
    newData.age.assertGreaterThanOrEqual(oldData.age);
    
    // Update hash (remove old, add new)
    const currentHash = this.userHash.getAndRequireEquals();
    const oldHash = Poseidon.hash(oldData.toFields());
    const newHash = Poseidon.hash(newData.toFields());
    
    // This is simplified - in practice you'd need a more complex hash tree
    const updatedHash = Poseidon.hash([currentHash, oldHash, newHash]);
    this.userHash.set(updatedHash);
  }
}
// end_struct_inputs

// start_array_inputs
export class ArrayProcessorContract extends SmartContract {
  @state(Field) processedCount = State<Field>();
  @state(Field) arrayHash = State<Field>();

  init() {
    super.init();
    this.processedCount.set(Field(0));
    this.arrayHash.set(Field(0));
  }

  @method async processNumbers(numbers: Field[]) {
    // Array input with validation
    numbers.length.assertLessThanOrEqual(10); // Max 10 numbers
    
    let sum = Field(0);
    let product = Field(1);
    
    // Process each number in the array
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      
      // Validate each number
      num.assertGreaterThan(Field(0));
      num.assertLessThan(Field(1000));
      
      sum = sum.add(num);
      product = product.mul(num);
    }
    
    // Update state with processed data
    const currentCount = this.processedCount.getAndRequireEquals();
    this.processedCount.set(currentCount.add(numbers.length));
    
    // Store hash of the array
    const arrayHash = Poseidon.hash(numbers);
    this.arrayHash.set(arrayHash);
  }

  @method async processPairs(pairs: [Field, Field][]) {
    // Array of tuples
    pairs.length.assertLessThanOrEqual(5); // Max 5 pairs
    
    let pairSum = Field(0);
    
    for (let i = 0; i < pairs.length; i++) {
      const [first, second] = pairs[i];
      
      // Validate pair
      first.assertGreaterThan(Field(0));
      second.assertGreaterThan(Field(0));
      
      // Ensure first >= second
      first.assertGreaterThanOrEqual(second);
      
      pairSum = pairSum.add(first).add(second);
    }
    
    const currentCount = this.processedCount.getAndRequireEquals();
    this.processedCount.set(currentCount.add(pairs.length * 2));
  }
}
// end_array_inputs

// start_complex_validation
export class Transaction extends Struct({
  from: PublicKey,
  to: PublicKey,
  amount: UInt64,
  nonce: UInt32,
  timestamp: UInt32,
}) {
  // Complex validation with multiple constraints
  validate() {
    // Amount must be positive and reasonable
    this.amount.assertGreaterThan(UInt64.from(0));
    this.amount.assertLessThan(UInt64.from(1000000000)); // Max 1B units
    
    // Nonce must be reasonable
    this.nonce.assertGreaterThan(UInt32.from(0));
    
    // Timestamp should be reasonable (not too old or future)
    const now = UInt32.from(Date.now());
    const oneDay = UInt32.from(24 * 60 * 60 * 1000);
    this.timestamp.assertGreaterThan(now.sub(oneDay)); // Not older than 1 day
    this.timestamp.assertLessThan(now.add(oneDay)); // Not more than 1 day in future
  }
}

export class PaymentProcessorContract extends SmartContract {
  @state(UInt64) totalProcessed = State<UInt64>();
  @state(UInt32) transactionCount = State<UInt32>();

  init() {
    super.init();
    this.totalProcessed.set(UInt64.from(0));
    this.transactionCount.set(UInt32.from(0));
  }

  @method async processTransaction(
    transaction: Transaction,
    senderSignature: Signature
  ) {
    // Validate transaction structure
    transaction.validate();
    
    // Verify signature
    const messageFields = transaction.toFields();
    senderSignature.verify(transaction.from, messageFields).assertTrue();
    
    // Business logic - prevent self-transfers
    transaction.from.equals(transaction.to).assertFalse();
    
    // Update state
    const currentTotal = this.totalProcessed.getAndRequireEquals();
    const currentCount = this.transactionCount.getAndRequireEquals();
    
    this.totalProcessed.set(currentTotal.add(transaction.amount));
    this.transactionCount.set(currentCount.add(1));
  }

  @method async batchProcess(
    transactions: Transaction[],
    signatures: Signature[]
  ) {
    // Arrays must have same length
    transactions.length.assertEquals(signatures.length);
    transactions.length.assertLessThanOrEqual(5); // Max batch size
    
    let batchTotal = UInt64.from(0);
    
    // Process each transaction
    for (let i = 0; i < transactions.length; i++) {
      const tx = transactions[i];
      const sig = signatures[i];
      
      // Validate each transaction
      tx.validate();
      sig.verify(tx.from, tx.toFields()).assertTrue();
      
      batchTotal = batchTotal.add(tx.amount);
    }
    
    // Update state with batch totals
    const currentTotal = this.totalProcessed.getAndRequireEquals();
    const currentCount = this.transactionCount.getAndRequireEquals();
    
    this.totalProcessed.set(currentTotal.add(batchTotal));
    this.transactionCount.set(currentCount.add(transactions.length));
  }
}
// end_complex_validation

// start_string_inputs
export class MessageContract extends SmartContract {
  @state(Field) messageHash = State<Field>();
  @state(UInt32) messageCount = State<UInt32>();

  init() {
    super.init();
    this.messageHash.set(Field(0));
    this.messageCount.set(UInt32.from(0));
  }

  @method async storeMessage(message: CircuitString) {
    // String input with length validation
    message.maxLength.assertEquals(100); // Max 100 characters
    
    // Convert to hash for storage efficiency
    const messageFields = message.toFields();
    const hash = Poseidon.hash(messageFields);
    
    // Update state
    this.messageHash.set(hash);
    
    const currentCount = this.messageCount.getAndRequireEquals();
    this.messageCount.set(currentCount.add(1));
  }

  @method async validatePrefix(message: CircuitString, prefix: CircuitString) {
    // Validate that message starts with prefix
    prefix.maxLength.assertEquals(10); // Max 10 char prefix
    message.maxLength.assertEquals(100);
    
    // Check prefix match (simplified validation)
    const messageFields = message.toFields();
    const prefixFields = prefix.toFields();
    
    // First N fields should match (where N is prefix length)
    for (let i = 0; i < prefixFields.length; i++) {
      messageFields[i].assertEquals(prefixFields[i]);
    }
    
    // Store if valid
    const hash = Poseidon.hash(messageFields);
    this.messageHash.set(hash);
  }
}
// end_string_inputs

// start_conditional_inputs
export class ConditionalContract extends SmartContract {
  @state(Field) value = State<Field>();
  @state(Bool) mode = State<Bool>();

  init() {
    super.init();
    this.value.set(Field(0));
    this.mode.set(Bool(false));
  }

  @method async conditionalUpdate(
    condition: Bool,
    valueIfTrue: Field,
    valueIfFalse: Field,
    enableMode: Bool
  ) {
    // Validate inputs based on conditions
    valueIfTrue.assertGreaterThan(Field(0));
    valueIfFalse.assertGreaterThanOrEqual(Field(0));
    
    // Conditional value selection
    const selectedValue = Provable.if(
      condition,
      valueIfTrue,
      valueIfFalse
    );
    
    // Only update if the selected value meets criteria
    const shouldUpdate = selectedValue.greaterThan(Field(10));
    
    const currentValue = this.value.getAndRequireEquals();
    const newValue = Provable.if(
      shouldUpdate,
      selectedValue,
      currentValue
    );
    
    this.value.set(newValue);
    this.mode.set(enableMode);
  }

  @method async switchingLogic(
    switchValue: Field,
    option1: Field,
    option2: Field,
    option3: Field
  ) {
    // Switch-like logic with provable inputs
    switchValue.assertLessThan(Field(3)); // 0, 1, or 2
    
    const isOption1 = switchValue.equals(Field(0));
    const isOption2 = switchValue.equals(Field(1));
    const isOption3 = switchValue.equals(Field(2));
    
    const result = Provable.switch([isOption1, isOption2, isOption3], Field, [
      option1,
      option2,
      option3,
    ]);
    
    this.value.set(result);
  }
}
// end_conditional_inputs