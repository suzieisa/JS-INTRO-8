const numbers = [-5, 0, 5, 10, 23, -10];

// Find all the positive numbers -> [5, 10, 23]

const positives = numbers.filter((x) => x > 0 );

console.log(positives);


// Find all the even numbers, and then all the odd numbers
console.log(numbers.filter((number) => number % 2 === 0));
console.log(numbers.filter((number) => number % 2 !== 0));


// Replace all the negative numbers with zero 

// can do with a loop always can be your TO GO when you dont know
let result = [];

for(const number of numbers) {
    if(number < 0) result.push(0);
    else result.push(number);
}

console.log(result);

// MAP returns the same size

console.log(numbers.map((number) => number < 0 ? 0 : number));



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
console.log(fruits.filter((fruit) => fruit.toLowerCase()[0] === 'm'));
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('apple')));
console.log(fruits.filter((fruit) => fruit.length === 5));
console.log(fruits.filter((fruit) => fruit.length !== 5));
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('a') || fruit.toLowerCase().includes('e')));

// Store the first and last letters of the fruits as shown  -> ['Ae', 'Oe']
console.log(fruits.map(fruit => fruit[0] + [fruit.length -1]));



// Count how many fruits end with 'e'
console.log(fruits.filter(fruit => fruit.toLowerCase()[fruit.length - 1] === 'e').length)

