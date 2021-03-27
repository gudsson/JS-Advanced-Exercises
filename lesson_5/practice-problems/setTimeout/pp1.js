// Write a JavaScript function named delayLog that loops
// through the numbers from 1 to 10, and logs each number
// after that number of seconds. It should log 1 after 1 second,
// 2 after 2 seconds, and so on.

function delayLog() {
  for (let idx = 1; idx <= 10; idx++) {
    setTimeout(() => console.log(idx), idx * 1000);
  }
}

delayLog();
// 1  // 1 second later
// 2  // 1 second later (2 seconds after start)
// 3  // 1 second later (3 seconds after start)
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10