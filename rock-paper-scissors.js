const moveOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerSelection = moveOptions[Math.floor(Math.random()*moveOptions.length)]
    return computerSelection;
}

function getPlayerChoice() {
    let playerInput = prompt("Choose your weapon!");
    while (playerInput == null) {
        playerInput = prompt("No exit! Choose your weapon.")
    }
    let playerSelection = playerInput.toLowerCase();
    let validate = validatePlayerInput(playerSelection);
    while (validate == false) {
        playerInput = prompt("Not a valid weapon. Choose rock, paper, or scissors.");
        while (playerInput == null) {
            playerInput = prompt("No exit! Choose your weapon.")
        }
        playerSelection = playerInput.toLowerCase();
        validate = validatePlayerInput(playerSelection);
    }
    return playerSelection;
}

function validatePlayerInput(playerSelection) {
    if (moveOptions.includes(playerSelection)) {
        return true;
    } else {
        return false;
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer chose paper. You lose!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Computer chose scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer chose scissors. You lose!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Computer chose rock. You win!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer chose rock. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Computer chose paper. You win!")
    }
}