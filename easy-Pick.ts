namespace easyPick {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyPick1<T, K extends keyof T> = {
    [p in K]: T[p];
  };

  type MyPick<T, K> = {
    [Property in keyof T as Extract<Property, K>]: T[Property];
  };

  type TodoPreview = MyPick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
}
