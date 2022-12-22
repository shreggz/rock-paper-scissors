const moveOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});

function getComputerChoice() {
    let computerSelection = moveOptions[Math.floor(Math.random()*moveOptions.length)]
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = document.createElement('p');
        result.textContent = "It's a draw!";
        gameResult.appendChild(result);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        let result = document.createElement('p');
        result.textContent = `You win...${playerSelection} beats ${computerSelection}!`;
        gameResult.appendChild(result);
        playerScore++;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        let result = document.createElement('p');
        result.textContent = `You lose...${computerSelection} beats ${playerSelection}!`;
        gameResult.appendChild(result);
        computerScore++;
    }
}



/*
function playGame() {
    while ((playerScore < 3) && (computerScore < 3)) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkResult(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (checkResult(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You killed the machine. Cheers!")
        alert("You killed the machine. Cheers!");
        return "win";
    } else if (computerScore > playerScore) {
        console.log("The machine killed you. Too bad.")
        alert("The machine killed you. Too bad.");
        return "lose";
    }
}




function getPlayerChoice() {
    let playerSelection = document.querySelectorAll('button');
    playerSelection.forEach((button) => {
        button.addEventListener('click', () => {
        console.log(button.id);
        });
    });
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



function checkResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return "Player";
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        return "Computer";
    }
}




function playRound(playerSelection, computerSelection) {
    checkResult(playerSelection, computerSelection);
    if (checkResult(playerSelection, computerSelection) == "Draw") {
        alert("It's a draw!");
        return "It's a draw!";
    } else if (checkResult(playerSelection, computerSelection) == "Player") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (checkResult(playerSelection, computerSelection) == "Computer") {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

/*
function playGame() {
    while ((playerScore < 3) && (computerScore < 3)) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkResult(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (checkResult(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You killed the machine. Cheers!")
        alert("You killed the machine. Cheers!");
        return "win";
    } else if (computerScore > playerScore) {
        console.log("The machine killed you. Too bad.")
        alert("The machine killed you. Too bad.");
        return "lose";
    }
}

*/