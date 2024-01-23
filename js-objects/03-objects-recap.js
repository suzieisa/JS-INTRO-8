const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
};
// update color of car to black
car.color = 'black';

console.log(car['color']);
console.log(car['year']);
console.log(car['make']);
console.log(car['model']);

// CAN output all data with a loop 
for(const key in car) {
    console.log(car[key]);
}