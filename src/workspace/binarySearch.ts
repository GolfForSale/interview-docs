// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 BINARY SEARCH
// ═══════════════════════════════════════════════════════════════
// Implement binary search on a sorted array.
// The function should return the index of the target element,
// or -1 if the element is not found.
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const binarySearch = (arr, target) => {
    // Your implementation here
  };

  // Tests:
  console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 7));   // Expected: 3
  console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 1));   // Expected: 0
  console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 13));  // Expected: 6
  console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 4));   // Expected: -1
  console.log(binarySearch([], 5));                          // Expected: -1
};
