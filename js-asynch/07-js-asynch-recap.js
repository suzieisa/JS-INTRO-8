/*
Go to https://www.techglobalschool.com/
Validate the main heading is "Looking to pursue a new career?"
*/

function goToURL() {
    setTimeout(() => {
        console.log('You are on TechGlobal Website');
    }, 5000);
}

function validateMainHeading() {
    const actualText = 'Looking to pursue a new career?'; // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in the requirements
    if(expectedText === actualText) console.log('Validation is SUCCESSFUL!');
    else console.log('Validation is FAILED!');
}


function test1() {
    goToURL();
    validateMainHeading();
}

test1();

/*
You are on TechGlobal Website
Validation is FAILED!
*/

// Fixing the issue with callback
function goToURL(callback) {
    setTimeout(() => {
        console.log('You are on TechGlobal Website');
        callback();
    }, 5000);
}

function validateMainHeading() {
    const actualText = ''; // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in the requirements
    if(expectedText === actualText) console.log('Validation is SUCCESSFUL!');
    else console.log('Validation is FAILED!');
}


function test1() {
    goToURL(() => {
        validateMainHeading();
    });  
}

test1();


// Fixing the issue with promises
function goToURL() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() * 2)) resolve('URL is loaded!');
            else reject('Website is broken!');
        }, 2000);
    });
}

function validateMainHeading() {
    const actualText = 'Looking to pursue a new career?'; // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in the requirements
    if(expectedText === actualText) console.log('Validation is SUCCESSFUL!');
    else console.log('Validation is FAILED!');
}


function test1() {
    goToURL().then((res) => {
        console.log(res);
        validateMainHeading();
    }).catch((err) => {
        console.log('ERROR:', err);
    });
}

test1();



if(Math.floor(Math.random() * 2)) console.log('SUCCESS');
else console.log('FAILURE');


// Asynch - await keywords

function goToURL() {
    setTimeout(() => {
        console.log('You are on TechGlobal Website');
    }, 5000);
}

function validateMainHeading() {
    const actualText = 'Looking to pursue a new career?'; // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in the requirements
    if(expectedText === actualText) console.log('Validation is SUCCESSFUL!');
    else console.log('Validation is FAILED!');
}


async function test1() {
    await goToURL();
    validateMainHeading();
}

test1();
