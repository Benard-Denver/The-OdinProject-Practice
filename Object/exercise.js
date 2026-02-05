// map to names
let john = { name: "John", age: 25 };
let pete = { name: "Peter", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names);

//map to objects
let mike = { name: "Mike", surname: "Smith", id: 1 };
let sean = { name: "Sean", surname: "Diddy", id: 2 };
let letty = { name: "Letty", surname: "White", id: 3 };

let userz = [mike, sean, letty];
let usersMapped = userz.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

//sort by age
function sortAge(array) {
  users.sort((a, b) => a.age - b.age);
}
sortAge(users);
console.log(users);

// get average age
// function getAverageAge(array) {
//   let ages = array.map((item) => item.age);
//   const ageSum = ages.reduce((acc, curr) => acc + curr, 0);
//   const average = ageSum / array.length;
//   console.log(average);
// }

//cleaner
function getAverageAge(array) {
  return array.reduce((prev, current) => prev + current.age, 0) / array.length;
}
console.log(getAverageAge(users));

//create keyed object from array
function groupById(users) {
  return users.reduce((object, value) => {
    object[value.id] = value;
    return object;
  }, {});
}
console.log(groupById(userz));
