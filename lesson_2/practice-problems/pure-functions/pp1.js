// What side effects are present in the foo function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// Side Effects
// 1. removes last item from argument array, which mutates global variable qux.
// 2. logs to the console.

// LS Solution:
// The function modifies the array passed as an argument.
// The function writes something to the console.