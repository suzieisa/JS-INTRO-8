// Block scope is introduced in ES6


console.log(x); // undefined (since var keyword) and can be hoisted 
console.log(y); // error- ReferenceError: y is not defined
console.log(z); // error- ReferenceError: z is not defined


// Block Scope 
{
    var x = 10;
    let y = 11;
    const z = 12;

    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12

}


console.log(x); // 10
console.log(y); // error- ReferenceError: y is not defined
console.log(z); // error- ReferenceError: z is not defined

