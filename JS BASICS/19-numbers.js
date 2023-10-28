let num1 = 5, num2 = 10.5;

console.log(num1); // 5
console.log(num2); // 10.5

console.log(num1 + num2); // 15.5
console.log(num1 * num2); // 52.5
console.log(num1 - num2); // -5.5

// + operator is used both for addition and concatenation
let a = 2, b = 5, c = "10", d = "20";

console.log(a + b); // 7
console.log(c + d); // '1020'
console.log(a + d); // '220'

console.log(d / b); // 4
console.log(c * a); // 20

console.log(c - b); // 5
console.log('The result is = ' + c - b); // NaN - Not a Number

// NaN - Not a Number
console.log(NaN); // NaN
console.log(typeof NaN); // number

console.log("" + 3); // '3'
console.log(null + 5); // 5
console.log(false + 5); // 5

console.log(0 / 0); // NaN
console.log(0 / 5); // 0
console.log(0 / 10); // 0

console.log(10 / 0); // Infinity

// INFINITY VS -INFINITY
console.log(Infinity);
console.log(-Infinity);

console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Infinity * Infinity); // Infinity
console.log(Infinity % Infinity); // NaN
console.log(Infinity ** Infinity); // Infinity

// isNaN() function - this is going to help us check if a variable is number or not
var v1 = 'Hello', v2 = '25', v3 = 3, v4 = 5.5;

console.log(isNaN(v1)); // true
console.log(isNaN(v2)); // false
console.log(isNaN(v3)); // false
console.log(isNaN(v4)); // false