/* Task 01 Write a function named noSpace() which takes a string as 
argument and returns a new string with all the spaces removed.
Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal" 
*/

// can do it with filter 
// const noSpace = str => str.split('').filter(c => c !== " ").join('')

// when you split by (' ') it removes every space in the string (example : ['Tech', 'Global']
// join will bring back together without spaces 
const noSpace = (string) => string.split(" ").join("");

console.log(noSpace("")); // ->  ""
console.log(noSpace("Javascript")); // "Javascript"
console.log(noSpace("    Hello   ")); // 		-> "Hello"
console.log(noSpace(" Hello World   ")); //	-> "HelloWorld”
console.log(noSpace("Tech Global")); // -> 'TechGlobal'

/* Task 02 Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/

// to switch the first and last characters you can slice 

const replaceFirstLast = (str) => {
  str = str.trim();                      
  
  if (str.length < 2) return ""; 

  const first = str[0];
  const last = str[str.length - 1];
  const middle = str.slice(1, str.length - 1); // slice takes from the first index and the last ending point
  
  return last + middle + first;
};



console.log(replaceFirstLast("")); // 		->  ""
console.log(replaceFirstLast("Hello")); // 		->  "oellH"
console.log(replaceFirstLast("Tech Global")); // 	-> "lech GlobaT"
console.log(replaceFirstLast("A")); // 		-> ""
console.log(replaceFirstLast("    A      ")); // 	-> ""

/* Task 3 Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
*/

// const hasVowel = (string1) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const stringArray = string1.toLowerCase().split("");
  let result = false;
  stringArray.forEach((letter) => {
    if (vowels.includes(letter)) {
      result = true;
    }
  });
  return result;
};
// filter works with array 
const hasVowel = (string) => string.toLowerCase().split('').filter(c => ["a", "e", "i", "o", "u"].includes(c)).length > 0;

console.log(hasVowel("")); // 		-> false
console.log(hasVowel("Javascript")); //		-> true
console.log(hasVowel("Tech Global")); // 		-> true
console.log(hasVowel("1234")); // 		-> false
console.log(hasVowel("ABC")); //		-> true

/* TASK 04 Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/

function checkAge(yearOfBirth) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - yearOfBirth;

  if (age > 120 || age < 0) return "AGE IS NOT VALID";
  else if (age < 16) return "AGE IS NOT ALLOWED";
  else if (age >= 16) return "AGE IS ALLOWED";
}

console.log(checkAge(2015)); //  -> "AGE IS NOT ALLOWED"
console.log(checkAge(2007)); // -> "AGE IS ALLOWED"
console.log(checkAge(2050)); // -> "AGE IS NOT VALID"
console.log(checkAge(1920)); // -> "AGE IS ALLOWED"
console.log(checkAge(1800)); // -> "AGE IS NOT VALID"

/* TASK 5
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
*/

const averageOfEdges = (x, y, z) => (Math.max(x, y, z) + Math.min(x, y, z)) / 2;

console.log(averageOfEdges(0, 0, 6)); //	-> 3
console.log(averageOfEdges(-2, -2, 10)); //	-> 4
console.log(averageOfEdges(0, 0, 0)); //	-> 0
console.log(averageOfEdges(-3, 15, -3)); //	-> 6
console.log(averageOfEdges(10, 13, 20)); //	-> 15

/* TASK 6 Write a function named noA() which takes an array of strings as argument 
and will return a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
*/

const noA = (array) => {
  return array.map((string) => {
    if (string.toLowerCase().startsWith("a")) {
      return "###";
    }
    return string;
  });
};

console.log(noA(["javascript", "hello", "123", "xyz"])); // 	->  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); //	->  // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // -> // ["###", "###", "###", "###", "###"]

/* Task 7 Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) 	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		-> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = (numbers) => {
  return numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 101;
    }
    if (num % 5 === 0) {
      return 99;
    }
    if (num % 3 === 0) {
      return 100;
    } else return num;
  });
};

console.log(no3and5([7, 4, 11, 23, 17])); //	-> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); //		-> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // 	-> [99, 11, 100, 13, 14, 101]

/* TASK 8 Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1]) 	-> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5
*/

