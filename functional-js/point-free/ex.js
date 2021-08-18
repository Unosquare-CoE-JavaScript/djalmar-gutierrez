"use strict";

// function output(txt) {
// 	console.log(txt);
// }

// function printIf(shouldPrintIt) {
// 	return when(shouldPrintIt)(msg)
// }

function when(fn) {
	return function (condition) {
		return function (...args) {
			if (condition(...args)) return fn(...args)
		}
	}
}

function isShortEnough(str) {
	return str.length <= 5;
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

function not(fn) {
	return function (...args) {
		return !fn(...args);
	}
}

var output = console.log;
var isLongEnough = not(isShortEnough);
var printIf = when(output);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
