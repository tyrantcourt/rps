playGame();

function playGame() {
    // Initializes scores
    let humanScore = 0;
    let computerScore = 0;
    // Plays a number of rounds, logs score count at end of each
    // [BROKEN! NEVER INCREMENTS computerScore !!]
    let i = 0;
    while (i < 5) {
        roundResult = playRound();
        if (roundResult === "win") {
            humanScore++;
        }
        else if (roundResult === "loss") {
            computerScore++;
        }
        i++;
        console.log("Computer Points: " + computerScore + "\nHuman Points: " + humanScore);
    }
    // Declares winner
    if (computerScore === humanScore) {
        alert("Tie! Same amount of points.");
    }
    else if (computerScore > humanScore) {
        alert("You lose! Less points.");
    }
    else {
        alert("You win! You got more points!");
    }
}

// Randomly generates rock, paper, or scissors
function getComputerChoice(rock, paper, scissors) {
    const strings = [rock, paper, scissors];
    let randomIndex = Math.floor(Math.random() * strings.length);
    return strings [randomIndex];
}

// Prompts user for rock, paper, or scissors
function getHumanChoice(string) {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

// Runs one round of Rock Paper Scissors
function playRound(humanChoice, computerChoice) {
    // Uses chosen answer
    let human = getHumanChoice();
        
    // Uses randomly generated answer
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let computer = getComputerChoice(rock, paper, scissors);
    
    // Game logic
    if (human === computer) {
        console.log("Tie! Same answer!");
        roundResult = "tie";
    }
    else if (human === "rock" && computer === "paper") {
        console.log("You lose! Paper beats rock!")
        roundResult = "loss";
    }
    else if (human === "rock" && computer === "scissors") {
        console.log("You win! Rock beats scissors!")
        roundResult = "win";
    }
    else if (human === "paper" && computer === "scissors") {
        console.log("You lose! Scissors beats paper!")
        roundResult = "loss";
    }
    else if (human === "paper" && computer === "rock") {
        console.log("You win! Paper beats rock!")
        roundResult = "win";
    }
    else if (human === "scissors" && computer === "rock") {
        console.log("You lose! Rock beats scissors!")
        roundResult = "loss";
    }
    else if (human === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats paper!")
        roundResult = "win";
    }
    return roundResult;
}

