let array = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = prompt("Enter number of rounds");
getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return array[choice];
}

playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return "You lose! Paper beats rock\n Computer: " + computerScore + "\n Player: " + playerScore;
        }
        else {
            playerScore++;
            return "You win! Rock beats scissors\n Computer: " + computerScore + "\n Player: " + playerScore;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper\n Computer: " + computerScore + "\n Player: " + playerScore;
        }
        else {
            playerScore++;
            return "You win! Paper beats rock\n Computer: " + computerScore + "\n Player: " + playerScore;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beats scissors\n Computer: " + computerScore + "\n Player: " + playerScore;
        }
        else {
            playerScore++;
            return "You win! Scissors beats paper\n Computer: " + computerScore + "\n Player: " + playerScore;
        }
    }
}
game = () => {
    for (let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Enter your choice").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("You win!\n Player: " + playerScore + "\n Computer: " + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log("You lose!\n Player: " + playerScore + "\n Computer: " + computerScore);
    }
    else {
        console.log("It's a tie!\n Player: " + playerScore + "\n Computer: " + computerScore);
    }
}
game();