// this is doing the same way but simpler coder with 'find'

// Find first positive number -> 10
// Find the index first positive number -> 1
// Find first negative number -> -4
// Find the index first negative number -> 2
// Find first even number -> 0
// Find the index first even number -> 0
// Find first odd number -> 5
// Find the index first odd number -> 3

const numbers = [0, 10, -4, 5, 2, -3];

console.log(numbers.find(number => number > 0));
console.log(numbers.findIndex(number => number > 0));

console.log(numbers.find(number => number < 0));
console.log(numbers.findIndex(number => number < 0));

console.log(numbers.find(number => number % 2 === 0));
console.log(numbers.findIndex(number => number % 2 === 0));

console.log(numbers.find(number => number % 2 !== 0));
console.log(numbers.findIndex(number => number % 2 !== 0));

console.log(numbers.find(number => number === 500)); // undefined
console.log(numbers.findIndex(number => number === 500)); // -1

// a number that is not found will return undefined 
// an index that is not found will return -1 



// this is the first way we would do it before
let firstPos;

for(const number of numbers) {
    if(number > 0) {
        firstPos = number;
        break;
    }
}
console.log(firstPos);