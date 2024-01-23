// window (or global) object

/* 
Code runner packages uses "global" name instead of "window"
if (typeof global !== undefined) {
  console.log("global", global);
} else {
  console.log("global object is not availble");
}
*/

console.log("window", window);

// Alert  -------------------------------------------------------------
// const alertAns = window.alert("This is alert message!");
// console.log(alertAns);

// Prompt -------------------------------------------------------------
// const userAnser = window.prompt(
//   "Subscribe to our newsletter. Enter your email"
// );
// console.log(userAnser);
// Returns either value, null or empty string

// Confirm -------------------------------------------------------------
// const userAns = window.confirm("Are you 18 yo?");
// console.log(userAns); // Boolean, either true or false
// if (userAns) {
//   console.log("You can enter");
// } else {
//   console.log("You can not enter");
// }

const zipCode = "10101";
// convert it to number
const zipCodeInt = Number.parseInt(zipCode);
const zipCodeInt2 = parseInt(zipCode);

/* 
  Shortcut
  window.alert() -> alert()
  window.prompt() -> prompt()
*/

// innerWidth and innerHeight -------------------------------------------------------------
console.log("innerHeight", innerHeight);
console.log("innerWidth", innerWidth);

// scrollTo(x,y) -------------------------------------------------------------
window.scrollTo(0, 0); // x, y coordinates. Try on browser

// reload() -------------------------------------------------------------

// window.location.reload();

// localStorage -------------------------------------------------------------

console.log(localStorage);
// set item to localStorage
localStorage.setItem("userEmail", "aa@ab.test");

// get item from localStorage
const userEmail = localStorage.getItem("userEmail");
console.log(userEmail);

// remove item from localStorage
// localStorage.removeItem("userEmail");

localStorage.setItem(
  "userDetails",
  JSON.stringify({ name: "Joe", email: "joe@gmail.com" })
);
const userDetails = JSON.parse(localStorage.getItem("userDetails"));
console.log(userDetails);

// Clear localStorage
localStorage.clear();