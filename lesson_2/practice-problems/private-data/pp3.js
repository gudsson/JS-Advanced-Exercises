/* eslint-disable max-lines-per-function */
// Modify the makeList function so that it returns an object that provides the
// interface shown above, including add, list, and remove methods.

function makeList() {
  let items = [];

  function listAPI(newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + " added!");
      } else {
        items.splice(index, 1);
        console.log(newItem + " removed!");
      }
    } else if (items.length === 0) {
      console.log("The list is empty.");
    } else {
      items.forEach(item => console.log(item));
    }
  }

  return {
    list: listAPI,
    add: listAPI,
    remove: listAPI,
  };
}

let list = makeList();
list.add("peas");
// => peas added!

list.list();
// => peas

list.add("corn");
// => corn added!

list.list();
// => peas
// => corn

list.remove("peas");
// => peas removed!

list.list();
console.log(list.items);
// => corn

// LS Solution:
// function makeList() {
//   return {
//     items: [],

//     add: function (item) {
//       let index = this.items.indexOf(item);
//       if (index === -1) {
//         this.items.push(item);
//         console.log(item + " added!");
//       }
//     },

//     list: function () {
//       if (this.items.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         this.items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     },

//     remove: function (item) {
//       let index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//         console.log(item + " removed!");
//       }
//     },
//   };
// }

// This code is much easier to understand since it uses the property
// names of methods to reveal the intent. The interface and implementation
// are easier to understand and use since each well-named method does one
// thing.