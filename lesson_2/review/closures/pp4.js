// We'll now make some changes to how we create the output.
// What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2