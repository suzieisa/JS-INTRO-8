console.log(x); // 10

var x = 10;

/* 
-This is hoisting
-JS moves declaration of the varaibles created with var to the top of the file 
but not the value.
-If you try to retrieve a var value before its assigned you will get undefined instead
of ReferenceError

var x;

console.log(x); // undefined

x = 10;

*/

console.log(y); // Error- ReferenceError: cannot access 'y' before initilization
console.log(z); // Error- ReferenceError: cannot access 'y' before initilization


let y = 11;
const z = 12;

// funcA(); // this is function A
// Regular function declaration
function funcA() {
    console.log('this is a function A');
}

funcB(); // Error - not hoisted 
// Function Expression
const funcB = function() {
    console.log('This is a function B')
}

funcC();
// Arrow functions 
const funcC = () => {
    console.log('This is function C')
};

// invoking all the functions- all good
funcA(); // This is function A
funcB(); // This is function B
funcC(); // This is function C