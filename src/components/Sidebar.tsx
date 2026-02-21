import React from 'react';
import { Exercise } from '../types';

interface SidebarProps {
  exercises: Exercise[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ exercises, selectedId, onSelect }) => {
  const jsExercises = exercises.filter(e => e.category === 'javascript');
  const tsExercises = exercises.filter(e => e.category === 'typescript');
  const reactExercises = exercises.filter(e => e.category === 'react');

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">JS, TS & React Practice</h1>
        <p className="sidebar-subtitle">Interview Prep Platform</p>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-category">
          <h2 className="category-title">
            <span className="category-icon">⚡</span> JavaScript
          </h2>
          <ul className="exercise-list">
            {jsExercises.map(ex => (
              <li key={ex.id}>
                <button
                  className={`exercise-item ${selectedId === ex.id ? 'active' : ''}`}
                  onClick={() => onSelect(ex.id)}
                >
                  <span className="exercise-dot" />
                  {ex.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-category">
          <h2 className="category-title">
            <span className="category-icon">🔷</span> TypeScript
          </h2>
          <ul className="exercise-list">
            {tsExercises.map(ex => (
              <li key={ex.id}>
                <button
                  className={`exercise-item ${selectedId === ex.id ? 'active' : ''}`}
                  onClick={() => onSelect(ex.id)}
                >
                  <span className="exercise-dot" />
                  {ex.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-category">
          <h2 className="category-title">
            <span className="category-icon">⚛️</span> React
          </h2>
          <ul className="exercise-list">
            {reactExercises.map(ex => (
              <li key={ex.id}>
                <button
                  className={`exercise-item ${selectedId === ex.id ? 'active' : ''}`}
                  onClick={() => onSelect(ex.id)}
                >
                  <span className="exercise-dot" />
                  {ex.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
