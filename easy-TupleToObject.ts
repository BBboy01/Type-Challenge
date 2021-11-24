namespace easyTupleToObject {
  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

  type TupleToObject<T extends readonly string[]> = {
    [key in T[number]]: key;
  };

  const result: TupleToObject<typeof tuple> = {
    tesla: "tesla",
    "model 3": "model 3",
    "model X": "model X",
    "model Y": "model Y",
  }; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
}
