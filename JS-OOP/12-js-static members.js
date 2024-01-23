// Static properties and functions are accessed with class names
// They do not belong to object 

// All the math methods were Static methods
Math.max()
Math.random()

// Static properties 
console.log(Math.PI);
console.log(Number.MIN_SAFE_INTEGER);

const object = new Math();
object.max();

class Computer {
    //non-static - belongs ot object
    brand = 'Apple';

    // non static = belongs to object
    run() {
        console.log('RUN FUNCTION')
    }

    // static - belong to class
    static info = 'SECRET INFO';

    static open(){
        console.log('OPEN FUNCTION');
    }
}

const c1 = new Computer();
console.log(c1.brand); // Apple
c1.run(); // RUN FUNCTION

// c1.open(); // TyperError: c1.open is not a function 



class Person {
    static hasEyes = true;               // static belongs to everyone so it is static this is universal info for all the people
    constructor(name, address, gender) { // info that varies from person to person 
        this.name = name;
        this.address = address;
        this.gender = gender;
    }
    walk() {
        console.log('NON-STATIC WALK FUNCTION');
    }
    static breathe() {
        console.log('STATIC BREATHE FUNCTION')
    }
}

const ayca = new Person ('Ayca', 'AL', 'Female');
const suzanne = new Person('Suzanne', 'IL', 'Female');

console.log(ayca.name) // ayca

console.log(Person.hasEyes); // true
Person.breathe();

Person.walk(); // typeError : Person walk is not a function


