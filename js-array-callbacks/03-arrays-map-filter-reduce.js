const numbers = [2, 5, 10, 7, 8, 1, 0];

// when to use map: you return a new array having the same size with the original array


// using map
const numbersMultipliedBy3= numbers.map(number => number * 3);

console.log(numbersMultipliedBy3);

const numbersEvenOrOdd = numbers.map(number => {
    if(number % 2 === 0) return true;
    else return false;
});

console.log(numbersEvenOrOdd);


// using filter 
const evenNumbers = number.filter()
/* 
Counting elements
    count evens -- 4
    count odd -- 3
    count numbers divisible by 3 -- 1
    count numbers divisible by 4 -- 2
    count numbers divisible by 5 -- 3
    count positive numbers -- 6 

Finding specific element    
    find the greatest number -- 10
    find the smallest number -- 0


Accumulate elements
    find sum of numbers -- 33
    find product of numbers -- 0
    find average of numbers == 33 / 7 

Filtering and grouping numbers
    even numbers   -- [2, 10, 8, 0]          
    odd numbers -- [5, 7, 1]
    positive numbers -- [2, 5, 10, 7, 8, 1, 0]

Change all the elements
    multiply by 3
    true for even, false for odd 





*/
