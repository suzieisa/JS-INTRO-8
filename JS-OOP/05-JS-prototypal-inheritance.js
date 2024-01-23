// Prototypal Inheritance before ES6

// Person Object with 3 functions
const person = {
    eat: function() {
        console.log('EAT');
    },
    sleep: function() {
        console.log('SLEEP');
    },
    walk: function() {
        console.log('WALK');
    }
};

// Programmer Object with 4 functions - code
const programmer = {
    code: function() {
        console.log('CODE');
    },
    __proto__: person
};

programmer.eat(); // EAT
programmer.sleep(); // SLEEP
programmer.walk(); // WALK
programmer.code(); // CODE


// Singer Object with 4 functions - sing
const singer = {
    __proto__: person,
    sing: function() {
        console.log('SING');
    }
}

singer.sing(); // SING
singer.walk(); // WALK
singer.eat(); // EAT


person.eat();
person.walk();
person.sleep();
//person.code(); // TypeError: person.sing is not a function
//person.sing(); // TypeError: person.sing is not a function

// Prototype Chaining
console.log(singer.__proto__); //
console.log(singer.__proto__.__proto__); //