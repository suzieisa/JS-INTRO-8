const names = ['Alex', 'John'];

// add another element to the TAIL (end) 
names.push('Max');

console.log(names); // [ 'Alex', 'John', 'Max' ]

// Remove an element from the TAIL of an array
names.pop();
console.log(names); // [ 'Alex', 'John' ]

names.push('Max','Jessie', 'Adam'); // [ 'Alex', 'John', 'Max', 'Jessie', 'Adam' ]
console.log(names);

// pop only removes one element at a time 

// Do these methods change the original array? - YES, it modifies the original array
// The size of the array changes when you add or remove an element


let resultOfPush = names.push('Mark');
let resultOfPop= names.pop();

console.log(resultOfPush); // 6 - gives the new length of array 
console.log(resultOfPop); // Mark - gives back Mark because it removed it

// Shift() method vs unshift() method for adding and removing elements to the beginning of the array
const numbers = [10, 13, 17, 5, 2];
let resultOfUnshift = numbers.unshift(100);

console.log(numbers); // [ 100, 10, 13, 17, 5, 2 ]
console.log(resultOfUnshift); // 6 

let resultOfShift = numbers.shift();
console.log(numbers); [ 10, 13, 17, 5, 2 ]
console.log(resultOfShift); 100

numbers.unshift(200,300,400,500);
console.log(numbers);