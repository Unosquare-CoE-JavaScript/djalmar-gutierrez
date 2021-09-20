const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: `Box(${x})`,
});

const first = (xs) => xs[0];

const halfTheFirstLargeNumber_ = (xs) => {
  const found = xs.filter((x) => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

const halfTheFirstLargeNumber = (xs) =>
  Box(xs)
    .map((x) => x.filter((x) => x >= 20))
    .map(first)
    .map((x) => x / 2)
    .fold((x) => `The answer is ${x}`);

const res = halfTheFirstLargeNumber([1, 4, 50]);
console.log(res);
