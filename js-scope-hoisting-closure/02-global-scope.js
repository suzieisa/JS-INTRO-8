// globacl scope was introduced before ES6
// globally declared variable
const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

//Print each element to the console
for(const fruit of fruits) {
    console.log(fruit);
}

// count how many elemnts have 'apple' -> ignoirng cases // 2

let countApple = 0;

for(const fruit of fruits) {
    if(fruit.toLowerCase().includes('apple')) countApple++;
}

console.log(countApple); // 2

function print() {
    console.log(fruits);
}

print(); // [ 'Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon' ]
// Globally declared variables
var x = 10;
let y = 11;
const z = 12;

// Global access is allowed
console.log(x);
console.log(y);
console.log(z);

// Aceess them in a block
{
    console.log(x);
    console.log(y);
    console.log(z);
}

// Access them in a function- IINFE : this quickly creates and invokes functions
(function random() {
    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
})();



