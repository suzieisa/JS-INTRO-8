const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];
​
// Find the cheapest book in the bookstore  -> To Kill a Mockingbird
// Find the most expensive book in the bookstore  -> Harry Potter and the Sorcerer's Stone
// Find all Classic books   -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]



// const cheapestBook = bookstore.reduce((cheapest, book) => book.price < cheapest.price ? book : cheapest, bookstore[0]);
// console.log(cheapestBook);

const cheapestBook1 = bookstore.reduce((cheapest, book) => {
    if(book.price < cheapest.price) return book;
    else return cheapest;
}, bookstore[0]);
console.log(cheapestBook1.title);

const mostExpensiveBook = bookstore.reduce((expensive, book) => {
    if(book.price > expensive.price) return book;
    else return expensive;
}, bookstore[0]);
console.log(mostExpensiveBook.title);
const classicBooks = bookstore.filter(books => books.genre === 'Classic').map(book => book.title);
console.log(classicBooks);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

// Calculate the total price of products in the cart     -> 2444
const totalPrice = shoppingCart.items.reduce((price, item)  => price + item.price * item.quantity, 0);
console.log(totalPrice); 
// Find the brands of all the products in the cart  -> [ 'Dell', 'Apple', 'Sony' ]
const brands = shoppingCart.items.map(items => items.specifications.brand)
console.log(brands);
// Find all the items in the cart with their quantity -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
const itemQuantities = shoppingCart.items.map(item => [item.productName, item.quantity].join(', '));
console.log(itemQuantities);


///////////// Practice

// Step 1
// Create a class called ShoppingCart that contains shopping data.
// Shopping data example: [{ productId: 1, productName: "Laptop", quantity: 1}]

// Step 2
// Class should have a function that simulates the adding to the cart.
// Make this function asynchronous. 1000ms.
// Adds new product to the existing cart.
//  When adding a new product make sure you add with unique productId.

// Step 3
// Class should have a function that simulates the updating the product in the cart. You can use productId to find a product.

// Step 4
// Class should have a function that simulates the logging the cart details.
// It should console log all the cart details.

// Step 5: Keep adding above examples

// SOLUTION

// Step 1

class ShoppingCart {
    constructor() {
      this.cart = [];
      this.customerDetails = {
        name: "John",
        address: "1111 Adress str, LA, CA 11111",
      };
    }
  
    addToCart(product) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (product) {
            this.cart.push(product);
            resolve();
          } else {
            reject("No product provided. Please add at least one");
          }
        }, 1000);
      });
    }
  }
  
  const shopCart = new ShoppingCart();
  
  // then.catch approach
  // shopCart
  //   .addToCart({ productId: 1, productName: "Laptop", quantity: 1 })
  //   .then(() => {
  //     console.log("shopCart", shopCart);
  //   })
  //   .catch((err) => console.log("err", err));
  
  // Async/await approach:
  (async function () {
    // Try catch block
    try {
      await shopCart.addToCart({
        productId: 1,
        productName: "Laptop",
        quantity: 1,
      });
      console.log("shopCart", shopCart);
    } catch (err) {
      console.log(err);
    }
  
    // Step 2 ... keep going
  })();
  
  
  
  
  
  
  
  