
// for each is only used for arrays 
// typically used more than for of loop

const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name to the console
names.forEach(x => console.log(x));

// Print each first letter of each name
names.forEach(x => console.log(x[0]));

// Print each name uppercase
names.forEach(x => console.log(x.toUpperCase()));

// output names that start with J 

names.forEach(name => {
    if(name[0] === 'J') console.log(name)
});

names.forEach(name => {
    if(name.startsWith('J')) console.log(name)
});


// count how many names has 4 letters
let count = 0;
names.forEach((name) => {
    if(name.length === 4) count++
});

console.log((count));



// Print each number
// Print each number multiplied by 5

const numbers = [5, 10, 3, 0, -2]

numbers.forEach(number => console.log(number));

numbers.forEach(number => console.log(number * 5));

// print true for even number and false for odd number

// beginners code
numbers.forEach(number => {
    if(number % 2 === 0) console.log(true);
    else console.log(false);
});

numbers.forEach(number => console.log(number % 2 === 0));

// create a new array that multiplies each element by 3
let newArr = [];

numbers.forEach(number => newArr.push(number * 3));

console.log(newArr);


// create a new array that stores even numbers 
let newArray = [];

numbers.forEach(number => {
   if(number % 2 === 0) newArray.push(number)
});

console.log(newArray); // [10, 0, -2]




    


