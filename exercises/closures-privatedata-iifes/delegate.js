//////////////
// Delegate //
//////////////

// Write a delegate function that can be used to delegate the behavior of a
// method or function to another object's method. delegate takes a minimum of
// two arguments: (1) the object and (2) name of the method on the object.
// The remaining arguments, if any, are passed — as arguments — to the
// objects' method that it delegates to.

// Note that this is not the same as using bind. bind returns a new
// function, whereas delegate maintains the reference.

// Implementation
function delegate(obj, methodName, ...args) {
  return function() {
    return obj[methodName](...args);
  };
}


// Here's a sample run;

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() {
  console.log('changed');
};

baz.qux();          // logs 'changed'


// Solution 1

// function delegate(context, methodName) {
//   let args = Array.prototype.slice.call(arguments, 2)
//   return function() {
//     return context[methodName].apply(context, args);
//   };
// }


// Solution 2

// const delegate = (context, methodName, ...args) => {
//   return function() {
//     return context[methodName].apply(context, args);
//   };
// }
// Discussion
// The main challenge of this exercise is maintaining the reference to the
// function and its context. Our solution handles this by using the concept
// of closures so that we can return, and consequently assign to a method, a
// function that maintains a reference to the context object. Using the context
// and the method name, the solution then uses Function.prototype.apply to
// execute the method on the context object.

// In second solution function delegate is an arrow function which doesn't
// have access to arguments, however, we can use a rest parameter instead.