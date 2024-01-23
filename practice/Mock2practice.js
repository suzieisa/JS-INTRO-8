// TASK 1 Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word
// back tripled if the string length is even or doubled if the string length is odd when invoked.

function doubleOrTripleWord(string) {
  if (string.length % 2 === 0) return string + string + string;
  else return string + string;
}

console.log(doubleOrTripleWord("Tech")); //  -> "TechTechTech" -
console.log(doubleOrTripleWord("Apple")); //  -> "AppleApple”
console.log(doubleOrTripleWord("")); //  -> ""
console.log(doubleOrTripleWord(" ")); //  -> " "
console.log(doubleOrTripleWord("1")); //  -> "11"
console.log(doubleOrTripleWord("22")); // -> "222222"

// TASK 2 Write a function named as firstlastWord() which takes a string word as an argument and returns the
// first and last words from the given string when invoked.
// NOTE: Return empty string if the given string does not have any word.

function firstLastWord(string) {
  let newString = string.split(" ");
  
  if(string === "") return ""
  else return newString[0] + newString[newString.length - 1];
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));

// ***TASK 3 Has Vowel
// Write a function named hasVowel() which takes a string argument and returns true if the string
// has a vowel, returns false if the string doesn’t contain any vowel letter.
// NOTE: Vowels are = a, e, o, u, i.
// NOTE: Ignore upper/lower cases.

