const { _ } = require('./seudoUnderscore');

const obj = { 0: true, 1: false, 2: true };

let arr = _.from(obj);

console.table(arr);
console.log(arr.length);


