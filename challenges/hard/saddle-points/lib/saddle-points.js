///////////////////
// Saddle Points //
///////////////////

// Write a program that detects saddle points in a matrix.

// So say you have a matrix like so:

//     0  1  2
//   |---------
// 0 | 9  8  7
// 1 | 5  3  2     <--- 5 is a saddle point
// 2 | 6  6  7
// It's called a "saddle point" because it is greater than or
// equal to every element in its row and the less than or equal
// to every element in its column.

// A matrix may have zero or more saddle points.

// Your code should be able to provide the (possibly empty) list
// of all the saddle points for any given matrix.

// The matrix can have a different number of rows and columns
// (Non square).

// Note that you may find other definitions of matrix saddle
// points online, but the tests for this exercise follow the
// above unambiguous definition.

class Matrix {
  constructor(matrixString) {
    this.rows = matrixString.split(`\n`).map(row => row.trim().split(' ').map(digit => +digit));
    this.columns = this._getColumns();
    this.saddlePoints = this._getSaddlePoints();
  }

  _getSaddlePoints() {
    let saddlePoints = [];

    for (let row = 0; row < this.rows.length; row++) {
      let rowMax = Math.max(...this.rows[row]);

      for (let column = 0; column < this.rows[0].length; column++) {
        let columnMin = Math.min(...this.columns[column]);
        let element = this.rows[row][column];
        if (element === rowMax && element === columnMin) {
          saddlePoints.push([row, column]);
        }
      }

    }

    return saddlePoints;
  }

  _getColumns() {
    let columns = [];
    
    for (let column = 0; column < this.rows[0].length; column++) {
      let colArr = [];
      for (let row = 0; row < this.rows.length; row++) {
        colArr.push(this.rows[row][column]);
      }
      columns.push(colArr);
    }

    return columns;
  }
}

module.exports = Matrix;