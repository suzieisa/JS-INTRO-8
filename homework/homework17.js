//Write a function named findMedian() which takes two arrays of numbers as its arguments and return the median of the two sorted arrays. 

//The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2. 
//If the array has an even length, you are to find the average of the 2 middle numbers


const findMedian = (array1, array2) => {
const newArray = [...array1, ...array2].sort((a, b) => a - b);
const length = newArray.length;

if (length % 2 === 0) {
  const midIndex1 = length / 2 - 1;
  const midIndex2 = length / 2;
  return (newArray[midIndex1] + newArray[midIndex2]) / 2;
} else {
  const midIndex = Math.floor(length / 2);
  return newArray[midIndex];

}
}

console.log(findMedian([1, 3], [2])) // 		-> 2
console.log(findMedian([1, 2], [3, 4])) // 		-> 2.5
console.log(findMedian([4], [3])) // 		-> 3.5
console.log(findMedian([4], [])) //  		-> 4
// console.log(findMedian([0], [0,1])) //  		​-> 0

// Write a function named calculateFactorial() which takes a number as an argument and returns the factorial of that number.
// Note: Factorial is the product of all positive integers less than or equal to a given positive integer and denoted by that 
// integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.

const calculateFactorial = (number) => {
    let factorial = 1;

    for(let i =1; i <= number; i++) {
        factorial *= i 
    }
    return factorial 

}


console.log(calculateFactorial(0)) // 	-> 1
console.log(calculateFactorial(1)) // 	-> 1
console.log(calculateFactorial(5)) // 	-> 120
console.log(calculateFactorial(6)) // 	-> 720
console.log(calculateFactorial(10)) // 	-> 3628800
console.log(calculateFactorial(4)) // 	-> 24


// Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of the two numbers.
// NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers 
// without leaving a remainder. In other words, it is the largest number that is a common factor of two or more numbers.

const calculateGCD = (number1, number2) => {
    number1 = Math.abs(number1);
    number2 = Math.abs(number2);


    if (number2 === 0) {
        return number1;
    } else {
       
        return calculateGCD(number2, number1 % number2);
    }
};




console.log(calculateGCD(17, 5)) // 	-> 1
console.log(calculateGCD(48, 18)) // 	-> 6
console.log(calculateGCD(0, 5)) // 	-> 5
console.log(calculateGCD(21, 14)) // 	-> 7
console.log(calculateGCD(60, 48)) // 	-> 12
console.log(calculateGCD(8, 12)) // 	-> 4


// Write a function named calculateLCM() which takes two numbers as arguments and returns the least common multiple of the two numbers.
// NOTE: LCM is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. 
// In other words, it is the largest number that is a common factor of two or more numbers.


const calculateLCM = (number1, number2) => {
        const min = Math.min(number1, number2);                     
        if(min === 0) return min;                       
    
        for(let i = 1; i <= (number1 * number2); i++){            
            if(i % number1 === 0 && i % number2 === 0) return i;  
}
}


console.log(calculateLCM(8, 12))  //	-> 24
console.log(calculateLCM(17, 5))  //	-> 85
console.log(calculateLCM(48, 18))  //	-> 144
console.log(calculateLCM(0, 5) )// 	-> 0
console.log(calculateLCM(21, 14) )// 	-> 42
console.log(calculateLCM(60, 48))  //	-> 240
