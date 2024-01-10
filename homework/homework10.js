// TASK 1
// Write a function named calculateTotalPrice1() which takes an
// object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
// 1 Apple is $2.00​
// 1 Orange is 3.29
// 1 Mango is $4.99
// 1 Pineapple $5.25

function calculateTotalPrice1(items) {
  const prices = {
    Apple: 2.0,
    Orange: 3.29,
    Mango: 4.99,
    Pineapple: 5.25,
  };

  let totalPrice = 0;

  for (const itemName in items) {
    if (prices[itemName]) {
      totalPrice += prices[itemName] * items[itemName];
    }
  }

  return totalPrice.toFixed(2);
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); // -> 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); // -> 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); // -> 0
console.log(
  calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })
); // -> 12.24

// TASK 2
// Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
// 1 Apple is $2.00​
// 1 Orange is 3.29
// 1 Mango is $4.99
// 1 Pineapple $5.25
// Note: There will be some discounts as below​.
// There will be %50 discount for every second Apple​
// There will be 1 free Mango if customer gets 3. So, fourth one is free.

const calculateTotalPrice2 = (obj) => {
  let newCountprices = {
    Apple: 0,
    Orange: 0,
    Mango: 0,
    Pineapple: 0,
  };
  if (obj.Apple !== undefined) {
    newCountprices.Apple =
      Math.floor(obj.Apple / 2) * (prices.Apple / 2) +
      (obj.Apple - Math.floor(obj.Apple / 2)) * prices.Apple;
  }

  if (obj.Orange !== undefined) {
    newCountprices.Orange = obj.Orange * prices.Orange;
  }

  if (obj.Mango !== undefined) {
    if (obj.Mango <= 3) {
      newCountprices.Mango = obj.Mango * prices.Mango;
    } else {
      newCountprices.Mango =
        Math.floor(obj.Mango / 4) * 0 +
        (obj.Mango - Math.floor(obj.Mango / 3)) * prices.Mango;
    }
  }

  if (obj.Pineapple !== undefined) {
    newCountprices.Pineapple = obj.Pineapple * prices.Pineapple;
  }
  return Object.values(newCountprices).reduce(
    (total, productPrice) => total + productPrice,
    0
  );
};
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); // -> 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); //	-> 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); //	-> 0
console.log(calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango }));

// TASK 3 Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string.
// Note: Function should return empty string if the number argument is greater than the count of the words in the given string.

const nthWord = (string, n) => {
  const words = string.split(" ");
  return n >= 1 && n <= words.length ? words[n - 1] : "";
};

console.log(nthWord("I like programming languages", 2)); // 	-> "like"
console.log(nthWord("QA stands for Quality Assurance", 4)); //​ 	-> "Quality"
console.log(nthWord("Hello World", 3)); // 		-> ""
console.log(nthWord("Javascript", 1)); // 			-> "Javascript”
console.log(nthWord("", 1)); // 			-> ""

// TASK 4 Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong, return false otherwise.​
// Note: An armstrong number is a number that is equal to the sum of its own digits
// raised to the power of the number of digits. In other words,
// an n-digit number is an Armstrong number if the sum of its digits,
// each raised to the nth power, is equal to the number itself.
// Let's take an example to understand it better. Consider the number 153.​
// To determine if 153 is an armstrong number, we need to check if the sum of its digits,
//each raised to the power of the number of digits, equals the original number.​
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
// In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, which means 153 is an armstrong number.

const isArmstrong = (number) => {};

console.log(isArmstrong(153)); // 	-> true
console.log(isArmstrong(123)); // 	-> false
console.log(isArmstrong(1634)); // 	-> true
console.log(isArmstrong(153)); // 	-> true
console.log(isArmstrong(1111)); // 	-> false

// TASK 5 Write a function named reverseNumber() which takes a number argument and
// returns it back reversed without converting it to a String.
// Note: Do not convert number to string to complete the task.

const reverseNumber = (number) => {};

console.log(reverseNumber(371)); // 	-> 173
console.log(reverseNumber(123)); // 	-> 321
console.log(reverseNumber(12)); // 	-> 21
console.log(reverseNumber(0)); // 	-> 0
console.log(reverseNumber(111)); // 	-> 111

// TASK 6 Write a function named doubleOrTriple() which takes an array of
//numbers as argument and a boolean value.
//It will return the array elements doubled if true or tripled if the boolean value is false.​

const doubleOrTriple = (numbers, isDouble) =>
  numbers.map((number) => (isDouble ? number * 2 : number * 3));

console.log(doubleOrTriple([1, 5, 10], true)); // 	-> [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false)); // 	-> [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)); // 	-> [-2, -4]
console.log(doubleOrTriple([0], false)); // 	-> [0]
console.log(doubleOrTriple([-1, 0, 1], true)); // 	-> [-2, 0, 2]

// TASK 7 Write a function named splitString() which takes a string and a
// number arguments and returns the string back split by the given number.
// Note: Return empty string if the string shorter than splitting number or the string length is not divisible by the given number.

const splitString = (string, number) => {
  if (string.length < number || string.length % number !== 0) return "";
  else {
    const result = [];
    for (let i = 0; i < string.length; i += number) {
      result.push(string.slice(i, i + number));
    }
    return result.join(" ");
  }
};

console.log(splitString("JavaScript", 5)); // 	-> "JavaS cript"
console.log(splitString("Java", 2)); // 		-> "Ja va"
console.log(splitString("Automation", 3)); // 	-> ""
console.log(splitString("Hello", 6)); // 		-> ""
console.log(splitString("12", 1)); // 		-> "1 2"
