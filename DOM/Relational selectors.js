//select #container div
const container = document.querySelector("#Selector");

//select first child of #container => .display
const display = container.firstElementChild;
console.log(display);

// select the .controls div
const controls = document.querySelector(".\controls");

//select the sibling => .display
const display_ = controls.previousElementSibling;
console.log(display);

