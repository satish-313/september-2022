const numberOfWeak = (properties: number[][]): number => {
  let noWeak = 0;
  let maxNow = 0;

  // for (let [att,def] of properties) {
  //   for (let [a,d] of properties) {
  //     if (att < a && def < d) noWeak += 1
  //   }
  // }

  properties.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));

  for (let [_,def] of properties) {
    if (def < maxNow) noWeak += 1
    maxNow = Math.max(maxNow,def)
  }

  return noWeak;
};

console.log(
  numberOfWeak([
    [1, 5],
    [10, 4],
    [4, 3],
  ])
);
console.log(
  numberOfWeak([
    [5, 5],
    [6, 3],
    [3, 6],
  ])
);
