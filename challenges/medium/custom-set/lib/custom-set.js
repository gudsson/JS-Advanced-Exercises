/* eslint-disable max-len */
////////////////
// Custom Set //
////////////////

// Create a custom set type.

// Sometimes it is necessary to define a custom data structure of some type,
// like a set. In this exercise you will define your own set type. How it
// works internally doesn't matter, as long as it behaves like a set of
// unique elements that can be manipulated in several well defined ways.

// In some languages, including Ruby and JavaScript, there is a built-in
// Set type. For this problem, you're expected to implement your own
// custom set type. Once you've reached a solution, feel free to play
// around with using the built-in implementation of Set.

// For simplicity, you may assume that all elements of a set must be numbers.

class CustomSet {
  constructor(list = []) {
    this.list = list;
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  contains(value) {
    return this.list.includes(value);
  }

  isSubset(set) {
    if (!this.isEmpty() && set.isEmpty()) return false;
    return this.list.map(val => set.contains(val)).every(val => val === true);
  }

  isDisjoint(set) {
    return this.size() === this.list.filter(val => !set.contains(val)).length;
  }

  isSame(set) {
    if (this.size() !== set.size()) return false;
    for (let element in this.list) {
      if (!set.contains(this.list[element])) return false;
    }
    return true;
  }

  add(value) {
    if (!this.contains(value)) this.list.push(value);
    return this;
  }

  intersection(set) {
    let arr = this.list.filter(value => set.contains(value));
    return new CustomSet(arr);
  }

  difference(set) {
    let arr = this.list.filter(value => !set.contains(value));
    return new CustomSet(arr);
  }

  union(set) {
    let arr = this.list.concat(set.list);
    arr = arr.filter((value, idx, arr) => {
      let subArr = arr.slice(idx);
      return subArr.indexOf(value) === subArr.lastIndexOf(value);
    });
    return new CustomSet(arr);
  }
}

module.exports = CustomSet;