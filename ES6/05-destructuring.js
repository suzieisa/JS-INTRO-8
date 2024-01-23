// arrays 

const user_info = ['johndoesxxx' , 'johndoe@gmail.com', 'John12345'];

// Before ES6
const password = user_info[2];
const username = user_info[0];
const email = user_info[1];

// Better way with ES6
const [uname, emailAddress, pass] = user_info;

console.log(uname);
console.log(emailAddress);
console.log(pass);

// objects 
const person = {
    fName: 'John',
    lName: 'Doe',
    userName: 'johndoexx',
    email: 'johndoe@gmail.com',
    password: 'John12345'
};

// Before ES6
// const fName: = person.name 