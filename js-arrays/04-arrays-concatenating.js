const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const arr4 = arr1.concat(arr2);
const arr5 = arr2.concat(arr1);
const arr6 = arr1.concat(arr2).concat(arr3);
const arr7 = arr1.concat(arr2.concat(arr3));

console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr5);

console.log(arr6);
console.log(arr7);

console.log(arr1 + arr2);// 1,2,34,5,6 do NOT want this bc it converts array to a string

// Spread Operator ** always an interview question 
const words =['Hello', 'Hi', 'World']; 
console.log(words); // [ 'Hello', 'Hi', 'World' ]

const words2 = ['Good', 'Morning']

console.log(words2);

console.log(words.concat(words2)); // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ]

console.log([...words2, ...words]); // [ 'Good', 'Morning', 'Hello', 'Hi', 'World' ]

const words3 = ['Sunday', ...words, 'Monday', ...words2];
console.log(words3);


// find min and max number from the below array
const numbers = [5, 7, -2, 10];

let min = Math.min(...numbers); 
let max = Math.max(...numbers); 

console.log(min); // -2
console.log(max); // 10


