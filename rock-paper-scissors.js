const moveOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerSelection = moveOptions[Math.floor(Math.random()*moveOptions.length)]
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