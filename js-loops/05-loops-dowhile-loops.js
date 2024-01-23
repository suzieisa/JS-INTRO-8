let i =1;

while(i <= 3) {
    console.log('While loop | Hell World!')
    i++
}

let j = 1;
do {
    console.log('Do-While Loop | Hello World!')
    j++
} while(j <= 3);


// NO EXECUTION 
for (let i = 1; i < 0; i++) {
    console.log('I AM EXECUTED!!!');
}
//////////////////////////////////
let num = 1
while(num < 0) {
    console.log('I AM EXECUTED');
    num ++;
}
//////////////////////////////////
// YES EXECUTION // WITH DO - WHILE CODES FIRST CHECKS THE CODE AND THEN EXECUTES 
let n = 1;

do {
    console.log('I am executed');
    n++
} while (n < 0);

