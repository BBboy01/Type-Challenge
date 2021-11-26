namespace Tuple2Union {
  type Arr = ["1", "2", "3"];

  type TupleToUnion<T extends unknown[]> = T[number];

  let a: TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
}
