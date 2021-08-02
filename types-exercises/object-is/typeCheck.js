// Create an Object.is polyfill

if (!Object.is || true) {
    Object.is = (value1, value2) => {
        
        if (typeof value1 === 'number' && typeof value2 === 'number') {
            if (value1.toString() === 'NaN' && value2.toString() === 'NaN') {
                return true;
            }
            if (value1 === 0 && value2 === 0) {
                let neg1 = isNegativeZero(value1);
                let neg2 = isNegativeZero(value2);
                if (neg1 || neg2) {
                    return neg1 == neg2;
                }
            }
        }
        isNegativeZero = x => {
            return 1/x === Number.NEGATIVE_INFINITY;
        }
        return value1 === value2;
    }
}
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);