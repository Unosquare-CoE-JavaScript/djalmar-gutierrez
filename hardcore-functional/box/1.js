const nextCharForNumberString_ = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: `Box(${x})`,
});

const nextCharForNumberString = (str) =>
  Box(str)
    .map((x) => x.trim())
    .map((x) => parseInt(x))
    .map((x) => new Number(x + 1))
    .fold(String.fromCharCode);

const result = nextCharForNumberString("  64 ");

console.log(result);
