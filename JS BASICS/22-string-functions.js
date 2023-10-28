// creating a variable that stores string
let fname = 'John';
let lname = 'Doe';

console.log('The full name is ' + fname + ' ' + lname + '.'); // 'The full name is John Doe.' -> concatenation

// ES6 introduced backticks `` -> string templates which makes variable or expression insertion better
console.log(`The full name is ${fname} ${lname}.`); // The full name is John Doe.

// Task 11   
let favBook = 'JS Algorithms & Data Structures', favColor = 'Blue', favNumber = 7; 
  
console.log(
    `The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`
);


// Task 12  
let firstName = 'John ', lastName = 'Doe', age = 45, emailAddress = 'johndoe@gmail.com', phoneNumber = '(123) 123 1234', address = '123 St Chicago IL 12345'; 
 
console.log(
`   User who joined this program is ${firstName} ${lastName}. ${firstName}'s
age is ${age}. ${firstName}'s email address is ${emailAddress}. 
Phone number is ${phoneNumber} and address is ${address}.`
);


// Interpolation
let quantity = 5, product = 'Pen', price = 2;

// I bought 5 Pen items for $10.
console.log('I bought ' + quantity + ' ' + product + ' items for $' + quantity * price + '.');
console.log(`I bought ${quantity} ${product} items for $${quantity * price}.`);