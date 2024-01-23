// recap of array destructuring

const colors = ['red', 'purple', 'orange'];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // red

for(const letter of secondColor) {
    console.log(letter);
}

console.log(thirdColor.split('')); // [ 'o', 'r', 'a', 'n', 'g', 'e' ]

const user = {
    username: 'john-doe',
    password: 'test1234',
    email: 'john@gmail.com',
    age: 45,
    city: 'Chicago'
};

const {username, password, email} = user;
console.log(username); // john-doe
console.log(password); // test1234
console.log(email); // john@gmail.com
