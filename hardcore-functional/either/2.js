const Right = (x) => ({
  map: (f) => Right(f(x)),
  chain: (f) => f(x),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left = (x) => ({
  map: (f) => Left(x),
  chain: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left(null));

const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

//=====================================

const fs = require('fs');
const readFileSync = (path) => tryCatch(() => fs.readFileSync(path));

const parseJSON = (json) => tryCatch(() => JSON.parse(json));

const getPort = () =>
  readFileSync('config.json')
    .chain((content) => parseJSON(content))
    .map((config) => config.port)
    .fold(
      () => 8080,
      (x) => x
    );

const result = getPort();

console.log(result);
