// Without running the following code, determine what it logs to
// the console:

var bar = 82;

function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo(); // NaN

// Solution:
// Hoisting treats this code as though we wrote it like this:

var bar;
bar = 82;

function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

foo();
// This rewritten code helps us see that bar is undefined when
// we try to subtract 42 from it. That operation reassigns bar
// to NaN, which is what gets logged to the console.