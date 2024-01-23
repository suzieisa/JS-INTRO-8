// What is immutable Javascript?

// Mutable and Immutable

// Mutable -> its easy to explain/ show
// Immutable -> hard to explain/ show

// V8 -> engine that runs your javascript code

// 1. All the primitive values are immutable by nature

let city = 'Chicago'; // Phicago
city[0] = 'P';
console.log(city); // Phicago or Chicago? -- You get Chicago

let count = 1;
count++; // Even though it looks like we are modifying original variabl, in reality we just make copy
console.log(copyCount); // 1 or 2? // 2

// Eventhough we can't modify we can reassign 
city = 'New York'

// 2. Arrays and Objects are mutable by nature 

let person = {
    name : 'John'
}
person.name = 'Kyle';
console.log(person); {name : 'Kyle'}

const names = ['John', 'Kyle'];

const modifiedNames = names.concat('Joe');
console.log(names);
console.log(modifiedNames);

// to push to names

function addUser(users) {
    users.push('Joe');
    return users;
}

//Functions need to pure as much as possible
//Without side effects

function addUserPurse(users) {
    const copyOfUsers = [...users];
    copyOfUsers.push('Joe');
    return copyOfUsers;
}


const users = ['John', 'Kyle']; // never modified
console.log(addUser(users)); ['John', 'Kyle', 'Joe']  //  has side effects
console.log(users); ['John', 'Kyle', 'Joe']['John', 'Kyle', 'Joe']['John', 'Kyle', 'Joe']

console.log(addUserPure(users));
console.log(users); // ['John', 'Kyle']


// Object 
const product = {
    name: 'Gifts for Thanksgiving',
    price: 19.99,
};

Object.freeze(product); // Makes your object immutable 

product.price = 9.99;
console.log(product);

console.log(Object.isFrozen(product)); // true 
console.log(Object.isFrozen({title: 'Some title'})); // false

const obj1 = {id: 1};
const obj2 = { ...obj1, title: 'Obj2 title'};

console.log(obj1);
console.log(obj2);

console.log(obj1.hasOwnProperty('id')) // true
console.log(obj2.hasOwnProperty('id')) // true 
console.log(obj2.hasOwnProperty('id'))
