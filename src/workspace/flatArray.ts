// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 FLATTEN ARRAY
// ═══════════════════════════════════════════════════════════════
// Write a function that flattens a deeply nested array into
// a single-level array. Do NOT use Array.flat().
// Input:  [1, 2, 3, [4, 5, [5, 4]]]
// Output: [1, 2, 3, 4, 5, 5, 4]
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const flatArr = (arrayToFlat) => {
    // Your implementation here
  };

  // Tests:
  console.log(flatArr([1, 2, 3, [4, 5, [5, 4]]]));
  // Expected: [1, 2, 3, 4, 5, 5, 4]
  console.log(flatArr([1, [2, [3, [4, [5]]]]]));
  // Expected: [1, 2, 3, 4, 5]
};
