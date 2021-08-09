///////////
// Sieve //
///////////

// Write a program that uses the Sieve of Eratosthenes to find
// all the primes from 2 up to a given number.

// The Sieve of Eratosthenes is a simple, ancient algorithm
// for finding all prime numbers up to any given limit.
// It does so by iteratively marking as composite (i.e. not prime)
// the multiples of each prime, starting with the multiples of 2.
// It does not use any division or remainder operation.

// Create your range, starting at two and continuing up to and
// including the given limit. (i.e. [2, limit]).

// The algorithm consists of repeating the following over and over:

// take the next available unmarked number in your list (it is prime)
// mark all the multiples of that number (they are not prime)
// repeat until you have processed each number in your range.
// When the algorithm terminates, all the numbers in the list
// that have not been marked are prime.

function primes(limit) {
  let list = [];
  let nonPrimes = [];

  //build range
  for (let idx = 2; idx <= limit; idx++) list.push(idx);

  // mark nonPrimes
  list.forEach(number => {
    if (!nonPrimes.includes(number)) {
      for (let testNum = number * 2; testNum <= limit; testNum += number) {
        nonPrimes.push(testNum);
      }
    }
  });
  
  // filter out nonPrimes
  return list.filter(number => !nonPrimes.includes(number));
}

module.exports = primes;