const hasVowel = (string) => string.split("").filter((x) =>["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(x)).length > 0;

console.log(hasVowel("")); // false
console.log(hasVowel("Javascript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234")); // false
console.log(hasVowel("ABC")); //true

// instead of making separate conatiner for vowels you can put it directly in filter

// TASK 4 Write a function named as startVowel() which takes a
// string word as an argument and returns true if given string starts with a vowel,
// and false otherwise when invoked.

// const startVowel = (string) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   return vowels.includes(string[0].toLowerCase())
// };
const startVowel2 = (string) => {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.some((vowel) => string.toLowerCase().startsWith(vowel));
};

console.log(startVowel("Hello")); // false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange")); // true
console.log(startVowel("")); // false
console.log(startVowel(" ")); // false

// TASK 5 Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers.
const averageOfEdges = (num1, num2, num3) =>
  (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2;

console.log(averageOfEdges(0, 0, 0)); // -> 0
console.log(averageOfEdges(0, 0, 6)); // -> 3
console.log(averageOfEdges(-2, -2, 10)); // -> 4
console.log(averageOfEdges(-3, 15, -3)); // -> 6
console.log(averageOfEdges(10, 13, 20)); // -> 15

// TASK 6 Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.
// NOTE: If the length is less than 2, return an empty string.
// NOTE: Ignore extra spaces before and after the string.

const replaceFirstLast = (string) => {
  string = string.trim;

  if (string.length < 2) return "";

  let beginning = string[0];
  let end = string[string.length - 1];
  let middle = string.slice(1, string.length - 1);

  return end + middle + beginning;
};

// //str[str.length - 1]:
// This expression directly retrieves the last character of the string. It gives you the actual letter at the last position.

// str.length - 1:
// This expression calculates the index of the last character in the string. It gives you a number, specifically the index where the last character is located.

// TERNARY WAY
// const replaceFirstLast = (str) => {
//   str = str.trim()
//   return str.length < 2 ? "" : str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
// }

console.log(replaceFirstLast("")); // ""
console.log(replaceFirstLast("Hello")); // "oellH"
console.log(replaceFirstLast("Tech Global")); // lech GlobaT
console.log(replaceFirstLast("A")); // ""
console.log(replaceFirstLast(" A ")); // ""

// TASK 7 Swap First and Last Four Characters
// Write a function named as swap4() which takes a string word as an argument and returns the string back with its
// first and last 4 characters swapped when invoked.
// NOTE: Return empty string if the given string does not have 8 or more characters.

const swap4 = (string) =>
  string.length < 8 ? "" : string.slice(string.length-4 , string.length) + string.slice(4, string.length-4) + string.slice(0, 4);
// const swap42 = (string) =>
  // string.length < 8 ? "" : string.slice(-4) + string.slice(4, -4) + string.slice(0, 4);

// REMEMEBER WHEN SLICING THE INDEX WHERE YOU END AT IS NOT INCLUDED IN YOUR SLICED ANSWER
// when you slice from -4 you are slicing from the end of the string to the fourth character
// starts counting from -1
// then to get the middle of the string it starts at the 4 index, to the -4 index
console.log(swap4("abc")); // ""
console.log(swap4("JavaScript")); // "riptScJava"
console.log(swap4("TechGlobal")); // "obalGlTech"
console.log(swap4("")); //""
console.log(swap4(" ")); // ""
console.log(swap4("Apple")); //""

// *** TASK 8  Write a function named as swapFirstLastWord() which takes a string word as an argument and
// returns the string back with its first and last words swapped when invoked.
// NOTE: Return empty string if the given string does not have 2 or more words.

const swapFirstLastWord = (string) => {
  string = string.split(" ");
  if (string.length < 2) return "";

  let start = string[string.length - 1];
  let end = string[0];
  let rest = string.slice(1, string.length - 1).join(" ");

  return start + " " + rest + " " + end;
};
console.log(swapFirstLastWord("Hello World")); // -> "World Hello"
console.log(swapFirstLastWord("I like JavaScript")); // -> "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar")); // -> "bar bar foo foo"
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord(" "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello"));

// TASK 9 Write a function named countPos() which takes an array of
// numbers as an argument and returns how many elements are positive when invoked.

// const countPos = (numbers) => {
//   let countP = 0;

//   for(num of numbers) {
//     if(num > 0 ) countP++;
//   }
//   return countP;
// }

// CAN DO IN REDUCE
const countPos = (numbers) =>
  numbers.reduce(
    (countPos, number) => (number > 0 ? countPos + 1 : countPos),
    0
  );

console.log(countPos([-45, 0, 0, 34, 5, 67])); //  3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); //  4
console.log(countPos([0, -1, -2, -3])); // 0

// **** TASK 10 Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers
// as an array stored from smallest even number to greatest even number when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers.
// Assume you will not be given negative numbers.

const getEvens = (num1, num2) => {
  const evenNum = [];
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (i = start; i <= end; i++) {
    if (i % 2 === 0) evenNum.push(i);
  }
  return evenNum;
};

console.log(getEvens(2, 7)); // -> [ 2, 4, 6 ]
console.log(getEvens(17, 5)); // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4)); //  4 ]
console.log(getEvens(3, 3)); // -> [ ]

// TASK 11 Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by
// 5 as an array stored from first found match to last found match when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers.
// Assume you will not be given negative numbers. Examples:

// const getMultipleOf5 = (num1, num2) => {
//   let numbers = [];
//   if(num1 > num2) {
//     for(let i = num1; i >= num2; i-- ) {
//       if(i % 5 === 0) numbers.push(i);
//     }
//   } else {
//       for(let i = num1; i <= num2; i++){
//       if(i % 5 === 0) numbers.push(i);
//     }
//   }
//   return numbers;
// }

// another way less code

function getMultipleOf5(num1, num2) {
  let numbers = [];

  for (let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--) {
    if (i % 5 === 0) numbers.push(i);
  }
  if (num1 < num2) return numbers.reverse();
  return numbers;
}

// can start with the larger number and go to the smallest number
// and just reverse the numbers if num1 is smaller than num2

console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)); // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)); // [ 5 ]
console.log(getMultipleOf5(2, 4)); // [ ]

// TASK 12  Write a function named countNeg() which takes an array of
// numbers as an argument and returns how many elements are negative when invoked.

// const countNeg = (numArr) => {
//   let countN = 0;
//   for (num of numArr) {
//     if(num < 0) countN++;
//   }
//   return countN;
// }

// TERNARY
const countNeg = (numArr) =>
  numArr.reduce((countN, num) => (num < 0 ? countN + 1 : countN), 0);

console.log(countNeg([-45, 0, 0, 34, 5, 67])); //  1
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); //  ) // 2
console.log(countNeg([0, -1, -2, -3])); // 3

// TASK 13 Write a function named countA() which takes a
//string argument and returns how many A or a there are in the given string when invoked.
//NOTE: Ignore case sensitivity.

// const countA = (string) => {
//   string = string.slice('');
//   let countA = 0;
//   for(letter of string) {
//   if(letter.toLowerCase() === 'a') countA++;
//   }
//   return countA;
// }

const countA = (string) =>
  string
    .split("")
    .reduce(
      (countA, letter) => (letter.toLowerCase() === "a" ? countA + 1 : countA),
      0
    );

console.log(countA("TechGlobal is a QA bootcamp")); //  4
console.log(countA("QA stands for Quality Assurance")); //  5
console.log(countA("Cypress")); // 0

// ****TASK 14 Write a function named countWords() which takes a
// string argument and returns the total count of words in the given string when invoked.
// NOTE: Be careful about the extra whitespaces before and after the string.

// const countWords = string => {
//   string = string.trim()//.split(' ') // dont have to split?
//   let spaces = 0;
//
//  for(character of string) {
//   if(character === ' ') spaces++

//   }
//   return spaces + 1; // return + 1 because the amount of spaces will give you how many words there are plus one though

// }

// EASIER split into an array and .length will give you the total amount of words in the array
const countWords = (string) => string.trim().split(" ").length; //.length for an array gives you the amount of elements with strings .length gives you how many characters

console.log(countWords(" Javascript is fun ")); //  3
console.log(countWords("Cypress is an UI automation tool. ")); //  6
console.log(countWords("1 2 3 4")); // 4

// TASK 15 Write a function named as factorial() which takes a
// number as an argument and returns the factorial of the number when invoked.
// NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1
// Assume you will not be given a negative number.

const factorial = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(factorial(5)); //  120
console.log(factorial(4)); //  24
console.log(factorial(0)); //  1
console.log(factorial(1)); //  1

// recursion method ******* can be useful in interviews!!!!
// const factorial = (n) => {
//   if(n === 0 || n === 1) return 1;
//   return n * factorial(n-1);
// }

// TASK 16
// Write a function named as count3OrLess() which takes a
// string word as an argument and returns the count of the words that has 3 characters or less when invoked.

// const count3OrLess = (string) => {
//   string = string.trim().split(' ');
//   let countWord = 0;

//   for(word of string) {
//     if(word.length > 0 && word.length <= 3) countWord++;      // have to include word.length > 0 for sentences like ''
//   }
//   return countWord;
// }

// REDUCE

const count3OrLess = (string) =>
  string
    .trim()
    .split(" ")
    .reduce(
      (countWord, word) =>
        word.length > 0 && word.length <= 3 ? countWord + 1 : countWord,
      0
    );

console.log(count3OrLess("Hello")); //  ->0
console.log(count3OrLess("Hi John")); //  ->1
console.log(count3OrLess("JavaScript is fun")); //  ->2
console.log(count3OrLess("My name is John Doe")); //  ->3
console.log(count3OrLess("")); //  -> 0

// TASK 17
// Write a function named as removeExtraSpaces() which
// takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

const removeExtraSpaces = (string) =>
  string.trim().split(" ").filter((str) => str.length > 0).join(" ");

// this is what you get from string.trim().split(' ')
// [ 'Hello' ]
// [ 'Hello', 'World' ]
// [ 'JavaScript', 'is', '', '', '', '', 'fun' ]
// [ '' ]

// filtering out any strings that arent a length > 0 meaning ''

console.log(removeExtraSpaces("Hello")); //
console.log(removeExtraSpaces("     Hello World ")); //
console.log(removeExtraSpaces("     JavaScript is     fun")); //
console.log(removeExtraSpaces("")); //

// TASK 18 Write a function named middleInt() which takes
// three number arguments and return the middle number.

const middleInt = (num1, num2, num3) => {
  return [num1, num2, num3].sort((a, b) => a - b)[1];
};

// sort can only be used with array so numbes are stored as []. sort((a,b) => a-b) is the formula and set to index of [1] for middle index

console.log(middleInt(1, 2, 2)); // 2
console.log(middleInt(5, 5, 8)); // 5
console.log(middleInt(5, 3, 5)); // 5
console.log(middleInt(1, 1, 1)); // 1
console.log(middleInt(-1, 25, 10)); // 10

//**** */ TASK 19 Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated,
// value and data types of the elements must be same.

const firstDuplicate = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    // loop goes from the first to last element in array
    for (let j = i + 1; j < arr.length; j++) {
      // j will start at the next element of i
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return -1;
};

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([5, "5", 3, 7, 4])); //-1
console.log(firstDuplicate([123, "abc", "123", 3, "abc"])); // 'abc'
console.log(firstDuplicate([1, 2, 3])); // -1
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

