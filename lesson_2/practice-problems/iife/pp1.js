// Will the following code execute without error? Try to answer without running it.

const { Linter } = require("eslint");

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// It will error - the Function needs to be wrapped in parentheses when starting a line. => SyntaxError

// LS Solution:

// Uncaught SyntaxError: Unexpected token (
// No, the code won't execute. Instead, it raises a syntax error.
// A function declaration must be converted to a function expression
// before you can invoke it with immediate invocation syntax.