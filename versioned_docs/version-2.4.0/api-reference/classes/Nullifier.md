Defined in: [lib/provable/crypto/nullifier.ts:20](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L20)

Nullifiers are used as a public commitment to a specific anonymous account,
to forbid actions like double spending, or allow a consistent identity between anonymous actions.

RFC: https://github.com/o1-labs/o1js/issues/756

Paper: https://eprint.iacr.org/2022/1255.pdf

## Extends

- \{
  `private`: \{
     `c`: [`Field`](Field.md);
     `g_r`: [`Group`](Group.md);
     `h_m_pk_r`: [`Group`](Group.md);
    \};
  `public`: \{
     `nullifier`: [`Group`](Group.md);
     `s`: [`Scalar`](Scalar.md);
    \};
  `publicKey`: [`Group`](Group.md);
 \}

## Constructors

### new Nullifier()

```ts
new Nullifier(value: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }): Nullifier
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Parameters

##### value

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

[`Nullifier`](Nullifier.md)

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).constructor
```

## Properties

### private

```ts
private: {
  c: Field;
  g_r: Group;
  h_m_pk_r: Group;
};
```

Defined in: [lib/provable/crypto/nullifier.ts:26](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L26)

#### c

```ts
c: Field = Field;
```

#### g\_r

```ts
g_r: Group = Group;
```

#### h\_m\_pk\_r

```ts
h_m_pk_r: Group = Group;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).private
```

***

### public

```ts
public: {
  nullifier: Group;
  s: Scalar;
};
```

Defined in: [lib/provable/crypto/nullifier.ts:22](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L22)

#### nullifier

```ts
nullifier: Group = Group;
```

#### s

```ts
s: Scalar = Scalar;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).public
```

***

### publicKey

```ts
publicKey: Group = Group;
```

Defined in: [lib/provable/crypto/nullifier.ts:21](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L21)

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).publicKey
```

***

### \_isStruct

```ts
static _isStruct: true;
```

Defined in: [lib/provable/types/struct.ts:133](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L133)

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
})._isStruct
```

***

### check()

```ts
static check: (value: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => void;
```

Defined in: [lib/provable/types/provable-intf.ts:76](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L76)

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

the element of type `T` to put assertions on.

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

`void`

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).check
```

***

### empty()

```ts
static empty: () => {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
};
```

Defined in: [lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L143)

#### Returns

```ts
{
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
}
```

##### private

```ts
private: {
  c: Field;
  g_r: Group;
  h_m_pk_r: Group;
};
```

###### private.c

```ts
c: Field = Field;
```

###### private.g\_r

```ts
g_r: Group = Group;
```

###### private.h\_m\_pk\_r

```ts
h_m_pk_r: Group = Group;
```

##### public

```ts
public: {
  nullifier: Group;
  s: Scalar;
};
```

###### public.nullifier

```ts
nullifier: Group = Group;
```

###### public.s

```ts
s: Scalar = Scalar;
```

##### publicKey

```ts
publicKey: Group = Group;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).empty
```

***

### fromFields()

```ts
static fromFields: (fields: Field[]) => {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
};
```

Defined in: [lib/provable/types/provable-intf.ts:115](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L115)

#### Parameters

##### fields

[`Field`](Field.md)[]

#### Returns

```ts
{
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
}
```

##### private

```ts
private: {
  c: Field;
  g_r: Group;
  h_m_pk_r: Group;
};
```

###### private.c

```ts
c: Field = Field;
```

###### private.g\_r

```ts
g_r: Group = Group;
```

###### private.h\_m\_pk\_r

```ts
h_m_pk_r: Group = Group;
```

##### public

```ts
public: {
  nullifier: Group;
  s: Scalar;
};
```

###### public.nullifier

```ts
nullifier: Group = Group;
```

###### public.s

```ts
s: Scalar = Scalar;
```

##### publicKey

```ts
publicKey: Group = Group;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).fromFields
```

***

### fromValue

```ts
static fromValue: (x: 
  | {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }
  | {
  private: {
     c: bigint;
     g_r: {
        x: bigint;
        y: bigint;
       };
     h_m_pk_r: {
        x: bigint;
        y: bigint;
       };
    };
  public: {
     nullifier: {
        x: bigint;
        y: bigint;
       };
     s: bigint;
    };
  publicKey: {
     x: bigint;
     y: bigint;
    };
 }) => {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 } & (value: {
  private: {
     c: string | number | bigint | Field;
     g_r:   | Group
        | {
        x: number | bigint | Field;
        y: number | bigint | Field;
       };
     h_m_pk_r:   | Group
        | {
        x: number | bigint | Field;
        y: number | bigint | Field;
       };
    };
  public: {
     nullifier:   | Group
        | {
        x: number | bigint | Field;
        y: number | bigint | Field;
       };
     s: bigint | Scalar;
    };
  publicKey:   | Group
     | {
     x: number | bigint | Field;
     y: number | bigint | Field;
    };
 }) => {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
};
```

Defined in: [lib/provable/types/provable-intf.ts:86](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L86)

Convert provable type from a normal JS type.

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).fromValue
```

