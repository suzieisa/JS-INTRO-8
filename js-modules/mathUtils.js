// Arrow function
module.exports.getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;
module.exports.sum = (num1, num2) => num1 + num2;
module.exports.average = (num1, num2) => (num1 + num2) / 2;

// Function declaration - regular
// function average(num1, num2) {
//     return (num1 + num2) / 2;
// }

// Function Expression
// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// One of the way to export is exporting functions or properties one by one
// module.exports.getRandomNumber = getRandomNumber;
// module.exports.average = average;
// module.exports.sum = sum;


// You can store all the properties and function stored in a object and export it
// const math = {
//     getRandomNumber,
//     average,
//     sum
// };

// module.exports.math = math;


// Another way of exporting with objects
// module.exports = {
//     getRandomNumber,
//     average,
//     sum
// };