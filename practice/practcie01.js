/* Requirement:

Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below message
Expected result: The random number * 5 = {result}

*/


/* Solution;

Pseudo Code:

1. Find random number between 0 and 50 (both inclusive)
2. I will multiply that random number with 5
3. Log that result 

*/

const randomNumber = Math.random() * 10; // 0 <= number < 1 (floating numbers as well ) 0.4, 0.001

/*
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/


let max  = 100;
let min = 50; 
const randomNumber2 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log('randomNumber2'% 10);

/* Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/


let number = ('54');
Number('54')


//Find if sum of 2 random numbers is even or not.


/* PRACTICE FROM MONDAY
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.*/

let a = Math.floor(Math.random() * 10) + 1 
let b = Math.floor(Math.random() * 10) + 1 

let sum = a + b;


if (sum % 2 === 0) console.log(true);
else console.log(false)




let num1= Math.floor(Math.random() * (10) + 1);
let num2= Math.floor(Math.random() * (10) + 1);
let num3= Math.floor(Math.random() * (10) + 1);

let num1= Math.random(Math.floor() * (10) + 1);
let num2= Math.random(Math.floor() * (10) + 1);
let num3= Math.random(Math.floor() * (10) + 1);

console.log(Math.min(num1,num2,num3))
console.log(Math.max(num1,num2,num3))

console.log(Math.abs(math.min(num1,num2,num3) - math.max(num1,num2,num3));


function  concat(string1, string2) {

    return (string1 + string2);
    }
    
    console.log(concat('Tech', 'Global'));

let x = Math.floor(Math.random() * (5 + 5 + 1) - 5);
console.log(x);


if (x < 0) console.log(true);
else console.log(false);


function lastTwoCharacters(string) {
    if (string.length >= 2) return string.slice(string.length -3);
    else return (string);
    }

    console.log(lastTwoCharacters('Tech'));
    console.log(lastTwoCharacters('Global'));
    console.log(lastTwoCharacters(1));
    

    function firstCharacter(string) {
        return string[0];
    }

        console.log(firstCharacter('Tech'));
        console.log(firstCharacter('Global'));


        function shorter(string1, string2) {
            if (string1.length < string2.length) return string1;
            else if (string1.length === string2.length) return string2;
            else return string2;
        }

        console.log(shorter('Tech','Global'));
        console.log(shorter('Hello', 'World'));
        console.log(shorter('Hello', 'Hi'));

            