// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 PROMISE.ALL IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════
// Implement your own version of Promise.all.
// It should take an array of values/promises and resolve when
// all of them are resolved, returning results in the same order.
// ═══════════════════════════════════════════════════════════════

export const run = async () => {
  const promiseAll = async (values) => {
    // Your implementation here
  };

  // Tests:
  const result = await promiseAll([
    5,
    Promise.resolve("test"),
    new Promise((resolve) => {
      setTimeout(() => resolve([8]), 500);
    }),
    new Promise((resolve) => {
      setTimeout(() => resolve("1234"), 1500);
    }),
    "abc",
  ]);
  console.log("result:", JSON.stringify(result));
  // Expected: [5,"test",[8],"1234","abc"]
};
