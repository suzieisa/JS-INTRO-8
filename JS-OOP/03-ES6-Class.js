class Car { // blueprint
    constructor(year, make, model, price) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
    }
    drive() {
        console.log(`${this.year} ${this.make} ${this.model} drives.`);
    }
    stop() {
        console.log(`${this.year} ${this.make} ${this.model} stops.`);
    }
}
const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);
car1.drive();
car2.stop();
console.log(car3.price);
console.log(car3.model);
const allcars = [car1, car2, car3];
// Using forEach() method
allcars.forEach(car => {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
    console.log('-------------------------------------------------------');
});







