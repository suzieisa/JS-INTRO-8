
/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8]) 		-> 3
firstPos([-2, 0, -7, 10, -5]) 	    -> 10
firstPos([1, 2, 3, -2])             -> 1
*/

function firstPos(array) {
    for(const num of array) {
        if (num > 0 ) return num; 
    
    }  
    
}

console.log(firstPos([0, 3, -9,  5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2])); 

/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8]) 		    -> -9
lastNeg([-2, 0, -7, 10, -5]) 	    -> -5
lastNeg([1, 2, 3, -2])              -> -2
*/

function lastNeg(array) {
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] < 0) return array[i]; 
  }
}

console.log(lastNeg([0, 3, -9,  5, 8]));		    
console.log(lastNeg([-2, 0, -7, 10, -5])); 	   
console.log(lastNeg([1, 2, 3, -2])); 

/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(array) {
let maxNumber = -Infinity
    for(const num of array) {
        if(num > maxNumber) {
            maxNumber = num
        }
    }
    return maxNumber;
};

console.log(max([0, 3, -9,  5, 8])) 	 //    -> 8
console.log(max([-2, 0, -7, 10, -5])) 	// -> 10
console.log(max([1, 2, 3, -2])) //          -> 3
console.log(max([-5, -2])) //               -> -2


/* Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more elements having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) 	    -> "Banana"
firstLongest(["purple", "yellow", "orange"]) 	    -> "purple"
*/

function firstLongest(array) {
    let longWord = '';
    for(const word of array) {
        if(word.length > longWord.length) {
            longWord = word;
        }
    }
    return longWord;

};

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));


/* Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	    -> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		    -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] 

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"])); */

function commonElements(arr, arr2) {
    const newArr = [];
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr2.length; j++) {
            if(arr[i] === arr2[j]) newArr.push(arr[i]);
        }
    }
    return newArr;
}
  

console.log(commonElements(([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])));

// 2nd Solution
function commonElements(arr1, arr2){
    const common = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])) common.push(arr1[i]);
    }
    return common;
}





