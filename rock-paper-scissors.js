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
    updateScoreboard(playerScore, computerScore);
}

function updateScoreboard(playerScore, computerScore) {
    playerScoreboard.textContent = `${playerScore}`;
    computerScoreboard.textContent = `${computerScore}`;
    declareWinner(playerScore, computerScore);
}

function declareWinner(playerScore, computerScore) {
    if (playerScore == 3) {
        winnerDeclaration.textContent = "You killed the machine. Cheers!";
        let restart = document.createElement("button");
        restart.innerHTML = "Play again?";
        playAgain.appendChild(restart);
        restart.addEventListener('click', refreshPage);
        disablePlayerMoves();
    } else if (computerScore == 3) {
        winnerDeclaration.textContent = "The machine killed you. Too bad.";
        let restart = document.createElement("button");
        restart.innerHTML = "Play again?";
        playAgain.appendChild(restart);
        restart.addEventListener('click', refreshPage);
        disablePlayerMoves();
    }
}

const refreshPage = () => {
    location.reload();
}

function disablePlayerMoves () {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}