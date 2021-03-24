///////////////////////
// myBind() Improved //
///////////////////////

// Our earlier implementation of Function.prototype.bind as myBind was
// simplistic. Function.prototype.bind has another trick up its sleeve
// besides hard-binding functions to context objects. It's called partial
// function application. Read the MDN documentation to learn more about
// partial function application. (We'll also cover it in a later course.)

// Alter the myBind function written in the previous exercise to support
// partial function application.

// Implementation
function myBind(func, context, ...initialArgs) {
  return function(...newArgs) {
    let args = [...initialArgs, ...newArgs];
    return func.call(context, ...args);
  };
}

// Test
function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15