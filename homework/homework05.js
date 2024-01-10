/* Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 

countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0 */

const countPos = (array) => {
    let countE = 0;
    for(let numbers of array){
        if(numbers > 0) {
        countE++;
        
    }
}
    return countE;
} 
console.log(countPos(([-45, 0, 0, 34, 5, 67]))); // 3 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4 
console.log(countPos([0, -1, -2, -3])); // 0 

//FILTER METHOD
const countPos2 = (arr) => arr.filter(num => num > 0).length // can use FILTER method; give a variable name and set its condition

console.log(countPos2(([-45, 0, 0, 34, 5, 67]))); // 3 
console.log(countPos2([-23, -4, 0, 2, 5, 90, 123])); // 4 
console.log(countPos2([0, -1, -2, -3])); // 0 

/* Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/



const countA = (string) => {
    let countLetterA = 0;
    
    for (const letter of string) {
        if(letter.toLowerCase() === 'a') countLetterA++;

    }
    return countLetterA;
}
const countA2 = (str) => str.split('').filter(letter => letter.toLowerCase() === 'a').length

console.log(countA2("TechGlobal is a QA bootcamp")); // 4
console.log(countA2("QA stands for Quality Assurance")); // 5
console.log(countA2("Cypress"));	// 0

// Task 3
/* Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

const countVowels = (string) => {
    let countV = 0;
    const vowels = ['a','e', 'i', 'o', 'u'];

    for(let letter of string) {
        if(vowels.includes(letter.toLowerCase())) countV++;

    }
    return countV;
}

console.log(countVowels("Hello")); // 2

// TASK 4
/* Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countConsonants(string) {
    let countC = 0;
    const vowels = ['a','e', 'i', 'o', 'u'];
    
    for(letters of string) {
        if(!(vowels.includes(letters.toLowerCase()))) countC++
    }
    return countC;
}

console.log(countConsonants("Hello")) 		// -> 3
console.log(countConsonants("Hello World")) 		// -> 8
console.log(countConsonants("JavaScript is fun")) 	// 	-> 12
console.log(countConsonants(""))// 0			

// Task 5
/* Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 	*/


const countWords = (str) => {
    return str.trim().split(' ').length
}


console.log(countWords("    Javascript is fun       ")); //		-> 3
console.log(countWords("Cypress is an UI automation tool.")); // 6
console.log(countWords("1 2 3 4")); // 4

//TASK 6 
/* Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 
*/

const factorial = (number) => {
    let factorial = 1;
    for(i = 1; i <= number; i++) {
    factorial *= i;
    }
    return factorial;
};

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/* Write a function named as isPalindrome() which takes a string word as an 
argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true 
*/

const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
    

console.log(isPalindrome("Hello")); 
console.log(isPalindrome("Kayak"));

// TASK 8 Write a function named as countMultipleWords() which takes an array as an 
//argument and returns the count of the elements that has multiple words when invoked.

function countMultipleWords(array) {
    let countMultipleWords = 0;

     for(const words of array) {                                                                   
        if(words.trim().split(' ').length > 1) countMultipleWords++;

     }
     return countMultipleWords;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); //		-> 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])) 		// -> 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])) // 	-> 4
console.log(countMultipleWords([ ])) 					// -> 0


/* TASK 9 Write a function named as count3OrLess() which 
takes a string word as an argument and returns 
the count of the words that has 3 characters or less when invoked. */


function count3OrLess(string) {
    let count = 0;

    const strArr = string.trim().split(' ');

    strArr.forEach(word => {
        if(word.length > 0 && word.lenght <= 3) count++
    })
    return count
 
}

const count3OrLess = (sentence) => sentence.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length;


console.log(count3OrLess("Hello")) // 			-> 0
console.log(count3OrLess("Hi John")) 	//		-> 1
console.log(count3OrLess("JavaScript is fun")) //		-> 2
console.log(count3OrLess("My name is John Doe"))  //	-> 3
console.log(count3OrLess("")) //			-> 0

/* Task 10 Write a function named as isPrime() which takes a number as an
 argument and returns true if the number is prime or 
returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers. */

const isPrime = (number) => {
    if (number < 2) return false;
    else if(number % number === 0 && number % 1 === 0) return true;
    
}

console.log(isPrime(5)) // 		-> true
console.log(isPrime(2)) //		-> true
console.log(isPrime(29))//		-> true
console.log(isPrime(-5)) //		-> false
console.log(isPrime(0))	//	-> false
console.log(isPrime(4)) 

// TASK 11
// Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

const sumArray = array1.map((element, index) => element + array2[index])

console.log(sumArray([3, 0, 0, 7, 5, 10], [6, 3, 2]​)) // 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]


// TASK 12
// Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

function removeExtraSpaces(string) {
    const words = string.split(' ');
    const array = words.filter(word => word !== '');
    const endString = array.join(' ');
    return endString;

}


console.log(removeExtraSpaces("Hello")) //		-> "Hello" 
console.log(removeExtraSpaces("      Hello    World     ")) //	-> "Hello World" 


/* TASK 13 Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
*/

/* TASK 14

Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.


