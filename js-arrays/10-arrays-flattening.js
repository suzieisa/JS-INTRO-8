const batch = [
    ['Alex', 'Alice'],
    ['John', 'Jane'],
    ['Max', 'Mark']
];  

const batchFlat = batch.flat();

console.log(batch); [ [ 'Alex', 'Alice' ], [ 'John', 'Jane' ], [ 'Max', 'Mark' ] ]
console.log(batchFlat); // [ 'Alex', 'Alice', 'John', 'Jane', 'Max', 'Mark' ]

