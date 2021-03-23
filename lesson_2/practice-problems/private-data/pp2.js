/* eslint-disable max-lines-per-function */
// In this problem, we'll build a simple todo list program that uses the
// techniques we've seen in this assignment.

// Write a makeList function that creates and returns a new function that
// implements a todo list. The returned function should have the following
// behavior:

// When called with an argument that is not already on the list, it adds
// that argument to the list.
// When called with an argument that is already on the list, it removes
// the element from the list.
// When called without arguments, it prints all of the items on the list.
// If the list is empty, it prints an appropriate message.

function makeList() {
  let todoList = [];

  return (todo) => {
    if (todo) {
      modifyList();
    } else printList();

    function printList() {
      if (todoList.length > 0) {
        todoList.forEach(item => console.log(item));
      }
      else console.log('The list is empty.');
    }

    function modifyList() {
      if (todoList.includes(todo)) {
        todoList.splice(todoList.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else {
        todoList.push(todo);
        console.log(`${todo} added!`);
      }
    }
  };
}

let list = makeList();
list();
// => The list is empty.

list("make breakfast");
// => make breakfast added!

list("read book");
// // => read book added!

list();
// // => make breakfast
// // => read book

list("make breakfast");
// // => make breakfast removed!

list();
// // => read book

// LS Solution:
// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + " added!");
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + " removed!");
//       }
//     } else if (items.length === 0) {
//       console.log("The list is empty.");
//     } else {
//       items.forEach(item => console.log(item));
//     }
//   };
// }