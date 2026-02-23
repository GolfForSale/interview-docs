// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
// ═══════════════════════════════════════════════════════════════
// 🎯 CURRY FUNCTION (N arguments)
// ═══════════════════════════════════════════════════════════════
// Implement a curry function that takes a binary function (e.g. add)
// and allows calling it one argument at a time, for any number
// of arguments. Call with no arguments to get the final result.
//
// Example:
//   const add = (a, b) => a + b;
//   curry(add)(1)(3)(5)(18)()  → 27
//   curry(add)(10)(20)()       → 30
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const curry = (fn) => {
    // Your implementation here
  };

  const add = (a, b) => a + b;

  // Tests:
  console.log(curry(add)(1)(3)(5)(18)());   // Expected: 27
  console.log(curry(add)(10)(20)());         // Expected: 30
  console.log(curry(add)(1)(2)(3)());        // Expected: 6
  console.log(curry(add)(5)());              // Expected: 5
  console.log(curry(add)(2)(3)(4)(5)(6)()); // Expected: 20
};
