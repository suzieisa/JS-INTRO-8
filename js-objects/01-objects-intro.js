const course = {
    batch: 8,
    numbersOfStudents: 7,
    courseName: 'Software Engineer in Test'
};

// keys -- batch. numberOfStudents, courseName
// values -- 8, 7, software engineer in Test
// key-value pairs -- batch: 8, numberOfStudents: 7, courseName 'Software Engineer in Test'

// how to get all object info?
console.log(course);

// how to get a specific info?
console.log(course.courseName);
console.log(course['courseName']);

// how to update a property
course.numberOfStudents = 15;
console.log(course.numbersOfStudents);

course['numberOfStudents'] = 10;
console.log(course.numbersOfStudents);

// how to add a new property?
course.address = 'Chicago';
course['startDate'] = '01/22/2024'

console.log(course);

// How to delete a property
delete course.numbersOfStudents;
delete course['address'];

console.log(course);