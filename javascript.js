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

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    const messages = document.querySelector("#messages");


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `It's a tie! You both played rock! / You: ${humanScore}, CPU: ${computerScore}`;
                    break;
                case "paper":
                    messages.textContent = `You lose! Paper beats rock! / You: ${humanScore}, CPU: ${computerScore}`;
                    computerScore++;
                    break;
                case "scissors":
                    messages.textContent = `You win! Rock beats scissors! / You: ${humanScore}, CPU: ${computerScore}`;
                    humanScore++;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `You win! Paper beats rock! / You: ${humanScore}, CPU: ${computerScore}`;
                    humanScore++;
                    break;
                case "paper":
                    messages.textContent = `It's a tie! You both played paper! / You: ${humanScore}, CPU: ${computerScore}`;
                    break;
                case "scissors":
                    messages.textContent = `You lose! Scissors beats paper! / You: ${humanScore}, CPU: ${computerScore}`;
                    computerScore++;
            }
        } else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `You lose! Rock beats scissors! / You: ${humanScore}, CPU: ${computerScore}`;
                    computerScore++;
                    break;
                case "paper":
                    messages.textContent = `You win! Scissors beats paper! / You: ${humanScore}, CPU: ${computerScore}`;
                    humanScore++;
                    break;
                case "scissors":
                    messages.textContent = `It's a tie! You both played scissors! / You: ${humanScore}, CPU: ${computerScore}`;
            }
        }
    }

    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playRound(e.target.id, getComputerChoice());
        });
    });
}

playGame();