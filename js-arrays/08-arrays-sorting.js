const arr1 = [1, 2, 5, 100, 21];
const arr2 = ['Max', 'Johnson', 'Alex', 'John', 'bob','alice'];

const arr3 = arr2. sort();
console.log(arr3); // ['Alex', 'John', 'Max', 'alice' ]
console.log(arr2); // ['Alex', 'John', 'Max', 'alice' ]
// because of the ASCII alphabetically will put lowercase letter at the end

arr1. sort();
console.log(arr1); // [ 1, 100, 2, 21, 5 ] 

// this sorts it alphabetically so we need to take an extra step to do it numerically

const numbers = [1, 2, 5, 100, 21];
numbers.sort((x,y) => x - y);

console.log(numbers); // [ 1, 2, 5, 21, 100 ]