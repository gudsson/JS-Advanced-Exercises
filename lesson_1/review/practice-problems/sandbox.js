"use strict";


function foo() {
  global.bar = 3.1415;
}

foo();
console.log(bar); // 3.1415