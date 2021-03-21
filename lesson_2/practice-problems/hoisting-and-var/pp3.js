bar();

var bar = function() {
  console.log("foo!");
};

// Without changing the order of the invocation and function
// definition, update this code so that it works.

// Solution:
// bar();

// function bar() {
//   console.log("foo!");
// }

// If we want to call a function before its body is defined,
// we need to use a function declaration.