let add7 = (number) => number + 7;
console.log(add7(15));

let product = (num1, num2) => num1 * num2;
console.log(product(50,2));

let capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

console.log(capitalize("absd"));


let lastLetter = (words) =>
    words.charAt(words.length - 1);

console.log(lastLetter("Xavier"));