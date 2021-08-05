// text needs to be processed html, xml, programing languages

class ExpressionProcessor {
    constructor() {
        this.variables = {};
    }

    lex(expression) {
        for (let i = 0; i < expression.length; i++) {

        }
    }

    calculate(input) {

        //let result = 0;
        let result = [];

        for (let i = 0; i < input.length; ++i) {
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
                            return 0
                        } else {
                            result.push(this.variables[input[i]]);
                            break;
                        }
                    }
                    let buffer = [input[i]];
                    for (let j = i + 1; j < input.length; ++j) {
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
        let sum = 0;
        let previousValue = 0;
        let currentOperation = null;

        for (let token of result) {
            if (!Number.isNaN(parseInt(token))) {
                let currentValue = parseInt(token);
                if (currentOperation != null) {
                    if (currentOperation == '+') {
                        sum += currentValue;
                    }
                    if (currentOperation == '-') {
                        sum -= currentValue;
                    }
                } else { sum = currentValue }
            }
            else {
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
}

let ep = new ExpressionProcessor();
console.log(ep.calculate('1'));