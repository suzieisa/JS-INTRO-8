class Phone {
    constructor (brand, price) {
        this.brand = brand;
        this.price = price;
    }
    call() {
        console.log('CALL');
    }

    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        if(newPrice < 0) console.error('PRICE CANNOT BE SET TO NEGATVE');
        else this.price = newPrice;
    }
}

const phone1 = new Phone('iPhone', 1000);
const phone2 = new Phone('Samsung', 800);

// phone2.prices = 900; // setting the price of phone2
phone2.setPrice(-1);

// Getting the prices of phone objects
console.log(phone1.price); // 10000
console.log(phone2.price); // 900

console.log(phone1.getPrice('TechGlobal')); // 1000
console.log(phone2.getPrice('TechGlobal')); // password is working

