namespace Concat {
  type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

  type Result = Concat<[1], [2]>; // expected to be [1, 2]
}
