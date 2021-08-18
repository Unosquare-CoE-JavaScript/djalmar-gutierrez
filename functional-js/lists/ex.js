"use strict";

// Put your code here! :)

function one() {
    return 1;
}

function two() {
    return 2;
}

function numeric(value) {
    return function () {
        return value;
    }
}

function add(a, b) {
    return a + b;
}

function add2(a, b) {
    return add(a(), b())
}

function addnLoop(...nums) {

    for (let num of nums) {

    }
}

function addnRecursive(...nums) {
    if (nums.length == 2) {
        return add2(nums[0], nums[1])
    }
    return add2(nums[0], function () {
        return addnRecursive(...nums.slice(1))
    });
}

function addnFunctional(...nums) {
    return nums.reduce((acc, curr) => {
        return function () { return add2(acc, curr) }
    }, numeric(0))();
}

var n2 = numeric(2);
var n3 = numeric(3);

var numbers = [1, 3, 2, 3, 4, 4, 7, 7, 9, 12, 8];

var functionNumbers = numbers
    .reduce(function (acc, v) {
        if (!acc.includes(v)) {
            return [v, ...acc]; //shouldnt modify
        }
        return acc;
    }, [])
    .filter(function (v) { return v % 2 == 0 })
    .map(numeric);


console.log(add(one(), two()));
console.log(add2(one, two));

console.log(addnRecursive(n2, n3, n2))
console.log(addnFunctional(n2, n3, n2))

console.log(addnRecursive(...functionNumbers))