// // TASK 20
// Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return 
// empty array if there are no duplicates in the array. For two 
// elements to be considered as duplicated, value and data types of the elements must be same.

// const getDuplicates = (array) => {
//   let newArray =[];

// for (let i = 0; i < array.length; i++) {          //starting at index of [0] of the array, going to the full length of the index
//   for(let j = i + 1; j < array.length; j++ ) {
//     if(array [i] === array[j] && !newArray.includes(array[i])) newArray.push(array[i]) // we need to add && portion so the results dont include repetitives 
//   }
// } 
//   return newArray;
// }

const getDuplicates = (array) => {
  let container = [];
  let allDuplicates = [];

  for(let obj of array) {
    if(container.includes(obj) && ! allDuplicates.includes(obj)) allDuplicates.push(obj)    
    else container.push(obj);
  }
  return allDuplicates
};

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) // [0, -7]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])) // []
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))  // [foo, a]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])) // []





// TASK 21 Write a function named as countVowels() which takes a string word as an 
// argument and returns the count of the vowel letters when invoked.
// NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
const countVowels = string => string.split('').reduce((countVowel, letter) => ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(letter) ? countVowel + 1 : countVowel , 0)

console.log(countVowels("Hello")) // 2
console.log(countVowels("JavaScript is fun")) //5
console.log(countVowels("")) // 0
console.log(countVowels('applei')) 

