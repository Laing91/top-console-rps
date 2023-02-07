

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
    console.log(randomNumber);
}