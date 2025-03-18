---
title: Field
---

import CodeBlock from '@theme/CodeBlock';

## Field
Field elements are the basic unit of data in zero knowledge proof programming. Each field element can store a number up to almost 256 bits in size. You can think of a field element as a `uint256` in Solidity.

:::note

For the cryptography inclined, the exact max value that a field can store is: 0

:::

For example, in typical programming, you might use:

`const sum &equals; 1 + 3`.

In o1js, you write this as:

```ts file&equals;../../snippets/field/sum.ts start&equals;start_sum_1 end&equals;end_sum_1
```

This can be simplified as:

```ts file&equals;../../snippets/field/sum.ts start&equals;start_sum_2 end&equals;end_sum_2
```
