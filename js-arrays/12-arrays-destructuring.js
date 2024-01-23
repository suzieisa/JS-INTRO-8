const top3Movies = ['Lord of The Rings', 'Rocky', 'Star Wars'];

// const favMovie = top3Movies[0];
// const favSecondMovie = top3Movies[1];
// const favThirdMovie = top3Movies[2];

// instead of above 3 lines you can use destructuring an array

const [ favMovie, favSecondMovie, favThirdMovie ] = top3Movies;

console.log(favMovie); // Lord of The Rings

console.log(`My favorite movie is '${favMovie}'.`) // My favorite movie is 'Lord of The Rings'.


const numbers = [1, 10, 2, 7, 13, 20];

// destructure index of 1, 3, 4
// when you dont want to include an element put a comma in place of it 

const [, second, third, fourth, , ] = numbers;

console.log(second); // 10
console.log(third); // 2
console.log(fourth); // 7 