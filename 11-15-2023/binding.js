// 'this' keyword

console.log(this); // {}

// Note: you might get different values
// For eample on client side code you might get : Window Object 
// on server side code you might get : global object 



// 'this' is objects

let person = {
    name: 'Alex',
    greet : function() {
        console.log(`Hi, ${this.name}`);
    },
};

person.greet(); // 'this' is referring to person object

// Explicit binding ----------------------------------
function greet() {
    console.log(this); // global object
    console.log((`Hi, ${this.name}`));
}
let person2 = {
    name: 'John',
};

greet();

// Goal is to attach greet function to person2 object 
// Thus, changing the context of this form 'global object' to 'person2'

greet.call(person2);

// Example to .call

const student = {
    name: 'Alex',
};
const teacher = {
    name: 'Hasan',
};
const client = {

}

// Passing argument to .call

const jane = { age: 20};

function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi.call(jane, 'Jane');

// No need to pass object 
function sayHi2(name) {
    console.log(`Hi, `)
}