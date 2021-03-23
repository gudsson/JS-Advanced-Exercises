/* eslint-disable max-lines-per-function */
// Notice that our solution to the previous problem lets us access the array
// of items through the items property.
// Update the implementation from problem 1 so that it retains the use of
// an object with methods but prevents outside access to the items the object
// stores internally.

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

// LS Solution:
// function makeList() {
//   let items = [];

//   return {
//     // items: [], -- this line removed

//     add: function(item) {
//       let index = items.indexOf(item);
//       if (index === -1) {
//         items.push(item);
//         console.log(item + " added!");
//       }
//     },

//     list: function() {
//       if (items.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     },

//     remove: function(item) {
//       let index = items.indexOf(item);
//       if (index !== -1) {
//         items.splice(index, 1);
//         console.log(item + " removed!");
//       }
//     },
//   };
// }