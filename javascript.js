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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("It's a tie! You both played rock!");
                break;
            case "paper":
                console.log("You lose! Paper beats rock!");
                computerScore++;
                break;
            case "scissors":
                console.log("You win! Rock beats scissors!");
                humanScore++;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win! Paper beats rock!");
                humanScore++;
                break;
            case "paper":
                console.log("It's a tie! You both played paper!");
                break;
            case "scissors":
                console.log("You lose! Scissors beats paper!");
                computerScore++;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You lose! Rock beats scissors!");
                computerScore++;
                break;
            case "paper":
                console.log("You win! Scissors beats paper!");
                humanScore++;
                break;
            case "scissors":
                console.log("It's a tie! You both played scissors!");
        }
    }
}