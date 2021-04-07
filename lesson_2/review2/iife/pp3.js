// The code below throws an error:

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// Why does this code produce an error? Correct the problem by using an IIFE.

// > the code throws and error because the name 'sum' is used in 2 declarations.

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

