/*
Find the sum, subtraction, multiplication, division and remainder of these 2 numbers.
Sum = 10
Subtraction = 2
Multiplication = 24
Division = 1.5
Remainder = 2
*/

let num1 = 6;
let num2 = 4;

console.log('Sum = ' + (num1 + num2)); // Sum = 10
console.log('Subtraction = ' + (num1 - num2)); // Subtraction = 2

console.log('Mutliplication =  ' + num1 * num2); // Multiplication = 24
console.log('Division = ' + num1 / num2); // Division = 1.5
console.log('Remainder = ' + num1 % num2); // Remainder = 2


// TRICKY PART
console.log('2' + '5'); // '25'
console.log('2' + 7); // '27'
console.log('2' + 2 + 5); // '225'
console.log('3' + 5 - 2); // 33 - interpreted langauge and will be able to convert string 35 into a number and solve the problem
console.log('3a' + 5 - 2); // NaN

console.log(2 + 3 + '5'); // '55'
console.log(6 - 3 + 5 * 2 + '10'); // '1310'


/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5, heigth = 8;

console.log('The area is = ' + width * heigth);
console.log('The perimter is = ' + 2 * (width + heigth));


/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week 
*/

let salary = 120000;

console.log('The monthly salary is = ' + salary / 12);
console.log('The bi-weekly salary is = ' + salary / 26);
console.log('The weekly salary is = ' + salary / 52);
