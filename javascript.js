let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let promptResult = prompt("Enter rock, paper or scissors:");
    let humanChoice = promptResult.trim().toLowerCase();

    return humanChoice;
}