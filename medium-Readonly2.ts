namespace Readonly2 {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyReadonly2<T, K extends keyof T = keyof T> = T & {
    +readonly [key in K]: T[key];
  };

  const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  };

  // todo.title = "Hello"; // Error: cannot reassign a readonly property
  // todo.description = "barFoo"; // Error: cannot reassign a readonly property
  todo.completed = true; // OK
}
