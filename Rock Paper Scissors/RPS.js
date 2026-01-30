function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(input) {
  let choice = input;
  return choice;
}
let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("div");
let total = document.createElement("span");
total.textContent = `The Score is: \nYou: ${humanScore}\nComputer: ${computerScore}`;
results.appendChild(total);

function updateScore() {
  total.textContent = `The Score is: \nYou: ${humanScore}\nComputer: ${computerScore}`;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    total.textContent = `The Score is: \nYou: ${humanScore}\nComputer: ${computerScore}`;
  } else if (humanChoice === computerChoice) {
    console.log("Draw");
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
    total.textContent = `The Score is: \nYou: ${humanScore}\nComputer: ${computerScore}`;
  }
}

const choices = ["rock", "paper", "scissors"];

document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    playRound(choices[index], getComputerChoice());
  });
});

function playGame() {
  console.log(`The Score is:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

playGame();
