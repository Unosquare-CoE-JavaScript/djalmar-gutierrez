var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/////////////////////////////////////////
/////////// TESTING UTILITIES ///////////
//////// no need to modify these ////////
/////////////////////////////////////////
// @errors: 7006 7006 7006 7006 7006
console.clear();
console.log('asdddd');
function assertEquals(found, expected, message) {
    if (found !== expected)
        throw new Error("\u274C Assertion failed: " + message + "\nexpected: " + expected + "\nfound: " + found);
    console.log("\u2705 OK " + message);
}
function assertOk(value, message) {
    if (!value)
        throw new Error("\u274C Assertion failed: " + message);
    console.log("\u2705 OK " + message);
}
/// ---cut---
///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
var fruits = {
    apple: { color: 'red', mass: 100 },
    grape: { color: 'red', mass: 5 },
    banana: { color: 'yellow', mass: 183 },
    lemon: { color: 'yellow', mass: 80 },
    pear: { color: 'green', mass: 178 },
    orange: { color: 'orange', mass: 262 },
    raspberry: { color: 'red', mass: 4 },
    cherry: { color: 'red', mass: 5 },
};
// Array.prototype.map, but for Dict
function mapDict(dict, fn) {
    var mappedDict = {};
    for (var key in dict) {
        mappedDict[key] = fn(dict[key], key);
    }
    return mappedDict;
}
// Array.prototype.filter, but for Dict
function filterDict(dict, fn) {
    var filteredDict = {};
    for (var key in dict) {
        if (fn(dict[key], key)) {
            filteredDict[key] = dict[key];
        }
    }
    return filteredDict;
}
// Array.prototype.reduce, but for Dict
function reduceDict(dict, fn, initialValue) {
    var acc;
    acc = initialValue;
    for (var key in dict) {
        acc = fn(acc, dict[key], key);
    }
    return acc;
}
/////////////////////////////////////////
///////////// TEST SUITE ///////////////
//////// no need to modify these ////////
/////////////////////////////////////////
// MAP
var fruitsWithKgMass = mapDict(fruits, function (fruit, name) { return (__assign(__assign({}, fruit), { kg: 0.001 * fruit.mass, name: name })); });
var lemonName = fruitsWithKgMass.lemon.name;
// @ts-ignore-error
var failLemonName = fruitsWithKgMass.lemon.name;
assertOk(fruitsWithKgMass, '[MAP] mapDict returns something truthy');
assertEquals(fruitsWithKgMass.cherry.name, 'cherry', '[MAP] .cherry has a "name" property with value "cherry"');
assertEquals(fruitsWithKgMass.cherry.kg, 0.005, '[MAP] .cherry has a "kg" property with value 0.005');
assertEquals(fruitsWithKgMass.cherry.mass, 5, '[MAP] .cherry has a "mass" property with value 5');
assertEquals(Object.keys(fruitsWithKgMass).length, 8, '[MAP] fruitsWithKgMass should have 8 keys');
// FILTER
// only red fruits
var redFruits = filterDict(fruits, function (fruit) { return fruit.color === 'red'; });
assertOk(redFruits, '[FILTER] filterDict returns something truthy');
assertEquals(Object.keys(redFruits).length, 4, '[FILTER] 4 fruits that satisfy the filter');
assertEquals(Object.keys(redFruits).sort().join(', '), 'apple, cherry, grape, raspberry', '[FILTER] Keys are "apple, cherry, grape, raspberry"');
// REDUCE
// If we had one of each fruit, how much would the total mass be?
var oneOfEachFruitMass = reduceDict(fruits, function (currentMass, fruit) { return currentMass + fruit.mass; }, 0);
assertOk(redFruits, '[REDUCE] reduceDict returns something truthy');
assertEquals(typeof oneOfEachFruitMass, 'number', '[REDUCE] reduceDict returns a number');
assertEquals(oneOfEachFruitMass, 817, '[REDUCE] 817g mass if we had one of each fruit');
