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

function getHumanChoice() {
  let choice = prompt("Enter your choice");
  return choice.toLowerCase();
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
  } else if (humanChoice === computerChoice) {
    console.log("Draw");
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
  }
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  console.log(`The Score is:\nYou: ${humanScore}\nComputer: ${computerScore}
    `);
}

playGame();
