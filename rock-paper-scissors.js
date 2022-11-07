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
    console.log(playerSelection);
}


/* if (!moveOptions.includes(playerSelection)) {
    prompt("Not a valid weapon. Choose rock, paper, or scissors.")
} else {
    return playerSelection;
} */