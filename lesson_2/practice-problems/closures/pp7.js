// Without running the following code, determine what value it logs
// on the last line. Explain how the program arrived at that final
// result.

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3); // 6
result += bar(4); // 6 + (6 * 4) = 30
result += bar(5); // 30 + (24 * 5) = 150
console.log(result); // 150

// Line 13 we declare variable 'bar' and set it equal to function definition
// 'foo'.  We invoke foo with with the argument 2 passed in and set to the
// local variable 'start'

// On line 6, we create a variable 'prod' which has local scope, and we set it
// equal to the start variable, which points to the numeric literal 2.

// On line 7, we return an anonymous function whose closure contains a reference
// to the prod variable.

// On line 14, we initialize the global variable result.  We then assign it to
// the return value of bar(3).  This is a function invocation of the bar
// function with the factor parameter set to 3.  On line 8, the prod closure
// variable gets set to 2 * 3 => 6 and returned.  result = 6 at this point.

// On line 15, bar(4) is invoked.  This takes prod (6) and multiplies it by
// the argument 4.  prod and the return value are both 24.  The return value
// gets added to result, and result is equal to 30.

// On line 16, bar(5) is invoked.  This takes prod (24) and multiplies it by
// the argument 5.  prod and the return value are both 120.  The return value
// gets added to result, and result is equal to 150.

// On line 17, 150 gets logged to the console.

// LS Solution:

// On line 9, we create a function that we assign to the bar variable. This
// function takes a single argument, multiplies it with a variable named prod,
// and returns the result. Even though prod is out of scope when we call bar,
// closure lets bar retain access to prod.

// On line 10, we call the returned function with a value of 3. Due to closure,
// the function has access to prod, which is currently set to 2. It multiplies
// total by 3, and returns the new value of total, i.e., 6. We assign the
// return value to result.

// On line 11, we again call the returned function, but this time with an
// argument of 4. Since we set prod to 6 in the previous call, we end up
// multiplying 6 by 4, and setting prod to the result, 24. We then return
// that value and add it to the previous result, 6, which produces a
// result of 30.

// Line 12 is similar. This time, we multiply prod (whose value is 24) by 5,
// and set prod to the result, 120. We then return 120 and add it to the
// previous result value of 30, which produces the final value of 150.