***

### toAuxiliary()

```ts
static toAuxiliary: (value?: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => any[];
```

Defined in: [lib/provable/types/provable-intf.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L47)

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).toAuxiliary
```

***

### toCanonical()?

```ts
static optional toCanonical: (x: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
};
```

Defined in: [lib/provable/types/provable-intf.ts:104](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L104)

Optional method which transforms a provable type into its canonical representation.

This is needed for types that have multiple representations of the same underlying value,
and might even not have perfect completeness for some of those representations.

An example is the `ForeignField` class, which allows non-native field elements to exist in unreduced form.
The unreduced form is not perfectly complete, for example, addition of two unreduced field elements can cause a prover error.

Specific protocols need to be able to protect themselves against incomplete operations at all costs.
For example, when using actions and reducer, the reducer must be able to produce a proof regardless of the input action.
`toCanonical()` converts any input into a safe form and enables us to handle cases like this generically.

Note: For most types, this method is the identity function.
The identity function will also be used when the `toCanonical()` is not present on a type.

#### Parameters

##### x

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

```ts
{
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
}
```

##### private

```ts
private: {
  c: Field;
  g_r: Group;
  h_m_pk_r: Group;
};
```

###### private.c

```ts
c: Field = Field;
```

###### private.g\_r

```ts
g_r: Group = Group;
```

###### private.h\_m\_pk\_r

```ts
h_m_pk_r: Group = Group;
```

##### public

```ts
public: {
  nullifier: Group;
  s: Scalar;
};
```

###### public.nullifier

```ts
nullifier: Group = Group;
```

###### public.s

```ts
s: Scalar = Scalar;
```

##### publicKey

```ts
publicKey: Group = Group;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).toCanonical
```

***

### toFields()

```ts
static toFields: (value: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => Field[];
```

Defined in: [lib/provable/types/provable-intf.ts:36](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L36)

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](Field.md) elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the [Field](Field.md) array from.

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).toFields
```

***

### toInput()

```ts
static toInput: (x: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => {
  fields: Field[];
  packed: [Field, number][];
};
```

Defined in: [lib/provable/types/struct.ts:137](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L137)

#### Parameters

##### x

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

```ts
{
  fields: Field[];
  packed: [Field, number][];
}
```

##### fields?

```ts
optional fields: Field[];
```

##### packed?

```ts
optional packed: [Field, number][];
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).toInput
```

***

### toJSON()

```ts
static toJSON: (x: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => {
  private: {
     c: string;
     g_r: {
        x: string;
        y: string;
       };
     h_m_pk_r: {
        x: string;
        y: string;
       };
    };
  public: {
     nullifier: {
        x: string;
        y: string;
       };
     s: string;
    };
  publicKey: {
     x: string;
     y: string;
    };
};
```

Defined in: [lib/provable/types/struct.ts:141](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/struct.ts#L141)

#### Parameters

##### x

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

```ts
{
  private: {
     c: string;
     g_r: {
        x: string;
        y: string;
       };
     h_m_pk_r: {
        x: string;
        y: string;
       };
    };
  public: {
     nullifier: {
        x: string;
        y: string;
       };
     s: string;
    };
  publicKey: {
     x: string;
     y: string;
    };
}
```

##### private

```ts
private: {
  c: string;
  g_r: {
     x: string;
     y: string;
    };
  h_m_pk_r: {
     x: string;
     y: string;
    };
};
```

###### private.c

```ts
c: string = Field;
```

###### private.g\_r

```ts
g_r: {
  x: string;
  y: string;
 } = Group;
```

###### private.g\_r.x

```ts
x: string;
```

###### private.g\_r.y

```ts
y: string;
```

###### private.h\_m\_pk\_r

```ts
h_m_pk_r: {
  x: string;
  y: string;
 } = Group;
```

###### private.h\_m\_pk\_r.x

```ts
x: string;
```

###### private.h\_m\_pk\_r.y

```ts
y: string;
```

##### public

```ts
public: {
  nullifier: {
     x: string;
     y: string;
    };
  s: string;
};
```

###### public.nullifier

```ts
nullifier: {
  x: string;
  y: string;
 } = Group;
```

###### public.nullifier.x

```ts
x: string;
```

###### public.nullifier.y

```ts
y: string;
```

###### public.s

```ts
s: string = Scalar;
```

##### publicKey

```ts
publicKey: {
  x: string;
  y: string;
 } = Group;
```

###### publicKey.x

```ts
x: string;
```

###### publicKey.y

```ts
y: string;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).toJSON
```

***

### toValue()

```ts
static toValue: (x: {
  private: {
     c: Field;
     g_r: Group;
     h_m_pk_r: Group;
    };
  public: {
     nullifier: Group;
     s: Scalar;
    };
  publicKey: Group;
 }) => {
  private: {
     c: bigint;
     g_r: {
        x: bigint;
        y: bigint;
       };
     h_m_pk_r: {
        x: bigint;
        y: bigint;
       };
    };
  public: {
     nullifier: {
        x: bigint;
        y: bigint;
       };
     s: bigint;
    };
  publicKey: {
     x: bigint;
     y: bigint;
    };
};
```

Defined in: [lib/provable/types/provable-intf.ts:81](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L81)

Convert provable type to a normal JS type.

#### Parameters

##### x

###### private

\{
  `c`: [`Field`](Field.md);
  `g_r`: [`Group`](Group.md);
  `h_m_pk_r`: [`Group`](Group.md);
 \} = `...`

###### private.c

[`Field`](Field.md) = `Field`

###### private.g_r

[`Group`](Group.md) = `Group`

###### private.h_m_pk_r

[`Group`](Group.md) = `Group`

###### public

\{
  `nullifier`: [`Group`](Group.md);
  `s`: [`Scalar`](Scalar.md);
 \} = `...`

###### public.nullifier

[`Group`](Group.md) = `Group`

###### public.s

[`Scalar`](Scalar.md) = `Scalar`

###### publicKey

[`Group`](Group.md) = `Group`

#### Returns

```ts
{
  private: {
     c: bigint;
     g_r: {
        x: bigint;
        y: bigint;
       };
     h_m_pk_r: {
        x: bigint;
        y: bigint;
       };
    };
  public: {
     nullifier: {
        x: bigint;
        y: bigint;
       };
     s: bigint;
    };
  publicKey: {
     x: bigint;
     y: bigint;
    };
}
```

##### private

```ts
private: {
  c: bigint;
  g_r: {
     x: bigint;
     y: bigint;
    };
  h_m_pk_r: {
     x: bigint;
     y: bigint;
    };
};
```

###### private.c

```ts
c: bigint = Field;
```

###### private.g\_r

```ts
g_r: {
  x: bigint;
  y: bigint;
 } = Group;
```

###### private.g\_r.x

```ts
x: bigint;
```

###### private.g\_r.y

```ts
y: bigint;
```

###### private.h\_m\_pk\_r

```ts
h_m_pk_r: {
  x: bigint;
  y: bigint;
 } = Group;
```

###### private.h\_m\_pk\_r.x

```ts
x: bigint;
```

###### private.h\_m\_pk\_r.y

```ts
y: bigint;
```

##### public

```ts
public: {
  nullifier: {
     x: bigint;
     y: bigint;
    };
  s: bigint;
};
```

###### public.nullifier

```ts
nullifier: {
  x: bigint;
  y: bigint;
 } = Group;
```

###### public.nullifier.x

```ts
x: bigint;
```

###### public.nullifier.y

```ts
y: bigint;
```

###### public.s

```ts
s: bigint = Scalar;
```

##### publicKey

```ts
publicKey: {
  x: bigint;
  y: bigint;
 } = Group;
```

###### publicKey.x

```ts
x: bigint;
```

###### publicKey.y

```ts
y: bigint;
```

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).toValue
```

## Methods

### assertUnused()

```ts
assertUnused(witness: MerkleMapWitness, root: Field): void
```

Defined in: [lib/provable/crypto/nullifier.ts:128](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L128)

Checks if the Nullifier has been used before.

#### Parameters

##### witness

[`MerkleMapWitness`](MerkleMapWitness.md)

##### root

[`Field`](Field.md)

#### Returns

`void`

#### Example

```ts
// asserts that the nullifier has not been used before, throws an error otherwise
nullifier.assertUnused();
```

***

### getPublicKey()

```ts
getPublicKey(): PublicKey
```

Defined in: [lib/provable/crypto/nullifier.ts:157](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L157)

Returns the [PublicKey](PublicKey.md) that is associated with this Nullifier.

#### Returns

[`PublicKey`](PublicKey.md)

#### Example

```ts
let pk = nullifier.getPublicKey();
```

***

### isUnused()

```ts
isUnused(witness: MerkleMapWitness, root: Field): Bool
```

Defined in: [lib/provable/crypto/nullifier.ts:108](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L108)

Returns the state of the Nullifier.

#### Parameters

##### witness

[`MerkleMapWitness`](MerkleMapWitness.md)

##### root

[`Field`](Field.md)

#### Returns

[`Bool`](Bool.md)

#### Example

```ts
// returns a Bool based on whether or not the nullifier has been used before
let isUnused = nullifier.isUnused();
```

***

### key()

```ts
key(): Field
```

Defined in: [lib/provable/crypto/nullifier.ts:95](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L95)

The key of the nullifier, which belongs to a unique message and a public key.
Used as an index in Merkle trees.

#### Returns

[`Field`](Field.md)

#### Example

```ts
// returns the key of the nullifier which can be used as index in a Merkle tree/map
let key = nullifier.key();
```

***

### setUsed()

```ts
setUsed(witness: MerkleMapWitness): Field
```

Defined in: [lib/provable/crypto/nullifier.ts:143](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L143)

Sets the Nullifier, returns the new Merkle root.

#### Parameters

##### witness

[`MerkleMapWitness`](MerkleMapWitness.md)

#### Returns

[`Field`](Field.md)

#### Example

```ts
// calculates the new root of the Merkle tree in which the nullifier is set to used
let newRoot = nullifier.setUsed(witness);
```

***

### verify()

```ts
verify(message: Field[]): void
```

Defined in: [lib/provable/crypto/nullifier.ts:47](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L47)

Verifies that the Nullifier belongs to a specific message. Throws an error if the Nullifier is incorrect.

#### Parameters

##### message

[`Field`](Field.md)[]

#### Returns

`void`

#### Example

```ts
let nullifierMessage = [voteId, ...otherData];
// throws an error if the nullifier is invalid or doesn't belong to this specific message
nullifier.verify(nullifierMessage);
```

***

### createTestNullifier()

```ts
static createTestNullifier(message: Field[], sk: PrivateKey): Nullifier
```

Defined in: [lib/provable/crypto/nullifier.ts:170](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L170)

_Note_: This is *not* the recommended way to create a Nullifier in production. Please use mina-signer to create Nullifiers.
Also, this function cannot be run within provable code to avoid unintended creations of Nullifiers - a Nullifier should never be created inside proveable code (e.g. a smart contract) directly, but rather created inside the users wallet (or other secure enclaves, so the private key never leaves that enclave).

PLUME: An ECDSA Nullifier Scheme for Unique
Pseudonymity within Zero Knowledge Proofs
https://eprint.iacr.org/2022/1255.pdf chapter 3 page 14

#### Parameters

##### message

[`Field`](Field.md)[]

##### sk

[`PrivateKey`](PrivateKey.md)

#### Returns

`Nullifier`

***

### fromJSON()

```ts
static fromJSON(json: Nullifier): Nullifier
```

Defined in: [lib/provable/crypto/nullifier.ts:32](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/crypto/nullifier.ts#L32)

#### Parameters

##### json

`Nullifier`

#### Returns

[`Nullifier`](Nullifier.md)

#### Overrides

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).fromJSON
```

***

### sizeInFields()

```ts
static sizeInFields(): number
```

Defined in: [lib/provable/types/provable-intf.ts:66](https://github.com/o1-labs/o1js/blob/89b7d1522af805d6d4c45a96d7a9cbc29a457aec/src/lib/provable/types/provable-intf.ts#L66)

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

```ts
Struct({
  publicKey: Group,
  public: {
    nullifier: Group,
    s: Scalar,
  },
  private: {
    c: Field,
    g_r: Group,
    h_m_pk_r: Group,
  },
}).sizeInFields
```
