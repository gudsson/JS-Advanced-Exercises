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
// Replace the invocation of countdown with an IIFE that
// produces the same results.

(function(number) {
  for (let idx = number; idx >= 0; idx--) {
    console.log(idx);
  }
})(7);
