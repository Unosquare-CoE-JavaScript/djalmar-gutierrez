"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(random, numbers) {
	var copy = numbers;
	if (!copy.includes(random)) {
		copy.push(random)
		copy.sort((a, b) => a - b);
	}
	return copy;
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(),
		luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);
