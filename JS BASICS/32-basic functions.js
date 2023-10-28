/*
Write a function called isPositive that takes an argument and returns true if the arg is positive, and false otherwise.

isPositive(5)   -> true
isPositive(0)   -> false
isPositive(-7)   -> false
isPositive(15)   -> true
isPositive(123)   -> true

Positive numbers are the numbers greater than zero
Negative numbers are the numbers less than zero
Zero is not a negative or a positive number, it is neutral
*/



function isPositive(arg) {
    return arg > 0;
}
    
console.log(isPositive(5));

function isNegative(number) {
        return number < 0;
}

console.log(isNegative(5));
console.log(isNegative(0)); // false 
console.log(isNegative(-7));
console.log(isNegative(15));
console.log(isNegative(123));

// can reuse same variable names for functions 


/*
Write a functions called getFirstChar that takes an argument and returns the first character from the argument

getFirstChar("Hello")       -> "H"
getFirstChar("12345")       -> "1"
getFirstChar("")            -> undefined
getFirstChar("   ")         -> " "
*/

function getFirstChar(word) {
    return word[0];
}

console.log(getFirstChar('Hello'));



/*
Write a functions called getFirstLastChar that takes an argument and returns the first and last 
characters from the argument

getFirstLastChar("Hello")       -> "Ho"
getFirstLastChar("12345")       -> "15"
getFirstLastChar("")            -> NaN
getFirstLastChar("   ")         -> "  "
getFirstLastChar("a")           -> "aa"
*/

function getFirstLastChar(word) {

    return word[0] + word[word.length-1];

}

console.log(getFirstLastChar('Hello'));
console.log(getFirstLastChar(''));
console.log(getFirstLastChar('x'));
console.log(getFirstLastChar("a"));

function average5 (arg1, arg2, arg3, arg4, arg5) {
   return (arg1 + arg2 + arg3 + arg4 + arg5) / 5;

}
    
console.log(average5(1,2,3,4,5));

/*
Write a function called average5 that takes 5 arguments and returns their average

average5(1, 2, 3, 4, 5)     -> 3
average5(3, 7, 10, 5, 5)     -> 6
*/

function average5(a1, a2, a3, a4, a5) {
    return (a1 + a2 + a3 + a4 + a5) / 5;
}

console.log(average5(1, 2, 3, 4, 5)); // 3
console.log(average5(3, 7, 10, 5, 5)); // 6