let num1 = 3;
let num2 = 5;
let num3 = 3;
let num4 = '3';
let num5 = '5';

// == checks if two variable values are equal. Data types are not considered
console.log(num1 == num3); // 3 == 3 true
console.log(num1 == num2); // 3 == 5 false

console.log(num1 == num4); // 3 == '3' true
console.log(num1 + 2 == num5); // 5 == '5' true

// === checks if two variable values and their data types are equal. STRICT EQUALITY
console.log(3 === 3); // true
console.log(3 === '3'); // false
console.log(3 === '5'); // false


// != vs !== are used to check if two variable are not equal
console.log(3 != 3); // false
console.log(5 !== 5); // false

console.log(3 != 7); // true
console.log(5 != '7'); // true

console.log(3 !== '4'); // true
console.log(3 !== '3'); // true
console.log(3 !== 3); // false

// > vs < are used check if variables are less than or greater than each other
console.log(5 > 2); // true
console.log(35 < 25 * 2); // true

// >= vs <= are used check if variables are less than or equal or greater than or equal each other
console.log(3 < 3); // false
console.log(3 <= 3); // true
console.log(2 * 5 + 3 >= 13); // true

//TRICKY PART
console.log('3' + '5' > 30); // true

console.log(true > false); // true as true is considered as one and false is considered as zero
console.log('abc' > ''); // true as an actual text is considered as true while empty string is considered as false
console.log(null === undefined); // false as they are different data types
console.log(null == undefined); // true as both null and undefined are considered as false

console.log((10 >= 10) < 20); // true