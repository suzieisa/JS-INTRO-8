// PRIME NUMBER 



const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d+=2;
    }

    return true;

}

const doubleOrTripleWord = (string) => {
    if(string.length % 2 === 0) return `${string}${string}${string}`;
    else return `${string}${string}`;
}

console.log(doubleOrTripleWord("Tech")); //  -> "TechTechTech" -
console.log(doubleOrTripleWord("Apple")); //  -> "AppleApple”
console.log(doubleOrTripleWord("")); //  -> ""
console.log(doubleOrTripleWord(" ")); //  -> " "
console.log(doubleOrTripleWord("1")); //  -> "11"
console.log(doubleOrTripleWord("22")); // -> "222222"

const firstLastWord = (string) => {
    let newString = string.split(' ');
    
    if (string === '') return '';

    else return `${newString[0]}${newString[newString.length - 1]}`
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));


const hasVowel = (string) => string.split('').filter((character) => ['a','e','i','o','u'].includes(character.toLowerCase())).length > 0

console.log(hasVowel("")); // false
console.log(hasVowel("Javascript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234")); // false

console.log(hasVowel("ABC")); //true

const startVowel = (string) => {
let vowels = ['a', 'e', 'i', 'o' , 'u'];

return vowels.some(vowel => string.toLowerCase().startsWith(vowel))

};

console.log(startVowel("Hello")); // false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange")); // true
console.log(startVowel("")); // false
console.log(startVowel(" ")); // false

const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a,b) => a-b)[1];



const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
  
// have to make sure case sensitive and make it lowercase()
// if you split the string it will split into an array of each character 
// if its reverse
// and join back 
// set them equal to each other it will return false or true 



console.log(isPalindrome("Hello")) // -> false 
console.log(isPalindrome("Kayak")) // -> true 
console.log(isPalindrome("civic")) // -> true 
console.log(isPalindrome("abba")) // -> true 
console.log(isPalindrome("ab a")) // -> false 
console.log(isPalindrome("123454321")) // -> true 
console.log(isPalindrome("A")) // -> true 
console.log(isPalindrome("")) // -> true


console.log(middleInt(1, 2, 2)) //    -> 2
console.log(middleInt(5, 5, 8)) //    -> 5
console.log(middleInt(5, 3, 5)) //    -> 5
console.log(middleInt(1, 1, 1)) //    -> 1
console.log(middleInt(-1, 25, 10)) // -> 10

const reverseStringWords = (string) => {
    let stringArray = string.trim().split(' ');

    for(let i = 0; i < stringArray.length; i++) {
      let reversedWord = stringArray[i].split('').reverse().join('')
      stringArray[i] = reversedWord;
    }
    return stringArray.join(' ');
}


console.log(reverseStringWords("Hello World"))  // 		-> "olleH dlroW"
console.log(reverseStringWords("I like JavaScript"))  // 	-> "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello"))  //		        -> "olleH"
console.log(reverseStringWords(""))  // 			        -> ""
console.log(reverseStringWords("	"))   	//		    -> ""

  
function getMultipleOf5(num1, num2) {
    let numbers = [];
  
    for (let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--) {
      if (i % 5 === 0) numbers.push(i);
    }
    if (num1 < num2) return numbers.reverse();
    return numbers;
  }
console.log(getMultipleOf5(3, 17)) //  	-> [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)) //  	-> [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)) //  	-> [ 5 ]
console.log(getMultipleOf5(2, 4)) //  	-> [ ]

const countPos = (numArray) => numArray.reduce((countP, curr) => curr > 0 ? countP + 1 : countP , 0)


console.log(countPos([-45, 0, 0, 34, 5, 67]))  // 	    -> 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])) //  -> 4
console.log(countPos([0, -1, -2, -3])) //   		    -> 0

const averageOfEdges = (num1, num2, num3) =>
  (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2;

console.log(averageOfEdges(0, 0, 0)); // -> 0
console.log(averageOfEdges(0, 0, 6)); // -> 3
console.log(averageOfEdges(-2, -2, 10)); // -> 4
console.log(averageOfEdges(-3, 15, -3)); // -> 6
console.log(averageOfEdges(10, 13, 20)); // -> 15




const countNeg = (array) => array.reduce((countN, number) => number < 0 ? countN + 1 : countN, 0);

console.log(countNeg([-45, 0, 0, 34, 5, 67])) //   	    -> 1
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])) //)   -> 2
console.log(countNeg([0, -1, -2, -3])) //   		    -> 3


