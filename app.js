

// Task 1 - Create a function called getComputerChoice
// that will randomly return either Rock, Paper or Scissors

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Task 2 - Write a function that plays a single round of Rock, Paper, cissors. The function
// should take two parameters - playerSelection and computerSelection, and return
// a string that declares the winner of the round like so "You lose! Paper beats Rock"

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "It/'s a draw, you both selected Rock."
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock."
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors."
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock."
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It/'s a draw, you both selected Paper."
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beat Paper."
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors."
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat Paper."
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It/'s a draw, you both selected Rock."
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
