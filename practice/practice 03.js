// Basic Functions

/*
Question 1

Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
tripleWord("Tech") 	-> "TechTechTech"
tripleWord("Global") 	-> "GlobalGlobalGlobal"
*/

// Solution

function tripleWord(word) {
    console.log(word.toString().repeat(3)); // Number.toString(), Boolean.toString()
    // console.log(word + word + word);
  }
  
  tripleWord("Tech");
  tripleWord("Global");
  tripleWord("Hi");
  tripleWord("1");
  // if not a string
  tripleWord(1); // err
  tripleWord(true); // true = 1m, false = 0
  tripleWord(false); // true = 1m, false = 0
  
  /*
  Question 2
  
  Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns 
  the Fahrenheit value when invoked.
  
  Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to 
  Fahrenheit. 
      Multiply the Celsius temperature by 9.
      Divide the result by 5.
      Add 32 to the result.
  
  Examples:
  celciusToFahrenheit(20) 	-> 68
  celciusToFahrenheit(25) 	-> 77
  celciusToFahrenheit(0) 	    -> 32
  celciusToFahrenheit(-10) 	-> 14
  */
  
  // Solution 2
  
  function celciusToFahrenheit(celcius) {
    const fahrenheit = (celcius * 9) / 5 + 32;
    return fahrenheit;
    //   return (celcius * 9) / 5 + 32;
    //   console.log((celcius * 9) / 5 + 32);
  }
  
  console.log(celciusToFahrenheit(20));
  console.log(celciusToFahrenheit(25));
  console.log(celciusToFahrenheit(0));
  console.log(celciusToFahrenheit(-10));
  
  // celciusToFahrenheit(20);
  // celciusToFahrenheit(25);
  // celciusToFahrenheit(0);
  // celciusToFahrenheit(-10);
  
  /*
  Question 3
  
  Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.
  
  NOTE: Assume the sides of the rectangle are x and y.
  
  Conversion Formula:
  Area: x * y
  Perimeter 2 * (x + y)
  
  Examples:
  rectangleArea(5, 4) 	-> 20
  rectangleArea(3, 7) 	-> 21
  rectangleArea(6, 10) 	-> 60
  
  rectanglePerimeter(5, 4) 		-> 18
  rectanglePerimeter(3, 7) 		-> 20
  rectanglePerimeter(6, 10) 	    -> 32
  */
  
  // Solution 3
  function rectangleArea(x, y) {
    return x * y;
  }
  
  function rectanglePerimeter(x, y) {
    return 2 * (x + y);
  }
  
  console.log(rectangleArea(5, 4)); // 20
  console.log(rectanglePerimeter(5, 4)); // 18
  
  // Call function inside another function example (Optional solution)
  
  // All this function cares is to multiply two numbers
  function multiply(a, b) {
    // logic to check if a and b is number
    // return only if both is
    return a * b;
  }
  // Only cares about returning area of two numbers
  function rectangleArea1(x, y) {
    let result = multiply(x, y);
    return result;
  }
  // Only cares about returning perimeter of two numbers
  function rectanglePerimeter1(x, y) {
    return multiply(2, x + y);
  }
  
  console.log(rectangleArea1(5, 4)); // 20
  console.log(rectanglePerimeter1(5, 4)); // 18
  
  // wrong arguments
  console.log(rectangleArea1("5", "4")); // 20
  console.log(rectanglePerimeter1("5", "4")); // 18
  
  /*
  Question 4
  
  Write 2 functions named as squareArea() and squarePerimeter() which calculate the area and perimeter of a square when invoked.
  
  NOTE: Assume the side of the square is x.
  
  Conversion Formula:
  Area: x * x
  Perimeter 4 * x
  
  Examples:
  squareArea(5) 	-> 25
  squareArea(3) 	-> 9
  squareArea(6) 	-> 36
  
  squarePerimeter(5) 	-> 20
  squarePerimeter(3) 	-> 12
  squarePerimeter(6) 	-> 24
  */
  
  // Solution 4
  function squareArea(side) {
    return side ** 2;
  }
  
  function squarePerimeter(side) {
    return 4 * side;
  }
  
  console.log(squareArea(5));
  console.log(squareArea(3));
  console.log(squareArea(6));
  
  console.log(squarePerimeter(5));
  console.log(squarePerimeter(3));
  console.log(squarePerimeter(6));
