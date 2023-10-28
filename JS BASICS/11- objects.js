/*
Car
    color=black
    year=2020
    price=20000
    make=Toyota
    model=Camry
*/

//NOT GOOD and NOT PREFERRED
// let carColor = 'Black';
// let carYear = 2020;
// let carMake = 'Toyota';
// let carModel = 'Camry';
// let carPrice = 20000;

// We create an object with key-value pairs known as properties

const car = {
    color: 'Black',
    year: 2020,
    make: 'Toyota',
    model: 'Camry',
    price: 20000
};

// How to output an object
console.log(car); 

// How to access a specific information about the object like model
// car.model or car['model']
console.log(car.model); // Camry
console.log(car['model']); // Camry

// How to update an existing value like price and color
// car.model = newValue or car['model'] = newValue
car.color = 'Orange';
car['price'] = 22000;

console.log(car);

// Adding additonal information - like miles=33000 and trim= SEDAN
// car.trim = newValue or car['mileage'] = newValue
car.trim = 'SEDAN';
car['mileage'] = 33000;

console.log(car);


// How to remove a property or key-value pair from an object
delete car.price;
delete car['mileage'];

console.log(car);