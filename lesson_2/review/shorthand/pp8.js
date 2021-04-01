// OPTIONAL Write a function that takes 5 string arguments, and returns
// an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function.
// The arguments you provide should come from an array. You should
// create local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.
let arr = [1, 2, 3, 4, 5];

function foo(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort((a, b) => a - b)
  };
}

let {first, last, middle} = foo(...arr);

console.log(first);
console.log(last);
console.log(middle);