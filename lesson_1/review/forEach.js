// let arr = [1, 2, 3, 4];

// // Array.prototype.forEach
// arr.forEach(value => console.log(value * value));

// // Our forEach function
// forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

function forEach(array, callback, ctx) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(ctx, array[index], index, array);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);
forEach(["a", "b", "c"], item => console.log(item));
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});