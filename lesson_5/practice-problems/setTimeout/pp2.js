// In our solution for the previous problem, what do you think
// would happen if you replaced let delay with var delay? Go ahead
// and try it and see if you can explain the difference in behavior.

function delayLog() {
  for (var idx = 1; idx <= 10; idx++) {
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