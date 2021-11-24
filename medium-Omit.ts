namespace Omit {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyExclude<T, U> = T extends U ? never : T;

  type MyOmit<T, U> = {
    [key in MyExclude<keyof T, U>]: T[key];
  };

  type TodoPreview = MyOmit<Todo, "description" | "title" | "dio">;

  const todo: TodoPreview = {
    completed: false,
  };
}
