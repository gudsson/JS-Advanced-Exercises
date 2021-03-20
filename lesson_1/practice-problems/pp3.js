// Write a function that acts like the built-in Array.prototype.reduce
// method. For this problem, you only need to emulate the most basic
// behavior: reducing the elements of an array down to a single value
// based on the original array values. The result may be a primitive
// value, an object, or another array. You don't have to include the
// thisArg argument or support multiple arguments to the callback
// function, but feel free to add them if you like. Your function
// should work like this:

// Note that the function should not mutate the input array.
// Don't forget to account for the initialValue argument!

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let idx = 0;

  if (initialValue === undefined) {
    accumulator = array[0];
    idx = 1;
  }

  while (idx < array.length) {
    accumulator = callback(accumulator, array[idx]);
    idx += 1;
  }

  // for (let idx = 0; idx < array.length; idx++) {
  //   accumulator = callback(accumulator, array[idx]);
  // }

  return accumulator;
}