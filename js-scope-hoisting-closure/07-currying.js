// Regular function 
function product(x,y) {
    return x * y;
}

console.log(product(3,5));
console.log(product(3,2));

// currying way
function multiply(x){

    function inner(y) {
        return x * y;
    }
    return inner;
}

const doubled = multiply(2);
const tripled = multiply(3);


console.log(doubled(10)); // 20
console.log(doubled(7)); // 14
console.log(doubled(3)); // 6

console.log(tripled(10)); // 30
console.log(tripled(7)); // 21
console.log(tripled(3)); // 9
