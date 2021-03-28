/////////////
// Diamond //
/////////////

// The diamond exercise takes as its input a letter, and outputs
// it in a diamond shape. Given a letter, it prints a diamond
// starting with 'A', with the supplied letter at the widest point.

// The first row contains one 'A'.
// The last row contains one 'A'.
// All rows, except the first and last, have exactly two identical
// letters.
// The diamond is horizontally symmetric.
// The diamond is vertically symmetric.
// The diamond has a square shape (width equals height).
// The letters form a diamond shape.
// The top half has the letters in ascending order.
// The bottom half has the letters in descending order.
// The four corners (containing the spaces) are triangles.
// Examples

// Diamond for letter 'A':

// Copy Code
// A
// Diamond for letter 'C':

// Copy Code
//   A
//  B B
// C   C
//  B B
//   A
// Diamond for letter 'E':

// Copy Code
//     A
//    B B
//   C   C
//  D     D
// E       E
//  D     D
//   C   C
//    B B
//     A

class Diamond {
  static makeDiamond(letter) {
    if (letter.toUpperCase() === 'A') return 'A\n';

    let charCode = letter.toUpperCase().charCodeAt();
    let charCodeA = 'A'.charCodeAt();
    let diamond = [Diamond._createLetterLine(charCode)];
    let lineLength = diamond[0].length;

    for (let idx = charCode - 1; idx > 'A'.charCodeAt(); idx--) {
      let line = Diamond._createLetterLine(idx);
      line = Diamond._addPadding(line, lineLength);
      diamond.unshift(line);
      diamond.push(line);
    }

    let point = Diamond._addPadding('A', lineLength);
    diamond.unshift(point);
    diamond.push(point);

    return diamond.join(`\n`) + '\n';
  }

  static _addPadding(line, lineLength) {
    let padding = (lineLength - line.length) / 2;

    return line.padStart(line.length + padding, ' ').padEnd(lineLength, ' ');
  }

  static _createLetterLine(charCode) {
    let charCodeA = 'A'.charCodeAt();
    let spacerLen = 2 * (charCode - charCodeA - 1) + 1;
    let letter = String.fromCharCode(charCode);

    return `${letter}${' '.repeat(spacerLen)}${letter}`;
  }
}

module.exports = Diamond;