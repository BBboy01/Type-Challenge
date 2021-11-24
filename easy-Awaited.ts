namespace Awaited {
  const Todo: Promise<string> = new Promise<string>((resolve, reject) => {
    resolve("dio");
  });

  type Awaited<T extends Promise<unknown>> = T extends Promise<infer U>
    ? U
    : never;

  const dio: Awaited<typeof Todo> = "dd";
}
