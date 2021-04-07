// Create a function named makeCounterLogger that takes a number as an argument
// and returns a function. When we invoke the returned function with a second
// number, it should count up or down from the first number to the second
// number, logging each number to the console:

function makeCounterLogger(number1) {
  return (number2) => {
    if (number2 > number1) {
      for (let idx = number1; idx <= number2; idx++) console.log(idx);
    } else {
      for (let idx = number1; idx >= number2; idx--) console.log(idx);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2