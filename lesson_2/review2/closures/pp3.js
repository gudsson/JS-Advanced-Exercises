// Improving the API
// We resume our discussion of closures and private data by taking another
// look at the makeList function we wrote in the practice problems.

// Our solution provides a concise but somewhat unclear interface for
// developers:

// We can improve the interface by returning an Object from makeList
// instead of a function. That lets us create an API that is easy to
// use and understand:

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn

function makeList() {
  let items = [];

  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    list() {
      if (items.length) {
        console.log(items.join(`\n`));
      } else console.log("The list is empty.");
    },
    remove(item) {
      items.splice(items.indexOf(item), 1);
    }
  };

  // return function(newItem) {
  //   let index;
  //   if (newItem) {
  //     index = items.indexOf(newItem);
  //     if (index === -1) {
  //       items.push(newItem);
  //       console.log(newItem + " added!");
  //     } else {
  //       items.splice(index, 1);
  //       console.log(newItem + " removed!");
  //     }
  //   } else if (items.length === 0) {
  //     console.log("The list is empty.");
  //   } else {
  //     items.forEach(item => console.log(item));
  //   }
  // };
}