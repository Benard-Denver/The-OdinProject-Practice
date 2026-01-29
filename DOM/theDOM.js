// const heading = document.createElement("h1");
// const headingText = document.createTextNode("Big Head!");
// heading.appendChild(headingText);
// document.body.appendChild(heading);

/*
const paragraph = document.createElement("p");
const paragraphText = document.createTextNode("Hey I'm Red!");
paragraph.appendChild(paragraphText);
paragraph.style.color = "red";
document.body.append(paragraph);
*/

//cleaner versions
const heading = document.createElement("h1");
heading.textContent = "Big Head";
heading.style.color = "red";
document.body.append(heading);

const p = document.createElement("p");
p.textContent = "Hey I'm Red";
p.style.color = "red";
document.body.append(p);

const heading3 = document.createElement("h3");
heading3.textContent = "Hey I'm a blue h3";
heading3.style.color = "blue";

const content = document.createElement("div");
content.style.border = "1px solid black";
content.style.backgroundColor = "pink";
content.classList.add("content");
document.body.append(content);

const h1 = document.createElement("h1");
h1.textContent = "Im in a div";
const para = document.createElement("p");
para.textContent = "ME TOO!";

content.append(h1);
content.append(para);

// The DOM is how the browser represents a web page so javascript can read, change, and interact with it.
// HTML alone is static, DOM make it interactive and dynamic.
