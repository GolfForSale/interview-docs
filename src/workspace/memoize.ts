// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 MEMOIZE FUNCTION
// ═══════════════════════════════════════════════════════════════
// Create a function "memo" that takes a function and returns
// a memoized version of it. Repeated calls with the same
// arguments should return the cached result.
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const memo = (fn) => {
    // Your implementation here
    console.log(123)
  };

  // Tests:
  const add = (a, b) => a + b;
  const memoAdd = memo(add);
  console.log('calc', memoAdd(1, 2));   // Expected: 3
  console.log('cache', memoAdd(1, 2));  // Expected: 3 (from cache)
  console.log('calc', memoAdd(3, 4));   // Expected: 7
};
