function maxItem(...args) {
  // let maximum = first;
  // moreArgs.forEach(value => {
  //   if (value > maximum) {
  //     maximum = value;
  //   }
  // });

  return Math.max(...args);
}

console.log(maxItem(2, 6, 10, 4, -3));