// For an extra challenge, refactor the solution to problem 4 using recursion.
// Bear in mind that named functions created as IIFEs can be referenced by
// those same functions. That is, you can call use a function's name in the
// body of the IIFE. Don't worry if you can't solve this problem; it's a
// bit tricky.

(function foo(number) {
  console.log(number);
  if (number > 0) {
    foo(number - 1);
  }
})(7);