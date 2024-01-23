const car = {
    color: 'red',
    year: 2023,
    make : 'BMW',
    model : 'X7'
};


console.log(Object.keys(car)); // [ 'color', 'year', 'make', 'model' ]

console.log('\n----------iteration of object keys with for...of loop-----------\n')
for(const key of Object.keys(car)) {
    console.log(key);
}

console.log('\n----------iteration of object keys with forEach() method-----------\n')
Object.keys(car).forEach(key => console.log(key));

console.log('\n----------iteration of object keys with for loop-----------\n')
for(let i = 0; i <= Object.keys(car).length-1; i++) {
    console.log(Object.keys(car)[i]);
}


/* 
red
2023
BMW
X7
*/

for(const value of Object.values(car)) {
    console.log(value);
}

Object.values(car.forEach)(value => console.log(value));

for(let i = 0; i <= Object.values(car).length -1; i++) {
    console.log(Object.values(car)[i]);
}

console.log(object)


// How to fetch all they keys and values seperately, not as a pair array

for(const [x,y] of Object.entries(car)) {
    console.log(x,y);
}

// Check if any value in the car object is red

console.log(Object.values(car).includes('red'));

console.log(Object.keys(car).indexOf('engine') >= 0);