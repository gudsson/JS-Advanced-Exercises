// Consider the following code from a practice problem in an earlier lesson:

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// Rewrite this code using an IIFE. Your solution should no
// longer need the name foo.

let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);