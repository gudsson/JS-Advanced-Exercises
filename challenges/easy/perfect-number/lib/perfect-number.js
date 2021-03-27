////////////////////
// Perfect Number //
////////////////////

// The Greek mathematician Nicomachus devised a classification scheme
// for natural numbers (1, 2, 3, ...), identifying each as belonging
// uniquely to the categories of abundant, perfect, or deficient
// based on a comparison between the number and the sum of its
// positive divisors (the numbers that can be evenly divided into
// the target number with no remainder, excluding the number
// itself). For instance, the positive divisors of 15 are 1, 3,
// and 5. This sum is known as the Aliquot sum.

// Perfect numbers have an Aliquot sum that is equal to the original
// number.
// Abundant numbers have an Aliquot sum that is greater than the
// original number.
// Deficient numbers have an Aliquot sum that is less than the
// original number.
// Examples:

// 6 is a perfect number since its divisors are 1, 2, and 3, and
// 1 + 2 + 3 = 6.
// 28 is a perfect number since its divisors are 1, 2, 4, 7, and
// 14 and 1 + 2 + 4 + 7 + 14 = 28.
// 15 is a deficient number since its divisors are 1, 3, and 5 and
// 1 + 3 + 5 = 9 which is less than 15.
// 24 is an abundant number since its divisors are 1, 2, 3, 4, 6,
// 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater
// than 24.
// Prime numbers 7, 13, etc. are always deficient since their only
// divisor is 1.
// Write a program that can tell whether a number is perfect,
// abundant, or deficient.

class PerfectNumber {
  static classify(number) {
    let aliquotSum = PerfectNumber._getAliquotSum(number);
    if (number < 1) throw new Error('Number must be greater than or equal to 1');
    if (aliquotSum > number) return 'abundant';
    if (aliquotSum < number) return 'deficient';
    return 'perfect';
  }

  static _getAliquotSum(number) {
    let divisors = PerfectNumber._getDivisors(number);
    return divisors.reduce((acc, cur) => acc + cur, 0);
  }

  static _getDivisors(number) {
    let divisors = [1];

    for (let idx = 2; idx <= (number / 2); idx++) {
      if (number % idx === 0) divisors.push(idx);
    }

    return divisors;
  }
}

module.exports = PerfectNumber;