const moveOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const computerSelection = moveOptions[Math.floor(Math.random()*moveOptions.length)]
    return computerSelection;
}