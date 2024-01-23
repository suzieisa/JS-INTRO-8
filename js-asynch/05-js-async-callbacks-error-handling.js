function takeDLExam() {
    console.log('JOINING EXAM');
}

function testAge(cbForSuccess, cbForFailure) {
    setTimeout(() => {
        const age = Math.floor(Math.random() * 30);
        console.log(`Age is = ${age}.`);
        if(age >= 16) {
            cbForSuccess();
        }
        else cbForFailure();
    }, 2000);
}

testAge(() => {
    takeDLExam();
}, () => {
    console.log('ERROR: YOU CANNOT JOIN THE EXAM!');
});


// callbak hell
function print1(callbackfn) {
    setTimeout(() => {
        console.log(1);
        callbackfn();
    }, 1000);
}

function print2(callbackfn) {
    setTimeout(() => {
        console.log(2);
        callbackfn();
    }, 1000);
}

function print3(callbackfn) {
    setTimeout(() => {
        console.log(3);
        callbackfn();
    }, 1000);
}

function print4() {
    setTimeout(() => {
        console.log(4);
    }, 1000);
}

print1(() => {
    print2(() => {
        print3(() => {
            print4();
        });
    });
});


// callbak hell
setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
            setTimeout(() => {
                console.log('4');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);