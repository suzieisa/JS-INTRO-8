/*
Create a class called as Animal
Create a constructor which takes 'name', 'age', 'color'
Create 2 functions eat(), run()

*/

class Animal{
    constructor(name, age, color) {
    this.name = name;               // this is all our template to access later 
    this.age = age;
    this.color = color;
}
    eat() {
        console.log('EAT');
    }
    run() {
        console.log('RUN');
    }
};

const a1 = new Animal('Tiger', 3, 'orange'); // constructor helps create many more objects

console.log(a1); // Animal { name: 'Tiger', age: 3, color: 'orange' }
console.log(a1.name); // Tiger

a1.run(); // RUN  

/*
Create a class called as Cat and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function play()
*/


    class Cat extends Animal {                          // we want it to inherit Animal traits so EXTENDs keyword allows you o inherit the 'parent' properties
    constructor(name, age, color, breed) {             
    super(name, age, color);                            //  this will handle the above 'animal' traits
    this.breed = breed;
}
    play() {
        console.log('PLAY');
 }
   
};

const cat1 = new Cat('Simba', 2, 'orange', 'domestic');
console.log(cat1);
cat1.eat();
cat1.play();

/*
Create a class called as Dog and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function catch()
*/
class Dog extends Animal {
    constructor ( name, age, color, breed) {
        super(name, age, color)
        this.breed = breed;
    }

        catch() {
            console.log('CATCH');
        }
};
const dog1 = new Dog('Oreo', 5, 'Black', 'Collie');
console.log(dog1);
dog1.eat();
dog1.catch();


/*
Create a class called as Husky and inherit all the Dog class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 function protect()
*/

class Husky extends Dog {
    constructor(name, age, color, breed, shed) {
        super(name, age, color, breed)
        this.shed = shed
    }
        protect() {
            console.log('PROTECT');
        }
    };

    const husky1 = new Husky('X', 5, 'Brown', 'Husky', 'Y');
    console.log(husky1); // { name: 'X', age: 5, color: 'Brown', breed: 'Husky', shed: 'Y' }
    husky1.protect(); // POTECT
    husky1.run(); // RUN can inherit the Animal traits as well off Dog 

// TRY THIS WITH PROTOTYPAL INHERITANCE AS WELL

