// Memory wise not recommended - taking a lot time and effort and lots of lines of code
// let student1 = 'Atilla';
// let student2 = 'Ada';
// let student3 = 'Tolgonai';
// let student4 = 'Zaid';
// let student5 = 'Ayca';
// let student6 = 'Hana';

// Collections - arrays are used to store multiple information of same type usually
const students = [ 'John', 'Max', 'Jane', 'Alex', 'Alice' ];
//const students2 = new Array('John', 'Max', 'Alex'); // not preferred but we have to know that you can create an array with new Array() syntax

// How to output the array elements
console.log(students); // [ 'John', 'Max', 'Jane', 'Alex', 'Alice' ]

// How to access a single element within the array -> we use index of the element and property access []
console.log(students[2]); // Jane
console.log(students[4]); // Alice
console.log(students[0]); // John

console.log(typeof students); // object


const numbers = [ 1, 2, 5, 7 ];
let numberAtIndexOf2 = numbers[2];

console.log(numberAtIndexOf2); // 5
console.log(typeof numberAtIndexOf2); // number
console.log(typeof numbers); // object


// How to update an existing element - this is possible by using their indexes
console.log(numbers); // [ 1, 2, 5, 7 ]
numbers[0] = 25;
console.log(numbers); // [ 25, 2, 5, 7 ]

// How to check the size of the array = how many elements you have in the array
const cities = [ 'Berlin', 'Chicago', 'Toronto', 'Miami' ];
console.log(cities.length); // 4

let size = cities.length;
console.log(size); // 4

// Berlin = 0, Chicago = 1, Toronto = 2, Miami = 3
console.log(cities[3]); // Miami
console.log(cities[1]); // Chicago
console.log(cities[0]); // Berlin

//TRICKY SIDE
console.log(cities[4]); // undefined
console.log(cities[-1]); // undefined
console.log(cities[-134875]); // undefined
console.log(cities[100]); // undefined