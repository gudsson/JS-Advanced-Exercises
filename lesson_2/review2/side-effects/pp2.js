// Which of the following functions are pure functions?

// Function 1 => not pure
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// Function 2 => PURE
function sum(a, b) {
  a + b;
}

// Function 3 => PURE
function sum(a, b) {
  return a + b;
}

// Function 4 => not pure
function sum(a, b) {
  return a + b + Math.random();
}
// Function 5 => PURE
function sum(a, b) {
  return 3.1415;
}

// Functions 2, 3, and 5 are pure functions.