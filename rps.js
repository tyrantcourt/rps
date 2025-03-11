playGame();

async function playGame() {
    // Initializes scores
    let humanScore = 0;
    let computerScore = 0;

    // Plays a number of rounds, logs score count at end of each
    let i = 0;
    while (i < 5) {
        // Wait for user input
        let humanChoice = await getHumanChoice();

        let roundResult = playRound(humanChoice);
        if (roundResult === "win") {
            humanScore++;
        }
        else if (roundResult === "loss") {
            computerScore++;
        }
        i++;
        alert("Computer Points: " + computerScore + "\nHuman Points: " + humanScore);
    }
    // Declares winner
    const resultsDisplay = document.querySelector("#resultsDisplay");
    const content = document.createElement("div");
    content.classList.add("content");
    if (computerScore === humanScore) {
        content.textContent = "Tie! Same amount of points.";
    }
    else if (computerScore > humanScore) {
        content.textContent = "Lose... you had less points.";
    }
    else {
        content.textContent = "Win! You had more points!";
    }
    resultsDisplay.appendChild(content);
}

// Randomly generates rock, paper, or scissors
function getComputerChoice(rock, paper, scissors) {
    const strings = [rock, paper, scissors];
    let randomIndex = Math.floor(Math.random() * strings.length);
    return strings [randomIndex];
}

// Prompts user for rock, paper, or scissors
function getHumanChoice(string) {
    return new Promise(resolve => {
        // Link to buttons in HTML page
        const rockBtn = document.querySelector("#rockBtn");
        const paperBtn = document.querySelector("#paperBtn");
        const scissorsBtn = document.querySelector("#scissorsBtn");

        // Adds event listeners to buttons
        rockBtn.addEventListener("click", () => resolve("rock"));
        paperBtn.addEventListener("click", () => resolve("paper"));
        scissorsBtn.addEventListener("click", () => resolve("scissors"));
        });
}

// Runs one round of Rock Paper Scissors
function playRound(humanChoice) {
    // Uses randomly generated answer
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let computer = getComputerChoice(rock, paper, scissors);
    
    // Helps send round result to HTML
    const roundResult = document.querySelector("#roundResult");
    const contentRound = document.createElement("div");
    contentRound.classList.add("contentRound");

    // Game logic
    if (humanChoice === computer) {
        contentRound.textContent = "Tie! Same answer!";
        roundResult.appendChild(contentRound);
        return "tie";
    }
    else if (humanChoice === "rock" && computer === "paper") {
        contentRound.textContent = "You lose! Paper beats rock!";
        roundResult.appendChild(contentRound);
        return "loss";
    }
    else if (humanChoice === "rock" && computer === "scissors") {
        contentRound.textContent = "You win! Rock beats scissors!";
        roundResult.appendChild(contentRound);
        return "win";
    }
    else if (humanChoice === "paper" && computer === "scissors") {
        contentRound.textContent = "You lose! Scissors beats paper!";
        roundResult.appendChild(contentRound);
        return "loss";
    }
    else if (humanChoice === "paper" && computer === "rock") {
        contentRound.textContent = "You win! Paper beats rock!";
        roundResult.appendChild(contentRound);
        return "win";
    }
    else if (humanChoice === "scissors" && computer === "rock") {
        contentRound.textContent = "You lose! Rock beats scissors!";
        roundResult.appendChild(contentRound);
        return "loss";
    }
    else if (humanChoice === "scissors" && computer === "paper") {
        contentRound.textContent = "You win! Scissors beats paper!";
        roundResult.appendChild(contentRound);
        return "win";
    }
}