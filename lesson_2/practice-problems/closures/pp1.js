// What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4

// Solution:
// The four console.log calls print 1, 2, 3, and 4 respectively.
// Since counter is declared in the global scope, its value gets
// set to 0 only once, and closure ensures that the function
// returned by makeCounter contains an envelope with a pointer
// to that variable. Each invocation of incrementCounter assigns
// counter to a new value that is the previous value plus 1.