namespace easyReadonly {
  interface Todo {
    title: string;
    description: string;
  }

  type MyReadonly1<T> = {
    +readonly [k in keyof T]: T[k];
  };

  type MyReadonly<T> = T extends Record<string, any>
    ? {
        +readonly [key in keyof T]: T[key];
      }
    : T extends Array<infer E>
    ? readonly E[]
    : never;

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };

  // todo.title = "Hello"; // Error: cannot reassign a readonly property
  // todo.description = "barFoo"; // Error: cannot reassign a readonly property

  const todo2: MyReadonly<string[]> = ["dio", "bar"];
  // todo2[0] = "1"; // Error: Index signature in type 'readonly string[]' only permits reading
}
