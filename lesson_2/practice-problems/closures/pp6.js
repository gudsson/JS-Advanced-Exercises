// Write a program that uses two functions, add and subtract, to
// manipulate a running total. When you invoke either function
// with a number, it should add or subtract that number from the
// running total and log the new total to the console. It should
// work like this:

let total = 0;

function addSubtract(multiplier) {
  return function(number) {
    total += (multiplier * number);
    console.log(total);
  };
}

let add = addSubtract(1);
let subtract = addSubtract(-1);

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

// LS Solution:
// let total = 0;

// function add(number) {
//   total += number;
//   console.log(total);
// }

// function subtract(number) {
//   total -= number;
//   console.log(total);
// }

