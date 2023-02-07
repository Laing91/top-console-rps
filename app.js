let playerScore = 0;
let computerScore = 0;


// Task 1 - Create a function called getComputerChoice
// that will randomly return either Rock, Paper or Scissors
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getPlayerChoice = () => {
    let input = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    return input;
}

// Task 2 - Write a function that plays a single round of Rock, Paper, cissors. The function
// should take two parameters - playerSelection and computerSelection, and return
// a string that declares the winner of the round like so "You lose! Paper beats Rock"

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It/'s a draw, you both selected Rock."
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It/'s a draw, you both selected Paper."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat Paper."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It/'s a draw, you both selected Rock."
    }
}

//console.log(playRound(playerSelection, computerSelection));


let game = () => {
    for (let i = 0; i < 5; i++) {
    	const playerSelection = getPlayerChoice();
			const computerSelection = getComputerChoice();
      let roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
    }
}

game();