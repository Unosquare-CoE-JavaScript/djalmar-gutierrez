"use strict";

var increment = function increment(n) {
  return n + 1;
};

var square = function square(n) {
  return n * n;
};

var mathSolver = function mathSolver(n, func) {
  return func(n);
};

console.log(mathSolver(5, square));
console.log(mathSolver(4, increment));