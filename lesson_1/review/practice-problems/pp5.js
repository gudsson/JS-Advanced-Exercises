// Let's put reduce to work with emulating map as well. Write a function that
// works like the map function from problem 2. This time, though, use
// Array.prototype.reduce to transform the input array.

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function map(array, callback) {
  return array.reduce((acc, cur) => {
    acc.push(callback(cur));
    return acc;
  }, []);
}