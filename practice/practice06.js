class Student {         
    constructor(fname, lname, age, gender, className) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.className = className;  
    }
}

class MathStudent extends Student {
    constructor(fname, lname, age, gender, className) {
        super(fname, lname, age, gender, className); 
    }
}

class ScienceStudent extends Student {
    constructor(fname, lname, age, gender, className) {
        super(fname, lname, age, gender, className); 
    }
}

const student1 = new MathStudent('John', 'Doe', '23', 'M', 'Math');
const student2 = new MathStudent('Alex', 'Smith', '30', 'M', 'Math');
const student3 = new MathStudent('Jane', 'Doe', '17', 'F', 'Math');
const student4 = new ScienceStudent('James', 'Morgan', '21', 'M', 'Science');


// can print all info out in an array
let students = [student1, student2, student3, student4]

students.forEach(student => console.log(student));

// Find how many students are male                             -> 3
console.log((students.filter(student => student.gender === 'M').length)); 

// can do it reduce method 
console.log((students.reduce((count, student) => student.gender === 'M' ? count + 1 : count, 0))); 
 

// Find how many students are female                           -> 1
console.log((students.filter(student => student.gender === 'F').length)); 

// Find how many students are taking the Math                  -> 3
console.log((students.filter(student => student.className === 'Math').length)); 

// Find how many students are taking the Science               -> 1
console.log((students.filter(student => student.className === 'Science').length)); 


// Find the oldest student                                     -> Alex Smith is oldest with the age of 30.
let oldest = students[0]; // 'John', 'Doe', 23, 'M', 'Math'

for(const student of students) {
    if(student.age > oldest.age) oldest = student; // Became Alex
}

console.log(`${oldest.fname} ${oldest.lname} is oldest with the age of ${oldest.age}.`); // Alex Smith is oldest with the age of 30.


const oldestWithReduce = students.reduce((oldest, student) => oldest.age > student.age ? oldest : student , students[0]);
console.log(`${oldestWithReduce.fname} ${oldestWithReduce.lname} is oldest with the age of ${oldestWithReduce.age}.`);


// Find the youngest student                                   -> Jane Doe is youngest with the age of 17.
// regular for of loop
let youngestStu = students[0];

for(const student of students) {
    if(student.age < youngestStu.age) youngestStu = student;
}
console.log(`${youngestStu.fname} ${youngestStu.lname} is youngest with the age of ${youngestStu.age}.`);

// reduce 
const youngestWithReduce = students.reduce((result, student) => {
    if(student.age < result.age) return student;
    else return result 
}, students[0]);

console.log(youngestWithReduce.fname);


// Find the average age of the students                        -> 91/4 REDUCE
const sumAge = students.reduce((sum, student) => sum + student.age, 0);



// Find and return the fullname of students who take Math      -> ['John Doe', 'Alex Smith', 'Jane Doe'] FILTER and MAP

const mathStudents = students.filter(x => x.className === 'Math').map(x => (x.fname, x.lname))

console.log(mathStudents);


// Find and return the fullname of students who take Math      -> ['John Doe', 'Alex Smith', 'Jane Doe'] FILTER and MAP
// Find and return the fname of students who are male          -> ['John', 'Alex', 'James'] FILTER and MAP
// Find and return the lname of students who are older than 20 -> ['Doe', 'Smith' 'Morgan'] FILTER and MAP