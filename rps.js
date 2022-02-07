function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'draw';
    } else if (
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')
        ) {
        return 'player win';
    } else {
        return 'player lose';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick one, rock, papers, or scissors? (If you don't, I'll choose one for you)");
        if (playerSelection === '' || playerSelection === null) {
            playerSelection = computerPlay();
        }
        let computerSelection = computerPlay();

        console.log(`Player chooses ${playerSelection}`);
        console.log(`Computer chooses ${computerSelection}`);
        
        let round = singleRound(playerSelection, computerSelection);

        if (round === 'draw') {
            playerScore++;
            computerScore++;
        } else if (round === 'player win') {
            playerScore++;
        } else {
            computerScore++;
        }

        console.log(round);
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore === computerScore) {
        return `It's a draw game! Player has ${playerScore} points and the computer has ${computerScore} points.`;
    } else if (playerScore > computerScore) {
        return `Player wins the game! Player has ${playerScore} points and the computer has ${computerScore} points.`;
    } else {
        return `Computer wins the game! Player has ${playerScore} points and the computer has ${computerScore} points.`;
    }

}

const theGame = game();
console.log(theGame);