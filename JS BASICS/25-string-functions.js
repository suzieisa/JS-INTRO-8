// Trimming

let school = '     TechGlobal School     ';

console.log(school.length); // 27
console.log(school); // '     TechGlobal School     '

let schoolStartTrimmed = school.trimStart();
console.log(schoolStartTrimmed); // 'TechGlobal School     '
console.log(schoolStartTrimmed.length); // 22


let schoolEndTrimmed = school.trimEnd(); 
console.log(schoolEndTrimmed); // '     TechGlobal School'
console.log(schoolEndTrimmed.length); // 22

let schoolTrimmed = school.trim();
console.log(schoolTrimmed); // 'TechGlobal School'
console.log(schoolTrimmed.length); // 17


// trim functions cannot be used to remove extra whitespaces in the middle of the string

console.log('    abc    '.trim()); // 'abc'
console.log('    abc    '.trim().length); // 3

console.log('Hello           World'.trim()); // 'Hello           World'
console.log('Hello           World'.trim().length); // 21


console.log('        '.trimStart().length); // 0
console.log('          '.trimEnd().length); // 0
console.log('             '.trim().length); // 0


console.log(school); // '     TechGlobal School     '
console.log(school.length); // 27