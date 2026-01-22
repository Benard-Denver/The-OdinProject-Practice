const animals = ["Dog", "Cat", "Cow"];
const fruits = ["Orange", "Lemon", "Grapes"];
const cars = ["Koenigsegg", "Mercielago", "Sesto Elemento"];
const laptops = ["Victus", "RazorBlade", "Legion"];
const instruments = ["Erhu", "Shakuhachi", "Koto"];

//loop 1
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//loop 2
for (const fruit of fruits) {
  console.log(fruit);
}

//loop 3 -> index & value
for (const [index, car] of cars.entries()) {
  console.log(`Car ${index}: ${car}`);
}

//loop 4 -> index & value
/* This method doesn't allow premature exit of the loop(break and continue) */
laptops.forEach((laptop, index) => {
  console.log(`Index: ${index} Laptop: ${laptop}`);
});

let sentence = "My goto instruments are ";

for (let i = 0; i < instruments.length; i++) {
  if (i == instruments.length - 1) {
    sentence += `and ${instruments[i]}.`;
  } else {
    sentence += `${instruments[i]}, `;
  }
}

console.log(sentence);
