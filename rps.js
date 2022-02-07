function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a draw! ${playerSelection.toLowerCase()} can't win nor lose against another ${computerSelection}`
    } else if (
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')
        ) {
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
    }
}

console.log(computerPlay());
console.log(singleRound('rock', 'rock'));
console.log(singleRound('rock', 'scissors'));
console.log(singleRound('rock', 'paper'));