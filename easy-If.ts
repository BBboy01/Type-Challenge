namespace If {
  type If<B extends boolean, T, U> = B extends true ? T : U;

  type A = If<true, "a", "b">; // expected to be 'a'
  type B = If<false, "a", "b">; // expected to be 'b'
}
