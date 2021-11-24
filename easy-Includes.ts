namespace Includes {
  type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

  type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
}
