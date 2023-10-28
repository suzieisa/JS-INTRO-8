
/* Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/


let string = '5'
if (65 <= string.charCodeAt() && 90 >= string.charCodeAt()) console.log('uppercase');
 else if (97 <= string.charCodeAt() && 122 >= string.charCodeAt()) console.log('lowercase');
 else console.log('invalid input');
/////////////////////////////////////////////////////////////////////////////////////

/*
Question 6

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/



