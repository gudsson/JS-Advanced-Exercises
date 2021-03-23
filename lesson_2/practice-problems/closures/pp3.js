// Let's move the variable declaration into makeCounter now.
// What do the 4 console.log statements at the end of this program
// print? Try to answer without running the code:

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

// Solution:
// In this case, the first call to console.log prints 1, the second prints 2,
// and the third and fourth print 1 and 2 again. This time, the two
// invocations of makeCounter each return a function that has access
// to a local variable named counter, but, in both cases, the variable
// is distinct. See the next problem to understand why.