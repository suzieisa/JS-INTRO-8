/* TASK 1
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/

const hasUpperCase = (string) => { 
    // split string into array of characters
    let stringArr = string.split('')
    // lets assume that hasUpperCase = false 
    let res = false;
    // loop through the array and check if each character is uppercase
    stringArr.forEach(letter => { 
        console.log(letter.charCodeAt(), letter);
        if(letter.charCodeAt() >=65  && letter.charCodeAt() <= 90) res = true;
    })
    return res; 

}

const hasUpperCase2 = (str) => str.split('').filter(i =>  i >= 'A' && i <= 'Z').length > 0


// split by empty character and filter out each letter
// if length is more than 0 
// JS is smart enough to know 'A' to 'Z' is referred to ASCII TABLE
// basically checks if it falls between uppercase a & z 
// filter works by taking an index (i)

console.log(hasUpperCase2("javascript"));  //	-> false
console.log(hasUpperCase2("John")); //		-> true
console.log(hasUpperCase2("$125.0")); //	-> false
console.log(hasUpperCase2(""));	//	-> false

/* TASK 2 
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/

const noDigit2 = (string) => {
    // 48 - 57 are digits 
    // split string into array 
    let stringArr = string.split('');
    // filter through array to remove digits by charcodeat
    // filter returns trye or false
    stringArr = stringArr.filter(letter => {
        if(letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57) return false;
        else return true;
    })
     return stringArr.join('');
}

const noDigit = (string) => {
    // 48 - 57 are digits 
    // split string into array 
    let stringArr = string.split('');
    // filter through array to remove digits by charcodeat
    // filter returns trye or false
    stringArr = stringArr.filter(letter => !(letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57))
    return stringArr.join('');
}

const noDigit3 = (str) => str.split('').filter(i => i < '0' || i > '9').join('').


console.log(noDigit3("")); //			-> ""
console.log(noDigit3("Javascript")); //		-> "Javascript"
console.log(noDigit3("123Hello")); //		-> "Hello"
console.log(noDigit3("123Hello World149")); // 	-> "Hello World”
console.log(noDigit3("123Tech456Global149")) //	-> "TechGlobal"


/* Task 3 
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
*/

const noVowel = (string) => {
    vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    let stringArr = string.split('');
    console.log(stringArr);
    // filter out vowels
    stringArr = stringArr.filter(letter => {
    // console.log(letter);
       return !vowels.includes(letter)
    }) 
    return stringArr.join('')
}


const noVowel2 = (string) => string.split('').filter(i => !('aeiou'.includes(i.toLowerCase()))).join('')


console.log(noVowel2("TechGlobal")) //	-> "TchGlbl"
console.log(noVowel2("AEOxyz")); //	-> "xyz"
console.log(noVowel2("Javascript")) //	-> "Jvscrpt"
console.log(noVowel2("")) // -> ""
console.log(noVowel2("125$")); //	-> "125$"

// TASK 4 Write a function named no13() which takes an array of numbers as 
// argument and return a new array with all 13s replaced with 0s. ​

const no13 = (numArr) => {
    // use map to replace 13 with 0 
    // otherwise keep number
    return numArr.map(number => (number === 13) ?  0 : number) 

}

// 
console.log(no13([1, 2, 3 ,4])) //		-> [1, 2, 3 ,4] 
console.log(no13([13, 2, 3])) //		-> [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])) //	-> [0, 0, 0, 0, 0]
console.log(no13([])) //			-> []


// TASK 5 Write a function named middleInt() which takes three number arguments and 
// return the middle number. ​

const middleInt = (x, y, z) => {
    // sort numbers 
    // return the middle number
    return [x, y, z].sort((a,b) => a-b)[1]
}

console.log(middleInt(1, 2, 2))// 	-> 2
console.log(middleInt(5, 5, 8))// 	-> 5
console.log(middleInt(5, 3, 5))// 	-> 5
console.log(middleInt(1, 1, 1))// 	-> 1
console.log(middleInt(-1, 25, 10))// 	-> 10

// TASK 6 Write a function named sumOfDigits() which takes a string argument and 
// returns sum of all digits from the original string. ​

const sumOfDigits = (string) => {
    let stringArr = string.split('');
    const isNumber = number => (number.charCodeAt() >= 48 && number.charCodeAt() <= 57)
     stringArr = stringArr.filter(character => isNumber(character))
   return stringArr.reduce((sum,curr) => sum + parseInt(curr) , 0) 

}

const sumOfDigits2 = (string) => string.split('').filter(i => i >= '0' && i <= '9').reduce((sum, num) => sum += Number(num) , 0)

// first split string into an array
// filter out all letters by using numbers 0-9
/// reduce takes a sum and the num refers to each element in the array
// since num is a string we need to convert to a number parseInt or Number can be used, 
// sum starts with 0 

console.log(sumOfDigits2("Javascript"))// 	-> 0
console.log(sumOfDigits2("John’s age is 29"))// 	-> 11
console.log(sumOfDigits2("$125.0"))// 		-> 8
console.log(sumOfDigits2(""))// 		-> 0


// TASK 7 Write a function named arrFactorial() which takes an array of 
// numbers as argument and return the array with every number replaced with their factorials.

const arrFactorial = (numArr) => numArr.map(number => {
    let sum = 1; 
    for (i = 2; i <= number; i ++) {
        sum *= i 
      }
      return sum; 
})


console.log(arrFactorial([1, 2, 3 ,4]))// 		->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5]))// 		-> [1,120]
console.log(arrFactorial([5 , 0, 6]))// 		-> (0, 1, 720]
console.log(arrFactorial([]))// 		-> []


// TASK 8 Write a function named categorizeCharacters() 
// which takes a string word as argument and return an 
// array as letters at index of 0, digits at index of 1 and specials at index of 2. 

const categorizeCharacters = (string) => {
    let stringArr = string.split('');
    const isLetter = character => (character.charCodeAt() >= 65 && character.charCodeAt() <= 122)
    const isNumber = number => (number.charCodeAt() >= 48 && number.charCodeAt() <= 57)
    let letters = '';
    let digits = '';
    let symbols = '';
    stringArr.forEach(character => {
        if(isLetter(character)) letters = letters + character
        else if (isNumber(character)) digits = digits + character
        else symbols = symbols + character; 
    })
    return [letters, digits, symbols];

}





console.log(categorizeCharacters("1234"))// 	-> [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%"))// 	-> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"))// 	-> [ 'abc', '123', '$%%' ]git
