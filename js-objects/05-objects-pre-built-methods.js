const student = { 
    fullName: 'John Doe',
    age: 18,
    course: 'Software Engineering'
};

// Keys: fullName, age, course 
// Values: John Doe, 18, Software Engineering
// Key-value pairs: 

// How to get all the keys of an object as an array?
const studentKeys = Object.keys(student); 
console.log(studentKeys); // [ 'fullName', 'age', 'course' ]

console.log(Object.keys(student)); // [ 'fullName', 'age', 'course' ]


// How to get all the values of an object as an array?
const studentValues = Object.values(student);
console.log(studentValues); // [ 'John Doe', 18, 'Software Engineering' ]

console.log(Object.values(student)); // [ 'John Doe', 18, 'Software Engineering' ]


// How to get all the key-value pairs of an object as an array?
const studentEntries = Object.entries(student);
console.log(studentEntries); // [ [ 'fullName', 'John Doe' ], [ 'age', 18 ], [ 'course', 'Software Engineering' ] ]

console.log(Object.entries(student));

/*
Create an object called country with the information below

name: 'Germany'
capital: 'Berlin'
population: 83000000

Log all thre keys
Log all the values
Log all the entries
*/

const country = {
    name: 'Germany',
    capital: 'Berlin',
    population: 83000000
};

console.log(Object.keys(country)); // [ 'name', 'capital', 'population' ]
console.log(Object.values(country)); // [ 'Germany', 'Berlin', 83000000 ]
console.log(Object.entries(country)); // [ [ 'name', 'Germany' ],[ 'capital', 'Berlin' ],[ 'population', 83000000 ]]
