const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
  let humanChoice = prompt("rock, paper, or scissors?", "");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(`human: ${humanChoice}`);
    console.log(`computer: ${computerChoice}`);
    if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore == ++computerScore;
      console.log(
        `computer wins. humans: ${humanScore}, computer: ${computerScore}`,
      );
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore == ++humanScore;
      console.log(
        `human wins. humans: ${humanScore}, computer: ${computerScore}`,
      );
    } else if (humanChoice == "paper" && computerChoice == "paper") {
      console.log(`draw. humans: ${humanScore}, computer: ${computerScore}`);
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore == ++computerScore;
      console.log(
        `computer wins. humans: ${humanScore}, computer: ${computerScore}`,
      );
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore == ++humanScore;
      console.log(
        `human wins. humans: ${humanScore}, computer: ${computerScore}`,
      );
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
      console.log(`draw. humans: ${humanScore}, computer: ${computerScore}`);
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore == ++computerScore;
      console.log(
        `computer wins. humans: ${humanScore}, computer: ${computerScore}`,
      );
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore == ++humanScore;
      console.log(
        `human wins. humans: ${humanScore}, computer: ${computerScore}`,
      );
    } else if (humanChoice == "rock" && computerChoice == "rock") {
      console.log(`draw. humans: ${humanScore}, computer: ${computerScore}`);
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  winner();
  function winner() {
    if (humanScore > computerScore) {
      console.log("Human wins!");
    } else console.log("Computer wins!");
  }
}
playGame();
