/* We will print the day based on the a random number
We will write a code that generates random number bt 0 and 6 both inclusive 

0   -> Sunday
1   -> Monday
.
.
.
.
6   -> Saturday
*/

let day = Math.floor(Math.random() * 7);

if (day === 0) 
    console.log('Sunday')
else if (day === 1)
    console.log('Monday')
else if (day === 2)
    console.log('Tuesday')
else if (day === 3)
    console.log('Wednesday')
else if (day === 4)
    console.log('Thursday')
else if (day === 5)
    console.log('Friday')
else 
    console.log('Saturday')

    // Switch instead if else 
    switch(day) {
        case 0:
            console.log('Sunday');
            break;
        case 1: 
            console.log('Monday');
        
    }

/* We will print the weekday or weekend based on the number from 0-6

0-- Weekend
6 -- Weekend
1-- Weekday
2--

*/

let randomDay = 1;
    
if (randomDay === 0 || randomDay === 6) console.log('weekend') 
else console.log('weekday')
 // Switch instead if else 
 switch(day) {
    case 0:
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
    
}



/* We have an age and trying to find the demography
0-20 (inclusive) -- young
21- 55 (inclusive) -- adult
56+ -- seniors
*/

let age = Math.floor(Math.random() * 100);

//if - else if - else
if (age <= 20) console.log('young')
else if (age <= 55) console.log('adult')
else console.log('senior')

// ternary
console.log(age <= 20 ? 'young' : age <= 55 ? 'adult': 'senior');

// switch
switch(true) {
    case age <= 20:
        console.log('young')
        break;
        case age <= 55:
        console.log('Adult');
        break;
       default:
        console.log('Senior')

}