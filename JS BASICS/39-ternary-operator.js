/*
Game club

People who has a name starting with J can be part of the club 

john--'You can join the club'
Alex-- 'SORRY! 'You are out'
*/

let name= 'jane';
if (name[0]=== 'J' || name[0] === 'j') {
    console.log('You can join the club');
}
else {
    console.log('Sorry, you are out');
}

// Short if-else
if (name[0]=== 'J' || name[0] === 'j') console.log('You can join the club');
else console.log('Sorry, you are out');

// Ternary solution
let result = name.toUpperCase()[0] === 'J' ? 'You can join the club' : 'Sorry you are out'
console.log(result);

/*
Naming a baby
boy = Sam
girl= Julie

girl = f
boy = m
*/

let gender = 'M'
let baby_name = gender === 'F' ? 'Julie' : 'Sam';
console.log(baby_name);


// Ternary instead of ladder statements
/*
Assume you are given a number and will print
POSITIVE if the number is greater than zero
NEGATIVE if the number is smaller than zero
ZERO if the number is zero
*/

let num = Math.floor(Math.random() * 11) - 5; // this returns a random number bt -5 and 5

console.log(`The random number is = ${num}.`);

if(num > 0) console.log('POSITIVE');
else if(num < 0) console.log('NEGATIVE');
else console.log('ZERO');

// Without storing in a container - variable
num > 0 ? console.log('POSITIVE') : num < 0 ? console.log('NEGATIVE') : console.log('ZERO');


// Storing result in a variable and then printing it out
let result_pnz = num > 0 ? 'POSITIVE' : num < 0 ? 'NEGATIVE' : 'ZERO';

console.log(result_pnz); 