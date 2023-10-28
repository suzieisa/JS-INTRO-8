let name = 'Alex';


// length property can be used to get the number of characters in a string
console.log(name.length); // 4
console.log(typeof name.length); // number

// How to get specific characters from a string
let thirdChar = name[2];
let firstChar = name[0];

console.log(thirdChar); // e
console.log(firstChar); // A

console.log(name[3]); // x

// Getting the last character from a string dynamically - use length - 1 as your index
let lName = 'Smith';
console.log(lName[lName.length - 1]); // h


// charAt() function can also be used to get specific character from a string by giving an index as an argument
let city = 'Chicago';
console.log(city[2]); // i
console.log(city.charAt(2)); // i


// The difference between [index] and charAt(index)
console.log(city[-5]); // undefined
console.log(city.charAt(-5)); // '' empty string 
console.log(city[100]); // undefined
console.log(city.charAt(100)); // '' empty string 


// charCodeAt() -> it returns the ASCII representation of the given character
let country = 'CANADA';
console.log(country.charCodeAt(1)); // 65
console.log(country.charCodeAt(0)); // 67
console.log(country.charCodeAt(2)); // 78

console.log(typeof country.charCodeAt(3)); // number
console.log(country.charCodeAt(15)); // NaN
console.log(typeof country.charCodeAt(15)); // number

console.log(typeof country[5]); // string
console.log(typeof country[15]); // undefined
console.log(typeof country.charAt(15)); // string