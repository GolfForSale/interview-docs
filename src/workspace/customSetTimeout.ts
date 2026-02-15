// @ts-nocheck
// ═══════════════════════════════════════════════════════════════
// 🎯 CUSTOM setTimeout
// ═══════════════════════════════════════════════════════════════
// Implement your own setTimeout using requestAnimationFrame.
// The callback should be called after the specified delay.
// ═══════════════════════════════════════════════════════════════

export const run = () => {
  const mySetTimeout = (fn, delay) => {
    // Your implementation here
  };

  // Tests:
  console.log("Starting timer...");
  mySetTimeout(() => {
    console.log("Timer fired after ~1000ms!");
  }, 1000);
};
