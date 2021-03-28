////////////
// Series //
////////////

// Write a program that will take a string of digits and return
// all the possible consecutive number series of a specified length
// in that string.

// For example, the string "01234" has the following 3-digit series:

// 012
// 123
// 234
// Likewise, here are the 4-digit series:

// 0123
// 1234
// Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.

class Series {
  constructor(numString) {
    this.numArr = numString.split('').map(num => +num);
  }

  slices(length) {
    if (length > this.numArr.length) throw new Error('slice lengths exceeds string length');

    let [res, seriesCount] = [[], this.numArr.length - (length - 1)];

    for (let idx = 0; idx < seriesCount; idx++) {
      res.push(this.numArr.slice(idx, idx + length));
    }
    return res;
  }
}

module.exports = Series;