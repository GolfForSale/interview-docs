import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with exercises', () => {
  render(<App />);
  const exerciseElements = screen.getAllByText(/Memoize Function/i);
  expect(exerciseElements[0]).toBeInTheDocument();
});
