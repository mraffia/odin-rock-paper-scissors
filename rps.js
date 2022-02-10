function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
        return 'player win';
    } else {
        return 'player lose';
    }
}

let playerScore = 0;
let computerScore = 0;

const selections = document.querySelectorAll('.selection');
const score = document.querySelector('#score');
const results = document.querySelector('#results');
const rounds = document.querySelector('#rounds');

function displayRounds() {
    let playerSelection = this.id;
    let computerSelection = computerPlay();

    let oneRound = playRound(playerSelection, computerSelection);
    const li = document.createElement('li');

    if (oneRound === 'draw') {
        playerScore++;
        computerScore++;
        li.textContent = `(Player) ${playerSelection} vs (Computer) ${computerSelection} - Issa draw!`;
    } else if (oneRound === 'player win') {
        playerScore++;
        li.textContent = `(Player) ${playerSelection} vs (Computer) ${computerSelection} - Playa wins!`;
    } else {
        computerScore++;
        li.textContent = `(Player) ${playerSelection} vs (Computer) ${computerSelection} - Playa lose :(`;
    }

    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    rounds.appendChild(li);

    evaluateScore();
}

function evaluateScore() {
    if (playerScore === 5 || computerScore === 5) {
        const h4 = document.createElement('h4');
        if (playerScore === 5 && computerScore === 5) {
            h4.textContent = 'DAMN! It\'s a tie game!';
        } else if (playerScore === 5) {
            h4.textContent = 'Congrats! You hit the 5 point mark first!';
        } else {
            h4.textContent = 'Uh oh! The computer reached the 5 point mark first.';
        }     

        results.appendChild(h4);

        selections.forEach((selection) => {
            selection.disabled = true;
        })
    } 
}

selections.forEach((selection) => {
    selection.addEventListener('click', displayRounds);
});

// Function that runs the game 5 times, player uses prompt to play and score is diplayed via console
//
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Pick one, rock, papers, or scissors? (If you don't, I'll choose one for you)");
//         if (playerSelection === '' || playerSelection === null) {
//             playerSelection = computerPlay();
//         }
//         let computerSelection = computerPlay();

//         console.log(`Player chooses ${playerSelection}`);
//         console.log(`Computer chooses ${computerSelection}`);
        
//         let round = playRound(playerSelection, computerSelection);

//         if (round === 'draw') {
//             playerScore++;
//             computerScore++;
//         } else if (round === 'player win') {
//             playerScore++;
//         } else {
//             computerScore++;
//         }

//         console.log(round);
//         console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
//     }

//     if (playerScore === computerScore) {
//         return `It's a draw game! Player has ${playerScore} points and the computer has ${computerScore} points.`;
//     } else if (playerScore > computerScore) {
//         return `Player wins the game! Player has ${playerScore} points and the computer has ${computerScore} points.`;
//     } else {
//         return `Computer wins the game! Player has ${playerScore} points and the computer has ${computerScore} points.`;
//     }

// }

// const theGame = game();
// console.log(theGame);