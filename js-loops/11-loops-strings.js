// Count how many vowel letters you have in the string 

const school = 'TechGlobal';
let countV = 0;



for(let i = 0; i <= school.length-1; i++){
    console.log(school[i]); // This gives you each letter one by one
}
 
// 1st solution

for(let i = 0; i <= school.length-1; i++){
    let letter = school[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
    countV++
}
console.log(countV); // 3

// 2nd solution

for(let i = 0; i <= school.length-1; i++){
    if('AEIOUaeiou'.includes[i]) countV++;
}
console.log(countV); // 3


// random problem
let countN = 0;
for(const x of 'Suzanne') {
    if(x === 'n') countN++;

} console.log(countN); // 2

/* Assume you are given a string and asked to reverse it THIS IS ONE OF THE MOST INTERVIEWED QUESTIONS **

Adam    -> madA
Hello   -> olleH

The reversed 'Adam' is 'madA'.
*/
// 1st solution

let word = 'Hello';
let reversedWord = ' ';

for(let i = word.length -1; i >= 0; i--){
    reversedWord += word[i]
}

console.log(reversedWord); //  olleH

// 2nd solution
reversedWord = word.split('').reverse(). join('');
console.log(`The reversed ${word} is ${reversedWord}`)


/*
*** ONE OF THE MOST ASKED INTERVIEW QUESTION!!!
Assume you are given a string and asked to find if it is palindrome
Palindrome means a word or sentence reads the same forward and backward.
This program should be case-insensitive

civic   -> The 'civic' is PALINDROME!
madam   -> The 'madam' is PALINDROME!
Abba    -> The 'Abba' is PALINDROME!
12321   -> The '12321' is PALINDROME!

abc     -> The 'abc' is NOT PALINDROME!
*/

let str = 'Abba'; 
let strReversed = 'abbA';

if(str.toLowerCase() === strReversed.toLowerCase()) console.log(`The ${str} is PALINDROME! `);
else console.log(`The ${str} is NOT PALINDROME!`);


