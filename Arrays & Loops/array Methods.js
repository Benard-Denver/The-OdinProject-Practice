const animals = ["Dog", "Cat", "Cow", "Dog"];
const fruits = ["Orange", "Lemon", "Grapes"];
const cars = ["Koenigsegg", "Mercielago", "Sesto Elemento"];
const laptops = ["Victus", "RazorBlade", "Legion"];
const instruments = ["Erhu", "Shakuhachi", "Koto"];
const numbers = [3, 6, 7, 9];

function lowerCased(word) {
  return word.toLowerCase();
}

function upperCased(word) {
  return word.toUpperCase();
}

// map() method creates new array by applying a function to every element in the original array.
// the length remains the same
let lowercaseAnimals = animals.map(lowerCased);
console.log(lowercaseAnimals);

let tripled = numbers.map((number) => number * 3);
console.log(tripled);

//filter() method creates new arry containing only elements that meet a specific condition defined by a callback function.
// the callback should return a boolean value
let myFavoriteCar = cars.filter((car) => car.includes("Koenigsegg"));
console.log(myFavoriteCar);

//reduce() method executes a reduce callback function on each element resulting in a single output value
const animalCount = animals.reduce((animalNum, animal) => {
  if (animal in animalNum) {
    animalNum[animal]++;
  } else {
    animalNum[animal] = 1;
  }
  return animalNum;
}, {});

console.log(animalCount);

// easier method
let countedAnimals = animals.reduce((allAnimals, number) => {
  allAnimals[number] = (allAnimals[number] ?? 0) + 1;
  return allAnimals;
}, {});

console.log(countedAnimals);
