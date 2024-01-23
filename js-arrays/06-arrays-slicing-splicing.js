// ** INTERVIEW QUESTION

// SLICING METHOD

const arr1= [100, 200, 500, 300, 400];

console.log(arr1.slice(0,2)); // [ 100, 200 ]

console.log(arr1.slice(1,4)); // [200, 500, 300 ]

console.log(arr1.slice(2));// [ 500, 300, 400 ]

console.log(arr1.slice(-4)); // [ 200, 500, 300, 400 ]

console.log(arr1.slice(-3,-2)); // [500]

console.log(arr1.slice(-1,-3)); // [] empty

// SPLICING METHOD

// nothing is similar about slicing and splicing besides they are methods for arrays

const fruits = ['Kiwi', 'Apple'];

fruits.splice(1, 0, 'Orange'); // 1 stands for where we are going to insert the new element
// 0 stands for removing none

console.log(fruits); // [ 'Kiwi', 'Orange', 'Apple' ]

// add cherry, banana, pineapple between ornage and apple

fruits.splice(2, 0, 'Cherry', 'Banana', 'Pineapple');
console.log(fruits); // [ 'Kiwi', 'Orange', 'Cherry', 'Banana', 'Pineapple', 'Apple' ]

// remove banana and pineapple

fruits.splice(3, 2);

console.log(fruits); // [ 'Kiwi', 'Orange', 'Cherry', 'Apple' ]

// Replace cherry with watermelon and grapes

fruits.splice(2, 1, 'Watermelon', 'Grapes');

console.log(fruits); // [ 'Kiwi', 'Orange', 'Watermelon', 'Grapes', 'Apple' ]

// Remove orange and grapes

fruits.splice(1, 3, 'Watermelon')

console.log(fruits);