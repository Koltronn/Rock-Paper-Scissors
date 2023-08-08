const choices = ['rock', 'paper', 'scissors']
let cpuRandChoice;
let playerChoice;
let playerScore = 0;
let cpuScore = 0;

div = document.querySelector('div');
roundMsg = document.createElement('h1');
scoreMsg = document.createElement('h2');
winLossMsg = document.createElement('h3');
div.appendChild(roundMsg);
div.appendChild(scoreMsg)
div.appendChild(winLossMsg)
let buttons = document.querySelectorAll('button')



function getComputerChoice() {
    cpuRandChoice = choices[Math.floor(Math.random() * 3)];
    return cpuRandChoice;
}

function round(playerSelection, getComputerChoice) {
    if ((playerSelection === 'rock' && getComputerChoice === 'paper') 
    || (playerSelection === 'paper' && getComputerChoice === 'scissors')
    || (playerSelection === 'scissors' && getComputerChoice === 'rock')) {
        roundMsg.textContent = `YOU LOSE, ${getComputerChoice.toUpperCase()} BEATS ${playerSelection.toUpperCase()}`
        cpuScore += 1;
        scoreMsg.textContent = `YOUR SCORE:${playerScore}\n
        COMPUTER'S SCORE: ${cpuScore}`
    } else if ((playerSelection === 'rock' && getComputerChoice === 'scissors') 
    || (playerSelection === 'paper' && getComputerChoice === 'rock')
    || (playerSelection === ' scissors' && getComputerChoice === 'paper')) {
        roundMsg.textContent = `YOU WIN, ${playerSelection.toUpperCase()} BEATS ${getComputerChoice.toUpperCase()}`
        playerScore += 1;
        scoreMsg.textContent = `YOUR SCORE:${playerScore}
        COMPUTER'S SCORE: ${cpuScore}`
    } else if (playerSelection === getComputerChoice){
        roundMsg.textContent = `IT'S A TIE! YOU BOTH CHOSE ${playerSelection.toUpperCase()}`
        scoreMsg.textContent =  `YOUR SCORE:${playerScore}
        COMPUTER'S SCORE: ${cpuScore}`
    }
}

function game() {
    buttons.forEach((button => {
        button.addEventListener('click', function(e){
            round(e.target.textContent.toLowerCase(), getComputerChoice())
            if (playerScore === 5) {
                winLossMsg.textContent = "PLAYER WINS THE GAME";
                playerScore = 0;
                cpuScore = 0;
                roundMsg.textContent = "";
                scoreMsg.textContent = "";
            } else if(cpuScore === 5) {
                winLossMsg.textContent = "CPU WINS THE GAME";
                playerScore = 0;
                cpuScore = 0;
                roundMsg.textContent = "";
                scoreMsg.textContent = "";
            }
        })
    }))
}

game();