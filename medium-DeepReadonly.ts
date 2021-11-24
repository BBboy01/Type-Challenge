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

  type DeepReadonly1<T> = T extends {}
    ? {
        +readonly [key in keyof T]: DeepReadonly<T[key]>;
      }
    : never;

  type DeepReadonly<T> = {
    +readonly [key in keyof T]: T[key] extends Record<string, unknown>
      ? DeepReadonly<T[key]>
      : T[key];
  };

  let todo: DeepReadonly<X>; // should be same as `Expected`
}
