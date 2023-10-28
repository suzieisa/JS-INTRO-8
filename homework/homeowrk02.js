// TASK 1 Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.


let str1= Number('5');
let str2 = Number('2');
// also can do parseInt('5')

console.log(`The sum of 5 and 2 is = ${str1 + str2}`);
console.log(`The product of 5 and 2 ${str1 * str2}`);
console.log(`The division of 5 and 2 is = ${str1 / str2}`);
console.log(`The exponentiation of 5 and 2 is = ${str1 ** str2}`);
console.log(`The remainder of 5 and 2 is = ${str1 % str2}`);

// TASK 2 Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = parseInt('200'), s2 = parseInt('-50');

let greatest = Math.max(s1,s2);
console.log(`The greatest value is = ${greatest}`);

let smallest = Math.min(s1,s2);
console.log(`The smallest value is = ${smallest}`);

console.log(`The average is = ${(s1 + s2) / 2}`);

let difference = s1 - s2;
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`)

// TASK 3 Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the absolute difference of these numbers.
let rand1 = Math.ceil(Math.random() * 50);
let rand2 = Math.ceil(Math.random() * 50);

console.log(rand1);
console.log(rand2);
console.log(`The absoulte difference = ${Math.abs(rand1 - rand2)}`);

// TASK 4 Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the max and min of these numbers.

let randomNumber1= Math.ceil(Math.random() * 50);
let randomNumber2 = Math.ceil(Math.random() * 50);
let randomNumber3 = Math.ceil(Math.random() * 50);
let randomNumber4 = Math.ceil(Math.random() * 50);
let randomNumber5 = Math.ceil(Math.random() * 50);

console.log(`${randomNumber1},${randomNumber2},${randomNumber3},${randomNumber4},${randomNumber5}`);
console.log(`The max value = ${Math.max(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5)}`);
console.log(`The min value = ${Math.min(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5)}`);

// TASK 5 Write a program that generates 3 random numbers between 50 and 100 both included. First print the numbers. Then, find the sum of these numbers

let Number1 = Math.floor(Math.random() * (100- 50 + 1)) + 50;
let Number2 = Math.floor(Math.random() * (100- 50 + 1)) + 50;
let Number3 = Math.floor(Math.random() * (100- 50 + 1)) + 50;

console.log('The number 1 = ' + Number1); // 55
console.log('The number 2 = ' + Number2); // 67
console.log('The number 3 = ' + Number3); // 90


console.log('The sum of numbers = ' + (Number1 + Number2 + Number3));

// TASK 6 Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25. Print true if all numbers are greater than 25. Print false if any of the number is less than or equals 25.

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 100 + 1);
let z = Math.floor(Math.random() * 100 + 1);

console.log(`${x}, ${y}, ${z}`);
 
console.log(x > 25); // false
console.log(y > 25); // false
console.log(z > 25); // true

console.log(x > 25, y > 25, z > 25);

// TASK 7 Requirement:
/*Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them
*/

let name = 'David';
console.log('The length of the name is = ' + name.length);
console.log(`The first character of the name is ${name[0]}`);
console.log(`The last character in the name is  ${name[name.length-1]}`);
console.log('The first three characters in the name are ' + name.slice(0,3));
console.log('The last three characters in the name are ' + name.slice(name.length-3));