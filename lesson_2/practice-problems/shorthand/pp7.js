// OPTIONAL Assume that you have some code that looks like this:

function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];

  return {type: animalType, age, colors};
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// Using shorthand notation, what is the missing code?