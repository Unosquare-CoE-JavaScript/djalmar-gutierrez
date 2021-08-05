"use strict";

var _require = require('./seudoUnderscore'),
    _ = _require._;

console.log(_.reduce([1, 2, 4, 5], function (acc, item, index) {
  return item + acc;
}, 0));