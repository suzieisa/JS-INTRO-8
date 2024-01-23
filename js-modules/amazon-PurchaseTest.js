const {appURL, login, username, password} = require('./amazonGlobalInfo');

console.log(username);
console.log(password);
console.log(appURL);

login(username, password);

// Write your code to validate the user can purchase products



/*
 Test 1:
 Go to amazon.com
 Login with username and password 
 Validate you can purchase product  
 */