for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

// Without running this code, what does it print?

// Solution:

// > undefined
// > Hello
// > Bye
// > 2

// This code uses var to declare the foo variable inside the if
// statement's truthy block, which, in turn, is nested within the
// for loop's block. Despite the declaration's depth, the variable
// has function scope. Thus, it is available both before the
// declaration on line 4 and in the code after the for loop.
// On the first execution of line 2, foo is defined due to
// hoisting, but its value is still undefined. On the second
// execution of line 2, foo has been set to "Hello". Finally,
// when the loop exits, foo is "Bye".

// The code also uses var for the index loop variable. As with foo,
// the variable has function scope, so line 11 shows its value after
// the loop has ended: 2.

// Here's the hoisted equivalent of the above code:

// var index;
// var foo;

// for (index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);