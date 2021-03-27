///////////////
// Triangle //
///////////////

// Write a program to determine whether a triangle is equilateral,
// isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides must be
// of length > 0, and the sum of the lengths of any two sides
// must be greater than or equal to the length of the third side.

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
    this.perimeter = this.sides.reduce((acc, cur) => acc + cur, 0);
    this._validateTriangle();
    this.type = this._getTriangleType();
  }

  _validateTriangle() {
    this._checkSideLengths();
    this._checkTriangleInequality();
  }

  _checkSideLengths() {
    if (!this.sides.every(side => side > 0)) {
      throw new Error('Make sure all side lengths are valid');
    }
  }

  _checkTriangleInequality() {
    if (this.sides.some(side => this._checkSide(side))) {
      throw new Error('Side lengths violate triangle inequality');
    }
  }

  _checkSide(side) {
    return (side >= this.perimeter - side);
  }

  _getTriangleType() {
    let counts = {};

    this.sides.forEach(side => {
      counts[side] = counts[side] ? counts[side] + 1 : 1;
    });

    let equalSides = Object.values(counts).sort((a, b) => b - a)[0];

    if (equalSides === 3) return 'equilateral';
    if (equalSides === 2) return 'isosceles';
    return 'scalene';
  }

  kind() {
    return this.type;
  }
}

module.exports = Triangle;
