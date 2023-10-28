RECAP 10/1

let var1 = 25; // number
let var2 = "Alex"; // string
let var3 = '123'; // string
let var4 = 'false'; // string
let var5 = true; // boolean
let var6 = 5 > 3; // boolean as it evaluates to true
let var7; // undefined
let var8 = undefined; // undefined
let var9 = null; // null but typeof operator returns object
let var10 = 83476539487659384756934n; // bigint
let var11 = BigInt('83476539487659384756934'); // bigint
// Reference Types
const elements = [ 'Phone', 'Computer', 'Camera' ];
console.log(elements); // [ 'Phone', 'Computer', 'Camera' ]
console.log(elements[1]); // Computer
elements[2] = 'Webcam'; // the index of 2 is Webcam from now on
console.log(elements[2]); // Webcam
console.log(elements); // [ 'Phone', 'Computer', 'Webcam' ]
// How many elements you have in the array - size
console.log(elements.length); // 3
const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 18,
    program: 'Software Testing',
    schoolName: 'TechGlobal School'
};
console.log(student);
// Retrieving the info: student['age'] or student.age;
console.log(student.age);
console.log(student['program']); // Software Testing
console.log(student.schoolName);
console.log(student["firstName"]);
console.log(student['lastName']);
// Updating the info
student.program = 'Software Engineering';
console.log(student.program); // Software Engineering
// Remove a property with its key-value
delete student.firstName;
delete student.lastName;
delete student['program'];
delete student['age'];
console.log(student.program); // undefined
console.log(student.age); // undefined
console.log(student); // { schoolName: 'TechGlobal School' }




console.log(Math.floor(Math.random() * (50-0 + 1)) + 0); 




