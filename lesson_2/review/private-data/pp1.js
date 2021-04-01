// Create a function named makeCounterLogger that takes a number as an argument
// and returns a function. When we invoke the returned function with a second
// number, it should count up or down from the first number to the second
// number, logging each number to the console:

function makeCounterLogger(num1) {
  return function(num2) {
    let arr = [];

    for (let idx = Math.min(num1, num2); idx <= Math.max(num1, num2); idx++) {
      arr.push(idx);
    }

    if (num1 > num2) arr.reverse();
    arr.forEach(num => console.log(num));
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

console.log();

countlog(2);
// 5
// 4
// 3
// 2