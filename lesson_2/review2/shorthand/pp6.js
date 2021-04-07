// Rewrite the following code using classic JavaScript syntax:

function product() {
  return Array.from(arguments).reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

console.log(result);