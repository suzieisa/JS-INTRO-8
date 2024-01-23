// Syntax of Promise

const myPromise = new Promise((resolve, reject) => {
    resolve('Fulfilled! | Successful');
    reject('ERROR | FAILED');
});

console.log(myPromise); // Promise { 'Fulfilled! | Successful' }

const promiseAge = new Promise((resolve , reject) => {
    const age = Math.floor(Math.random() * 30);
    console.log(`Age is = ${age}.`);
    if(age >= 16) {
        resolve('Success');
    }
    else reject('Fail');
});

console.log(promiseAge);

promiseAge.then(() => {
    // success body 
    console.log('THE AGE IS ALLOWED')
}).catch(() => {
    // fail body
    console.log('ERROR! THE AGE IS NOT ALLOWED!')
});

// Returning promises in function

function testAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const age = Math.floor(Math.random() * 30);
            console.log(`Age is = ${age}.`);
            if(age >= 16) {
                resolve();
            }
            else reject();
        }, 5000);
    });
}

testAge().then(() => {
    // success code
    console.log('YOU CAN GET DL WITH AN EXAM');
}). catch(() => {
    console.log('ERROR')
});


// A login promise
function login(username, password) {
    return new Promise((resolve, reject) => {
        if(username === 'TechGlobal') {
            if(password === 'Test1234') resolve();
            else reject('invalid-password');
        }
        else reject('invalid-username');
    });
}

login('TechGlobal', '1234').then(() => {
    console.log('YOU ARE LOGGED IN!')
}).catch((err) => {
  if (err ==='invalid-username') console.log('invalid-username')
  else console.log('Invalid Password entered!')
})