const countMultipleWords = (array) => array.reduce((countWords, curr) => curr.trim().includes(' ') ? countWords + 1 : countWords ,0)


 
// REMEMBER YOU CANNOT USE TRIM WITH ARRAY IT IS A STRING FUNCTION ONLY
// SO REDUCE AND THEN USE IT AFTER WITH CURR
    console.log(countMultipleWords([ "foo", "", "	", "foo bar", " 	foo" ])) //   	    -> 1
    console.log(countMultipleWords([ "foo", "bar", "foobar", " 	foobar   " ])) //   	    -> 0
    console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])) //  -> 4
    console.log(countMultipleWords([ ])) //   						                        -> 0


    //TASK 29 Write a function named noA() which takes an array of strings as argument and 
//will return a new array with all elements starting with "A" or "a" replaced with "###".

const noA = (strArr) => strArr.map(string => (string.toLowerCase().startsWith('a')) ? '###' : string)


console.log(noA(["javascript", "hello", "123", "xyz"])) // -> ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])) // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) //  ["###", "###", "###", "###", "###"]


const no13 = (numArray) => numArray.map(num => num === 13 ? 0 : num)


console.log(no13([1, 2, 3 ,4])) //   		 -> [1, 2, 3 ,4] 
console.log(no13([13, 2, 3])) //   		     -> [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])) //  -> [0, 0, 0, 0, 0]
console.log(no13([])) //   			         -> []


const getEvens = (num1 , num2) => {
        const evenNum = [];
        const start = Math.min(num1, num2);
        const end = Math.max(num1, num2);
      
        for (i = start; i <= end; i++) {
          if (i % 2 === 0) evenNum.push(i);
        }
        return evenNum;
      };
      

      console.log(getEvens(2, 7)) //  	-> [ 2, 4, 6 ]
      console.log(getEvens(17, 5)) //  	-> [ 6, 8, 10, 12, 14, 16 ]
      console.log(getEvens(4, 4)) //  	-> [ 4 ]
      console.log(getEvens(3, 3)) //  	-> [ ]


      const firstLastWord = (string) => {
        let word = string.split(' ');
        if(string === '') return ''
        else return word[0] + word[word.length - 1];
        
        }


console.log(firstLastWord("Hello World")) //   	        -> "HelloWorld"
console.log(firstLastWord("I like JavaScript")) //  	-> "IJavaScript"
console.log(firstLastWord("Hello")) //   		        -> "HelloHello"
console.log(firstLastWord("")) //   			        -> ""
console.log(firstLastWord("	")) //   		            -> ""

const countVowels = (string) => string.split('').reduce((countVowels, curr) => ['a' , 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(curr) ? countVowels + 1 : countVowels, 0)

console.log(countVowels("Hello")) //   		        -> 2
console.log(countVowels("JavaScript is fun")) //  	-> 5
console.log(countVowels("")) //   			        -> 0


console.log(countMultipleWords2([ "foo", "", "	", "foo bar", " 	foo" ]))//   	    -> 1
console.log(countMultipleWords2([ "foo", "bar", "foobar", " 	foobar   " ]))//   	    -> 0
console.log(countMultipleWords2([ "f o o", "b a r", "foo bar", "     foo bar   " ]))//  -> 4
console.log(countMultipleWords2([ ]))//   						                        -> 0

const middleInt2 = (num1, num2, num3) => [num1, num2, num3].sort((a,b) => a -b)[1]


console.log(middleInt2(1, 2, 2)) //    -> 2
console.log(middleInt2(5, 5, 8)) //    -> 5
console.log(middleInt2(5, 3, 5)) //    -> 5
console.log(middleInt2(1, 1, 1)) //    -> 1
console.log(middleInt2(-1, 25, 10)) // -> 10



    const getDuplicates = (arr) => {
        const duplicateArr = [];
        for(let i = 0; i < arr.length; i++){
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] === arr[i] && !duplicateArr.includes(arr[i])) duplicateArr.push(arr[i]);
            }
        }    
        return duplicateArr;
    }


    // set an dmepty container for duplicates
    // first for loop will iterate through array
    // j will follow the next element to compare
    // you then say if j is equal to i && element of array i is not already in it hten push it
// then you always return ar the end 
    console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) //  					-> [ 0, -7 ]
    console.log(getDuplicates([ 1, 2, 5, 0, 7 ])) //  									-> [ ]
    console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])) //  	-> [ 'foo', 'a' ]
    console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])) // 					-> [ ]

    const getEvens1 = (num1, num2) => {

        let even = [];
   
        for(let i = Math.min(num1, num2); i <= Math.max(num1,num2) ; i++){
        if(i % 2 === 0) even.push(i);
        }
        return even;
        };

