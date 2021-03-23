// Consider the following code and output:

// > countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Replace the invocation of countdown with an IIFE
// that produces the same results.

(function(number) {
  while (true) {
    console.log(number);
    if (number === 0) break;
    number -= 1;
  }
})(7);

// LS Solution:
// (function(number) {
//   for (let currentNumber = number; currentNumber >= 0; currentNumber -= 1) {
//     console.log(currentNumber);
//   }
// })(7);