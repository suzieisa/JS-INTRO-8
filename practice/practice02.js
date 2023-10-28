// Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                 -> "APPLE"
"Java is not a scripting programming language"  	 -> "JavaScript"
"I don't like books" 			                     -> "I like books"

let sentence1 = 'I like apples and oranges';
console.log(sentence1.slice(7,13).toUpperCase());


structuredClone.slice(firstIndex, LastIndex); // firstIndex --


let sentence2 = 'JavaScript is not a scripting programming language'
console.log(sentence2.slice(0,10));


let sentence3 = "I don't like books";
console.log(sentence3.replace("don't ", ''));


/* 
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O
*/

    
let s1 = "JavaScript";
console.log('The length is = ' + s1.length);
console.log('The first character is = ' + s1[0]);
console.log(s1[s1.length-1]);

/* Assume that you are given a String of any odd length. 
Find the middle character for the given String. 
Test Data 1:
let s2 = "x";

Expected Result 1:
"x"

Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"

Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"
*/

/* 
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""

Test Data 2:
let s3 = "abcd";


Expected Result 2:
"bc"

Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/


let s3 = 'abcd';
console.log(s3.slice(1,3));

let s4 = 'JavaScript'
console.log(s4.slice(4,6));

let s5 = ''
console.log(s5.slice(0,0));

/* Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 

Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s6 ='abcd';
console.log('The first two characters are = ' + s6.slice(0,2));
console.log('The last two characters are = ' + s6.slice(2,4));
console.log('The other characters are = '+ s6.slice(1,3));

let s7 = 'JavaScript'
console.log('The first 2 characters are = ' + s7.slice(0,2));
console.log('The last 2 characters are = ' + s7.slice(8,10));
console.log('The other characters are = ' + s7.slice(2,8));


/*
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1:
let s7 = "";

Expected Result 1:
false


Test Data 2:
let s7 = "red";

Expected Result 2:
false



Test Data 3:
let s7 = "green";

Expected Result 3:
false



Test Data 4:
let s7 = "xxbluexx";

Expected Result 4:
true
*/


Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""


Test Data 2:
let s9 = " ";

Expected Result 2:
" "


let sentence = "Apple like I";
console.log(sentence.replace("Apple like I"));



Test Data 4:
let s9 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"

/* Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns 
the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to 
Fahrenheit. 
    Multiply the Celsius temperature by 9.
    Divide the result by 5.
    Add 32 to the result.
*/

function celciusToFarenheit(celcius) {

	const farenheit = (celcius * 9) / 5 + 32;
	return farenheit;
}

console.log(celciusToFahrenheit(20));


/* Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.



Examples:
rectangleArea(5, 4) 	-> 20
rectangleArea(3, 7) 	-> 21
rectangleArea(6, 10) 	-> 60

rectanglePerimeter(5, 4) 		-> 18
rectanglePerimeter(3, 7) 		-> 20
rectanglePerimeter(6, 10) 	    -> 32
*/

function rectangleArea(x,y){
	return x * y;
}
console.log(rectangleArea(5,4));

function rectanglePerimeter(x,y){
	return (2 * (x + y));
}

console.log(rectanglePerimeter(5,4));





/* Write 2 functions named as squareArea() and squarePerimeter() which calculate the area and perimeter of a square when invoked.

NOTE: Assume the side of the square is x.

Conversion Formula:
Area: x * x
Perimeter 4 * x

Examples:
squareArea(5) 	-> 25
squareArea(3) 	-> 9
squareArea(6) 	-> 36

squarePerimeter(5) 	-> 20
squarePerimeter(3) 	-> 12
squarePerimeter(6) 	-> 24
*/

function squareArea(x){
	return (x * x);
	
}
console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

function squarePerimeter(x){
	return (4 * x);
}

console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));