// TASK 22 Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word 
// separately reversed when invoked.
// NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

const reverseStringWords = (string) => {
  let stringArr = string.trim().split(' ');
    
  for(let i = 0; i < stringArr.length; i++){
      stringArr[i] = stringArr[i].split('').reverse().join('')
    } 
    return stringArr.join(' ');
}

console.log(reverseStringWords("Hello World")) //  "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")) //  "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")) //  "olleH"
console.log(reverseStringWords("")) //  
console.log(reverseStringWords(" ")) // 







// TASK 23 Write a function named as countConsonants() which takes a string word as an 
// argument and returns the count of the consonant letters when invoked.
// NOTE: A letter that is not vowel is considered as a consonant letter.

const countConsonants = (string) => string.split('').reduce((countC, letter) => !('aeiouAEIOU').includes(letter) ? countC + 1: countC, 0)



console.log(countConsonants("Hello"))  // 3
console.log(countConsonants("Hello World"))   // 8
console.log(countConsonants("JavaScript is fun"))  //12
console.log(countConsonants("")) // 0


// TASK 24 Write a function named as countMultipleWords() which takes an array as an argument and 
// returns the count of the elements that has multiple words when invoked.
// NOTE: Be careful about the extra whitespaces before and after the array element.

const countMultipleWords = array => array.reduce((count, str) => str.trim().includes(' ') ? count + 1 : count, 0)

// can reduce, and trim all spaces and if string inlcudes a (' ') then it will count + 1 
// cannot use trim in the beginning it only works with strings not arrays 

// const countMultipleWords = (array) => array.reduce((countWords, element) => element.trim().split(' ').length > 1 ? countWords + 1 : countWords, 0)


console.log(countMultipleWords([ "foo", "", "      ", "foo bar", "   foo"])) // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "      foobar  "])) // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "   foo bar   "])) // 4
console.log(countMultipleWords([])) // 0

 // TASK 25 Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
