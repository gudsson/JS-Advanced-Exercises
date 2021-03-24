// Which of the following functions are pure functions?

// Function 1
function sum(a, b) {
  console.log(a + b);
  return a + b;
}
// Function 2
function sum(a, b) {
  a + b;
}
// Function 3
function sum(a, b) {
  return a + b;
}
// Function 4
function sum(a, b) {
  return a + b + Math.random();
}
// Function 5
function sum(a, b) {
  return 3.1415;
}

// PURE FUNCTIONS:
// - Function 3 => Always returns a + b.
// - Function 2 => Always returns undefined.
// - Function 5 => Always returns 3.1415.

// IMPURE FUNCTIONS:
// - Function 1 => Logs to console.
// - Function 4 => Accesses random number generator outside of program.

// LS Solution:
// Function 1 logs something to the console. It has a side effect, so it is
// not a pure function.
// Function 4 uses the random number generator, so it has a side effect.
// It also doesn't have a consistent return value given the same arguments.
// It is not a pure function.
// The remaining functions are pure functions: they have no side effects and
// the return values are solely dependent on the arguments.

// Note that function 2 implicitly returns undefined for all possible
// arguments. The fact that the return value is always the same regardless of
// the arguments doesn't change its status as a pure function.
