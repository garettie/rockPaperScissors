let humanScore = 0;
let computerScore = 0;
let winner = "";
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

rock.addEventListener("click", () =>
  playRound(getHumanChoice("rock"), getComputerChoice()),
);
paper.addEventListener("click", () =>
  playRound(getHumanChoice("paper"), getComputerChoice()),
);
scissors.addEventListener("click", () =>
  playRound(getHumanChoice("scissors"), getComputerChoice()),
);

function getComputerChoice() {
  let computerChoice;
  let choice = Math.floor(Math.random() * 3);
  if (choice == 1) {
    computerChoice = "rock";
  } else if (choice == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice(clicked) {
  return clicked;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    winner = "no one";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "human";
    ++humanScore;
  } else {
    winner = "computer";
    ++computerScore;
  }
  score.textContent = `human: ${humanScore}    computer: ${computerScore}`;
  if (humanScore === 5) {
    result.textContent = "HUMAN WINS!";
  } else if (computerScore === 5) {
    result.textContent = "COMPUTER WINS!";
  } else
    result.textContent = `human picks ${humanChoice}, computer picks ${computerChoice}. ${winner} wins.`;
}
