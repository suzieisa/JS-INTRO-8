/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm = 60 and final = 90

Output your object to the console
*/


const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['soccer', 'watching movies'],
    exam_scores : {
        midterm : 60,
        final : 90
    }

};

console.log(student);
/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print Soccer -> Soccer
*/
console.log(student.hobbies)
console.log(student.exam_scores);
console.log(student.hobbies[0]);

/*
Find and print average of exam scores -> 75
*/

let average = (student.exam_scores.midterm + student.exam_scores.final) / 2

console.log(average);

// If there are more exam scores it is better to use for loop
const exam_results = Object.values(student.exam_scores);
let sum = 0;

for(const result of exam_results) {
    sum += result;
}

console.log(sum / exam_results.length)


/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/
const book = { 
    name : 'Amok',
    author: {
        firstName: 'Stefan',
        lastName: 'Zweig',
},
    genre : 'Novela'
};

const books = [
{
    name : 'Amok',
    author: {
        firstName: 'Stefan',
        lastName: 'Zweig',
    },
    genre : 'Novela'
} ,
{
    name: 'Red',
    author: {
        firstName : 'Orhan',
        lastName: 'Pamuk',
    },
    genre : 'Historical Novel'
} ,
{
    name : '1984',
    author: {
        firstName: 'George',
        lastName:'Orwell',
    },
        genre: 'Dystopian Literature'
}

];

// Count the books where Author first name has an 'a' -> 2
// can do it with for loop
let countA = 0;

for(let i = 0; i <= books.length -1; i++) {
    if(books[i].author.firstName.toLowerCase().includes('a')) countA++;
}
    console.log(countA); // 2 

 // can do it with for of loop PREFERRED
 for(const book of books) {
    if(book.author.firstName.toLowerCase().indexOf('a') >= 0) countA++
 }
 console.log(countA);

 

