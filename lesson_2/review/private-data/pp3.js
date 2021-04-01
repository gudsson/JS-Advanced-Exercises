/* eslint-disable max-lines-per-function */
// We can improve the interface by returning an Object from makeList
// instead of a function. That lets us create an API that is easy to
// use and understand:

function makeList() {
  let list = [];

  return {
    add(item) {
      list.push(item);
      console.log(`${item} added!`);
    },

    list() {
      if (list.length === 0) console.log('The list is empty.');
      else {
        list.forEach(item => console.log(item));
      }
    },

    remove(item) {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else console.log(`Item not found!`);
    }
  };
}

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