/**
 * ACCESSING ELEMENTS IN THE DOM
 */

/**
 * 1. getElementById()
 */

const headingEl = document.getElementById("heading");
const subHeadingEl = document.getElementById("subheading");
console.log("headingEl", headingEl);
console.log("subHeadingEl", subHeadingEl);

/**
 * 1. getElementsByClassName()
 */

const containerEls = document.getElementsByClassName("container");
console.log(containerEls);

// HTMLCollection methods
console.log(containerEls.length);
console.log(containerEls.item(0));
console.log(containerEls[0]);

// loop HTMLCollection
for (let i = 0; i < containerEls.length; i++) {
  console.log(containerEls[i]);
  //   console.log("Element at index " + i + ":" + containerEls[i]);
}

/**
 * 1. getElementsByTagName()
 */

const images = document.getElementsByTagName("img");
console.log("images", images);

// Access individual nodes
console.log(images[0]);
console.log(images[1]);
console.log(images[2]);

// Dynamically access nodes
for (let i = 0; i < images.length; i++) {
  const element = images[i];
  console.log(element);
}

/**
 * querySelector()
 */

// Get by Id
const footerEl = document.querySelector("#main-footerId");
console.log("By Id", footerEl);
const footerEl2 = document.querySelector(".main-footerClass");
console.log("By Class", footerEl2);
const footerEl3 = document.querySelector("footer");
console.log("By TagName", footerEl3);

/**
 * querySelectorAll()
 */

const sections = document.querySelectorAll("section"); // tagname
console.log("sections", sections);

// Manually access nodes
console.log(sections.item(0)); // sections[0]
console.log(sections.item(1)); //  sections[1]
console.log(sections.item(2)); //  sections[2]

// Dynamically access nodes
// Regular for loop

// forEach
sections.forEach((section) => {
  console.log(section);
});

// entries()
const sectionEntries = sections.entries();
console.log("sectionEntries", sectionEntries);

for (let entry of sectionEntries) {
  console.log("entry", entry);
}

/**
 * STYLING DOM ELEMENTS
 */

// Make heading text red
console.log(headingEl.style); // CSSStyleDeclaration object
headingEl.style.color = "red";

// Give border to images
// images.forEach((image) => {}); // Doesn't work

for (let image of images) {
  image.style.border = "1px solid darkblue";
}

/**
 * innerHTML
 */

// Access node content
const articleEl = document.getElementById("article");
console.log(articleEl); // returns whole elements
console.log(articleEl.innerHTML); // returns content
console.log(articleEl.innerText); // returns content
console.log(articleEl.textContent); // returns content

// Update the node content
articleEl.innerHTML = "Hello World";
console.log(articleEl.innerHTML); // Hello World

// Add html content
articleEl.innerHTML = `
    <h2>Article Heading</h1>
    <p>Article body</p>
`;
console.log(articleEl.innerHTML);