// • You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string 
// from smallest to greatest number with a ' | ' separator for each number.
// • You will need to convert numbers divisible by 3 to 'Fizz'
// • You will need to convert numbers divisible by 5 to 'Buzz'
// • You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
// • The rest will stay the same.
// NOTE: Make your code dynamic that works for any numbers. Assume you will not be given negative numbers.


const fizzBuzz = (num1, num2) => {
 let array = [];
  
  for(let i = Math.min(num1, num2); i <= Math.max(num1, num2) ; i++) {
    if(i % 3 === 0 && i % 5 === 0) array.push('FizzBuzz');
    else if( i % 5 === 0) array.push('Buzz');
    else if( i % 3 === 0) array.push('Fizz')
    else array.push(i);
  }
  return array.join(' | ')

}

// can store it as an array and then convert back to string by joining
// when you store as an array can just push all numbers into it
// then .join( | ) will return back as a string 


console.log(fizzBuzz(13, 18))// -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)) // -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(9, 6)) // -> "Fizz | 7 | 8 | Fizz"
console.log(fizzBuzz(5, 5)) // "Buzz"


// TASK 26 Write a function named as isPalindrome() which takes a 
// string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.
// NOTE: Palindrome: It is a word that is read the same backward as forward
// Examples: kayak, civic, madam
// NOTE: your function should ignore case sensitivity

const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
  
// have to make sure case sensitive and make it lowercase()
// if you split the string it will split into an array of each character 
// if its reverse
// and join back 
// set them equal to each other it will return false or true 



console.log(isPalindrome("Hello")) // -> false 
console.log(isPalindrome("Kayak")) // -> true 
console.log(isPalindrome("civic")) // -> true 
console.log(isPalindrome("abba")) // -> true 
console.log(isPalindrome("ab a")) // -> false 
console.log(isPalindrome("123454321")) // -> true 
console.log(isPalindrome("A")) // -> true 
console.log(isPalindrome("")) // -> true


// TASK 27 Write a function named as isPrime() which takes a number as an argument and returns 
// true if the number is prime or returns false otherwise when invoked.
// NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. 
// The smallest prime number is 2 and 2 is the only even prime number.
// NOTE: The smallest prime number is 2 and there is no negative prime numbers.

const isPrime = (number) => {
  if(number < 2) return false;
  if(number === 2 || number === 3) return true;
  if(number % 2 === 0 || number % 3 === 0) return false;

  let d = 5;
  while(d < number){
    if(number % d === 0) return false;        // meaning its not a prime number 
    d += 2;
}
  return true;
}

  // let d = 5 for divisibility 
  // we covered any number form 2, 3, and negatives
  // all prime numbers after 2 and 3 are not divisible by 3
  // 4 is not prime so we can start with 5 
  // we will add d by 1 any time it goes up 
  // if they are divisible by 3 then its not a prime number 

console.log(isPrime(5)) //  true
console.log(isPrime(2)) //  true
console.log(isPrime(29)) // true
console.log(isPrime(-5)) // false 
console.log(isPrime(0)) //  false 
console.log(isPrime(1)) //  false


// TASK 28 Write a function named add() which takes two 
// array of numbers as argument and returns a new array with sum of given arrays elements.
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

//TASK 29 Write a function named noA() which takes an array of strings as argument and 
//will return a new array with all elements starting with "A" or "a" replaced with "###".

const noA = (strArr) => strArr.map(string => (string.toLowerCase().startsWith('a')) ? '###' : string)


console.log(noA(["javascript", "hello", "123", "xyz"])) // -> ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])) // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) //  ["###", "###", "###", "###", "###"]

// TASK 30 No Elements Divisible By 3 and 5
// ÷No Elements Divisible By 3 and 5
// Write a function named no3and5() which takes an array of integer numbers as argument and will 
// return a new array with elements replaced by conditions below.
// If element can be divided by 5, replace it with 99
// If element can be divided by 3, replace it with 100
// If element can be divided by both 3 and 5, replace it with 101

