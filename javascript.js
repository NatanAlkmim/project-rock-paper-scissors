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

  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors.");

  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats rock.");

  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper.");

  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lost! Scissors loses to rock.");

  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lost! Rock loses to paper.");

  } else {
    computerScore++;
    console.log("You lost! Paper loses to scissors.")
    
  }
} 




