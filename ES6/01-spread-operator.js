// Spread operator with arrays

const numbers = [1, 2, 3];

// create a new array that stores 1, 2, 3, 4, 5, 6

const newArr = [...numbers, 4, 5, 6];

console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// Spread numbers to individual arguments

console.log(Math.max(numbers[0], numbers[1], numbers[2]));
console.log(Math.max(...numbers));



// Spread operator with objects 

const table1 = {
    use: 'dining',
    material: 'wood'
};

const table2 = {
   ...table1
};

const table3 = {
   ...table1,
    isExtendable: true
};

const table4 = {
    ...table3,
    shape: 'round'
};

console.log(table1);
console.log(table2);
console.log(table3);
console.log(table4);