---
slug: /
---

# Welcome

o1js is a TypeScript SDK for writing zero knowledge proofs.  o1Labs is committed to building
a better internet powered by programmable cryptography, and o1js the tool of choice for
developers looking to supercharge their applications with ZK.

o1js is a complete toolkit that runs in node or on the browser, and it can be integrated into
any existing TypeScript codebase.  It is also compatible with the Mina blockchain, and can be
used to write ZkApps for Mina, Protokit, and Zeko.

## Installation

Just like any Typescript project, o1js can be installed via your preferred package manager

```sh
npm i o1js
```

## Is it Really "Just Javascript"?

No!  The SDK itself is written in TypeScript, but the advanced cryptography being used by o1js
is actually accessed via a bindings layer to rust and ocaml code.  o1js can produce constraint
systems, often called "circuits", which are a system of gates and wires that represent a 
mathematical function.  The execution strategy of o1js is to dry-run the execution in 
JavaScript, and if there are no issues, call the constraint system for real.

TODO: Would be nice to have a graphic that visualizes the execution steps of provable code!

## Browser Compatibility

o1js relies on `SharedArrayBuffer` for performance, and uses WASM to run functions that access
the constraint systems.  Check the browser compatibility of those features here: 
[SharedArrayBuffer](https://caniuse.com/sharedarraybuffer), [WASM](https://caniuse.com/wasm)

