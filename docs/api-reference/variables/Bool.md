```ts
const Bool: typeof Bool & (...args: [boolean | FieldVar | Bool]) => Bool;
```

Defined in: [lib/provable/wrapped.ts:70](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/wrapped.ts#L70)

A boolean value. You can create it like this:

## Examples

```
const b = Bool(true);
```

You can also combine multiple Bools with boolean operations:

```ts
const c = Bool(false);

const d = b.or(c).and(false).not();

d.assertTrue();
```

Bools are often created by methods on other types such as `Field.equals()`:

```ts
const b: Bool = Field(5).equals(6);
```
