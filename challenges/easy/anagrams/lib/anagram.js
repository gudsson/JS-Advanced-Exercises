//////////////
// Anagrams //
//////////////

// Write a program that takes a word and a list of possible anagrams
// and selects the correct sublist that contains the anagrams of the
// word.

// For example, given the word "listen" and a list of candidates like
// "enlists", "google", "inlets", and "banana", the program should
// return a list containing "inlets". Please read the test suite for
// the exact rules of anagrams.

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(list) {
    let letters = this._getLetters(this.word);

    return list.filter(word => {
      return (this._getLetters(word) === letters)
        && (word.toLowerCase() !== this.word.toLowerCase());
    });
  }

  _getLetters(word) {
    return word.toLowerCase().split('').sort().join('');
  }

}

module.exports = Anagram;