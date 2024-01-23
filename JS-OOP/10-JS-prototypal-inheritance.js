/* PROTOTYPES WERE BEFORE ES6 / CLASSES CAME AFTER ES6

Create a prototype called as Animal which takes 'name', 'age', 'color'
Create 2 prototype functions eat(), run()
*/

function Animal(name, age, color) {
    this.name = name;              
    this.age = age;
    this.color = color;
}
Animal.prototype.eat = function () {
    console.log('EAT FUNCTION')
}
Animal.prototype.run = function () {
    console.log('RUN');
}

const a1 = new Animal('Tiger', 3, 'orange'); // constructor helps create many more objects

console.log(a1); // Animal { name: 'Tiger', age: 3, color: 'orange' }
console.log(a1.name); // Tiger
a1.eat(); 

/*
Create a prototype called as Cat and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function play()
*/
function Cat(name, age, color, breed) {
    Animal.call(this, name, age, color); // this is like using 'super' but for protoypal inheritance
    this.breed = breed;
}
Cat.prototype = Object.create(Animal.prototype); // Inherting all the animal functions, this can be done two ways

Cat.prototype.play = function () {
    console.log('PLAY');
}


const cat1 = new Cat('Bernie', 6, 'white', 'kitten')
console.log(cat1);
cat1.play();


/*
Create a prototype called as Dog and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function catch()
*/
function Dog(name, age, color, breed) {
    Animal.call(this, name, age, color)
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.catch = function () {
    console.log('CATCH');
}

const dog1 = new Dog('Charley', 8, 'black', 'German');
console.log(dog1);
dog1.eat();
dog1.catch();

/*
Create a prototype called as Husky and inherit all the Dog prototype properties and methods which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 prototype function protect()
*/

function Husky(name, age, color, breed, shed) {
    Dog.call(this, name, age, color, breed) 
    this.shed= shed;
}
Husky.prototype = Object.create(Dog.prototype);
Husky.prototype.protect = function () {
    console.log('PROTECT');
}

const husky1 = new Husky('Shakira', 6, 'black', 'german', 'Y');
console.log(husky1);