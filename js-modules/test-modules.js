const {getRandomNumber, getAverage, sum} = require('./mathUtils'); // importing it


/* 
Generate 2 random number bt 1 and 10 inclusive
Find their average
*/

const r1 = getRandomNumber(1,10);
const r2 = getRandomNumber(1,10);

console.log(r1, r2)
console.log(getAverage(r1, r2)); 
console.log(sum(r1, r2))

