//function declaration
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

//function expression
let foodOrder = (food) => "You have ordered " + food;

//dynamically creating a function
let age = prompt("What is your age?", 0);
let welcome =
  age < 18
    ? () => alert("No beer for you! You are underage")
    : () => alert("Get yourself a Cognac!");

//Multiline arrow functions
let choice = (fruit, drink) => {
  let order = "You have ordered " + fruit + " and " + drink;
  return order;
};
alert(choice("Lemon", "Wine"));

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree with the terms of contract?",
  () => alert("You agreed!"),
  () => alert("Contract agreement failed")
);

let firstName1 = prompt("What's your first name", " ");
let lastName1 = prompt("What's your last name", " ");
alert("You are " + firstName1 + " " + lastName1);

welcome();
const message = favoriteAnimal("Dog");
console.log(message);
alert(foodOrder("Pizza"));
