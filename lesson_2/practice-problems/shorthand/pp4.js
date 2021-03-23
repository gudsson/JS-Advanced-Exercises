// Rewrite the following code using classic JavaScript syntax:

function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
// let [ bar, qux, baz ] = result;
let bar = result[0];
let qux = result[1];
let baz = result[2];

console.log(bar);
console.log(qux);
console.log(baz);
