const arr1 = ['Apple', 'Orange', 'Pineapple'];


let str1 = arr1.toString(); // Apple,Ornage,Pineapple

let str2 = arr1.join(); // Apple,Ornage,Pineapple


console.log(str1);
console.log(str2);


let str3= arr1.join(' - ');
console.log(str3);

let str4 = arr1.join(' | ');
console.log(str4); // Apple | Orange | Pineapple


const arr2 = [1, 2, 3];

let string2 = arr2.toString()
console.log(string2); 1,2,3

let string3 = arr2.join(' === ');
console.log(string3); 1 === 2 === 3


