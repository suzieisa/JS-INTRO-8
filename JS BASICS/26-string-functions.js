// Replacing occurrence of a substring within a string

let sentence = 'Can you can a can as a canner can can a can?';

console.log(sentence.replace('can', '###')); // 'Can you ### a can as a canner can can a can?'
console.log(sentence.replaceAll('can', '###')); // 'Can you ### a ### as a ###ner ### ### a ###?'
console.log(sentence.replaceAll('a', 'X')); // 'CXn you cXn X cXn Xs X cXnner cXn cXn X cXn?'

let funky = sentence.replaceAll('c', 'X').replaceAll('a', 'O').replaceAll('n', 'X').replaceAll('C', 'X');
console.log(funky); // XOX you XOX O XOX Os O XOXXer XOX XOX O XOX?

console.log(sentence); // Can you can a can as a canner can can a can?



let quote = 'You can do it';
console.log(quote.replace('hello', 'GOOD MORNIG')); // You can do it
console.log(quote.replaceAll('hello', 'GOOD MORNIG')); // You can do it


let book = 'No, a canner cannot can a can as a canner can can a can. This is because cans are made of aluminum, which is a non-biodegradable material. A canner, on the other hand, is a person or machine that cans food or other items. Canned food is typically placed in glass jars or cans, which can then be heated and sealed to prevent spoilage.'
let bookClearedFromTheBadWords = book.replaceAll('badWord', 'niceWord');