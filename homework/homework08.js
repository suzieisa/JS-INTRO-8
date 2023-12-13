// TASK 1 Write a function named hasLowerCase() which takes a 
// string argument and returns true if there is a lowercase letter and false if it there isn’t. 

const hasLowerCase = (string) => string.split('').filter(i => i >= 'a' && i <= 'z').length > 0
// split string into an array of each element
// filter(use index to check for each lower case letter)
// if length is grater than 0 // will return true or false
console.log(hasLowerCase("")) // 		-> false
console.log(hasLowerCase("JAVASCRIPT")) // 	-> false
console.log(hasLowerCase("hello")) // 		-> true
console.log(hasLowerCase("125$")) // 		-> false
console.log(hasLowerCase("   a   ")) // 		-> true


// TASK 2 Write a function named noZero() which takes an array of numbers 
// as argument and returns the array back with all zeros removed.

const noZero = (numbers) => numbers.filter(num => num !== 0)


console.log(noZero( [1, 1, 10])) // 	-> [1, 1, 10]​
console.log(noZero([0, 1, 10])) // 	-> [1, 10]
console.log(noZero([0, 0, 0])) // 	-> []
console.log(noZero([10, 100, 0])) // 	-> [10, 100]
console.log(noZero([1])) // 		-> [1]

// TASK 3 Write a function named numberAndSquare() which takes an 
//array of numbers as argument and returns a multidimensional array with all numbers squared. 

const numberAndSquare = (numbers) => numbers.map(num => [num, num ** 2]);


console.log(numberAndSquare([1, 2, 3])) //	-> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])) //	-> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])) //	-> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])) //	-> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])) //	-> [[0, 0], [1, 1], [-10, 100]]


// TASK 4 Write a function named containsValue() which takes a string array and a 
// string as arguments and returns a boolean value. Search the string variable 
// inside of the array and return true if it exists in the array. If it doesn’t exist, return false. ​

// NOTE: Assume that array size is at least 1.​
// NOTE: The method is case-sensitive.

const containsValue = (arr, str) => arr.includes(str)

//const containsValue = (arr, str) => arr.reduce((result, curr) => curr === str ? result = true : result, false);

console.log(containsValue(["abc", "foo", "javascript"], "hello")) // 			-> false
console.log(containsValue(["abc", "def", "123"], "Abc")) // 			-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")) //	-> true

// TASK 5 Write a function named reverseSentence() which takes a string as argument and 
// returns the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".


const reverseSentence = (string) => {
    if(!string.trim().includes(' ')) return "There is not enough words!"
    let result = string.split(' ').reverse().join(' ') // have to split by space to split every word 
    return result.slice(0,1).toUpperCase() + result.slice(1).toLowerCase()
}

console.log(reverseSentence("Hello")) // 		-> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")) // 		-> "Fun is javascript"
console.log(reverseSentence("This is a sentence")) // 	-> "Sentence a is this"

// TASK 6 Write a function named removeStringSpecialsDigits() 
// which takes a string as argument and return a string without the special characters or digits.


const removeStringSpecialsDigits = (string) => string.split('').filter(x => (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z' || x === ' ')).join('')

// have to check if x is = to a " " so it doesnt remove it 
console.log(removeStringSpecialsDigits("123Javascript #$%is fun")) // 	-> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress")) // 		-> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")) // 	-> "Automation"



// TASK 7 Write a function named removeArraySpecialsDigits() which takes a 
// string array as argument and return back without the special characters or digits.
const removeArraySpecialsDigits = (stringArray) => stringArray.map(string => string.split('').filter(x => (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z')).join(''))


console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])) // 	-> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])) // 	-> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])) // 	-> ["Automation", "tool"]


// TASK 8 Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.

const getCommons = (array1, array2) => {
    array1 = array1.filter(word => array2.includes(word));

        let result =[];

array1.forEach(word => {
    if(!result.includes(word)) result.push(word)
})
return result
}


// filter out array1 that is included in array 2 
// need to remove duplicates though 
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )) // 		-> []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )) // 	-> ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )) // 	-> ["C#"]



// TASK 9 Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
// NOTE: If the element is existing of x or X letters only, then completely remove the element.


const noXInVariables = (array) => {
array = array.map(x => {
    if(typeof x === 'string') {
        return x.split('').filter(letter => letter.toLowerCase() !== 'x').join('')
    }else{
            return x
    }
    })
    return array.filter(letter => letter)
}

console.log(noXInVariables(["abc", 123, "#$%"])) // 		-> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])) // 		-> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])) // 		-> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])) // 	-> ["yyy", "ABC"]
