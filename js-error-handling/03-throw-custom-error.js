function getName(name) {
    if(name && typeof name === 'string') console.log('Thanks', name);
    else throw new Error ('that is not a name');
}

getName('Suzanne'); 

try {
// error: thats not a name 
getName(true);
getName(123);
getName('');
getName(null); 
getName(undefined); 
}
catch(err) {
    console.log('it is not a name');
}
finally {
    console.log('good night guys the topic is done')
}