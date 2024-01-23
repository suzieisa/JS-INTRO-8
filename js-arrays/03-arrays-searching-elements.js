const fruits = ['kiwi', 'apple', 'orange', 'papaya', 'cherry', 'apple'];

// includes() method
console.log(fruits.includes('apple')); // true
console.log(fruits.includes('Apple')); // false

// check if the array has both ' kiwi' and 'watermelon' -- false

console.log(fruits.includes('kiwi') && fruits.includes('watermelon')); // false

// check if the array has 'grapes' or 'strawberry' -- false
console.log(fruits.includes('grapes') || fruits.includes('strawberry')); // false


// indexOf() method
console.log(fruits.indexOf('apple')); // 1
console.log(fruits.lastIndexOf('apple')); // 5

// if the array is only once it starts and ends at same index
console.log(fruits.lastIndexOf('orange')) // 2
console.log(fruits.indexOf('orange')) // 2

// if the element does not exist in the array it returns -1
console.log(fruits.indexOf('grapes')); // -1
console.log(fruits.lastIndexOf('strawberry')) // -1

// What are the index of 'kiwi' and 'orange'
console.log(fruits.indexOf('kiwi' && 'orange')) // THIS IS WRONG THEY NEED TO BE IN SEPERATE 
console.log(fruits.indexOf('kiwi'), fruits.indexOf('orange')); // 0 2 // this is CORRECT SYNTAX

const numbers = [10, 20, 30];

// check if this array contains element 20
// if it contains 20 print '20 is here' otherwise print '20 is not here'


if (numbers.includes(20)) console.log('20 is here');
else console.log('20 is not here');

if (numbers.indexOf(20) >= 0) console.log('20 is here');
else console.log('20 is not here');

