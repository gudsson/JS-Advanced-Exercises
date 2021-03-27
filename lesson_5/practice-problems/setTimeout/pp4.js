// In what sequence does the JavaScript runtime run the
// functions q(), d(), n(), z(), s(), f(), and g() in the
// following code?

setTimeout(function() {
  setTimeout(function() {
    q(); // 7
  }, 15);

  d(); // 3

  setTimeout(function() {
    n(); // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(function() {
  s(); // 6
}, 20);

setTimeout(function() {
  f(); // 1 X => g still comes first
});

g(); // 2 X => delays may be longer than expected, g comes first