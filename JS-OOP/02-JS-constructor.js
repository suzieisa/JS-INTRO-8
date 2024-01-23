/* Create a constrtcuctor called Car
and define 4 properties as below
year
make
model
price

*/
// ALL BEFORE ES6

function Car(year, make, model, price) {
    this.year= year; 
    this.make = make; 
    this.model = model; 
    this.price = price;
}

// Creat and add 2 prototypes : drive and stop
Car.prototype.drive = function() {
    console.log(`${this.year, this.make, this.model} drives.`)
};

Car.prototype.stop = function() {
    console.log(`${this.year, this.make, this.model} stops.`)
};

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);

// you can ouput all cars by creating a new array 
const allcars = [car1, car2, car3];
console.log(allcars);


// Using forEach() method
allcars.forEach(car => {
    console.log(car);
    car.drive();
    car.stop();
});

// Using for...of loop
for(const car of allcars) {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year, car.make, car.model} is ${car.price}}`);
}

// Get each cars price information in the format -> {year make model} is ${price}.






