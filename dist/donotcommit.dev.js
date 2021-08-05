"use strict";

var makeTimer = function makeTimer() {
  var elapsed = 0;

  var stopWatch = function stopWatch() {
    return elapsed;
  };

  var increase = function increase() {
    return elapsed++;
  };

  setInterval(increase, 1000);
  return stopWatch;
};

var timer = makeTimer();