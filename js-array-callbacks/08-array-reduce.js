const numbers = [5, 10, 100];
// sum of the numbers                   -> 115
console.log(numbers.reduce((sum, curr) => sum + curr, 0)); // 115
// count the numbers divisible by 10    -> 2
console.log(numbers.reduce((count10, curr) => curr % 10 === 0 ? count10 + 1 : count10, 0)); // 2
// count the even numbers               -> 2
console.log(numbers.reduce((countE, curr) => curr % 2 === 0 ? countE + 1 : countE, 0)); // 2
// find the max number
console.log(numbers.reduce((max, curr) => Math.max(max,curr), -Infinity));
console.log(numbers.reduce((min, curr) => Math.min(min,curr), Infinity));



// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// For Of Loop
let countApple = 0;

for(const fruit of fruits) {
    if(fruit.toLowerCase().includes('apple')) countApple++;

}
console.log(countApple);

// Filter method
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple')).length); // 2

// Reduce method
console.log(fruits.reduce((countApple, curr) => curr.toLowerCase().includes('apple') ? countApple + 1 : countApple, 0));
console.log(fruits.reduce((countI, curr) => curr.includes('i') ? countI + 1 : countI, 0));
console.log(fruits.reduce((countE, curr) => curr[curr.length - 1] === 'e' ? countE + 1 : countE, 0));