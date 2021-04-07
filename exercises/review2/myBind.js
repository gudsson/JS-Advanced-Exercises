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

function myBind(func, ctx) {
  let firstArgs = Array.from(arguments).slice(2);

  return () => {
    let args = firstArgs.concat(Array.from(arguments));
    return func.apply(ctx, args);
  };
}