import { useState, useEffect, useRef } from 'react';

export default function DebounceSolution() {
  const [search, setSearch] = useState('React');
  const [debounceSearch, setDebounceSearch] = useState('React');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const delay = 1000;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebounceSearch(search);
    }, delay);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        value={search}
        onChange={handleSearch}
        placeholder="Type to search..."
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 8,
          border: '1px solid #475569',
          background: '#1e293b',
          color: '#e2e8f0',
          fontSize: 16,
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
      <div style={{ marginTop: 16, color: '#94a3b8', fontSize: 14 }}>
        <p>
          <strong style={{ color: '#e2e8f0' }}>Current value:</strong>{' '}
          <span style={{ color: '#60a5fa' }}>{search}</span>
        </p>
        <p>
          <strong style={{ color: '#e2e8f0' }}>Debounced value</strong>{' '}
          <span style={{ color: '#64748b' }}>(updates after 1s)</span>:{' '}
          <span style={{ color: '#34d399' }}>{debounceSearch}</span>
        </p>
      </div>
    </div>
  );
}
