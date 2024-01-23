function print1() {
    console.log('1');
}

function print2() {
    console.log('2');
}

function print3() {
    console.log('3');
}

// JS is single-threaded and will invoke below functions one by one
// print1(); 
// print2();
// print3();

/*
1
2
3
*/

print1();

setTimeout(() => { // setTimeout will delay the code to your chosen time to be executed 
    print2();
}, 10000);

print3();

/*
1
3
2
*/

// What if you would like wait for 2? You need to snychronize your code

// enter credentials
// click on login - 20 seconds
// change your profile picture