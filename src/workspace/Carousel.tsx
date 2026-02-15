// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
// ═══════════════════════════════════════════════════════════════
// 🎯 CAROUSEL COMPONENT
// ═══════════════════════════════════════════════════════════════
// Build a carousel that auto-advances through slides and has
// Previous/Next buttons. Use useEffect for the auto-play
// timer and useRef to manage the interval.
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect, useRef } from 'react';

function Carousel({ delay, children }) {
  // Implement:
  // 1. Auto-advance through children with setInterval
  // 2. Previous / Next buttons
  // 3. Reset the timer when user clicks a button

  return (
    <div>
      <div style={{ fontSize: '2em', margin: '20px 0' }}>
        {/* Current slide */}
        TODO: show current slide
      </div>
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}

export default function CarouselDemo() {
  const slides = [
    <span key="1">🌟 Slide 1</span>,
    <span key="2">🚀 Slide 2</span>,
    <span key="3">💡 Slide 3</span>,
    <span key="4">🎯 Slide 4</span>,
    <span key="5">✨ Slide 5</span>,
  ];
  return <Carousel delay={2000}>{slides}</Carousel>;
}
