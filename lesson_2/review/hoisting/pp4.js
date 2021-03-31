// Array.prototype.reduce can be an incredibly useful function. You're not
// limited to simple accumulation-style processing,but can perform a wide
// variety of different tasks with it. For instance, you can emulate many
// of the standard Array methods, including filter, map, and more.

// Let's try it. Write a function that works like the filter function from
// problem 1. This time, though, you should use Array.prototype.reduce to
// filter the input array.

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

function filter(array, callback) {
  return array.reduce((acc, cur) => {
    if (callback(cur)) acc.push(cur);
    return acc;
  }, [])
}