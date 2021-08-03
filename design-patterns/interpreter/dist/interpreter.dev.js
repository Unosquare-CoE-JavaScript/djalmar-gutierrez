"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// text needs to be processed html, xml, programing languages
var ExpressionProcessor =
/*#__PURE__*/
function () {
  function ExpressionProcessor() {
    _classCallCheck(this, ExpressionProcessor);

    this.variables = {};
  }

  _createClass(ExpressionProcessor, [{
    key: "lex",
    value: function lex(expression) {
      for (var i = 0; i < expression.length; i++) {}
    }
  }, {
    key: "calculate",
    value: function calculate(input) {
      //let result = 0;
      var result = [];

      for (var i = 0; i < input.length; ++i) {
        switch (input[i]) {
          case '+':
            result.push('+');
            break;

          case '-':
            result.push('-');
            break;

          default:
            if (input[i].match(/[a-z]/i)) {
              if (!this.variables[input[i]]) {
                return 0;
              } else {
                result.push(this.variables[input[i]]);
                break;
              }
            }

            var buffer = [input[i]];

            for (var j = i + 1; j < input.length; ++j) {
              if ('0123456789'.includes(input[j])) {
                buffer.push(input[j]);
                ++i;
              } else {
                result.push(buffer.join(''));
                break;
              }
            }

            if (buffer.length > 0 && i == input.length - 1) {
              result.push(buffer.join(''));
            }

            break;
        }
      }

      console.log(result);
      var sum = 0;
      var previousValue = 0;
      var currentOperation = null;

      for (var _i = 0, _result = result; _i < _result.length; _i++) {
        var token = _result[_i];

        if (!Number.isNaN(parseInt(token))) {
          var currentValue = parseInt(token);

          if (currentOperation != null) {
            if (currentOperation == '+') {
              sum += currentValue;
            }

            if (currentOperation == '-') {
              sum -= currentValue;
            }
          } else {
            sum = currentValue;
          }
        } else {
          if (token == '+') {
            currentOperation = '+';
          }

          if (token == '-') {
            currentOperation = '-';
          }
        }
      }

      return sum;
    }
  }]);

  return ExpressionProcessor;
}();

var ep = new ExpressionProcessor();
console.log(ep.calculate('1'));