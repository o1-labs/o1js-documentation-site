import { Bool, PrivateKey, PublicKey, Struct } from "o1js";

// start_voting_struct
class Vote extends Struct({
  hasVoted: Bool,
  inFavor: Bool,
}) {
  static default() {
    return new Vote({ hasVoted: Bool(false), inFavor: Bool(false) });
  }
}

class Voter extends Struct({
  publicKey: PublicKey,
  vote: Vote,
}) {}

// Example usage
const voter = new Voter({
  publicKey: PrivateKey.random().toPublicKey(),
  vote: Vote.default(),
});

// set vote
voter.vote.hasVoted = Bool(true);
voter.vote.inFavor = Bool(true);
// end_voting_struct

export { Vote, Voter };
