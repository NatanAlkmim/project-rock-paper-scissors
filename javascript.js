let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * computerChoice.length);

    return computerChoice[random];
}

function getHumanChoice() {
    const userInput = prompt("Choose rock, paper or scissors");
  
    return userInput;
}

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

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        alert("Scoreboard:\n" + "Human " + humanScore + " x " + computerScore + " Computer");

        console.log("Score after round " + (i + 1) + ": Human " + humanScore + ", Computer " + computerScore);
    }

    console.log("final score: Human " + humanScore + ", Computer " + computerScore);

    if (humanScore > computerScore) {
        alert("You won the game!\nScoreboard\nHuman " + humanScore + " x " + computerScore + " Computer");
    } else if (computerScore > humanScore) {
        alert("You lost the game!\nScoreboard\nHuman " + humanScore + " x " + computerScore + " Computer");
    } else {
        alert("The game is a tie!\nScoreboard\nHuman " + humanScore + " x " + computerScore + " Computer")
    }
}

playGame()