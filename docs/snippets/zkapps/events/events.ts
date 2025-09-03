import {
  SmartContract,
  method,
  State,
  state,
  Field,
  Struct,
  PublicKey,
  UInt64,
  fetchEvents,
} from "o1js";

// start_basic_events
export class EventContract extends SmartContract {
  @state(Field) counter = State<Field>();

  events = {
    "counter-updated": Field,
  };

  init() {
    super.init();
    this.counter.set(Field(0));
  }

  @method async increment() {
    const currentCounter = this.counter.getAndRequireEquals();
    const newCounter = currentCounter.add(1);

    this.counter.set(newCounter);
    this.emitEvent("counter-updated", newCounter);
  }
}
// end_basic_events

// start_structured_events
export class TransferEvent extends Struct({
  from: PublicKey,
  to: PublicKey,
  amount: UInt64,
}) {}

export class TokenContract extends SmartContract {
  @state(Field) totalSupply = State<Field>();

  events = {
    transfer: TransferEvent,
    mint: UInt64,
  };

  @method async transfer(from: PublicKey, to: PublicKey, amount: UInt64) {
    // Transfer logic here
    this.emitEvent("transfer", new TransferEvent({ from, to, amount }));
  }
}
// end_structured_events

// start_fetch_events
// Fetch events for a specific account
let accountKey: PublicKey; // Address of the account

const events = await fetchEvents({
  publicKey: accountKey.toBase58(),
  from: 0, // Optional: specify the range of blocks to fetch events from
  to: 100, // Optional: specify the range of blocks to fetch events to
});

console.log("Events:", events);
// end_fetch_events
