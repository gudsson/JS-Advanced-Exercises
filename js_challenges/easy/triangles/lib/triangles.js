///////////////
// Triangles //
///////////////

// Determine if a triangle is equilateral, isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has at least two sides the same length.
// (It is sometimes specified as having exactly two sides the
// same length, but for the purposes of this exercise we'll say
// at least two.)

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides have to
// be of length > 0, and the sum of the lengths of any two sides
// must be greater than or equal to the length of the third side.

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
  }

  kind() {
    this._validateSides();
    this._validateTriangle();
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) return 'equilateral';    
    if (this.sides.filter((side, _, arr) => arr.indexOf(side) !== arr.lastIndexOf(side)).length !== 0) return 'isosceles';
    return 'scalene';
  }

  _validateSides() {
    if (this.sides.some(side => side <= 0)) throw new ReferenceError('one or more side lengths are illegal');
  }

  _validateTriangle() {
    let perimeter = this.sides.reduce((acc, cur) => acc + cur, 0);
    this.sides.forEach(side => {
      if (perimeter - side < side) throw new ReferenceError('fails triangle inequality');
    });
  }
}

module.exports = Triangle;