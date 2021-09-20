const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: `Box(${x})`,
});

const nc = (str) =>
  Box(str)
    .map((x) => x.trim())
    .map((x) => parseInt(x))
    .map((x) => new Number(x + 1))
    .fold(String.fromCharCode);

console.log(nc('64  '));
