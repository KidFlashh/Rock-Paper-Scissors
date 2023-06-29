const playerScore = document.querySelector('.playerpoint');
const computerScore = document.querySelector('.computerpoint');
const element = document.querySelector('.round');
const btns = document.querySelectorAll('button');
const choices =['rock', 'paper', 'scissors'];




//get random answer from computer
function computerPlay() {
    // const myArry = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice);
    return choice;
};

// Check results of each round
function checkAnswers(playerSelection,computerSelection) {
    //check winning combinations
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')){
                return 'Player wins';
            }
    else {
        return 'Computer wins';
    }
};


const playRound = (playerSelection, computerSelection) => {
    let result = checkAnswers(playerSelection,computerSelection);
    const p = document.createElement('p');
    switch (result) {
        case "Tie": 
        p.innerText = `It's a Tie! You both picked ${playerSelection}`;
        p.style.color = 'purple';
        element.replaceChildren(p);
        break
        case "Player wins":
        p.innerText = `Player Wins This round, ${playerSelection} Beats ${computerSelection}`;
        p.style.color = 'blue';
        element.replaceChildren(p);
        playerScore.textContent++;
        playerScore.style.color = 'green';
        break
        case "Computer wins":
        p.innerText = `Computer Wins This Round, ${computerSelection} Beats  ${playerSelection}`;
        p.style.color = 'orange';
        element.replaceChildren(p);
        computerScore.textContent++;
        computerScore.style.color = 'red';
    }
    
};


// Remove elements after each round
// restart game after 5 rounds 
const gameClear = (playerScore, computerScore) => {
    const btn = document.createElement('button');
    const p = document.createElement('p');
    btn.innerText = 'restart';
    if(playerScore.textContent === '5') {
        p.innerText = "Player Wins Game !!!!";
        element.replaceChildren(p);
        element.appendChild(btn).addEventListener('click', reload);
        function reload() {
            location.reload();
        }
        // window.location.reload();
    } if (computerScore.textContent === '5') {
        p.innerText = "Computer Wins Game !!!!";
        element.replaceChildren(p);
        element.appendChild(btn).addEventListener('click',reload);
        function reload() {
            location.reload();
        }
        // window.location.reload();
    }
};

btns.forEach(function (btns) {
    btns.addEventListener("click", function (e) {
        const playerSelection = e.currentTarget.classList;
        if (playerSelection.contains('rock')) {
            console.log(this);
        } else if (playerSelection.contains('paper')) {
            console.log(this);
        } else if (playerSelection.contains('scissors')) {
            console.log(this);
        }
        const computerSelection = computerPlay();
        checkAnswers(playerSelection,computerSelection);
        playRound(playerSelection, computerSelection);
        gameClear(playerScore, computerScore);
    });
});









// const playRound = (playerSelection, computerSelection) => {
//     if (playerSelection == computerSelection) {

//     }else if (playerSelection == 'scissors' && computerSelection == 'rock') {

//     }else if (playerSelection == 'scissors' && computerSelection == 'paper') {

//     }else if (playerSelection == 'rock' && computerSelection == 'paper') {

//     }else if (playerSelection == 'rock' && computerSelection == 'scissors') {

//     }else if (playerSelection == 'paper' && computerSelection == 'scissors') {

//     }else if (playerSelection == 'paper' && computerSelection == 'rock') {

//     }
// }

//create three buttons 
//add event listener to each button
//everytime button is clicked attach to playerSelection 
//console.log this step
// rock.addEventListener('click', () => {
//     const computerSelection = computerPlay()
//     const playerSelection = 'rock'
//     playRound(playerSelection, computerSelection)
// })

// paper.addEventListener('click', () => {
//     const computerSelection = computerPlay()
//     const playerSelection = 'paper'
//     playRound(playerSelection, computerSelection)
// })

// scissors.addEventListener('click', () => {
//     const computerSelection = computerPlay()
//     const playerSelection = 'scissors'
//     playRound(playerSelection, computerSelection)
// })

// const  playRound = (playerSelection, computerSelection) => {
//     //play a single round of rock, paper, scissors
//     const p = document.createElement('p');
//     if (playerSelection == computerSelection) {
//         p.innerText = "It was a Tie";
//         element.appendChild(p);
//     }
//     else if (playerSelection == 'rock' && computerSelection == 'scissors'){
//                 p.innerText = 'Player wins';
//                 element.appendChild(p);
//             }
//     else if (playerSelection == 'scissors' && computerSelection == 'paper')
//     {
//                 p.innerText = 'Player wins';
//                 element.appendChild(p);
//             }
//     else if (playerSelection == 'paper' && computerSelection == 'rock')
//         {
//                 p.innerText = 'Player wins';
//                 element.appendChild(p);
//     }
//     else {
//         p.innerText = 'Computer wins';
//         element.appendChild(p);
//     }
// };