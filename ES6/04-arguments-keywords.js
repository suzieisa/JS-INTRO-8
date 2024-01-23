// THIS IS NOT AN ES6 FEATURE

function combineStrings(str1, str2) {
    if(typeof str1 === 'string' && typeof str2 === 'string') console.log(str1 + str2);
    else throw new Error ('The argument is not a string'); 
}

combineStrings('Java', 'Script'); // JavaScript
combineStrings('Java'); // Javaundefined
combineStrings(); // NaN


