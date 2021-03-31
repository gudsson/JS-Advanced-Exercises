// Rewrite this code to run in strict mode.
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

// DESIRED OUTPUT:

// [
//   '3 of Clubs',       'King of Spades', 'Queen of Diamonds',
//   '2 of Spades',      '2 of Clubs',     '5 of Hearts',
//   '10 of Diamonds',   '10 of Hearts',   '10 of Clubs',
//   '4 of Clubs',       '3 of Diamonds',  '4 of Diamonds',
//   'King of Diamonds', 'King of Hearts', '6 of Clubs',
//   '6 of Spades',      '6 of Diamonds',  '7 of Clubs',
//   'Ace of Clubs',     '2 of Diamonds',  '7 of Spades',
//   'Ace of Spades',    'Jack of Spades', '8 of Spades',
//   '8 of Clubs',       '4 of Hearts',    '8 of Diamonds',
//   '5 of Diamonds',    '9 of Spades',    'Ace of Diamonds',
//   'Queen of Spades',  '4 of Spades',    'Jack of Hearts',
//   '7 of Diamonds',    '2 of Hearts',    '7 of Hearts',
//   'Ace of Hearts',    'King of Clubs',  '9 of Hearts',
//   '9 of Diamonds',    '9 of Clubs',     'Jack of Clubs',
//   'Queen of Clubs',   '10 of Spades',   '6 of Hearts',
//   '3 of Spades',      '8 of Hearts',    '5 of Clubs',
//   'Jack of Diamonds', '5 of Spades',    '3 of Hearts',
//   'Queen of Hearts'
// ]
