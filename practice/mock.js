const doubleOrTripleWord = (string) => {
    if(string.length % 2 === 0) return string + string + string;
    else return string + string;
}

console.log(doubleOrTripleWord("Tech")); //  -> "TechTechTech" -
console.log(doubleOrTripleWord("Apple")); //  -> "AppleApple”
console.log(doubleOrTripleWord("")); //  -> ""
console.log(doubleOrTripleWord(" ")); //  -> " "
console.log(doubleOrTripleWord("1")); //  -> "11"
console.log(doubleOrTripleWord("22")); // -> "222222"


const firstLastWord = (string) => {
    let array = string.split(' ');
    if(string === '') return '';
    else return array[0] + array[array.length -1];
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));


const hasVowel = (string) => string.split('').filter((character) => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(character)).length > 0;

console.log(hasVowel("")); // false
console.log(hasVowel("Javascript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234")); // false
console.log(hasVowel("ABC")); //true

const startVowel = (string) => {
    let vowels = ['a','e','i','o', 'u'];
    return vowels.some((vowel) => string.toLowerCase().startsWith(vowel));   
};

console.log(startVowel("Hello")); // false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange")); // true
console.log(startVowel("")); // false
console.log(startVowel(" ")); // false

const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2;

console.log(averageOfEdges(0, 0, 0)); // -> 0
console.log(averageOfEdges(0, 0, 6)); // -> 3
console.log(averageOfEdges(-2, -2, 10)); // -> 4
console.log(averageOfEdges(-3, 15, -3)); // -> 6
console.log(averageOfEdges(10, 13, 20)); // -> 15

const replaceFirstLast = (string) => {
    let newString = string.trim();
    let start = newString[newString.length - 1];
    let middle = newString.slice(1, newString.length - 1);
    let end = newString[0];
    
    
    if(newString.length < 2) return '';
    else return start + middle + end;
};

console.log(replaceFirstLast("")); // ""
console.log(replaceFirstLast("Hello")); // "oellH"
console.log(replaceFirstLast("Tech Global")); // lech GlobaT
console.log(replaceFirstLast("A")); // ""
console.log(replaceFirstLast(" A ")); // ""
    

// const swap4 = (string) => {
//     let beginning = string.slice(0, 4);
//     let middle = string.slice(4, -4)
//     let end = string.slice(-4)
    
//     if (string.length < 8) return '';
//     else return end + middle + beginning
// }

const swap4 = (string) => string.length < 8 ? '' : string.slice(-4) +  string.slice(4, -4) + string.slice(0, 4);
console.log(swap4("abc")); // ""
console.log(swap4("JavaScript")); // "riptScJava"
console.log(swap4("TechGlobal")); // "obalGlTech"
console.log(swap4("")); //""
console.log(swap4(" ")); // ""
console.log(swap4("Apple")); //""


const swapFirstLastWord = (string) => {
    let newString = string.split(' ');
    let beginning = newString[newString.length -1]
    let middle = newString.slice(1, newString.length -1).join(' ')
    let end = newString[0]

    if(newString.length < 2) return '';
    else return beginning + ' ' + middle + ' ' + end;
}

console.log(swapFirstLastWord("Hello World")); // -> "World Hello"
console.log(swapFirstLastWord("I like JavaScript")); // -> "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar")); // -> "bar bar foo foo"
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord(" "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello"));

const countPos = array => array.reduce((countP, number) => number > 0 ? countP + 1 : countP , 0);
console.log(countPos([-45, 0, 0, 34, 5, 67])); //  3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); //  4
console.log(countPos([0, -1, -2, -3])); // 0

const getEvens = (num1, num2) => {
    const evens = [];
    for(i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 2 === 0) evens.push(i);
    }
    return evens;
}
console.log(getEvens(2, 7)); // -> [ 2, 4, 6 ]
console.log(getEvens(17, 5)); // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4)); //  4 ]
console.log(getEvens(3, 3)); // -> [ ]


const getMultipleOf5 = (num1, num2) => {
    const divisible5 = []
    for(i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){
        if( i % 5 === 0) divisible5.push(i);
    }
    if(num1 < num2) return divisible5.reverse();
    return divisible5;
}
console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)); // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)); // [ 5 ]
console.log(getMultipleOf5(2, 4)); // [ ]

const countNeg = ( array) => array.reduce((count, number) => number < 0 ? count + 1 : count, 0)

console.log(countNeg([-45, 0, 0, 34, 5, 67])); //  1
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); //  ) // 2
console.log(countNeg([0, -1, -2, -3])); // 3

const countA = ( string ) => string.split('').reduce((count, letter) => letter.toLowerCase() === 'a' ? count + 1 : count , 0)

