//declare an empty object
let user = new Object();
let user1 = {};

//literals and properties
let newUser = {
  name: "John",
  age: 30,
  "likes birds": true, //multiline property
};

// last property may end with a comma. This is called trailing or hanging comma. It makes it easier to add, remove or move around properties bacause all lines become alike.

//Access the properties
console.log(newUser.name);
user.isAdmin = true; // adding new property
delete newUser.age; // delete property

user1["likes birds"] = true; //multiline property
alert(user1["likes birds"]);
delete user["likes birds"];

//computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};
alert(bag.apple); // result is 5 if fruit = apple

//option 2
let fruit2 = prompt("Which fruit to buy", "apple");
let bag2 = {};
bag2 = [fruit2] = 5;

//complex expressions
let fruit3 = "apple";
let bag3 = {
  [fruit3 + "Computers"]: 5, //bag.appleComputers = 5
};
