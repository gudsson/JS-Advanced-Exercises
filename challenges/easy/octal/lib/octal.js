///////////
// Octal //
///////////

// Implement octal to decimal conversion. Given an octal input string,
// your program should produce a decimal output. Treat invalid input
// as octal 0.

// Note: Implement the conversion yourself. Don't use any built-in or
// library methods that perform the necessary conversions for you. In
// this exercise, the code necessary to perform the conversion is what
// we're looking for,

// About Octal (Base-8)

// Decimal is a base-10 system. A number 233 in base 10 notation can be
// understood as a linear combination of powers of 10:

// The rightmost digit gets multiplied by 100 = 1
// The next digit gets multiplied by 101 = 10
// The digit after that gets multiplied by 102 = 100
// The digit after that gets multiplied by 103 = 1000
// ...
// The n*th* digit gets multiplied by 10n-1.
// All of these values are then summed.
// Thus:

//   233 # decimal
// = 2*10^2 + 3*10^1 + 3*10^0
// = 2*100  + 3*10   + 3*1
// Octal numbers are similar, but the use powers of 8 instead of
// powers of 10. Thus:

//   233 # octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155

class Octal {
  constructor(octal) {
    this.octal = this._isValid(octal) ? octal : 0;
  }

  toDecimal() {
    if (this.octal === 0) return 0;

    return +this.octal.split('').reverse().map((digit, idx) => {
      return digit * (8 ** idx);
    }).reduce((acc, cur) => acc + cur, 0);
  }

  _isValid(octal) {
    return octal === octal.replace(/[^0-7]/, '');
  }
}

module.exports = Octal;