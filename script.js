let humanScore = 0;
let computerScore = 0;
let winner = "";
const choice = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
choice.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    playRound(getHumanChoice(), getComputerChoice());
  }
});
button.addEventListener("click", () =>
  playRound(getHumanChoice(), getComputerChoice()),
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

function getHumanChoice() {
  let humanChoice = choice.value;
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
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
  choice.value = "";
  score.textContent = `human: ${humanScore}    computer: ${computerScore}`;
  if (humanScore === 5) {
    result.textContent = "HUMAN WINS!";
  } else if (computerScore === 5) {
    result.textContent = "COMPUTER WINS!";
  } else
    result.textContent = `human picks ${humanChoice}, computer picks ${computerChoice}. ${winner} wins.`;
}
