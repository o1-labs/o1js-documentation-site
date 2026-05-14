import { SmartContract, method, State, state, Field } from "o1js";

// start_basic_zkapp
export class MyZkApp extends SmartContract {
  @state(Field) count = State<Field>();

  init() {
    super.init();
    this.count.set(Field(0));
  }

  // @method decorator means that this method must make a valid constraint system
  // @methods cannot accept any non-provable types as method parameters
  @method
  async increment(value: Field) {
    // o1js allows you to make assertions about the input
    value.assertGreaterThan(10);

    // getAndRequireEquals generates an AccountUpdate for the SmartContract to assert that the on-chain value is correct
    // This is how we can safely access account state off-chain.  If the app state changes between proof time, and
    // verification time, then this transaction will fail.
    const currentCount = this.count.getAndRequireEquals();

    // .set() will edit the existing AccountUpdate for the SmartContract to set the new value of the account state
    this.count.set(currentCount.add(value));
  }

  // methods that are not decorated with @method are just normal TS methods. No need to keep it provable.
  toNumber() {
    const count = this.count.get();
    return Number(count.toBigInt());
  }
}
// end_basic_zkapp
