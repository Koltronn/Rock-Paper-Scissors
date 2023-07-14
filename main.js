const choices = ['rock', 'paper', 'scissors']
let cpuRandChoice;
let playerChoice;
let playerScore = 0;
let cpuScore = 0;
function getComputerChoice() {
    cpuRandChoice = choices[Math.floor(Math.random() * 3)];
    return cpuRandChoice;
}

function playerSelection() {
    playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    console.log(playerChoice);
    if (playerChoice === 'rock' 
    || playerChoice === 'paper'
    || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        alert("not a valid choice")
        playerSelection();
    }
}

function round(playerSelection, getComputerChoice) {
    if ((playerSelection === 'rock' && getComputerChoice === 'paper') 
    || (playerSelection === 'paper' && getComputerChoice === 'scissors')
    || (playerSelection === 'scissors' && getComputerChoice === 'rock')) {
        console.log(`YOU LOSE, ${getComputerChoice.toUpperCase()} BEATS ${playerSelection.toUpperCase()}`)
        cpuScore += 1;
        console.log(`YOUR SCORE:${playerScore}
        COMPUTER'S SCORE: ${cpuScore}`)
    } else if ((playerSelection === 'rock' && getComputerChoice === 'scissors') 
    || (playerSelection === 'paper' && getComputerChoice === 'rock')
    || (playerSelection === ' scissors' && getComputerChoice === 'paper')) {
        console.log(`YOU WIN, ${playerSelection.toUpperCase()} BEATS ${getComputerChoice.toUpperCase()}`)
        playerScore += 1;
        console.log(`YOUR SCORE:${playerScore}
        COMPUTER'S SCORE: ${cpuScore}`)
    } else {
        console.log(`IT'S A TIE! YOU BOTH CHOSE ${playerSelection.toUpperCase()}`)
        console.log(`YOUR SCORE:${playerScore}
        COMPUTER'S SCORE: ${cpuScore}`)
    }
}


function game() {
    while (playerScore < 3 || cpuScore < 3) {
        round(playerSelection(), getComputerChoice());
        if (playerScore === 3) {
            alert("PLAYER WINS THE GAME")
            break;
        } else if (cpuScore === 3) {
            alert("CPU WINS THE GAME")
            break;
        }
    }
}

game();

