let var1 = null || true; 

console.log(var1); // true

let var2 = null ?? true;
console.log(var2); // true

let var3 = undefines || true;
console.log(var3);// true

DIFFERENCE
// with || operator we will walways get the value that could evaluate to true
//but with ?? we will get FIRST value if it is not null or undefined otherwise we will get the second value

let var1 = null || true;
console.log(var1); // true

let var2 = null ?? true;
console.log(var2); // true


let var3 = undefined || true;
console.log(var3); // true

let var4 = undefined ?? true;
console.log(var4); // true



// DIFFERENCE
// with || operator, we will always get the value that could evaluate to true
// with ?? operator, we will get first value if it is not null or undefined. Otherwise, we will get the second value.
let var5 = 0 || 1;
let var6 = 0 ?? 1; 

console.log(var5); // 1
console.log(var6); // 0