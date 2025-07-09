import { Field, Provable } from "o1js";

() => {
  // start_invalid_execution
  // INVALID - DO NOT COPY
  let n_heads = Field(0);
  for (let i = 0; i < 5; i++) {
    const x = Field.random();
    Provable.if(
      x.isEven(),
      (n_heads = n_heads.add(1)),
      (n_heads = n_heads.add(0))
    );
  }
  // n_heads is ALWAYS 5
  // end_invalid_execution
};

() => {
  // start_valid_execution
  // Out of the circuit (Field.random() cannot be used at prover time)
  const arr = [
    Field.random(),
    Field.random(),
    Field.random(),
    Field.random(),
    Field.random(),
  ];
  // In the circuit
  let n_heads = Field(0);
  for (let i = 0; i < 5; i++) {
    const x = arr[i];
    const flip = Provable.if(x.isEven(), Field(1), Field(0));
    n_heads = n_heads.add(flip);
  }
  // end_valid_execution
};

() => {
  // start_2_valid_execution_with_function
  function oneMoreThan(x: Field) {
    return x.add(1);
  }

  let n_heads = Field(0);
  for (let i = 0; i < 5; i++) {
    const x = Field.random();
    const new_n_heads = Provable.if(x.isEven(), oneMoreThan(n_heads), n_heads);
    n_heads = new_n_heads;
  }
  // end_2_valid_execution_with_function
};
