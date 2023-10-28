// Kick off 

console.log('Start the meeting');
console.log('Create a File');
console.log('Start coding');

function kickOff() {
console.log('Start the meeting');
console.log('Create a File');
console.log('Start coding');
}

kickOff();
kickOff();


// Create a fucntion that outputs good morning

function greeting() {
    console.log('Good Morning');
}

greeting();

// Create a function that takes an argument name and says 'Hello name'
// sayHello('Hana') --- 'Hello Hana'

sayHello('John'); // 'Hello John'
sayHello('Alex'); // Hello Alex
sayHello('suzanne'); // Hello Suzanne 

function sayHello(name) {
    console.log(`Hello ${name}`);
}

//RETURN TYPE FUCNTION
// Create a function that takes two arguments that returns there sum 

function sum(a, b) {
    return a + b;
}

let result1 = sum(3, 5); // 8 you can capture the sum in a new variable 
console.log(result1); // 8
console.log(sum(1, 2 * 10));

// write a function that takes 3 arguments that returns there product
// product (1,2,3)

function product(x,y,z) {
    return x * y * z;
}

console.log(product(1,2,3));
console.log(product(3,7,10));


function average5 (numbers) {
    return numbers= (sum) / 5 ;
}
let numbers = 1 , 2, 3, 4, 5; 
console.log(average5(numbers));

// Write a function that takes 3 arguments and returns their product
// product(1, 2, 3)     -> 6
// product(3, 7, 10)     -> 210

function product(arg1, arg2, arg3) {
    return arg1 * arg2 * arg3;
}

let v1 = product(1, 2, 3); // returning 6
console.log(v1); // 6

console.log(product(3, 7, 10)); // returning 210