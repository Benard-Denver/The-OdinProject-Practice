const instruments = ["Erhu", "Shakuhachi", "Koto"];
const cars = [
  "Koenigsegg",
  "Caymen S",
  "Carrera",
  "Mercielago",
  "Sesto Elemento",
];

let instrumentsCount = 0;
let instrumentsReport = "The instruments available are ";

while (instrumentsCount < instruments.length) {
  if (instruments[instrumentsCount] === instruments.length - 1) {
    instrumentsReport += `and ${instruments[instrumentsCount]}.`;
  } else {
    instrumentsReport += `${instruments[instrumentsCount]}, `;
  }

  instrumentsCount++;
}
console.log(instrumentsReport);

let vehicleCount = 0;
let vehicleReport = "The cars left are ";
do {
  if (vehicleCount === cars.length - 1) {
    vehicleReport += `and ${cars[vehicleCount]}.`;
  } else {
    vehicleReport += `${cars[vehicleCount]}, `;
  }

  vehicleCount++;
} while (vehicleCount < cars.length);

console.log(vehicleReport);