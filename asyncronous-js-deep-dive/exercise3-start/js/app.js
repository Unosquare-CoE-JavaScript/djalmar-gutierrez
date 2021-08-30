"use strict";

//First, add the setTimeout code as shown in the intro to this exercise. Then modify the code by creating a promise so that the code can run asynchronously.

const massiveProcess = function (num) {
  let result = 0;
  for (let i = num ** 7; i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  return result;
};

const massiveProcessP = (num) => {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(num)) return reject("Number needed");
    setTimeout(() => {
      let m = massiveProcess(num);
      resolve(m);
    }, 0);
  });
};

let amt = massiveProcessP(100)
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

//console.log("The number is: " + amt);

//More processing later on
console.log(5 * 5 + 100);
