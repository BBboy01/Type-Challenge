namespace Exclude {
  interface Todo {
    title: string;
    name: string;
    age: number;
  }

  type MyExclude<T, U> = T extends U ? never : T;

  const todo: MyExclude<keyof Todo, "name"> = "title";
}
