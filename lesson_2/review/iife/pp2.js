// Let's get some practice working with IIFEs.

// Will the following code execute without error?
// Try to answer without running it.

// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// No.  It will throw a SyntaxError.  Need to wrap the function expression
// definition in a set of parentheses.

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();
