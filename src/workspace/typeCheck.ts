// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
// ═══════════════════════════════════════════════════════════════
// 🎯 UTILITY TYPE: TypeCheck<T>
// ═══════════════════════════════════════════════════════════════
// Write a utility type with type argument T.
// It should produce:
//   - 'S' if T is string
//   - 'N' if T is number
//   - never otherwise
//
// Example:
//   type A = TypeCheck<string>  → 'S'
//   type B = TypeCheck<number>  → 'N'
//   type C = TypeCheck<boolean> → never
// ═══════════════════════════════════════════════════════════════

// Your implementation here:
type TypeCheck<T> = unknown; // replace this

// ─── Verification (do not modify) ────────────────────────────

type Assert<T, Expected> = T extends Expected
  ? Expected extends T
    ? 'pass'
    : 'fail'
  : 'fail';

export const run = () => {
  const test1: Assert<TypeCheck<string>, 'S'> = 'pass';
  const test2: Assert<TypeCheck<number>, 'N'> = 'pass';
  const test3: Assert<TypeCheck<boolean>, never> = 'pass';
  const test4: Assert<TypeCheck<object>, never> = 'pass';
  const test5: Assert<TypeCheck<string[]>, never> = 'pass';

  console.log('TypeCheck<string>  =', test1 === 'pass' ? "'S'  ✓" : 'FAIL');
  console.log('TypeCheck<number>  =', test2 === 'pass' ? "'N'  ✓" : 'FAIL');
  console.log('TypeCheck<boolean> =', test3 === 'pass' ? 'never ✓' : 'FAIL');
  console.log('TypeCheck<object>  =', test4 === 'pass' ? 'never ✓' : 'FAIL');
  console.log('TypeCheck<string[]>=', test5 === 'pass' ? 'never ✓' : 'FAIL');
};
