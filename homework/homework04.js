/* TASK 1 Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 
(both inclusive). */
// if you know how many times you want of something you do a FOR LOOP
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}
 
// TASK 2 Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).
for (let i = 1; i <= 50; i ++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

// TASK 3 Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
}

// TASK 4 Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
for (let i = 0; i <= 7; i ++) {
    console.log(i * i);
}

// TASK 5 Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
let sum = 0;

for (i = 1; i <= 10; i ++) {
    sum += i // this means to add sum + i 
} 
console.log(sum); 

/* TASK 6 Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number. 
factorial is for example 5 * 4 * 3 * 2 * 1 */

let factorial = 1;      // you have to set this to 1 because if you start with 0 any number multiplied by 0 will stay 0
let rand1 = Math.floor(Math.random() * 10) + 1;
console.log(rand1);

for (i = 1; i <= rand1; i ++) {
  factorial *= i 
}
console.log(factorial);

/* TASK 7 Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.
FOR THIS PROBLEM WE DO NOT KNOW HOW MANY TIMES IT WILL TAKE SO THATS WHY A FOR LOOP WONT WORK
WHILE LOOPS ARE USED WHEN YOU DONT KNOW THE EXACT # OF ITERATIONS 
*/

let attempts = 0;
let randNum; // YOU JUST INITALIZE AND DONT ASSIGN IT TO ANYTHING BC IT WILL BE ASSIGNED INSIDE THE LOOP


do {
    randNum = Math.floor((Math.random() * 100) + 1);
    attempts++;
} while( randNum % 5 !== 0) // if the condition is true it will go again This says if it is not a raminder of five the loop will go again



console.log(`The number is ${randNum} is and it took ${attempts} times`);

// TASK 8 Ouput the entire array sorted lexicographically 


let arr = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(arr);
console.log(arr.sort()); // sort will alphabetize


// TASK 9 
let characters = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(characters.includes('Pluto')); // this medthod returns a boolean 



// TASK 10 

let cartoons = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(cartoons);
console.log(cartoons.sort()); // [ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
console.log(cartoons.includes('Garfield' && 'Felix')); // false

// TASK 11 USE FOR OF LOOP TO LOOP THROUGH EVERY INDEX OF AN ARRAY
let numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);

for(const number of numbers) {
    console.log(number);
}

// second method
for (let i = 0; i < numbers.length; i++){ // numbers.length is equal to five in this case
    console.log(numbers[i]);
 }

 // third method
 numbers.forEach(function(number) {
    console.log(number);
 })


// TASK 12
let supplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']
console.log(supplies);

let countBAndP = 0;
let countPartial = 0; 

for (const supply of supplies) {
    if(supply[0].toLowerCase() === 'p' || supply[0].toLowerCase() === 'b') {
        countBAndP++
    }
    if(supply.toLowerCase().includes('book') || supply.toLowerCase().includes('pen') ) {
        countPartial++
    }
}
console.log(countBAndP);
console.log(countPartial);


// TASK 13

let numbArr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]

let numbsGreaterThanTen = 0;
let numbsEqualToTen = 0;
let numbsLessThanTen = 0;

for (number of numbArr ) {
    if (number > 10) numbsGreaterThanTen++;
    else if (number < 10) numbsLessThanTen++;
    else numbsEqualToTen++; // DO NOT NEED TO WRITE OUT THIS CONDITION (number === 10) not really needed better code
}

// For each solution
numbArr.forEach(function(number) {
    if (number > 10) numbsGreaterThanTen++;
    else if (number < 10) numbsLessThanTen++;
    else numbsEqualToTen++;

}

console.log(numbArr);
console.log(numbsGreaterThanTen);
console.log(numbsEqualToTen);
console.log(numbsLessThanTen);

// TASK 14

let array1 = [ 5, 8, 13, 1, 2 ]
let array2 = [ 9, 3, 67, 1, 0 ]
let array3 =[];
console.log(array1);
console.log(array2);

for(let i = 0; i < array1.length; i++) {
    array3.push(Math.max(array1[i], array2[i])); // push adds to the array
}
console.log(array3);

// TASK 15
/* Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, 
value and data types of the elements must be same. */

function firstDuplicate(arr) {                                      // created a function and took array as an argument
    for(let i = 0; i < arr.length; i++){                            // created for loop 
        for(let j = i + 1; j < arr.length; j++) {                   // this second for loop compares each element for a duplicate but have to start with i + 1
            if (arr[j] === arr[i]) { return arr[i];                 // checks for strict equality 
            }
        }   
    } 
    return -1;    
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar']));




// TASK 16 
// Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

function getDuplicates(array) {
    let allDups = [];
    for(let i = 0; i < array.length; i++){
        for(let j =  i + 1; j < array.length; j++) {
            if(array[j] === array[i] && !allDups.includes(array[i])) allDups.push(array[i])
        } 
        
     }   
    
        return allDups;
}

// second solution
function getDuplicates(array){
    let container = [];
    let allDuplicates = [];

    for(let obj of array) {
        if(container.includes(obj) && !allDuplicates.includes(obj)) allDuplicates.push(obj)
        else(container.push(obj))
    }
    return allDuplicates;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));


// TASK 17

function reverseStringWords(string) {
    let stringArr = string.trim().split(' '); // this will trim any spaces from the front and back each word individually
    for(let i = 0; i < stringArr.length; i++){
       stringArr[i] = stringArr[i].split('').reverse().join('')
} 
return stringArr.join(' ');
}

console.log(reverseStringWords('Hello World'));

// TASK 18
//Write a function named as getEvens() which takes 2 number arguments and returns all 
//the even numbers as an array stored from smallest even number to greatest even number when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 


function getEvens(x,y) {
    let start = Math.min(x,y);
    let end = Math.max(x,y);
    let even = [];
    for(i = start; i <= end; i++ ) {
    if(i % 2 === 0) even.push(i);
    };
    return even;
}
console.log(getEvens(2, 7)); //	-> [ 2, 4, 6 ]
console.log(getEvens(17, 5));	// -> [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4));//	-> [ 4 ]
console.log(getEvens(3, 3))	//-> [ ]

// TASK 19

/*Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. */

function getMultipleOf5(num1,num2) {
    const Divisible5 =[];
      for(let i =Math.max(num1,num2); i>= Math.min(num1,num2); i--) {
        if(i % 5 === 0) Divisible5.push(i);
      }
        return Divisible5;
}

console.log(getMultipleOf5(3, 17)) //	-> [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)) //	-> [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)) //	-> [ 5 ]
console.log(getMultipleOf5(2, 4)) //	-> [ ]

// TASK 20 
/* Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from 
smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers. */

function fizzBuzz(number1, number2) {
    let result = ' ';
    for(let i = Math.min(number1, number2); i <= Math.max(number1, number2); i++) {
        if(i % 3 === 0 && i % 5 === 0) {
        result += 'FizzBuzz | ';
        }
        else if(i % 3 === 0) {
        result += 'Fizz | '
        }
        else if (i % 5 === 0) {
        result += 'Buzz | '
    }   else {
        result += i +  ' | '
    }
}
    return result;
}

console.log(fizzBuzz(13, 18)) //	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
console.log(fizzBuzz(12, 5)) //	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)) //	-> "Buzz"
