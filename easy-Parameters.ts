namespace Parameters {
  declare function f1(arg: { a: number; b: string }): void;

  type MyParameters<T extends (...arg: any[]) => any> = T extends (
    ...arg: infer P
  ) => any
    ? P
    : never;

  type T0 = MyParameters<typeof f1>;
}
