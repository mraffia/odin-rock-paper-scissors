function computerPlay() {
    const hand = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

console.log(computerPlay());