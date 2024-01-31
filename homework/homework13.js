// Write a function named countVC() which takes a string 
// argument and returns an object with the count of vowels and consonants.

const countVC = (string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = 'bcdfghjklmnpqrstuvwxyz'
    const newString = string.toLowerCase().split("");

    let vowelCount = 0;
    let consonantsCount = 0;

    for(let char of newString)  {
        if (vowels.includes(char)) {
            vowelCount++
        }
        else if(consonants.includes(char)) {
            consonantsCount++;
        }
    }
    const result = {
        vowels: vowelCount,
        consonants: consonantsCount
    }
    return result;
};

console.log(countVC("Hello")) // -> {vowels: 2, consonants: 3}
console.log(countVC("Programming")) // -> {vowels: 3, consonants: 8}
console.log(countVC("123AbC")) // -> {vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")) // -> {vowels: 0, consonants: 3}
console.log(countVC(""))	// -> {vowels: 0, consonants: 0}

// Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
// NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category

const countChars = (string) => {
    let letterCount = 0;
    let specialCount= 0;
    let numberCount = 0;
    let newString = string.trim().split("")

    for(let i = 0; i < newString.length; i++){
        const char = string.charAt(i);
        if((char  >= 'a' && char <= 'z') || (char  >= 'A' && char <= 'Z')){
            letterCount++;
        }
        else if (char >= '0' && char <= '9'){
            numberCount++
        }
        else{
            specialCount++
        }
    }
    const result = {}
        if (letterCount > 0) result.letters = letterCount;
        if (numberCount > 0) result.number = numberCount;
        if (specialCount > 0) result.special = specialCount;
        return result;
};



console.log(countChars("Hello")) // -> {letters: 5}
console.log(countChars("Programming 123")) // -> {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#"))// -> {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321"))// > {numbers: 10}
console.log(countChars("     ")) // -> {}
console.log(countChars("")) // -> {}

// Write a function named maxOccurrences() which takes a string argument and returns the character 
// that appears the most number of times in the string.
// NOTE: If there is a tie, return the first one that appears in the string. 
//This task is case sensitive. Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.

const maxOccurrences = (string) => {
    if(!string.trim()) {
        return ""
    }
    const newString = string.split(" ").join("");
    
    let maxChar = ""
    let maxCount = 0
   for(let i = 0; i < newString.length; i++) {
    const char = newString[i]
    let count = 0;

   for (let j = 0; j < newString.length; j++) {
    if (char === newString[j]) {
      count++;
    }

    }
    if (count > maxCount) {
        maxCount = count;
        maxChar = char;
    }
}
return maxChar
}



console.log(maxOccurrences("Hello")) // ->  "l"
console.log(maxOccurrences("Occurrences")) // 	-> "c"
console.log(maxOccurrences("    ab    "))//	-> "al"
console.log(maxOccurrences("12   3   21")) // -> "1"
console.log(maxOccurrences("      ")) // -> ""
console.log(maxOccurrences("")) // -> ""

// Write a function named starOut() which takes a string argument and 
// returns it back with every star removed as well as the 
// right and left of the star.
// NOTE: If there are 2 stars next to each other than remove the next non star
// So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
const starOut = (string) => {
    let result = '';
    let newString = string.split("")

    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === '*') {

      }
    }
  
    return result;
  };
console.log(starOut("ab*cd")) //  	-> "ad"
console.log(starOut("ab**cd")) //  	-> "ad"
console.log(starOut("xm*sm*sy")) //  	-> "xy"
console.log(starOut("abc")) //    ​	-> "abc"
console.log(starOut("***")) //    	-> ""
console.log(starOut("   ")) //    ​ 	-> "   "
console.log(starOut("")) //    	-> ""


// Write a function named romanToInt() which takes a string 
// roman numeral as its arguments and return the 
// roman numeral converted to the number. 
// A roman numeral is a set of symbols that add up to a number. 
// CXII -> 100+10+1+1 -> 112

// Symbol       Value
// I                  1
// V                 5
// X                10
// L                 50
// C                100
// D                500
// M               1000

const romanToInt = (string) => {

}

console.log(romanToInt("I")) // 		-> 1
console.log(romanToInt("IV")) // 		-> 4
console.log(romanToInt("CXII")) // 		-> 112
console.log(romanToInt("MMM")) // 		-> 3000
console.log(romanToInt("MMMDCCCLXXXVIII")) //  	-> 3888
console.log(romanToInt("MDCLXVI")) //  	​-> 1666
