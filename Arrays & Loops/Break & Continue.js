const animals = ["Dog", "Cat", "Cow", "Dog"];
const fruits = ["Orange", "Lemon", "Grapes"];
const cars = [
  "Koenigsegg",
  "Caymen S",
  "Carrera",
  "Mercielago",
  "Sesto Elemento",
];
const laptops = ["Victus", "RazorBlade", "Legion"];
const instruments = [
  "Erhu",
  "Shakuhachi",
  "Koto",
  "Ukelele",
  "Banjo",
  "Djembe",
];
const numbers = [3, 6, 7, 9];

//break
for (const car of cars) {
  if (car == "Mercielago") {
    console.log("We found your Lamborghini!");
    break;
  } else {
    console.log(car);
  }
}

//continue
for (let i = 0; i < instruments.length; i++) {
  if (i % 2 == 0) {
    console.log(`You already own ${instruments[i]}, so skip it.`);
    continue;
  } else {
    console.log(`Added ${instruments[i]} to the cart`);
  }
}
