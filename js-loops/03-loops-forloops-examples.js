// output each character from TechGlobal

let school = 'TechGlobal';

for ( i = 0 ; i <= school.length - 1; i ++){
    console.log(school[i]);
}

// also can do this with i < school.length

/////////////////////////////////////////////////

// Count how many 'l' letters you have in the word Techglobal

let counterL = 0;


for (i = 0; i <= school.length- 1; i++) {
    if(school[i] === 'l') counterL++;
   
}
console.log(counterL);
//////////////////////////////////////////////////
 let str = 'APPLE Pineapple'; // count 'p' but ignore cases // 5 

 let counterP= 0;

 for (i = 0; i <= str.length -1; i ++) {
    if(str[i] === 'p' || str[i] === 'P') counterP++
 }

 console.log(counterP);
 ////////////////////////////////////////////////////
/* Write a program that outputs numbers from 1 to 30 (both inclusive)
 If number is divided by 3, then output "Fizz" instead of number
 if number is divided by 5, then output "Buzz" instead pf number
 if number is divided by both 3 and 5, then output "FizzBuzz" */

for (i = 1; i <= 30; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if(i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// always make sure your first line will account for both bc if it doesnt it will automatically check 
// the first line and not continue to the ret specifically number 15 and 30 