const countPrimes = (array) => {
  let countP = 0;
  array.forEach((num) => {
    if (num < 2) return countP;
    if (num === 2 || num === 3) countP++;
    if (num % 2 === 0 || num % 3 === 0) return countP;

    let d = 5;
    while (d < num) {
      if (num % d === 0) return countP;
      d += 2;
    }

    countP++;
  });
  return countP;
};

console.log(countPrimes([-10, -3, 0, 1])); // 	-> 0
console.log(countPrimes([7, 4, 11, 23, 17])); //	-> 4
console.log(countPrimes([41, 53, 19, 47, 67])); //	-> 5

/* TASK 9
Write a function named removeDuplicates() which takes an array argument and returns a new array with all 
the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 		-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 			-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 			-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 		-> ["1", "2", "3"]
*/

const removeDuplicates = (array) => {
  let res = [];
  array.forEach((string) => {
    if (!res.includes(string)) res.push(string);
  });
  return res;
};

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // 		-> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // 			-> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // 			-> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // 	-> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // 		-> ["1", "2", "3"]

/* TASK 10 Write a method named console.log(isDateFormatValid() that takes a string as an argument and returns 
true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("") 			-> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		-> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		-> false
isDateFormatValid("10/02/2020 ") 		-> true
*/

const isDateFormatValid = (string) => {
  let stringArray = string.trim().split("/");
  if (
    stringArray[0].length === 2 &&
    stringArray[0] <= 12 &&
    stringArray[1].length === 2 &&
    stringArray[2].length === 4
  )
    return true;
  else return false;
};

console.log(isDateFormatValid("")); // -> false
console.log(isDateFormatValid("15/30/2020")); // -> false
console.log(isDateFormatValid("10-30-2020 ")); // -> false
console.log(isDateFormatValid("10.30.2020")); // -> false
console.log(isDateFormatValid("5/30/2020")); // -> false
console.log(isDateFormatValid("05/30/2020 ")); // -> true
console.log(isDateFormatValid("10/2/2020")); //	-> false
console.log(isDateFormatValid("10/02/2020 ")); // 		-> true

//  TASK 11 Write a method named secondMax() takes an array argument and returns the second max number from the array.

// NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be
// returned as second max number.

// NOTE: Be careful when there is multiple max numbers.

// Examples:
// secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
// secondMax([3, 4, 5, 6]) 		-> 5
// secondMax([10]) 		-> 10

const secondMax = (array) => {
  if (array.length === 1) return array[0];
  let maxNumber = Math.max(...array);
  let newArray = array.filter((number) => number !== maxNumber);
  return Math.max(...newArray);
};
console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 	-> 7
console.log(secondMax([3, 4, 5, 6])); //	-> 5
console.log(secondMax([10])); //		-> 10

// TASK 12 Write a method named secondMin() takes an array argument and returns the second min number from the array.

// NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

// NOTE: Be careful when there is multiple min numbers.

// Examples:

const secondMin = (array) => {
  if (array.length === 1) return array[0];
  let maxNumber = Math.min(...array);
  let newArray = array.filter((number) => number !== maxNumber);
  return Math.min(...newArray);
};

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMin([3, 4, 5, 6])); // 4
console.log(secondMin([10])); // 10

// TASK 13 Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

// NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

// Examples:
// mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
// mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
// mostRepeated([10]) 					-> 10
// mostRepeated(["TechGlobal"]) 				-> "TechGlobal"


const mostRepeated = (array) =>  {
    if(array.length === 1) return array[0];
    array.sort();

    var max = 0;
    var freq = 0;
    var result;

    for(var i = 0; i < array.length; i ++) {
        if(arr[i] === arr [i + 1]) freq++;
        else freq = 0;
        if( freq > max) {
            result = arr[i];
            max = freq;
        }
        
    }
}

// Examples:
// mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
// mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
// mostRepeated([10]) 					-> 10
// mostRepeated(["TechGlobal"]) 				-> "TechGlobal"