console.log(countA("TechGlobal is a QA bootcamp")); //  4
console.log(countA("QA stands for Quality Assurance")); //  5
console.log(countA("Cypress")); // 0

const countWords = (string) => string.trim().split(' ').length;

console.log(countWords(" Javascript is fun ")); //  3
console.log(countWords("Cypress is an UI automation tool. ")); //  6
console.log(countWords("1 2 3 4")); // 4


const factorial = (number) => {
    let factorial = 1;
    for(i = 1;  i <= number; i++) {
        factorial *= i
    }
    return factorial;
}

console.log(factorial(5)); //  120
console.log(factorial(4)); //  24
console.log(factorial(0)); //  1
console.log(factorial(1)); //  1

const firstDuplicate = (array) => {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[j] === array[i]) return array[i];
        }
    }
    return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([5, "5", 3, 7, 4])); //-1
console.log(firstDuplicate([123, "abc", "123", 3, "abc"])); // 'abc'
console.log(firstDuplicate([1, 2, 3])); // -1
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));


const getDuplicates = (array) => {
    let allDup = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[j] === array[i] && !allDup.includes(array[i])) allDup.push(array[i]);
        }
    
    }
    return allDup;
  
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) // [0, -7]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])) // []
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))  // [foo, a]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])) // []


const countVowels = (string) => string.split('').reduce((countV, letter) => 'aeiouAEIOU'.includes(letter) ? countV + 1 : countV, 0)

console.log(countVowels("Hello")) // 2
console.log(countVowels("JavaScript is fun")) //5
console.log(countVowels("")) // 0
console.log(countVowels('applei')) 

const reverseStringWords = (string) => {
    let newString = string.trim().split(' ');
    for(let i = 0; i < newString.length; i++){
        newString[i] = newString[i].split('').reverse().join('')
    }
    return newString.join(' ')
}

console.log(reverseStringWords("Hello World")) //  "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")) //  "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")) //  "olleH"
console.log(reverseStringWords("")) //  
console.log(reverseStringWords(" ")) // 


const countConsonants = (string) => string.trim().split('').reduce((countC, letter) => letter !== ' ' && !'aeiouAEIOU'.includes(letter) ? countC + 1 : countC, 0)


console.log(countConsonants("Hello"))  // 3
console.log(countConsonants("Hello World"))   // 8
console.log(countConsonants("JavaScript is fun"))  //12
console.log(countConsonants("")) // 0

const countMultipleWords = array => array.reduce((count, str) => str.trim().includes(' ') ? count + 1 : count, 0)

const fizzBuzz = (num1, num2) => {
    let number = [];
    for(let i = Math.min(num1, num2); i < Math.max(num1, num2); i++){
        if(i % 3 === 0 && i % 5 === 0) number.push('FizzBuzz');
        else if(i % 3 === 0) number.push('Fizz');
        else if(i % 5 === 0) number.push('Buzz');
        else number.push(i);
    }
    return number.join(' | ')
}

console.log(fizzBuzz(13, 18))// -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)) // -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(9, 6)) // -> "Fizz | 7 | 8 | Fizz"
console.log(fizzBuzz(5, 5)) // "Buzz"


const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("Hello")) // -> false 
console.log(isPalindrome("Kayak")) // -> true 
console.log(isPalindrome("civic")) // -> true 
console.log(isPalindrome("abba")) // -> true 
console.log(isPalindrome("ab a")) // -> false 
console.log(isPalindrome("123454321")) // -> true 
console.log(isPalindrome("A")) // -> true 
console.log(isPalindrome("")) // -> true


const isPrime = (number) =>{
    if(number < 2) return false;
    else if(number === 2 || number === 3) return true;
    else if(number % 2 === 0 || number % 3 === 0) return false;

    let d = 5;

    while(d < number) {
        if(number % 5 === 0) return false;
        d += 2;
    }
    return true; 
}
console.log(isPrime(5)) //  true
console.log(isPrime(2)) //  true
console.log(isPrime(29)) // true
console.log(isPrime(-5)) // false 
console.log(isPrime(0)) //  false 
console.log(isPrime(1)) //  false

const add = (array1, array2) => {
    if(array2.length > array1.length) [array1, array2] = [array2, array1]
    for(let i = 0; i  < array2.length; i++) {
         array1[i] += array2[i]
    }
    return array1;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])) // -> [9, 3, 2, 7, 5, 10]
console.log(add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34])) // ->[16,11,9, 3,2,7,5,10,34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])) // -> [0, 0, 0, 0]

const noA = (array) => array.map((x) => x.toLowerCase().startsWith('a') ? '###' : x)

console.log(noA(["javascript", "hello", "123", "xyz"])) // -> ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])) // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) //  ["###", "###", "###", "###", "###"]

