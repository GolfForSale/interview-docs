import { useState, useEffect, useRef } from 'react';

function Carousel({ delay, children }: { delay: number; children: React.ReactNode[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setIndex(i => (i + 1) % children.length);
    }, delay);
  };

  const clearTimer = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    clearTimer();
    startTimer();
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrev = () => {
    setIndex(i => (i - 1 + children.length) % children.length);
    clearTimer();
    startTimer();
  };

  const handleNext = () => {
    setIndex(i => (i + 1) % children.length);
    clearTimer();
    startTimer();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '2.5em',
        fontWeight: 700,
        margin: '24px 0',
        color: '#e2e8f0',
        minHeight: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {children[index]}
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button onClick={handlePrev} style={btnStyle}>← Previous</button>
        <span style={{ color: '#94a3b8', alignSelf: 'center', fontSize: 14 }}>
          {index + 1} / {children.length}
        </span>
        <button onClick={handleNext} style={btnStyle}>Next →</button>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: '8px 20px',
  borderRadius: 8,
  border: '1px solid #475569',
  background: '#334155',
  color: '#e2e8f0',
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  transition: 'all 0.2s',
};

export default function CarouselSolution() {
  const slides = [
    <span key="1">🌟 Slide 1</span>,
    <span key="2">🚀 Slide 2</span>,
    <span key="3">💡 Slide 3</span>,
    <span key="4">🎯 Slide 4</span>,
    <span key="5">✨ Slide 5</span>,
  ];
  return <Carousel delay={2000}>{slides}</Carousel>;
}
