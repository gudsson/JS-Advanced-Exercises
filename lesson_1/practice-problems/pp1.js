// Write a function that acts like the built-in
// Array.prototype.filter method. For this problem,
// you only need to emulate the most basic behavior: filtering
// elements of an array by examining the array values.
// You don't have to include the thisArg argument or
// support multiple arguments to the callback function,
// but feel free to add them if you like. Your function
// should work like this:
// Note that the function should not mutate the input array.

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

// Personal Solution:
function filter(array, callback, thisArg) {
  let res = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (callback.call(thisArg, array[idx])) res.push(array[idx]);
  }

  return res;
}

// LS Solution:
// function filter(array, callback) {
//   let filteredItems = [];
//   for (let index = 0; index < array.length; index += 1) {
//     let value = array[index];
//     if (callback(value)) {
//       filteredItems.push(value);
//     }
//   }

//   return filteredItems;
// }