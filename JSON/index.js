// JSON - JavaScript Object Notation
// Easiest way to data interchange

// Object
const personObject = {
    name: "Gifts for Thanksgiving",
    price: 19.99,
  };
  
  console.log(personObject); // { name: 'Gifts for Thanksgiving', price: 19.99 }
  console.log(typeof personObject); // object
  console.log(personObject.name); // "Gifts for Thanksgiving"
  console.log(personObject.price); // 19.99
  
  // JSON.stringify() -> convert object to JSON
  const personJSON = JSON.stringify(personObject);
  
  console.log(personJSON); // {"name":"Gifts for Thanksgiving","price":19.99}
  console.log(typeof personJSON); // string
  console.log(personJSON.name); // undefined
  console.log(personJSON.price); // undefined
  
  // JSON
  const personJSON2 = '{ "name": "Gifts for Christmas", "price": 30.99}';
  
  // JSON.parse() -> converts JSON to object
  const personObject2 = JSON.parse(personJSON2);
  console.log(personObject2);
  
  console.log(personObject2); // { name: 'Gifts for Christmas', price: 30.99 }
  console.log(typeof personObject2); // object
  console.log(personObject2.name); // "Gifts for Christmas"
  console.log(personObject2.price); // 30.99
  
  // Shallow Copy vs Deep Copy  -------------------------------
  const products = [1, { name: "Toys", price: 80 }, 3];
  // const products = [1, [0,4], 3];
  
  const copyOfProducts = [...products]; // Shallow copy
  // When we shallow copy arrays and objects
  // It actually copies the first level properties
  // Nested arrays or objects are not copied
  // Examples: Es6 spread operator, concat
  
  console.log(products);
  console.log(copyOfProducts);
  
  copyOfProducts[1].name = "Clothes";
  
  console.log(products); // [ 1, { name: 'Clothes', price: 80 }, 3 ]
  console.log(copyOfProducts); // [ 1, { name: 'Clothes', price: 80 }, 3 ]
  
  // Shallow copy simple example
  const arr = [1, 2, 3];
  const arr2 = [...arr];
  arr2[0] = 0;
  console.log(arr); // [ 1, 2, 3 ]
  console.log(arr2); // [ 0, 2, 3 ]
  
  // Deep copy
  // When we perform deep copy we create an entirely
  // new structure and recursively copies all nested objects or arrays.
  // Examples => lodash library, JSON
  
  // Deep Copy example using JSON
  const products2 = [1, { name: "Toys", price: 80 }, 3];
  
  // helpers function
  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  const copyOfProducts2 = deepCopy(products2);
  
  copyOfProducts2[1].name = "Clothes";
  
  console.log(products2); // [ 1, { name: 'Toys', price: 80 }, 3 ]
  console.log(copyOfProducts2); // [ 1, { name: 'Clothes', price: 80 }, 3 ]
  
  // Note: Even though JSON.parse(JSON.stringify(obj)) is an easiest way to deep copy,
  // it fails copy objects that contain functions, undefined or  circular references.