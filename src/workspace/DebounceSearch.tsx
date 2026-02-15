// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
// ═══════════════════════════════════════════════════════════════
// 🎯 useDebounce HOOK
// ═══════════════════════════════════════════════════════════════
// Build a search input with debounce functionality.
// The search should only trigger after the user stops typing
// for a specified delay (1000ms).
// Use useRef for the timer and useEffect for cleanup.
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect, useRef } from 'react';

export default function DebounceSearch() {
  // Implement:
  // 1. A search input that updates on every keystroke
  // 2. A debounced value that only updates after 1s of no typing
  // 3. Display both current and debounced value

  return (
    <div>
      <input placeholder="Type to search..." />
      <p>TODO: implement debounce</p>
    </div>
  );
}
