// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 THREE SAME LETTERS → DASH
// ═══════════════════════════════════════════════════════════════
// Write a function that replaces three or more consecutive
// identical characters with a single underscore "_".
// Example: "aaabbc" → "_bc"
// Example: "aabbcccc" → "aabb_"
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const handleText = (initText) => {
    // Your implementation here
  };

  // Tests:
  console.log(handleText("aaabbc"));
  // Expected: "_bc"
  console.log(handleText("aabbcccc"));
  // Expected: "aabb_"
  console.log(handleText("abcdddddef"));
  // Expected: "abc_ef"
};
