"use strict";

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
  "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  const allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 256; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());

// We had to make several changes:

// Add the "use strict" pragma.
// Use let or const to declare all variables.
// Remove this from this.RANKS, this.SUITS, and this.deck.
// If the original code didn't make you recoil in horror, it should have.
// Between the lack of variable declarations, the misuse of this, and the
// global deck variable, that code was a mess.