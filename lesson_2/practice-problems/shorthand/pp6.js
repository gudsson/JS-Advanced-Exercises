// Rewrite the following code using classic JavaScript syntax:

function product() {
  return [].reduce.call(arguments, ((total, number) => total * number));
}

let result = product(2, 3, 4, 5);

console.log(result);

// LS Solution:
// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);