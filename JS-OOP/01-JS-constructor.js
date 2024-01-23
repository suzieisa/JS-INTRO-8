/* NOT EFFICIENT 

const student1 = {
    fName: 'John',
    lName: 'Doe',
    age: 25
};

const student2 = {
    fName: 'Jane',
    lName: 'Doe',
    age: 23
};

const student3 = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30
};

const student4 = {
    fName: 'Morgan',
    lName: 'Smith',
    age: 19
};
*/

// Create a tempate and use it to define many objects 

// Constructor is a special function in other languages that allows you to create many similar functions

function Student(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

// adding a function to your prototype
Student.prototype.study = function() {
    console.log(`${this.fName} ${this.lName} studies.`);
}
// Add another protoype to say full name and age of student
Student.prototype.getAge = function() {
    console.log(`${this.fName} ${this.lName} age is ${this.age}.`);
}

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Jane', 'Doe', 23);
const student3 = new Student('Alex', 'Smith', 30);
const student4 = new Student('John', 'Doe', 25);

student2.getAge(); // Jane Doe age is 23.
student4.getAge(); // Jane Doe age is 23.


console.log(student3); // Student { fName: 'Alex', lName: 'Smith', age: 30 }
console.log(student4.lName); // Doe

student2.study(); // Jane Doe studies




// Write another one with teach and info
function Teacher(fName, lName, age, field) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.field = field;
}

const teacher1 = new Teacher('Alex', 'Smith', 35, 'Math');
const teacher2 = new Teacher('Brain', 'Doe', 28, 'Chemistry');
const teacher3 = new Teacher('Akin', 'Kaya', 35, 'JS');

console.log(teacher1)
console.log(teacher2.age)
console.log(teacher3.field)

Teacher.prototype.teach = function() {
    console.log(`${this.fName} teaches.`);
}

teacher1.teach();
teacher2.teach();
teacher3.teach();

Teacher.prototype.giveHomework = function() {
    console.log(`${this.fName} gives homework.`);
}

teacher1.giveHomework();
teacher2.giveHomework();

// Oldest teacher -> David
// Youngest student -> Morgan
// Count the students with the last name Smith -> 3
// Count the students with the first name having letter a ignoring cases -> 4

const teachers = [teacher1, teacher2, teacher3];
const students = [student1, student2, student3, student4];

const oldestTeacher = teachers.reduce(oldest, curr) => oldest.age > curr.age ? oldest : curr, {};
