/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
const arr3 = [];

for(let i = 0 ; i <= array.length -1; i++) {
    (arr1[i] * arr2[i]);
}


/*
Please find the first even number from the below array
[-1, 1, 3, 0, 2, 6, 8] -> 0
*/

const nums = [-1, 1, 3, 0, 2, 6, 8];

let firstEven; // undefined

for(const num of nums) {
    if(num % 2 === 0) {
        firstEven = num;
        break;
    }
}
console.log(firstEven); // 0

//////////////////////////////////////

// Find the first city that has the odd length  -> Chicago

const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

let firstCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstCity = city;
        break;
    }
}
console.log(firstCity); 

// Find all the city lengths that has more than 5 length

let fiveLengthCity = []

for(const city of cities) {
    if(city.length > 5) fiveLengthCity.push(city);
}
console.log(fiveLengthCity); 