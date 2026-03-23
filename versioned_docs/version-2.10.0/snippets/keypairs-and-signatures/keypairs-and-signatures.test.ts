import { describe, expect, it } from "vitest";

import {
  privateKey,
  publicKey,
  message,
  signature,
  messageEth,
  publicKeyEth,
  msgBytes,
  signatureEth,
} from "./keypairs-and-signatures";

describe("native signature", () => {
  it("public key should be derived from private key", () => {
    expect(privateKey.toPublicKey().toBase58()).toBe(publicKey.toBase58());
  });
  it("signature should be valid", () => {
    expect(signature.verify(publicKey, message).toBoolean()).toBe(true);
  });
});

describe("ethereum signature", () => {
  it("eth signature should be valid", () => {
    expect(signatureEth.verifyEthers(msgBytes, publicKeyEth).toBoolean()).toBe(
      true
    );
  });
});
