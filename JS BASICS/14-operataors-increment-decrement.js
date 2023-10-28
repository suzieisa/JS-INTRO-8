/*
-- decrement
++ increment

They are used to increase or decrease the value of a variable by 1.
*/

let num = 5;

num++; // post-increment: increase it by 1 but not at this line. So, the value for the num here is still 5

console.log(num); // 6


let num2 = 10;

num2--; // decrease it by 1

console.log(num2); // 9

// post-increment vs pre-increment
let a = 5, b = 5;

let x = a++; // post-increment: a is still 5
let y = ++b; // pre-increment: b is already 6

console.log(a); // 6
console.log(x); // 5

console.log(b); // 6
console.log(y); // 6

// LOOPS

let n1 = 3; // n1 = 3

++n1; // n1 = 4

let n2 = n1++; // n1 = 4, n2 = 4

n2++; //  n2 = 4

console.log(n1); // n1 = 5 -> 5
console.log(n2); // n2 = 5 -> 5


let number1 = 1, number2 = 3; // number1 = 1, number2 = 3

number1 += ++number2; // number2 = 4, number1 = 5

let number3 = --number1; // number1 = 4, number3 = 4

number3--; // number3 = 4

console.log(number1); // number1 = 4
console.log(number2); // number2 = 4
console.log(number3); // number3 = 3

