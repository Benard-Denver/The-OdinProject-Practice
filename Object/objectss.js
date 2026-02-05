function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user = makeUser("John", 30);
alert(user.name); //John

//property existence
alert("age" in user); //true, user.age exists.

//for in loop
for (let key in user) {
  alert(key); // name, age
  alert(user[key]); // John, 30
}

//looping over an object with integer property name
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
// the codes go in ascending order, because they are integers.
// integer properties means a string can be converted to and from an integer without a change
// add + sign to make it list in creation order

//looping over object with non-integer properties
for (let prop in user){
    alert(prop); // name, age => listed in created order
}