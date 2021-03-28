///////////////
// Beer Song //
///////////////

// Write a program that can generate the lyrics of the 99 Bottles
// of Beer song. See the test suite for the entire song.

class BeerSong {
  static verse(bottles) {
    if (bottles === 0) return BeerSong.LAST_VERSE;
    return BeerSong._getTypicalVerse(bottles);
  }

  static verses(firstVerse, lastVerse) {
    let res = [];

    for (let bottles = firstVerse; bottles >= lastVerse; bottles--) {
      res.push(BeerSong._getTypicalVerse(bottles));
    }

    if (lastVerse === 0) {
      res.pop();
      res.push(BeerSong.LAST_VERSE)
    };

    return res.join(`\n`);
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static _getTypicalVerse(bottles) {
    return `${bottles} ${bottles === 1 ? 'bottle' : 'bottles'} of beer on ` +
    `the wall, ${bottles} ${bottles === 1 ? 'bottle' : 'bottles'} of ` +
    `beer.\nTake ${bottles > 1 ? 'one' : 'it'} down and pass it around,` +
    ` ${(bottles - 1) === 0 ? 'no more' : bottles - 1} ${bottles - 1 === 1 ? 'bottle' : 'bottles'} ` +
    `of beer on the wall.\n`;
  }

  static LAST_VERSE = `No more bottles of beer on the wall, no more ` +
  `bottles of beer.\nGo to the store and buy some more, 99 bottles ` +
  `of beer on the wall.\n`;
}

BeerSong.verses(99, 98)

module.exports = BeerSong;