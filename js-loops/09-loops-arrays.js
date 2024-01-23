
/*
Assume you are given an array that stores numbers
Find the sum of all numbers         -> 28
Find the average of the numbers     -> 4
Find the sum of numbers that have even index
*/
//// SUM of numbers
const numbers = [3, 4, 7, 3, 2, 2, 7];

let sum = 0;

for(const number of numbers) {
        sum += number;
}
console.log(sum); // 28
console.log(sum / numbers.length); // 4 

// FIRST SOLUTION WITH FOR OF LOOP
let sumOfEvenIndex = 0;
let index = 0;
for(const number of numbers) {
    if (index % 2 === 0 ) sumOfEvenIndex += number 
    index ++
}

console.log(sumOfEvenIndex); // 19

// OR FOR LOOP ALLOWS YOU TO USE INDEX RIGHT AWAY


for(let i = 0; i <= numbers.length-1; i++) {
    if(i % 2 === 0) sumOfEvenIndex += numbers[i]; 
}

//// FIND PRODUCT OF ALL THE NUMBERS
const nums = [3, 4, 7, 3, 2];

let product = 1;

for(const num of nums) {
    product *= num;
}
console.log(product);

//// Find the PRODUCT of all ODD index

let productOfOddIndex = 1

for (let i = 0; i <= nums.length-1; i++) {
    if(i % 2 !== 0) productOfOddIndex *= nums[i];

}
console.log(productOfOddIndex) // 12

