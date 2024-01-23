// Write a function that takes a string name and logs 'Hello, {name}'




function greet(name) {
     console.log(`Hello ${name}`);
}

(greet('Alex')); // Hello Alex
greet(); // Hello undefined

function multiply(num1, num2 = 1) {
    console.log(num1 * num2);
}

multiply(3,5); // 15
multiply(3); // 3

// default paramaters can only be used on end arguments not first 

/*
Write a function that takes 2 arguments
    First argument is a number
    Second argument is a number
    Third argument is a boolean

Function name is addOrSubtract
If the boolean is true, add the given numbers
If the boolean is false, subtract the given numbers
If the boolean is not provided, still add the numbers 

addOrSubtract(2, 3, true)       -> 5
addOrSubtract(10, 4, false)     -> 6
addOrSubtract(7, 8)             -> 15

*/

function addOrSubtract(num1, num2, check = true){
    if(check) console.log(num1 + num2)
    else console.log(num1 - num2);
}

// also can be written in ternary

function addOrSubtract(num1, num2, check = true) {
    check ? console.log(num1, num2) : console.log(num1 - num2);
}

// also arrow function
const addOrSubtract = (num1, num2, check= true) => check ? console.log(num1, num2) : console.log(num1 - num2);


addOrSubtract(2, 3, true); //      -> 5
addOrSubtract(10, 4, false);  //   -> 6
addOrSubtract(7, 8); //           -> 15
