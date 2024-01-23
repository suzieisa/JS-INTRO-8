// Function scope was introduced before ES6 
// It is similar to block scope BUT with one difference. The difference is var key word acts exactly as let and const

// Funciton Scope
function anyFunction() {
    var x = 10;
    let y = 11;
    const z = 12;

    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12

}


console.log(x); // Reference error
console.log(x); // Reference error
console.log(x); // Reference error

// Real example
/*
Write a function that takes an array and returns how many numbers are even

countEven([1, 2, 3, 4, 5]) -> 2
countEven([0, 0, 0, 0, 0]) -> 5

*/

function countEven(arr) {
    var counter = 0;

    for(const number of arr) {
        if(number % 2 === 0) counter++;
    }

    return counter;
}
console.log(counter); // cannot do this Error - can only be used within the function