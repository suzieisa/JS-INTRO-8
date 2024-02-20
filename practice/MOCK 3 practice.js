// Write a function named replaceFirstLast() which takes a string argument and returns 
// a new string with the first and last characters replaced.
// NOTE: If the length is less than 2, return an empty string.
// NOTE: Ignore extra spaces before and after the string.

const replaceFirstLast = (string) => {
const newString = string.trim()

let beginning = newString[newString.length -1]
let middle = newString.slice(1, string.length -1)
let end = newString[0]

if(newString.length < 2) return '';
else return beginning + middle + end
}
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast(""))
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast("A"))
console.log(replaceFirstLast(" A "))

// Write a function named as swapFirstLastWord() which takes a 
// string word as an argument and returns the string back with 
// its first and last words swapped when invoked.
// NOTE: Return empty string if the given string does not have 2 or more words.

const swapFirstLastWord = (string) => {
    let newString = string.split(' ')
if(newString.length < 2) return ""
let beginning = newString[newString.length -1]
let end = newString[0]
let middle = newString.slice(1, newString.length -1).join(' ')

return beginning + " " + middle + " " + end
}

console.log(swapFirstLastWord("Hello World")) // -> "World Hello"
console.log(swapFirstLastWord("I like JavaScript")) //  "JavaScript like I" 
console.log(swapFirstLastWord("foo bar foo bar"))// "bar bar foo foo"
console.log(swapFirstLastWord("")) 
console.log(swapFirstLastWord(" ")) 
console.log(swapFirstLastWord("Hello")) 
console.log(swapFirstLastWord("Hello"))


// TASK 15 Write a function named as factorial() which takes a
// number as an argument and returns the factorial of the number when invoked.
// NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1
// Assume you will not be given a negative number.

const factorial = (number) => {
    let factorial = 1;
    for(let i= 1; i <= number; i ++){
    factorial *= i
}
return factorial;
}
  
  console.log(factorial(5)); //  120
  console.log(factorial(4)); //  24
  console.log(factorial(0)); //  1
  console.log(factorial(1)); //  1
 
  // Write a function named as removeExtraSpaces() 
  // which takes a string word as an argument and 
  // returns the string back with all extra spaces removed when invoked.

  const removeExtraSpaces = (string) => string.trim().split(' ').filter((x) => x.length > 0).join(' ')


  console.log(removeExtraSpaces("Hello")) 
  console.log(removeExtraSpaces(" Hello World "))
  console.log(removeExtraSpaces("   JavaScript is     fun"))
  console.log(removeExtraSpaces(""))


// Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
// Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
// For two elements to be considered as duplicated, value and data types of the elements must be same.

const firstDuplicate = (array) => {
 
    for(let i = 0; i < array.length; i ++ ) {
        for (let j = i + 1; j < array.length; j ++) {
            if (array[i] === array[j]) return array[i]
        }  
    }
    return -1;
    
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])) //  -> 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])) //  -> 5
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])) //  -> -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])) //  'abc'
console.log(firstDuplicate([ 1, 2, 3])) // -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ])) //  -1


// Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
// Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. 
// For two elements to be considered as duplicated, value and data types of the elements must be same.

const getDuplicates = (array) => {
    let newArray = [];

    for(let i = 0; i < array.length; i ++) {
        for( let j = i + 1; j < array.length; j ++) {
            if (array[i] === array[j] && !newArray.includes(array[i])) newArray.push(array[i])
    }
   
}
return newArray
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) //  -> [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])) //  -> [ ]
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])) //  [ 'foo', 'a’ ] 
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])) //  [ ]



// Write a function named as reverseStringWords() which takes a string as an 
// argument and returns string back with each word separately reversed when invoked.
// NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

const reverseStringWords = (string) => {
let stringArr = string.trim().split(' ')

for(let i = 0; i < stringArr.length; i ++ ) {
    stringArr[i] = stringArr[i].split('').reverse().join('')
}
return stringArr.join(' ')
}

console.log(reverseStringWords("Hello World")) // // -> "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")) // "I ekil tpircSavaJ" 
console.log(reverseStringWords("Hello")) //  "olleH"
console.log(reverseStringWords("")) // 
console.log(reverseStringWords(" ")) //

// Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.
// NOTE: Be careful about the array sizes as they could be different.
const add = ( array1 , array2 ) => {
    if(array2.length > array1.length) [array1, array2] = [array2, array1]
      for(let i = 0; i < array2.length; i ++) {
        array1[i] += array2[i];
      }
      return array1;
    }
  console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])) // -> [9, 3, 2, 7, 5, 10]
  console.log(add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34])) // ->[16,11,9, 3,2,7,5,10,34]
  console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])) // -> [0, 0, 0, 0]

//   Fizz Buzz
// Write a function named fizzBuzz() which takes a number argument and returns an array consisting 
// of numbers starting from 1 to given number. However, it will return "Fizz" 
// for the numbers divided by 3, "Buzz" for the numbers divided by 5, 
// and "FizzBuzz" for the numbers divided both by 3 and 5.


const fizzBuzz = (number) => {
    let newArray = [];

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArray.push('FizzBuzz');
        } else if (i % 3 === 0) {
            newArray.push('Fizz');
        } else if (i % 5 === 0) {
            newArray.push('Buzz');
        } else {
            newArray.push(i);
        }
    }

    return newArray;
}


console.log(fizzBuzz(3))  // ->[1,2,'Fizz']
console.log(fizzBuzz(5)) // -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz(10)) // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
console.log(fizzBuzz(15)) // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14, 'FizzBuzz' ]
console.log(fizzBuzz(2)) // -> // [ 1, 2 ]
console.log(fizzBuzz(5)) //-> [ 1, 2, 'Fizz', 4, 'Buzz' ]



const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");

const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase.split('').reverse().join('')

const removeDuplicates = (array) => {
    let result = [];
    for(const number of array) {
      if(!result.includes(number)) result.push(number);
    }
    return result;
  }
  

  const isPrime2 = (number) => {

    if(number < 2) return false;
    else if (number === 2 || number === 3) return true;
    else if(number % 2 === 0 || number % 3 === 0) return false;
    
    let d = 5;
    
    while(d < number){ 
    if(number % d === 0) return false;
    
    d += 2;
    }
    return true; 
}

const arrFactorial = (array) => {
    return array.map(num => { 
    let fac = 1;
    for(let i = 2; i <= num; i++){
      fac *= i;
    }
    return fac;
  })
  }

  const fibonacciSeries1 = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) {
      if (i === 0) array.push(0);
      // 2
      else if (i === 1) array.push(1);
      else array.push(array[i - 1] + array[i - 2]);
    }
  
    return array;
  };


  const isPowerOf3 = (num) => (num % 3 === 0 || num === 1 ? true : false);


  const fibonacciSeries2 = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) {
      if (i === 0) array.push(0);
      // 2
      else if (i === 1) array.push(1);
      else array.push(array[i - 1] + array[i - 2]);
    }
  
    return array[number - 1];
  };

  const countPalindrome = (string) => {
    let wordCount = 0;
  
    let words = string.split(" ");
  
    for (const word of words) {
      if (
        word !== "" &&
        word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
      ) {
        wordCount++;
      }
    }
    return wordCount;
  };