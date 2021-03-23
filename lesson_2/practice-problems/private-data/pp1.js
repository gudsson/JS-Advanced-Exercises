// Create a function named makeCounterLogger that takes a number as an
// argument and returns a function. When we invoke the returned function
// with a second number, it should count up or down from the first number
// to the second number, logging each number to the console:

function makeCounterLogger(number1) {
  return (number2) => {
    let adder = (number1 > number2) ? -1 : 1;
    let current = number1;
    while (current !== number2) {
      console.log(current);
      current += adder;
    }
    console.log(current);
  };
}

let countlog = makeCounterLogger(5);
countlog(8);

// Output
// => 5
// => 6
// => 7
// => 8

countlog(2);

// Output
// => 5
// => 4
// => 3
// => 2

// LS Solution:
// function makeCounterLogger(start) {
//   return function(finish) {
//     let number;

//     if (start > finish) {
//       for (number = start; number >= finish; number -= 1) {
//         console.log(number);
//       }
//     } else {
//       for (number = start; number <= finish; number += 1) {
//         console.log(number);
//       }
//     }
//   };
// }