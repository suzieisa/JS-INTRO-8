// Generate an even number bt 1 and 10 using Math.random()
// Calculate how many attempts it takes to generate it

let ran1; // global scope
let atempt = 0;


do {
    ran1 = Math.floor(Math.random() * (10)) + 1;
    console.log(ran1); // this whill show how many random numbers are generated
    atempt++;
} while (ran1 % 2 !== 0);

console.log(`The first even number generated is ${ran1} and it took ${atempt} times to generate it`);
    
    
///////////////////////////////////////////////
let ran2;
let attempt = 0;
do {
    ran2 = Math.floor(Math.random() * (10)) + 1;
    console.log(ran2);
    attempt++
} while (ran2 !== 7);

console.log(`The number is finally ${ran2} and it took ${attempt} times to generate it`)