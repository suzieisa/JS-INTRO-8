/* TASK 1 Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 
(both inclusive). */

for (let i = 1; i <= 100; i ++) {
    if (i % 7 === 0) console.log(i);
}
 
// TASK 2 Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).
for (let i = 1; i <= 50; i ++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

// TASK 3 Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
for (let i = 100; i >=50; i--) {
    if (i % 5 === 0) console.log(i);
}

// TASK 4 Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
for (let i = 0; i <= 7; i ++) {
    console.log(i ** 2);
}

// TASK 5 Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
let sum = 0;

for (i = 1; i <= 10; i ++) {
    sum += i 
} 
console.log(sum); 

/* TASK 6 Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number. */

let factorial = 1;
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
*/
let attempts = 0;
let isDone = false;
let randNum;


while (!isDone) {
    randNum = Math.floor(Math.random() * 100) + 1;
    console.log(randNum)
    attempts++
    if (randNum % 5 === 0) isDone = true 
}

console.log(`The number is ${randNum} is and it took ${attempts} times`);

// TASK 8 Ouput the entire array sorted lexicographically 


let arr = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
let sortedArr = arr.sort((a,b) => {
    return a.localeCompare(b)
})
console.log(arr);
console.log(sortedArr);


// TASK 9 
let characters = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
let hasPluto = false;
console.log(characters);

for(const character of characters) {
    if(character === 'Pluto') hasPluto = true;
}

// Another Solution
// hasPluto = characters.includes("Pluto")

console.log(hasPluto);

// TASK 10 

let cartoons = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

// TASK 11 
let numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);

// for (const number of numbers) {
//     console.log(number);
// }


// second method
// for (let i = 0; i<numbers.length; i++){
//     console.log(numbers[i])
// }


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

let numbsGreaterThanTen = 0
let numbsEqualToTen = 0
let numbsLessThanTen = 0

for (number of numbArr ) {
    if (number > 10) numbsGreaterThanTen++;
    if (number === 10) numbsEqualToTen++;
    if (number < 10) numbsLessThanTen++;
}

console.log(numbArr);
console.log(numbsGreaterThanTen);
console.log(numbsEqualToTen);
console.log(numbsLessThanTen);

// TASK 14

array1 = [ 5, 8, 13, 1, 2 ]
array2 = [ 9, 3, 67, 1, 0 ]
array3 =[];
console.log(array1);
console.log(array2);

for(let i = 0; i <= array1.length - 1; i++) {
    array3.push(Math.max(array1[i], array2[i]));
}
console.log(array3);

// TASK 15
/* Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, 
value and data types of the elements must be same. */

function firstDuplicate(arr) {                                      // created a function and took array as an argument
    let firstDup;
    let noDup = -1                                                  // initialized for no variable in array
    for(let i = 0; i < arr.length; i++){                            // created for loop 
        for(let j = 1; j < arr.length; j++) {                       // this second for loop compares each element for a duplicate
            if (arr[j] === arr[i]) {                                // checks for strict equality 
                firstDup = arr[i];                                  // assigning firstDup witih a value of arr[i]
                return firstDup;
                break;
            }
        }   
    } 
    return noDup; 
    
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); 


firstDuplicate([ 3, 7, 10, 0, 3, 10 ]);
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]);
firstDuplicate([ 5, '5', 3, 7, 4 ]);
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]);
firstDuplicate([ 1, 2, 3]);
firstDuplicate([ 'foo', 'abc', '123', 'bar']);




// TASK 16 
// Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

function getDuplicates(array) {
    let allDups = [];
    for(let i = 0; i <= array.length-1; i++){
        for(let j =  i + 1; j <= array.length-1; j++) {
            if(array[j] === array[i]) {
                if(!allDups.includes(array[j])) {
                    allDups.push(array[j])
            } 
        
        }   
    }
   
} 
return allDups;
}


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));

// TASK 18
//Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 


function getEvens(x,y) {
    let start = Math.min(x,y);
    let end = Math.max(x,y);
    let noEven = [];
    for(i = start; i <= end; i++ ) {
    if(i % 2 === 0) {
        noEven.push(i);
    }
}
    return noEven;
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
        if(i % 5 === 0) {
            Divisible5.push(i);
        }
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
