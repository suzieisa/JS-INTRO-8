console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.NaN); // NaN


// Number functions: functions are specific components executed to perform task

console.log(1 + 2); // 3
console.log('1' + 2); // '12'

let a = 5, b = 10;

console.log(a + b); // 15
console.log(a.toString() + b); // '510'
console.log(a + b.toString()); // '510'

let i1 = 100.999, i2 = 10.499;

console.log(i1.toFixed()); // 101 - truncating all the decimal part and rounding
console.log(i2.toFixed()); // 10

console.log(i1.toFixed(2)); // 101.00
console.log(i2.toFixed(2)); // 10.50

console.log(i1.toPrecision(3)); // 101
console.log(i2.toPrecision(3)); // 10.5

// ***
console.log(i2.toFixed(5)); // 10.49900
console.log(i2.toPrecision(10)); // 10.49900000


// Converting other data types to numbers
let str = '10', number = 1, myB = true;

console.log(str + number); // '10' + 1 -> '101'

console.log(Number(str) + number); // 10 + 1 -> 11
console.log(parseInt(str) + number); // 10 + 1 -> 11
console.log(parseFloat(str) + number); // 10 + 1 -> 11

console.log(myB + number); // true + 1 -> 2
console.log(Number(myB) + number); // 1 + 1 -> 2

console.log(false + 1); // 1


// parseInt() vs parseFloat()
let str1 = '10.5', str2 = '10';

console.log(Number(str1) + 1); // 11.5
console.log(parseInt(str1) + 1); // 11
console.log(parseFloat(str1) + 1); // 11.5

console.log(Number(str2) + 1); // 11
console.log(Number.parseInt(str2) + 1); // 11
console.log(Number.parseFloat(str2) + 1); // 11


// If you want to check if a number is safe or not | integer or not
// 10 -> safe integer, integer (whole number)
// 9348679348567983467934 -> not a safe integer, integer

console.log(Number.isSafeInteger(10)); // true
console.log(Number.isInteger(10)); // true

console.log(Number.isSafeInteger(9348679348567983467934)); // false
console.log(Number.isInteger(9348679348567983467934)); // true