////////////////
// Custom Set //
////////////////

// Create a custom set type.

// Sometimes it is necessary to define a custom data structure
// of some type, like a set. In this exercise you will define
// your own set. How it works internally doesn't matter, as long
// as it behaves like a set of unique elements.

class CustomSet {
  constructor(arr = []) {
    this.set = this._makeSet(arr);
  }

  empty() {
    return this.set.length === 0;
  }

  contains(number) {
    return this.set.includes(number);
  }

  length() {
    return this.set.length;
  }

  subset(largerSet) {
    return this.set.every(number => largerSet.contains(number));
  }

  disjoint(comparisonSet) {
    return this.set.every(number => !comparisonSet.contains(number));
  }

  eql(comparisonSet) {
    return (this.length() === comparisonSet.length() 
      && this.subset(comparisonSet));
  }

  add(element) {
    if (!this.contains(element)) this.set.push(element);
    return this;
  }

  intersection(secondSet) { // shared elements
    return new CustomSet(this.set.filter(number => secondSet.contains(number)));
  }

  difference(secondSet) { // only in first
    return new CustomSet(this.set.filter(number => !secondSet.contains(number)));
  }

  union(secondSet) { // all elements in either set
    return new CustomSet(this.set.concat(secondSet.set));
  }

  _makeSet(arr) {
    return arr.filter((number, idx) => arr.slice(idx).indexOf(number) === arr.slice(idx).lastIndexOf(number));
  }
}

module.exports = CustomSet;