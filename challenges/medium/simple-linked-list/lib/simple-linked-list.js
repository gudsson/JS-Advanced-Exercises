////////////////////////
// Simple Linked List //
////////////////////////

// Write a simple linked list implementation. The linked list is a fundamental
// data structure in computer science, often used in the implementation of
// other data structures.

// The simplest kind of linked list is a singly linked list. Each element in the
// list contains data and a "next" field pointing to the next element in the
// list of elements. This variant of linked lists is often used to represent
// sequences or push-down stacks (also called a LIFO stack; Last In, First Out).

// Let's create a singly linked list whose elements may contain a range of data
// such as the numbers 1-10. Provide functions to reverse the linked list and
// convert a linked list to and from an array.

class Element {
  constructor(data, next = null) {
    this.data = data;
    this.nextPointer = next;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return (this.nextPointer === null);
  }

  next() {
    return this.nextPointer;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(item) {
    let element = (this.size() > 0) ?
      new Element(item, this.head()) : new Element(item);

    this.list.push(element);
  }

  head() {
    return this.list[this.size() - 1];
  }

  peek() {
    let item = this.head();
    return (item) ? item.datum() : null;
  }

  pop() {
    return this.list.pop().datum();
  }

  static fromArray(arr) {
    let list = new SimpleLinkedList();
    if (!arr) return list;

    arr.slice().reverse().forEach(data => {
      list.push(data);
    });

    return list;
  }

  toArray() {
    return this.list.map(element => element.datum()).reverse();
  }

  reverse() {
    this.list.reverse();

    for (let idx = 1; idx < this.size(); idx++) {
      this.list[idx].nextPointer = this.list[idx - 1];
    }

    this.list[0].nextPointer = null;
    return this;
  }
}

module.exports = {
  SimpleLinkedList,
  Element
};