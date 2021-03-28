//////////////////////
// Sum of Multiples //
//////////////////////

// Write a program that, given a natural number and a set of one or
// more other numbers, can find the sum of all the multiples of the
// numbers in the set that are less than the first number. If the set
// of numbers is not given, use a default set of 3 and 5.

// For instance, if we list all the natural numbers up to, but not
// including, 20 that are multiples of either 3 or 5, we get 3, 5, 6,
// 9, 10, 12, 15, and 18. The sum of these multiples is 78.

class SumOfMultiples {
  constructor(...list) {
    this.list = list;
  }

  to(ceiling) {
    return this._getSum(this.list, ceiling);
  }
  
  static to(ceiling) {
    let obj = new SumOfMultiples(3, 5)
    // return this._getSum(obj.list, ceiling);
    return obj.to(ceiling);
  }

  _getSum(list, ceiling) {
    let multiples = this._getMultiples(list, ceiling);
    return multiples.reduce((acc, cur) => acc + cur, 0);
  }

  _getMultiples(list, ceiling) {
    let allMultiples = this._getAllMultiples(list, ceiling);
    return this._getUniqueMultiples(allMultiples);
  }

  _getAllMultiples(list, ceiling) {
    return list.map(number => {
      let arr = [];
      for (let idx = number; idx < ceiling; idx += number) {
        arr.push(idx);
      }
      return arr;
    }).reduce((acc, cur) => {
      acc.push(...cur);
      return acc;
    }, []);
  }

  _getUniqueMultiples(multiplesArr) {
    return [...new Set(multiplesArr)];
  }
}

module.exports = SumOfMultiples;