// Lexical scope is intoduced with ES6
//We can discuss lexical scope in case of havinng nested functions only 

function a() {
    let name = 'John'

    function b() {
        let age = 45;

        console.log(name); // 'John'
        console.log(name); // 45
    }

    console.log(name); // 

}

console.log(name); // 