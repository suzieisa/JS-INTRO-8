// Create a class called CAT

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color= color;
        this.age = age;
    }
    makesSound() {
        console.log('MEOW')
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

// Creating objects from Cat class

const cat1 = new Cat('Simba', 'Orange', 1);
const cat2 = new Cat('Lucy', 'White', 2);
const cat3 = new Cat('Oliver', 'Brown', 3);

const allCat =[cat1, cat2, cat3];
console.log(allCat);

allCat.forEach(cat => {
    console.log(cat);
    console.log('Name:', cat.name)
    console.log('Age:', cat.age)
    console.log('Color:', cat.color);
    cat.makeSound();
    cat.eat();
    cat.sleep();
})
cat1.makesSound(); // MEOW
cat2.makesSound();
cat3.eat();

console.log(allCat.filter(cat => cat.age > 1).map(cat => cat.name));