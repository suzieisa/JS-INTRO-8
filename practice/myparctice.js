// PROBLEM 1
let num = Math.floor(Math.random() * (10) + 1);
console.log(num);
// x % 2 === 0         -> even        x % 2 !== 0         -> odd

if (num % 2 === 0) console.log('true');
else console.log('false');
////////////////////////////////////
let num2 = Math.floor(Math.random() * (10) + 1);

console.log(num2);

if (num2 % 2 !== 0) console.log('true')
else console.log('false');
////////////////////////////////

let number = Math.floor(Math.random() * (5 + 5 + 1)) - 5
console.log(number);

if (number < 0) console.log(false);
else console.log(true);
////////////////////////////////////////

let num3 = Math.floor(Math.random() * (5 + 5 + 1)) - 5
console.log(num3);

if (num3 < 0) console.log(true);
else console.log(false);
//////////////////////////////

let number4 = Math.floor(Math.random() * (50) +1)
console.log(number4);

if (number4 % 5 === 0) console.log(true);
else console.log(false);
/////////////////////////////////////////

let number5 = Math.floor(Math.random() * (50) + 1)
console.log(number5);

if (number5 % 7 === 0) console.log(true);
else console.log(false);
/////////////////////////////////////

let rand1= Math.floor(Math.random() * (10) + 1)
let rand2 = Math.floor(Math.random() * (10) + 1)
console.log(rand1);
console.log(rand2);
console.log(rand1 + rand2);

console.log(`The sum of the numbers = ${rand1 + rand2}`);
/////////////////////////////////////////

let rand3 = Math.floor(Math.random() * (10) + 1)
let rand4 = Math.floor(Math.random() * (10) + 1)
console.log(rand3);
console.log(rand4);
console.log(Math.abs(rand3 - rand4));
console.log(`The absolute difference is = ${Math.abs(rand3 - rand4)}`);
///////////////////////////////////////////////////////////////

let rdm1 = Math.floor(Math.random() * (10) + 1)
let rdm2 = Math.floor(Math.random() * (10) + 1)
console.log(rdm1);
console.log(rdm2);

console.log(`The product is ${rdm1 * rdm2}`);
///////////////////////////////////////////////////////

let _num1 = Math.floor(Math.random() * (10) + 1)
console.log(_num1);

console.log(`The square = ${_num1 ** 2}`);
////////////////////////////////////////////
let _num2 = Math.floor(Math.random() * (10) + 1)
console.log(_num2);

console.log(`The root = ${_num2 ** 3}`);
//////////////////////////////////////////

mile= Math.floor(Math.random() * (10) +1);

let kilometer = (mile * 1.6)

console.log(mile, kilometer);
///////////////////////////////////////////////

const rNum = Math.floor(Math.random() * (10) +1);
const rNum2= Math.floor(Math.random() * (10) +1);
const rNum3= Math.floor(Math.random() * (10) +1);

console.log(rNum);
console.log(rNum2);
console.log(rNum3);

console.log(Math.min(rNum, rNum2, rNum3));

/////////////////////////////////////////////////

let x =Math.floor(Math.random() * (10) +1);
let y =Math.floor(Math.random() * (10) +1);
let z =Math.floor(Math.random() * (10) +1);
let average = (x + y + z) / 3;

console.log(x);
console.log(y); 
console.log(z);
console.log(average);
///////////////////////////////////////////////////
let a = Math.floor(Math.random() * (10) + 1);
let b = Math.floor(Math.random() * (10) + 1);
let c = Math.floor(Math.random() * (10) + 1);
 
console.log(a);
console.log(b);
console.log(c);

console.log(Math.abs(Math.min(a,b,c) - Math.max(a,b,c)));
/////////////////////////////////////////////////////////

 let _Number = Math.floor(Math.random() * (100) + 1);
 console.log(_Number);
 
 if (_Number <= 25) console.log('1st quarter');
 else if (_Number <= 50) console.log('2nd quarter');
 else if (_Number <= 75) console.log('3rd quarter');
 else console.log('4th quarter');
 ///////////////////////////////////////////
let solution = Math.floor(Math.random() * (100) + 1);
console.log(solution);

if (solution <= 50) console.log('1st half');
else console.log(`2nd half`);
////////////////////////////////////////////

let numR = Math.floor(Math.random() * (10) + 1);
let numR2 =  Math.floor(Math.random() * (10) + 1);
console.log(numR, numR2);

let sum = numR + numR2

if (sum % 2 === 0) console.log(true);
else console.log(false);
///////////////////////////////////////////////////////////

let kilogram = Math.floor(Math.random() * (100) + 1);
console.log(kilogram);

let pound = kilogram * 2.2;

console.log(pound);
////////////////////////////////////////////////
let r = Math.floor(Math.random() * (3) + 1);
let s = Math.floor(Math.random() * (3) + 1);


console.log( r, s);

if (r === s) console.log(true)
else console.log(false);
//////////////////////////////////

let age= Math.floor(Math.random() * (100) + 1);
console.log(age);

if (age >= 16) console.log(true);
else console.log(false);
///////////////////////////////////////////

let n1 = Math.floor(Math.random() * (10) + 1);
let n2 = Math.floor(Math.random() * (10) + 1);
console.log(n1, n2);

