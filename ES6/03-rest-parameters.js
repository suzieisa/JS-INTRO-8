/* write a function that takes any number of arguments and return there sum

sum() -> 0
sum(5) -> 5
sum(5, 2) -> 7
sum(3, 5, 2) -> 10
sum(7, 3, 5, 2) -> 17
sum(1, 7, 3, 5, 2) -> 18

*/

function sum(...args){
    let sum = 0;
    
    for(const num of args) {
        sum += num;
    }
    return sum 
}
console.log(sum());
console.log(sum(5));
console.log(sum(5,2));
console.log(sum(3,5, 2));
console.log(sum(7, 3, 5, 2));
console.log(sum(1, 7, 3, 5, 2));

function product(num1 = 0, ...args) {
    let product = num1;
    for(const num of args) {
        product *= num;
    }
    return product;
}

product();

console.log(product()); // undefined // 0 
console.log(product(5)); // 5
console.log(product(5, 2, 3, 4)); // 120


