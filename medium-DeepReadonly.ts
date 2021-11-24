namespace DeepReadonly {
  type X = {
    x: {
      a: 1;
      b: "hi";
    };
    y: "hey";
  };

  type Expected = {
    readonly x: {
      readonly a: 1;
      readonly b: "hi";
    };
    readonly y: "hey";
  };

  type DeepReadonly<T> = T extends {}
    ? {
        +readonly [key in keyof T]: DeepReadonly<T[key]>;
      }
    : never;

  let todo: DeepReadonly<X>; // should be same as `Expected`
}