if (n1 > n2) console.log(n1);
else console.log(n2);
///////////////////////////////////////////////
let n3 = Math.floor(Math.random() * (10) + 1);
let n4 = Math.floor(Math.random() * (10) + 1);
let n5 = Math.floor(Math.random() * (10) + 1);
console.log(n3,n4,n5)
console.log (Math.max(n3, n4, n5));
if (n3 >= n4 && n3 >= n5) console.log(n3);
else if (n4 >= n3 && n4 >= n5) console.log(n4);
else console.log(n5);
/////////////////////////////////////////////
let n6= Math.floor(Math.random() * (10) + 1);
let n7= Math.floor(Math.random() * (10) + 1);
console.log(n6, n7);

if (n6 < n7) console.log(n6);
else console.log(n7);
//////////////////////////////

function Area(x,y) {
return x * y;
}
console.log(Area(5,4));
console.log(Area(3,7));
console.log(Area(6,10));
////////////////////////////////

function rectanglePerimeter(x,y) {
    return 2 * (x + y);
}
console.log(rectanglePerimeter(5,4));
console.log(rectanglePerimeter(3,7));
console.log(rectanglePerimeter(6,10));
//////////////////////////////////////

function squareArea(x) {
    return x * x;
}

console.log(squareArea(5));
console.log(squareArea(3));
////////////////////////////

function squarePerimeter(x) {
    return 4 * x;
}
console.log(squarePerimeter(5));
///////////////////////////////
function doubleWord(string) {
    return string + string;
}
console.log(doubleWord('Tech'));
console.log(doubleWord('Global'));
///////////////////////////////////

function firstCharacter(word) {
    return word[0];

}
console.log(firstCharacter('Tech'));
console.log(firstCharacter('Global'));
/////////////////////////////////

function firstTwoCharacters(word) {
    if (word.length >= 2) return word.slice(0,2);
    return (word);
}

console.log(firstTwoCharacters('Tech'));
console.log(firstTwoCharacters('Global'));
console.log(firstTwoCharacters(''));
console.log(firstTwoCharacters(' '));
console.log(firstTwoCharacters('1'));
////////////////////////////////////////////////////
function lastCharacter(word) {
    return word[word.length-1];
}
console.log(lastCharacter('Tech'));
console.log(lastCharacter('Global'));
console.log(lastCharacter(' '));
console.log(lastCharacter('123'));
///////////////////////////////////////////////
function lastTwoCharacters(word) {
    if (word.length >= 2) return word.slice(word.length-2)
    return (word);
}
console.log(lastTwoCharacters('Tech'));
console.log(lastTwoCharacters('Global'));
console.log(lastTwoCharacters(' '));
console.log(lastTwoCharacters('1'));
console.log(lastTwoCharacters(''));
//////////////////////////////
function firstLast(word) {
    if (word.length >=2) return word[0] + word[word.length-1];
    return (word);
}

console.log(firstLast('Tech'));
console.log(firstLast('TechGlobal'));
console.log(firstLast(''));
console.log(firstLast('1'));
console.log(firstLast('abcde'));
////////////////////////////////////////////////////
function hasFive(word) {
    if (word.length >= 5) return true;
    return false;
}
console.log(hasFive('Tech'));
console.log(hasFive('Global'));
console.log(hasFive(''));
console.log(hasFive('12345'));
console.log(hasFive('hello'));
///////////////////////////////////////////
    function middle(str){
        if(str.length%2 === 0) return str.slice(str.length/2-1,str.length/2+1);
       else return str.charAt(str.length/2);
    }

console.log(middle('Tech'));
console.log(middle('global'));
console.log(middle('abcde'));
console.log(middle('1'));
console.log(middle('abc'));
console.log(middle('1234'));


function middle(word) {
    if (word.length % 2 === 0) return (word.slice(word.length / 2 - 1, word.length / 2 + 1));
    else if (word.length % 2 !== 0) return (word[((word.length - 1) / 2)]);
    else return (word);
}
console.log(middle('Tech'));
console.log(middle('global'));
console.log(middle('abcde'));
console.log(middle('1'));
console.log(middle('abc'));
console.log(middle('1234'));


////////////////////////////////////////////////////////////////

function longer(word1, word2) {
    if (word1.length >= word2.length) return word1;
    else return word2
}
console.log(longer('Tech', 'Global'));
console.log(longer('Hello', 'Hi'));
console.log(longer('Hello', 'World'));
///////////////////////////////////////////////////////

function shorter(string1, string2) {
    if (string1.length <= string2.length) return string1; 
    else if (string1.length === string2.length) return string2;
    else return string2;
}

console.log(shorter('Tech','Global'));
console.log(shorter('Hello', 'World'));
console.log(shorter('Hello', 'Hi'));
/////////////////////////////////////////////////
function concat(str1, str2) {
 return str1 + str2;
}

console.log(concat('Tech', 'Global'));
console.log(concat('Hello', 'World'));
console.log(concat('', 'abc'));
//////////////////////////////////////////////

function startVowel(word) {
    return 'aeiouAEIOU'.includes(word[0]);
}

console.log(startVowel('Tech'));
console.log(startVowel('apple'));
console.log(startVowel('abc'));

function concat(string1, string2) {
    return string1 + string2
    }
    
    console.log(concat('Tech','Global'));


    function lastTwoCharacters(string) {
        if (string.length >= 2) return string.slice(string.length -2);
        else return string; 
        }
        
        console.log(lastTwoCharacters('Tech'));