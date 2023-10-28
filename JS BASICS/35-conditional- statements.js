// teenage years between 10-19 years 

let age = 5;

if(age >= 10 && age <= 19) { // this block will only execute if this is true
    console.log(`${age} is a teenage!`);
}
else { // this block will execute only if the condition is false
    console.log(`${age} is NOT a teenage!!!`);
}

console.log('End of the program!');

if('Hello') { // true or truthy or any expression that evaluates to true
    console.log('This is if block');
}

// Another example

let number1 = 5, number2 = 10;


if (number1 > number2) {
    console.log(`The absolute difference = ${number1- number2}`);
} 
else {
    console.log(`The absolute difference = ${number2- number1}`);
}
console.log('End of the program!');