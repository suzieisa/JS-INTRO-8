/* TASK 1

 Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
*/

let randNumber1 = Math.floor(Math.random() * 100) + 1

let randNumber2 = Math.floor(Math.random() * 100) + 1

let randNumber3 = Math.floor(Math.random() * 100) + 1

console.log(`${randNumber1}, ${randNumber2}, ${randNumber3}`);

let average = (randNumber1 + randNumber2 + randNumber3) / 3
console.log(`${average}`);

if (average >= 50) {
    console.log(true);
}

else {
    console.log(false);
}

/* TASK 2
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
*/

let number1= Math.floor(Math.random() * 3) + 1

let number2= Math.floor(Math.random() * 3) + 1

let number3= Math.floor(Math.random() * 3) + 1

console.log(`${number1}, ${number2}, ${number3}`);

if (number1 === number2  && number2 === number3) {
    console.log('TRIPLE MATCH');
}

else if (number1 === number2 || number2 === number3 || number1 === number3) {
    console.log('DOUBLE MATCH');
}

else  {
    console.log('NO MATCH')
}

/* TASK 3 
Write a function named as hasA() which takes a string word as an argument and returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
*/

function hasA(string) {
    if (string.toUpperCase().includes('A')) return true
    else return false;
}

console.log(hasA("Tech"));	// false
console.log(hasA("Global")); // true
console.log(hasA("")); 	// false	
console.log(hasA("Apple")); // true


// TASK 4 
function doubleOrTripleWord(string) {
    if (string.length % 2 === 0 ) return string + string + string
    else if (string.length % 2 === 1) return string + string 
}

console.log(doubleOrTripleWord("Tech")); // "TechTechTech"
console.log(doubleOrTripleWord("Apple")); //"AppleApple”
console.log(doubleOrTripleWord("")); //  ""
console.log(doubleOrTripleWord(" ")); // " "
console.log(doubleOrTripleWord("1")); // "11"
console.log(doubleOrTripleWord("22")); // "222222"

// TASK 5 
function firstWord(string) {  
    if (string.includes(' ')) return string.slice(0, string.indexOf(' '))
    else return string;
} 
console.log(firstWord("Hello World")); 		
console.log(firstWord("I like JavaScript")); 	
console.log(firstWord("Hello")); 		
console.log(firstWord("")); 		
console.log(firstWord("    ")); 

// TASK 6 
function lastWord(string) {
    if(string.includes(' ')) return string.slice(string.lastIndexOf(' ') + 1)
    else return string;
    
}
console.log(lastWord("Hello World")); 	
console.log(lastWord("I like apples"));	
console.log(lastWord("I like JavaScript")); 	
console.log(lastWord("Hello")); 		
console.log(lastWord("")); 		
console.log(lastWord("    ")); 

// TASK 7
function firstlastWord(string) {
    if(string.includes(' ')) return string.slice(0, string.indexOf(' ')) + string.slice(string.lastIndexOf(' ') + 1)
    else return string + string;

}
console.log(firstlastWord('Hello World'));
console.log(firstlastWord('I like Javascript'))
// TASK 8
function startVowel(string) {
    if (string.toLowerCase()[0] === "a") return true 
    else if(string.toLowerCase()[0] === "e") return true
   else if (string.toLowerCase()[0] === "i") return true
   else if (string.toLowerCase()[0] === "o") return true
    else if(string.toLowerCase()[0] === "u") return true
    else return false;
}


console.log(startVowel("Hello")); 	
console.log(startVowel("Apple")); 	
console.log(startVowel("orange")); 	
console.log(startVowel("")); 	
console.log(startVowel("    ")); 	
console.log(startVowel("123")); 

// TASK 9
function swap4 (string) {
    if (string.length <= 8) return ' ';
    if (string.length >= 8)
}

// TASK 10
let swap1 = ('Hello World');
function swapFirstLastWord(string) {
    const first = string.slice(0, string.indexOf(" "));
    const last = string.slice(string.lastIndexOf(" ") + 1);
    const middle = string.slice(string.indexOf(" "), string.lastIndexOf(" ") + 1);
    console.log(last + middle + first);
}

swapFirstLastWord(swap1);