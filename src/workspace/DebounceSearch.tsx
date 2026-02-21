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
  const [search, setSearch] = useState('')
  const [debounceSearch, setDebounceSearch] = useState('')
  const timer = useRef(null)
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebounceSearch(search)
    }, 1000)
    return () => {
      clearTimeout(timer.current)
    }
  }, [search])
  return (
    <div>
      <input placeholder="Type to search..." onChange={handleChange} />
      <p>TODO: implement debounce {debounceSearch}</p>
    </div>
  );
}
