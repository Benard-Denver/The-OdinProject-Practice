const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstOperand = 0;
let secondOperand = 0;
let operatorSign = "";

const operate = (expression) => {
  const numbers = expression.split(/[\+\-\*\/]/).map(Number);
  const operators = expression.match(/[\+\-\*\/]/g);

  let result = numbers[0];

  operators.forEach((op, i) => {
    const next = numbers[i + 1];

    if (op === "+") result += next;
    if (op === "-") result -= next;
    if (op === "*") result *= next;
    if (op === "/") result /= next;
  });

  return result;
};

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
  display.value = operate(display.value);
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

clearButton.addEventListener("click", () => {
  display.value = "";
});
