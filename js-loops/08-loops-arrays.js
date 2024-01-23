/*
Assume you are given an array that stores numbers
Count how many positive numbers you have in the below array   
*/

//// COUNT ALL THE POSITIVE NUMBERS

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countPos = 0;

for(const number of numbers) {
    if (number > 0) countPos++
}
console.log(countPos); // 4

//// COUNT ALL THE EVEN NUMBERS 

let countEven = 0;
for(const number of numbers) {
    if (number % 2 === 0) countEven++;
}
console.log(countEven); // 7

//// COUNT NUMBERS DIVISIBLE BY 5

let countDivisible5 = 0;
for(const number of numbers) {
    if (number % 5 === 0) countDivisible5++
}
console.log(countDivisible5); // 7 

