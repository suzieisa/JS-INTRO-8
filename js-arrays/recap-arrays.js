const fruits = ['Apple', 'Banana', 'Cherry', 'Kiwi'];

// find the index of cherry
for(let i = 0; i < fruits.length -1; i++) {
    if(fruits[i] === 'Cherry') {
        console.log(i);
    }
}

// indexOf
let index = fruits.indexOf('Cherry');
console.log(index);

const fruits2 = ['Apple', 'Banana', 'Cherry', 'Kiwi', 'Cherry'];

// find index of cherry

for(let i = 0; i < fruits.length; i++) {
    if(fruits2[i] === 'Chery')
    console.log(i);
}

// find the last index of cherry
let lindex = fruits2.lastIndexOf('Cherry');
console.log(lindex);

// how would you create your own sort method
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Cherry', 'Kiwi' ]

// map- returns a new array
const nums =[1 , 2, 3] // => double this array => [2, 4, 6]

let doubleNums =[];
for(let i = 0; i < nums.length; i++) {
    doubleNums.push(nums[i] * 2);

}
console.log(doubleNums);


const doubleTheNum = (num) => num * 2; // use before initialization
const dblNums = nums.map(doubleTheNum);

function doubleTheNum(num) { // ok to use before initilization 
    return num * 2;
}

console.log(dblNums);

// filter method -> returns new array 

let filteredNums = [];
const nums2 = [1, 2, 3];
for(let i = 0; i < nums2.length; i++) {
    if(nums2[i] > 1) {
        filteredNums.push(nums2[i]);
    }
}
console.log(filteredNums);

const filteredNums2 = nums2.filter(nums => nums > 1)
console.log(filteredNums2);

// reduce ->
const num3 = [ 1, 2, 3]; // sum of the elements

let sum = 0;
num3.forEach(num => sum += num);
console.log(sum) // 6

const sum2 = num3.reduce((acc, num) => {
    return acc + num; // 1 + 1
    return acc + num // 2 + 2
    return acc + num // 3 + 3 => 6
}, 0);

console.log(sum2); // 6



