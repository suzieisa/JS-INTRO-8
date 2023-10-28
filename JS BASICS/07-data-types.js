// strings which is used to store text data 
// strings can be stored as single or doube quotes but preferable dounble

let myName = 'John';
let myCity = "Chicago";
let myCompany = 'TechGlobal';

console.log(myName); // John
console.log(typeof myName); // string

let ssn = '000-00-0000';
let phoneNumber = '(312) 000-0000';

console.log(typeof ssn); // string
console.log(typeof phoneNumber); // string

// 2. numbers 
// we store numbers in variables wihtout single or double quotes
let age = 45;

console.log(age); 45
console.log(typeof age); // number

let year = 2023;
let balance = 100.5; // decimal number

console.log(balance); 100.5
console.log(typeof balance); // number 

// we can write some messages to clearly output our data to console
let fullName = 'John Doe';
let favNumber = 7;
let dailyExpense = 65.75;

console.log( 'The full name of the person is = ' + fullName);
console.log( 'The fav number of the person is = ' + favNumber);
console.log( 'The daily expense of the person is = ' + dailyExpense);

// 3. boolean
// it is used to store either true or false

let isTodaySaturday= true;
let areStudentInPerson= false;

let b1 = 5 > 3; // true
let b2 = 5 * 2 == 10; // true

console.log(isTodaySaturday);
console.log (areStudentInPerson);

console.log (typeof isTodaySaturday);
console.log (typeof areStudentInPerson);

// 4. undefined is when variable value is not initialized

let var1;
let var2 = undefined;

console.log(var1); // undefined
console.log(var2); // undefined
console.log (typeof var1);

//5. null is used to state that the variable does not point to any data or value

let var3 = null;
console.log(var3); // null
console.log(typeof var3);// object 
console.log (typeof null); // object

// BigIntergers
let number = 92345678912345678;

console.log(number); 92345678912345680 // not correct

let number2 = 92345678912345678n;
console.log(number2);
console.log(typeof number2);


let number =12345678123456789;

let number2 = 92345678912345678n;
console.log(number2); // bigint

let number2 = 92345678912345678n;
console.log(number2);
console.log(typeof number2); // bigint

let number3 = BigInt("92345678912345678");
console.log(number3); // 92345678912345678n
console.log(typeof number3); // bigint


let maxSafeNumber = Number.MAX_SAFE_INTEGER;
let minSafeNumber = Number.MIN_SAFE_INTEGER;

console.log(maxSafeNumber); // 9007199254740991 
console.log(minSafeNumber); // -9007199254740991

