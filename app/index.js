const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    //grab a random chocie from the compputer
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
};

function checkAnswers(playerSelection, computerSelection) {
    //check winnig combinations
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock") ){
            return "Player wins";
        }
    else {
        return "Computer wins";
    }    
};

function playRound(playerSelection, computerSelection) {
    //play a single round of rock, paper, scissors
    const result = checkAnswers(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!";
    }else if (result ==  "Player Wins") {
        return 'You Win!';
    }else {
        return 'You Lose!';
    }
};

function getPlayerChoice() {
    //take an answer from the player
    let validatedInput = false;
    while(validatedInput == false) {
        const answer = prompt("pick a choice");
        if (answer == null) {
            continue;
        }
        const userChoice = answer.toLowerCase();
        if(options.includes(userChoice)) {
            validatedInput = true;
            return userChoice;
        }
    }
};

function game() {
    //create a function for 5 rounds
    //keep track of the score
    //the computer or player must win the most rounds
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("New round!!");
        if (checkAnswers(playerSelection, computerSelection) == "Player wins") {
            playerScore++;
        }else if (checkAnswers(playerSelection, computerSelection) == "Computer wins") {
            computerScore++;
        }
    }
    console.log("Game over")
    if (playerScore > computerScore) {
        console.log( "Player was the winner!");
    }else if (playerScore < computerScore) {
        console.log("Computer was the winner!");
    }else {
        console.log("We have a tie!");
    }
};

game()