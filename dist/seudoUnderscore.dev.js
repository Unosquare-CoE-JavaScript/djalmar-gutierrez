"use strict";

var _ = {};

_.each = function (array, callback) {
  for (key in array) {
    callback(array[key], key, array);
  }
};

_.map = function (array, callback) {
  var response = [];

  _.each(array, function (value, key, array) {
    response.push(callback(value, key, array));
  });

  return response;
};

_.filer = function (array, callback) {
  var response = [];

  _.each(array, function (value, key, array) {
    callback(value, key, array) ? response.push(value) : null;
  });

  return response;
};

_.from = function (obj) {
  var response = [];

  _.each(obj, function (value, key, array) {
    response[key] = value;
  });

  return response;
};

_.reduce = function (array, callback, acumulator) {
  _.each(array, function (value, key, array) {
    acumulator = callback(acumulator, value, key);
  });

  return acumulator;
};

module.exports = {
  _: _
};