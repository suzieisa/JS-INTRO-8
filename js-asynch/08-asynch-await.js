function goToCostco() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) resolve();
            else reject();
        }, 2000);
    });
}

function getMeat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) resolve();
            else reject('Could not get the meat, Costco was closed!');
        }, 1500);
    });
}

function cook() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) resolve();
            else reject('Cooking did not go well!');
        }, 3000);
    });
}

function serve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) resolve();
            else reject();
        }, 1000);
    });
}

function eat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) resolve('');
            else reject();
        }, 500);
    });
}

//
async function test() {
    try {
        await goToCostco();
        await getMeat();
        await cook();
        await serve();
        await eat();
        console.log('YAYYY - PARTY WAS GOOD!');
    } catch(err) {
        console.log(err);
    }
}

test();