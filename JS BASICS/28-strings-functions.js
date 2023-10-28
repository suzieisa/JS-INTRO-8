// Extracting Partial Strings

let sentence = 'I like JavaScript';
 
// One character -- []
// Partial string -- one or more characters either slice (), or substring 

console.log(sentence.slice(7)); //Javascript

console.log(sentence.slice(2,6)); // like 

// NOTE: If you need to extract a partial string from the middle of original string then you need to use both indexes (start and end)

console.log(sentence.slice (11)); // script // do not have to put 17 because it ends 
console.log(sentence.slice(7,11)); // Java 


//substring()
console.log(sentence.substring(7)); //Javascript

// NOTE: If you need to extract a partial string from the middle of original string then you need to use both indexes (start and end)

console.log(sentence.substring (11)); // script // do not have to put 17 because it ends 
console.log(sentence.substring(7,11)); // Java 

// slice() vs substring()
let name = 'Alexander';
console.log(name.substring(-5)); // Alexander
console.log(name.slice(-5)); // ander (coundting backwards)

// The difference is using these methods with (-indexes)
// -negative indexes with substrings will always be considered as starting with 0

console.log(name.substring(-5, -2)); // interpreting it as (0,0) so defaults to empty string
console.log(name.slice)

let city = 'Chicago';

// Retrieve and combine first 2 and last 2 of this variable

console.log(city.substring(0,2)); // Ch
console.log(city.substring(5)); // go
 
// Best to use SLICE not substring - preferred method 

console.log(city.slice(0,2) + city.slice(5)); // Chgo
console.log(city.slice(0,2) + city.slice(-2); // 