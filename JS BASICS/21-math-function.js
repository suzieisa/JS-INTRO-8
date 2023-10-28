let num1 = 5;
let num2 = 10;
let num3 = 7;
let num4 = -5;
let num5 = -8;

console.log(Math.PI); // 3.141592653589793

// Max number: num2 = 10
let max = Math.max(num1, num2, num3, num4, num5);
console.log(max); // 10

// Min number: num5 = -8
let min = Math.min(num1, num2, num3, num4, num5);
console.log(min); // -8

console.log(Math.max(3, 5, 10)); // 10
console.log(Math.min(3, 5, 10, 1)); // 1


// Math.abs() is used to find absolute value of a number
console.log(num5); // -8
console.log(Math.abs(num5)); // 8

//Find the difference between 2 numbers like 5 and 10
console.log(Math.abs(5 - 10)); // 5
console.log(Math.abs(10 * 2 - 100 / 2)); // 30 


// Rounding numbers
let a = 10.49, b = 10.50, c = 10.51, d = 10.99;

// Math.ceil()
console.log(Math.ceil(a)); // 11
console.log(Math.ceil(b)); // 11
console.log(Math.ceil(c)); // 11
console.log(Math.ceil(d)); // 11

// Math.floor()
console.log(Math.floor(a)); // 10
console.log(Math.floor(b)); // 10
console.log(Math.floor(c)); // 10
console.log(Math.floor(d)); // 10

// Math.round()
console.log(Math.round(a)); // 10
console.log(Math.round(b)); // 11
console.log(Math.round(c)); // 11
console.log(Math.round(d)); // 11

// Math.trunc()
console.log(Math.trunc(a)); // 10
console.log(Math.trunc(b)); // 10
console.log(Math.trunc(c)); // 10
console.log(Math.trunc(d)); // 10

console.log(Math.ceil(3.99999999)); // 4
console.log(Math.ceil(3.00000001)); // 4

console.log(Math.trunc(3.00000001)); // 3
console.log(Math.floor(3.00000001)); // 3

console.log(Math.round(3.49)); // 3
console.log(Math.round(3.50)); // 4


// Math.pow()
console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8

console.log(3 ** 4); // 81
console.log(Math.pow(3, 4)); // 81


// Math.sqrt()
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(81)); // 9
console.log(Math.sqrt(25)); // 5


// Math.random() - can be used to generate random numbers between 2 numbers
console.log(Math.random()); // 0 to 0.9999999999999999999999...


// Generate a random number between 7 and 9 -> 7, 8, 9
// Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (9 - 7 + 1)) + 7);


// Generate random number between 17 and 25 -> 17 18 19 20 21 22 23 24 25
console.log(Math.floor(Math.random() * (25 - 17 + 1)) + 17);