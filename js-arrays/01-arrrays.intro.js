const cities = ['Chicago, Miami, Toronto'];

console.log(cities); 
console.log(typeof cities); // object

console.log(cities.length); // 3

console.log(cities[0]); // Chicago
console.log(cities[-1]); // undefined
console.log(cities[5]); // undefined

cities[1] = 'Berlin'; // updates the Miami to Berlin

console.log(cities[1]);

// Creating an array from a string using split() method

let name = 'John Doe';

// each letter in an array
const characters = name.split('');
console.log(characters);// [ 'J', 'o', 'h','n', ' ', 'D','o', 'e']


let sentence = 'I like JS arrays';
const words = sentence.split(' '); // splitting from the ' ' space 
console.log(words); // [ 'I', 'like', 'JS', 'arrays' ]

// Count how many words you have in a sentence 
let sent = 'the conflicts with GIT was hard but i am happy to be back to JS';
console.log(sent.split(' ').length); // how many words we have in the sentence 






