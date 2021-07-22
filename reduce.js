const { _ } = require('./seudoUnderscore');


console.log(_.reduce([1, 2, 4, 5], (acc, item, index) => {
    return item + acc;
}, 0));