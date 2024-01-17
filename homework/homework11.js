// TASK 01 Write a function named countPalindrome()
// which takes a string and returns the number of  palindrome words.

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

console.log(countPalindrome("Mom and Dad")); // 			-> 2
console.log(countPalindrome("See you at noon")); // 			-> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); // 	-> 2
console.log(countPalindrome("")); // 				-> 0
console.log(countPalindrome("No palindrome here")); // 		-> 0

// TASK 02
// Write a function named sum() which takes an array of
// numbers and a boolean value as arguments.
// It will return the sum of the numbers positioned at
// even indexes if true. And, return sum of numbers positioned at odd indexes if false.

const sum = (numbers, isEvenIndex) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if ((isEvenIndex && i % 2 === 0) || (!isEvenIndex && i % 2 !== 0)) {
      result += numbers[i];
    }
  }
  return result;
};

console.log(sum([3, 7, 2, 5, 10], false)); // 	-> 12
console.log(sum([-1, 1, -2, 2], true)); // 		-> -3
console.log(sum([1, 5, 10], true)); // 		-> 11
console.log(sum([0, -1, 15, 1], false)); // 		-> 0
console.log(sum([1, 2, 3, 4, -4], true)); // 		-> 0

// TASK 03
// Write a function named nthChars() which takes a
// string and a number as arguments and returns the string back with every nth characters.​

const nthChars = (string, number) => {
  let result = "";
  if (number > 0) {
    for (let i = number - 1; i < string.length; i += number) {
      result += string[i];
    }
  }
  return result;
};
console.log(nthChars("Java", 2)); // 		-> "aa"
console.log(nthChars("JavaScript", 5)); //​ 	-> "St"
console.log(nthChars("Java", 3)); // 		-> "v"
console.log(nthChars("Hi", 4)); //​ 		-> ""
console.log(nthChars("0123456789", 2)); // 	-> "13579"

// TASK 04
// Write a function named canFormString() which takes two string arguments and
//returns true if the second string can be formed by
//rearranging the characters of first string. Return false otherwise.
// NOTE: This method is case-insensitive and ignore the white spaces.

const canFormString = (string1, string2) => {};

console.log(canFormString("Hello", "Hi")); //​ 			-> false
console.log(canFormString("programming", "gaming")); //​ 		-> true
console.log(canFormString("halogen", "hello")); //​ 			-> false
console.log(canFormString("CONVERSATION", "voices rant on")); //​ 	-> true
console.log(canFormString("12", "123")); // 			-> false

// TASK 05 Write a function named isAnagram() which takes two string
// arguments and returns true if the given strings are anagram. Return false otherwise.
// NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context of strings, checking if two strings are anagrams of each other means verifying if they contain the same characters in the same quantities, regardless of the order of those characters.
// NOTE: This method is case-insensitive and ignore the white spaces.

const isAnagram = (string1, string2) => {};

console.log(isAnagram("Apple", "Peach")); //		-> false
console.log(isAnagram("listen", "silent")); // 		-> true
console.log(isAnagram("astronomer", "moon starer")); // 	-> true
console.log(isAnagram("CINEMA", "iceman")); // 		-> true
console.log(isAnagram("123", "1234")); //		-> false

// TASK 06 Write a function named count()
// which takes an array of numbers and a boolean
// value as arguments. It will return the total count of
// the even numbers if the boolean value is true.
// And return the total count of the odd numbers if the boolean value is false.

const count = (numbers, even) => {
  const totalCount = numbers.reduce((count, num) => {
    if ((even && num % 2 === 0) || (!even && num % 2 !== 0)) {
      return count + 1;
    }
    return count;
  }, 0);

  return totalCount;
};

console.log(count([1, 5, 10], true)); // 		-> 1
console.log(count([3, 7, 2, 5, 10], false)); // 	-> 3
console.log(count([-1, 1, -2, 2], true)); // 		-> 2
console.log(count([0, -1, 15, 1], false)); // 	-> 3
console.log(count([1, 2, 3, 4, -4], true)); // 	-> 3

// TASK 07 Write a function named sumDigitsDouble() which takes a string and
// returns the sum of the digits in the given String multiplied by 2.
// Return -1 if the given string does not have any digits. Ignore negative numbers.

const sumDigitsDouble = (string) => {
  let digits = string
    .split("")
    .filter((num) => num >= "0" && num <= "9")
    .map(Number);
  if (digits.length === 0) {
    return -1;
  }
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return sum * 2;
};

console.log(sumDigitsDouble("Javascript")); // 	-> -1
console.log(sumDigitsDouble("23abc45")); //​ 	-> 28
console.log(sumDigitsDouble("Hi-23")); // 	-> 10
console.log(sumDigitsDouble("ab12")); // 	-> 6
console.log(sumDigitsDouble("n0numh3r3")); // 	-> 12

// TASK 08 Write a function named countOccurrence() which takes
// two string arguments and returns how many times that the first
// string can form the second string.

console.log(countOccurrence("Hello", "World")); // 		-> 0
console.log(countOccurrence("Can I can a can", "anc")); //​ 	-> 3
console.log(countOccurrence("Hello", "l")); //​ 		-> 2
console.log(countOccurrence("IT conversations", "IT")); //​ 	-> 2
console.log(countOccurrence("Javascript", "Java")); // 	-> 1
