const batch = '8';
const program = 'Software Engineer in Test';

const student1 = {
    fName: 'John Doe',
    batch: batch,
    program: program
};

console.log(student1); // {}


// After ES6 
const student2 = {
        fName: 'John Doe',
        batch,
        program
};

console.log(student2); // { fName : 'Jane Doe}