// const no3and5 = (array) => {
//   let newArray = [];
  
//   for(let number of array) {
//     if(number % 3 === 0 && number % 5 === 0) newArray.push(101);
//     else if( number % 5 === 0) newArray.push(99);
//     else if(number % 3 === 0) newArray.push(100);
//     else newArray.push(number);
// }
//   return newArray;
// }

// CAN USE MAP

const no3and5 = (array) => {
  return array.map(number => {
    if(number % 3 === 0 % number % 5 === 0) return 101;
    else if(number % 3 === 0) return 100;
    else if(number % 5 === 0) return 99;
    return number;
  })
}

console.log(no3and5([7, 4, 11, 23, 17])) // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])) // -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])) // -> [99, 11, 100, 13, 14, 101]

// TASK 31 Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s.

const no13 = (array) => array.map(number => number === 13 ? 0 : number)


console.log(no13([1, 2, 3 ,4])); // [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []


// TASK 32 RemoveDuplicates() which takes an array argument and returns a new array with all the duplicates removed.

const removeDuplicates = (array) => {
  let result = [];
  for(const number of array) {
    if(!result.includes(number)) result.push(number);
  }
  return result;
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));  // -> ["abc", "xyz", "123", "ab", "ABC"] 
console.log(removeDuplicates(["1", "2", "3", "2", "3"])) // -> ["1", "2", "3"]

// TASK 33 No Digits Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string.

const noDigit = (string) => string.split('').filter(i => i < '0' || i > '9').join('');

// FILTERING NUMBER IS NOT A DIGIT so you write it out < 0 or more than 9 so it doesnt include the numbers
console.log(noDigit("")) // ""
console.log(noDigit("Javascript")) //  "Javascript"
console.log(noDigit("123Hello")) //  "Hello"
console.log(noDigit("123Hello World149")) //  "Hello World”
console.log(noDigit("123Tech456Global149")) // "TechGlobal"

// TASK 34 Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string.

const noVowel = (string) => string.split('').filter(i => !('aeiou'.includes(i.toLowerCase()))).join('')

// looking for NOTVOWELS so you have to use ! because filter will return true for what your filtering out

console.log(noVowel("TechGlobal")) // -> "TchGlbl" 
console.log(noVowel("AEOxyz")) // -> "xyz" 
console.log(noVowel("Javascript")) // -> "Jvscrpt" 
console.log(noVowel("")) // -> ""
console.log(noVowel("125$")) // -> "125$"

// TASK 35 Write a function named sumOfDigits() which 
// takes a string argument and returns sum of all digits from the original string.

const sumOfDigits = (string) => string.split('').filter(number => number >= '0' && number <= '9').reduce((sum, num) => sum += Number(num) , 0);

console.log(sumOfDigits("Javascript")) // 0 
console.log(sumOfDigits("John’s age is 29")) // 11
console.log(sumOfDigits("$125.0")) // 8 
console.log(sumOfDigits("")) // 0 


// TASK 36 Write a function named arrFactorial() which 
// takes an array of numbers as argument and return the array with every number 
// replaced with their factorials.

const arrFactorial = (array) => {
  return array.map(num => { 
  let fac = 1;
  for(let i = 2; i <= num; i++){
    fac *= i;
  }
  return fac;
})
}


console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6]) ); // [120, 1, 720]
console.log(arrFactorial([])); // []



const countPositive = (numbers) => numbers.reduce((countP, number) => number > 0 ? countP + 1 : countP, 0)


console.log(countPositive([-45, 0, 0, 34, 5, 67])) //   	    -> 3
console.log(countPositive([-23, -4, 0, 2, 5, 90, 123])) //   -> 4
console.log(countPositive([0, -1, -2, -3])) //   		    -> 0


const countA2 = (string) => string.split('').reduce((count, letter) => letter.toUpperCase() === 'A' ? count + 1 : count, 0)


console.log(countA2("TechGlobal is a QA bootcamp")) //   	-> 4
console.log(countA2("QA stands for Quality Assurance")) //   -> 5
console.log(countA2("Cypress")) //   					    -> 0