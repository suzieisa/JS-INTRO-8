/*
English Exam
Passing score is 60 or above

Write a program to check pass or failed
60 or above -- PASS
else-- FAIL
*/

let english_exam_score = 59; // any value between 0-100 

if(english_exam_score >= 60) {  
    console.log('PASS');
}
else {
    console.log('FAIL');
}

// another way to do it 
if(english_exam_score < 60) {
    console.log('FAIL');
}
else {
    console.log('PASS');
}

/* Retrement age is 65 
write a program to check if someone is retired or not
age is greater than or equal to 65 = retired
*/

let age = 67

if(age >= 65) {
    console.log('retired')
}

else {
    console.log('not retired')
}


/* You will be given a number
Write a program if the number is even or odd
*/

let number = Math.floor(Math.random() * 10); // 0 to 9 both inclusive
console.log(`The random number is ${number}.`);
if(number % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}
if(number % 2 !== 0) {
    console.log('ODD');
}
else {
    console.log('EVEN');
}

/* Generate a random number between 0 and 1 
Print the number is 0 
print the number is 1 
*/ 

let number2 = Math.floor(Math.random() * 2)
console.log(`The random number is ${number2}.`)


if(number2 === 0) {
    console.log(`The number is zero`);
}
else {
    console.log(`The number is one`);
}

