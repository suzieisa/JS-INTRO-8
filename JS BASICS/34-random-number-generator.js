/*
Write a function called getRandomNumber that takes 2 args and return a random number
between them (boht inclusive)


getRandomNumber (5,10) 
getRandomNumber(15,17)

PSEUDO CODE- Approach

1. Find the min and max of given numbers
2. Use Math.random() and Math.floor() to get random numbers for the numbers given
3. return the random number found

5 and 10 or 10 and 5---

Math.floor(Math.random() * (max - min) + min
Mathfloor(Math.random() * 6 + 5 
*/

function getRandomNumber(num1, num2) {
    
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log(getRandomNumber(5,10));

// 3 and 15

console.log(getRandomNumber(15,3));

// 23 and 53231

console.log(getRandomNumber(23, 532321));