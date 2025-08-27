let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * computerChoice.length);

  return computerChoice[random];
}
console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt("Choose rock, paper or scissors");
  
  return userInput;
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both chose " + humanChoice);

  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice);

  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++
    console.log("You lost! " + humanChoice + " loses to " + computerChoice);
  } else {
    console.log("Invalid input. Please choose rock, paper, or scissors.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    humanScore = 0;
    computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

console.log("final score: Human " + humanScore + ", Computer " + computerScore);

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore < humanScore) {
    console.log("You lost the game!");
} else {
    console.log("The game is a tie")
}

playGame()