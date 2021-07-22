var increment = n => n + 1;
var square = n => n * n;

var mathSolver = (n, func) => func(n);

console.log(mathSolver(5, square));
console.log(mathSolver(4, increment));
