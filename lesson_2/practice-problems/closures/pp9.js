// Write a function named later2 that takes two arguments: a function and an
// argument for that function. The return value should be a new function that
// also takes an argument. The new function should call the input function
// with the argument provided to later2 and the argument provided to the
// returned function. For example:

function later2(func, arg1) {
  return (arg2) => func(arg1, arg2);
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// Solution:
// In this code, we create a new function called shutdownWarning that
// issues the shutdown warning specified by the argument to later2.
// The new function takes an argument that it passes to the original
// input function as its second argument.

