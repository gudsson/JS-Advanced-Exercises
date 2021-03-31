// Write a function named makeMultipleLister that you can call with
// a number as an argument. The function should return a new function
// that, when invoked, logs every positive integer multiple of that
// number less than 100. It should work like this:

function makeMultipleLister(integer) {
  let multiple = integer;
  return function() {
    while (multiple < 100) {
      console.log(multiple);
      multiple += integer;
    }
  };
}

let lister = makeMultipleLister(17);
lister();

// Output:
// 17
// 34
// 51
// 68
// 85