// Write a program that outputs numbers from 5 - 25

for( let i = 5; i <= 25; i++) {
    console.log(i);
}

for (let i = 15; i >= 1; i--) {
    console.log(i);
}


// Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)

for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) console.log(i);
}
// Write a program to check numbers from 1 to 50 (both included) and ouput all the numbers that can be divided by 5
for(let i = 1; i <= 50; i++){
    if(i % 5 === 0) console.log(i);
}

// Write a program that finds the sum of numbers from 1 to 5 (both inclusive)
// 1 + 2 + 3 + 4 + 5

let sum = 0;

for(let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
////////////////////////////////////////////////////////
/*
Write a program that finds the sum of numbers from 10 to 15 (both inclusive)

10 + 11 + 12 + 13 + 14 + 15

75
*/

let sum1 = 0;

for(let i = 10; i <= 15; i++) {
    sum1 += i;
}
console.log(sum1);
/////////////////////////////////////////////////////////////

/* Write a program that generates a random number between 10 and 20 (both inclusive)
And it outputs all the odd numbers starting from 1 to random number (both inclusive) */

let number = Math.floor(Math.random() * (20 - 10 + 1) + 10);

for (let i = 1; i <= number; i++ ){
    if (i % 2 !== 0) console.log(i)
}

////////////////////////////////////////////////////////////
// Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order
let random1 = Math.ceil(Math.random() * (10) + 1);
let random2 = Math.ceil(Math.random() * (10) + 1);


for (let i = Math.min(random1,random2); i <= Math.max(random1,random2); i++ ) {
    console.log(i);
}
//////////////////////////////////////////////////////////////////
