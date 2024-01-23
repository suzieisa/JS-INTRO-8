const names = ['John', 'Jane', 'Alex', 'Max'];

// ouput all the names

for (let i = 0; i <= names.length-1; i++) {
    console.log(names[i])
}

let name = 'Suzanne'
for(let i = 0; i <= name.length - 1; i++)
    console.log(name[i]); // S u z a n n e

   //  IT IS PREFFERED to use for...of loop instead of for loop
   // John is a name of names
   // Jane is a name of names
   // Alex is a name of names
   // Max is a name of names

   for(const name of names) {
    console.log(name); // prints all names out instead of doing the above for  loop
   }
////////////////////////////////////////
   for(const name of names) {
    console.log(name.toUpperCase()); // all above names to upper case
   }

   for(let x of names) {
    console.log(x.length); // gives you the length of each name
   }
   //////////////////////////////////////////////////////////
   let count = 0
   for(const name of names) {
    if(name[0] === 'J') count++
   }
   console.log(count++);

