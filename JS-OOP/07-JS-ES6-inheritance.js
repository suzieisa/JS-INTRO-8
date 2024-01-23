// ES6 Inheritance

// Parent class
class Person {
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }

    eat() {
        console.log('EAT');
    }

    sleep() {
        console.log('SLEEP');
    }

    walk() {
        console.log('WALK');
    }
}

// Inherit all the Person properties and functions to Singer
class Singer extends Person {
    constructor(fullname, age, groupName) {
        super(fullname, age); // Invoking parent constructor to assign fullname and age
        this.groupName = groupName;
    }

    sing() {
        console.log('SING');
    }
}

// Inherit all the Person properties and functions to Programmer
class Programmer {
    constructor(fullname, age, companyName) {
        this.fullname = fullname;
        this.age = age;
        this.companyName = companyName;
    }

    eat() {
        console.log('EAT');
    }

    sleep() {
        console.log('SLEEP');
    }

    walk() {
        console.log('WALK');
    }

    code() {
        console.log('CODE');
    }
}

class Programmer extends Person {
    constructor(fullname, age, companyName) {
        this.fullname = fullname;
        this.age = age;
        this.companyName = companyName;
    }
    code() {
        console.log('CODE');
    }
}

const person1 = new Person('John Doe', 25);
const singer1 = new Person('Jane Doe' , 20, 'Pink');
const programmer1 = new Programmer('Alex Smith', 30, 'Apple');






