class Table {
    constructor(type, material, price) {
        this.type = type;
        this.material = material;
        this.price = price;
    }
}

const table1 = new Table('office', 'wood', 200);

// ACCESSING AND UPDATING TABLE INFO without GETTERS & SETTERs
console.log(table1.type); // office
console.log(table1.material); // wood
console.log(table1.price); // 200

table1.price = 300;
console.log(table1.price); // 300


class Chair {
    constructor(type, material, price) {
        this.type = type;
        this.material = material;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}

const chair1 = new Chair('office', 'wood', 300);
console.log(chair1);

chair1.setPrice(200);
console.log(chair1.getPrice());// 200

chair1.setPrice(100);
console.log(chair1.getPrice()); // 100

// PRIVATE FIELDS
class iPhone {
    #brand = 'iPhone'; // private to this class and cannot be used outside 
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price){
        if(price <= 0) throw new Error('PRICE cannot be zero or less!!!') 
        else this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    setBrand(brand) {
        this.#brand = brand;
    }
}

const iPhone15 = new iPhone('15', 1000);
// console.log(iPhone15.#brand); // Not allowed
console.log(iPhone15.getBrand()); // 

// iPhone15.#brand = 'Samsung'; // Not allowed

iPhone15.setBrand('Samsung');
console.log(iPhone15.getBrand()); // Samsung 
