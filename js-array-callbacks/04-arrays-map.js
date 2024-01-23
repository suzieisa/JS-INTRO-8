

// Create a new array with all names uppercased -> [ 'JOHN', 'JANE', 'ALEX' ]
const namesUpper = names.map(x => x.toUpperCase());
console.log(namesUpper); // [ 'JOHN', 'JANE', 'ALEX' ]

// Create a new array with the length of each name -> [ 4, 4, 4 ]
console.log(names.map(name => name.length)); // [ 4, 4, 4 ]


/*
Create a new array with each name stored with its index as an object as below
    [
        { index: 0, value: 'John' },
        { index: 1, value: 'Jane' },
        { index: 2, value: 'Alex' }
    ]
*/

const result = names.map((name, i) => ({
    index: i,
    value: name
}));

const result2 = [];
for (let i = 0; i < names.length; i++) {
    const object = {
        index: i,
        value: names[i]
    };
    result2.push(object);
}

console.log(result);
console.log(result2);


const result3 = [];

for (const [i, v] of Object.entries(names)) {
    result3.push({
        index: Number(i),
        value: v
    });
}

console.log(result3);









c










