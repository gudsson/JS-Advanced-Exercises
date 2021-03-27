////////////////////
// Scrabble Score //
////////////////////

// Write a program that, given a word, computes the Scrabble score
// for that word.

// Letter Values

// You'll need the following tile scores:

// Letter Value
// A, E, I, O, U, L, N, R, S, T => 1
// D, G => 2
// B, C, M, P => 3
// F, H, V, W, Y => 4
// K => 5
// J, X => 8
// Q, Z => 10

// How to Score

// Sum the values of all the tiles used in each word. For instance,
// lets consider the word CABBAGE which has the following letters
// and point values:

// 3 points for C
// 1 point for each A (there are two)
// 3 points for B (there are two)
// 2 points for G
// 1 point for E
// Thus, to compute the final total (14 points), we count:

// 3 + 2*1 + 2*3 + 2 + 1
// => 3 + 2 + 6 + 3
// => 5 + 9
// => 14

class Scrabble {
  constructor(word) {
    this.word = (word) ? this._cleanWord(word) : '';
  }

  _cleanWord(word) {
    return word.replace(/[^a-z]/gi,'').toLowerCase();
  }

  score() {
    return Scrabble.score(this.word);
  }

  static score(word) {
    let wordArr = word.split('');
    let pointArr = wordArr.map(letter => {
      let score;
      Object.keys(Scrabble.LETTER_VALUES).forEach((category) => {
        if (category.includes(letter)) {
          score = Scrabble.LETTER_VALUES[category];
        }
      });
      return score;
    });

    return pointArr.reduce((acc, cur) => acc + cur, 0);
  }

  static LETTER_VALUES = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10
  }
}

module.exports = Scrabble;