// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 MAP, FILTER, REDUCE
// ═══════════════════════════════════════════════════════════════
// Implement your own versions of Array.map, Array.filter,
// and Array.reduce.
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const myMap = (array, calculation) => {
    // Your implementation here
  };

  const myFilter = (array, calculation) => {
    // Your implementation here
  };

  const myReduce = (array, initialValue, calculation) => {
    // Your implementation here
  };

  // Tests:
  const myArray = [1, 2, 3, 4, 5];

  console.log("map x2:", myMap(myArray, (x) => x * 2));
  // Expected: [2, 4, 6, 8, 10]

  console.log("filter even:", myFilter(myArray, (x) => x % 2 === 0));
  // Expected: [2, 4]

  console.log("reduce sum:", myReduce(myArray, 0, (acc, x) => acc + x));
  // Expected: 15
};
