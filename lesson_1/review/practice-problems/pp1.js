// Write a function that acts like the built-in Array.prototype.filter method.
// For this problem, you only need to emulate the most basic behavior:
// filtering elements of an array by examining the array values. You don't
// have to include the thisArg argument or support multiple arguments to
// the callback function, but feel free to add them if you like. Your
// function should work like this:

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

function filter(array, callback) {
  let resArr = [];

  for (let idx = 0; idx < array.length; idx++) {
    let element = array[idx];
    if (callback(element)) resArr.push(element);
  }

  return resArr;
}