const users = [ 
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];
// count how many people are over age of 30 
let countAge = 0;
for (const user of users) {
    if(user.age > 30) countAge++;
}
console.log(countAge); // 2

// count how many people live in chicago
let countCityChicago= 0;

for(const user of users) {
    if(user.address.city.toLowerCase() === 'chicago') countCityChicago++;
}
console.log(countCityChicago); // 2

// Ouput all the user names of age less than 35 

const younger35 = [];
for (const user of users) {
    if(user.age < 35) younger35.push(user.firstName);
}
console.log(younger35);

// find average of all the ages
let sumAge = 0;
for(const user of users) {
    sumAge += user.age;
}
console.log(sumAge / users.length) // 28