try {
    const pi = 3.14;
    pi = 2; // typerError 
    console.log(pi);
} catch(err) {
    console.log('===An error occurred: ', err);
}

try{
    console.log('Hello World');
}catch(err) {
    console.log('===An error occurred');
}

try {
    // ths will try to run 
    const pi = 3.14;
    pi = 2; 
    console.log(pi);
}
catch(err) {
    // this will run only if there is an error occurrence 
}
finally {
    // this will run regardless of error occurence 
}