console.log(getEvens1(2, 7)) //  	-> [ 2, 4, 6 ]
console.log(getEvens1(17, 5)) //  	-> [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens1(4, 4)) //  	-> [ 4 ]
console.log(getEvens1(3, 3)) //  	-> [ ]


const no131 = (numArray) => numArray.map((number => number === 13 ? 0 : number))

console.log(no131([1, 2, 3 ,4])) //   		 -> [1, 2, 3 ,4] 
console.log(no131([13, 2, 3])) //   		     -> [0, 2, 3]
console.log(no131([13, 13, 13 , 13, 13])) //  -> [0, 0, 0, 0, 0]
console.log(no131([])) //   			         -> []

const firstLastWord2 = (string) => {
    if (string === '') return '';
    let word = string.split(' ');
    
    return word[0] + word[word.length -1];

};


console.log(firstLastWord2("Hello World")) //   	        -> "HelloWorld"
console.log(firstLastWord2("I like JavaScript")) //  	-> "IJavaScript"
console.log(firstLastWord2("Hello")) //   		        -> "HelloHello"
console.log(firstLastWord2("")) //   			        -> ""
console.log(firstLastWord2("	")) //   		            -> ""
    
// const removeDuplicates = (array) => {

//     let result = [];
    
//     for(const number of array) {
//     if(!result.includes(number)) result.push(number);
//     }
//     return result;
//     }

    const removeDuplicates = (arr) => arr.filter((x, index) => arr.indexOf(x) === index);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])) //   		 -> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])) //   				         -> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])) //   			         -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])) //  -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])) //   			     -> ["1", "2", "3"]

const replaceFirstLast = (string) => {

    let newString = string.trim();
    let beginning = newString[newString.length -1]
    let end = newString[0];
    let middle = newString.slice(1, newString.length -1)

    if(newString.length < 2) return '';
    else return beginning + middle + end
    
}

console.log(replaceFirstLast("")) //  			    -> ""
console.log(replaceFirstLast("Hello")) //  		-> "oellH"
console.log(replaceFirstLast("Tech Global")) //  	-> "lech GlobaT"
console.log(replaceFirstLast("A")) //  		    -> ""
console.log(replaceFirstLast("    A      "))//   	-> ""


const isPrime2 = (number) => {

    if(number < 2) return false;
    else if (number === 2 || number === 3) return true;
    else if(number % 2 === 0 || number % 3 === 0) return false;
    
    let d = 5;
    
    while(d < number){ 
    if(number % d === 0) return false;
    
    d += 2;
    }
    return true; 
}

console.log(isPrime2(5)) //   -> true
console.log(isPrime2(2)) //   -> true
console.log(isPrime2(29)) //)  -> true
console.log(isPrime2(-5)) //  -> false
console.log(isPrime2(0)) //   -> false
console.log(isPrime2(1)) //   -> false


  const removeExtraSpaces = (string) => string.trim().split(' ').filter((str) => str.length > 0).join(' ');

// this is what you get from string.trim().split(' ')
// [ 'Hello' ]
// [ 'Hello', 'World' ]
// [ 'JavaScript', 'is', '', '', '', '', 'fun' ]
// [ '' ]

// filtering out any strings that arent a length > 0 meaning ''

console.log(removeExtraSpaces("Hello")); //
console.log(removeExtraSpaces("     Hello World ")); //
console.log(removeExtraSpaces("     JavaScript is     fun")); //
console.log(removeExtraSpaces("")); //    



const fizzBuzz = (num1, num2) => {
    let numbers = [];

    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 3 === 0 && i % 5 === 0) numbers.push("FizzBuzz");
        else if(i % 3 === 0) numbers.push("Fizz");
        else if( i % 5 === 0) numbers.push("Buzz");
        else numbers.push(i);
}
return numbers.join(" | " );
}

console.log(fizzBuzz(13, 18)) //  	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)) //  	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)) //  	-> "Buzz"
console.log(fizzBuzz(9, 6)) //  	-> "Fizz | 7 | 8 | Fizz"


const reverseStringWords = (string) =>{
    let newString = string.trim().split(' ')
    for(let i = 0; i < string.length; i++) {
        newString[i] = newString.split('').reverse().join('')
    }
    return newString.join('');
}