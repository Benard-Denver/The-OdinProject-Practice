const heading = document.createElement("h1");
const headingText = document.createTextNode("Big Head!");
heading.appendChild(headingText);
document.body.appendChild(heading);

/*
const paragraph = document.createElement("p");
const paragraphText = document.createTextNode("Hey I'm Red!");
paragraph.appendChild(paragraphText);
paragraph.style.color = "red";
document.body.append(paragraph);
*/

//cleaner version
const p = document.createElement("p");
p.textContent = "Hey I'm Red";
p.style.color = "red";
document.body.append(p);
