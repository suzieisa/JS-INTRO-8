function hello() {
    console.log('Hello World');
}

console.log(typeof hello); // function

const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullName: function () {
        return `${this.first_name} ${this.last_name}`
    },
    info: function () {
        return `${this.first_name} ${this.last_name} was born in ${this.date_of_birth}.`;
    }
};


console.log(person.fullName); // fullName
console.log(person.fullName()); // Adam Smith -- have to use () to invoke function

console.log(person.info()); // Adam Smith was born in 1790. 
