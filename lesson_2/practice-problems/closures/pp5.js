// Write a function named makeMultipleLister that you can call with a
// number as an argument. The function should return a new function
// that, when invoked, logs every positive integer multiple of that
// number less than 100. It should work like this:

function makeMultipleLister(number) {
  // let number = n;
  // while (number < 100) {
  //   console.log(number);
  //   number += number;
  // }
  // return null;
  return function() {
    let res = number;
    while (res < 100) {
      console.log(res);
      res += number;
    }
  };
}

let lister = makeMultipleLister(17);
lister();

// Output
// > 17
// > 34
// > 51
// > 68
// > 85

// LS Solution:
// function makeMultipleLister(number) {
//   return () => {
//     for (let multiple = number; multiple < 100; multiple += number) {
//       console.log(multiple);
//     }
//   };
// }