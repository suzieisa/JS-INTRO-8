const {getRandomNumber} = require('./mathUtils'); 

/*
Generate a random number bt 1 and 100 and see which quarter it falls into

*/

const number = getRandomNumber(1, 100);

console.log(number);

if(number <= 25) console.log('1st');
else if(number <= 50) console.log('2nd');
else if(number <= 75) console.log('3rd');
else console.log('4th');