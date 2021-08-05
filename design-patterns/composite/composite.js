class SingleValue {
    constructor(value) {
        this.value = value;
    }
    reduce() {
        return this.value
    }
}

class ManyValues extends Array {
    constructor() {
        super();
    }
}

function sum(values) {
    let sum = 0;
    for (let value of values)
        sum += value.reduce((a, b) => a += b, 0);
    return sum;
}

let single = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);

console.log(sum(single, otherValues))