const no3and5 = (array) => {
    let numbers = [];
    for(const number of array) {
        if(number % 3 === 0 && number % 5 === 0) numbers.push(101);
        else if(number % 5 === 0) numbers.push(99);
        else if(number % 3 === 0) numbers.push(100);
        else numbers.push(number);
    }
    return numbers;
}
console.log(no3and5([7, 4, 11, 23, 17])) // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])) // -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])) // -> [99, 11, 100, 13, 14, 101]

const no13 = (array) => array.map((number) => number === 13 ? 0 : number);

console.log(no13([1, 2, 3 ,4])); // [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []

const removeDuplicates = (array) => {
    let result = [];
    for(const number of array){
        if(!result.includes(number)) result.push(number);
    }
    return result;
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));  // -> ["abc", "xyz", "123", "ab", "ABC"] 
console.log(removeDuplicates(["1", "2", "3", "2", "3"])) // -> ["1", "2", "3"]

const noDigit = (string) => string.split('').filter((x) => x < '0' || x > '9').join('')

console.log(noDigit("")) // ""
console.log(noDigit("Javascript")) //  "Javascript"
console.log(noDigit("123Hello")) //  "Hello"
console.log(noDigit("123Hello World149")) //  "Hello World”
console.log(noDigit("123Tech456Global149")) // "TechGlobal"

const noVowel = (string) => string.split('').filter((i) => !('aeiouAEIOU'.includes(i))).join('');



console.log(noVowel("TechGlobal")) // -> "TchGlbl" 
console.log(noVowel("AEOxyz")) // -> "xyz" 
console.log(noVowel("Javascript")) // -> "Jvscrpt" 
console.log(noVowel("")) // -> ""
console.log(noVowel("125$")) // -> "125$"

const sumOfDigits = (string) => string.split('').filter((number) => number >= '0' && number <= '9').reduce((sum, num) => sum += Number(num), 0);

console.log(sumOfDigits("Javascript")) // 0 
console.log(sumOfDigits("John’s age is 29")) // 11
console.log(sumOfDigits("$125.0")) // 8 
console.log(sumOfDigits("")) // 0 




const arrFactorial = (array) => {
    return array.map((num) => {
        let fac = 1;
        for(let i = 1; i <= num; i++){
            fac *= i;
        }
        return fac;
    })

}

console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6]) ); // [120, 1, 720]
console.log(arrFactorial([])); // []


const countWords2 = (string) => string.trim().split(' ').length


console.log(countWords2("     Javascript is fun       ")) //   		    -> 3
console.log(countWords2("Cypress is an UI automation tool.    ")) //   	-> 6 
console.log(countWords2("1 2 3 4")) //   					            -> 4

const isPalindrome2 = (string) => {
    return string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
    };


console.log(isPalindrome2("Hello")) //       -> false
console.log(isPalindrome2("Kayak")) //       -> true
console.log(isPalindrome2("civic")) //       -> true
console.log(isPalindrome2("abba")) //        -> true
console.log(isPalindrome2("ab  a"))  //     -> false
console.log(isPalindrome2("123454321")) //   -> true
console.log(isPalindrome2("A")) //           -> true
console.log(isPalindrome2("")) //            -> true


const countPos2 = (array) => array.reduce((countP, number) => number > 0 ? countP + 1 : countP, 0)


console.log(countPos2([-45, 0, 0, 34, 5, 67])) //   	    -> 3
console.log(countPos2([-23, -4, 0, 2, 5, 90, 123])) //   -> 4
console.log(countPos2([0, -1, -2, -3])) //   		    -> 0


const add2 = (array1, array2) => {
    if(array2.length > array1.length) [array1, array2] = [array2, array1]
    for(let i = 0; i < array2.length; i++){
    array1[i] += array2[i];
    }
    return array1;
    }


const add = (array1, array2) => {
    if(array2.length > array1.length) [array1, array2] = [array2, array1]
    for(let i = 0; i < array2.length; i++) {
         array1[i] += array2[i]
    }
    return array1;
}

const noVowel2 = (string) => string.split('').filter((vowel) => !('aeiouAEIOU'.includes(vowel))).join('')

const noVowel = (string) => string.split('').filter((i) => !('aeiouAEIOU'.includes(i))).join('');


const hasVowel2 = (string) => string.split('').filter((vowel) => 'aeiouAEIOU'.includes(vowel)).length > 0;



console.log(hasVowel2("")) //   			    -> false
console.log(hasVowel2("Javascript")) //   	-> true
console.log(hasVowel2("Tech Global")) //   	-> true
console.log(hasVowel2("1234")) //   		    -> false
console.log(hasVowel2("ABC")) //   		    -> true