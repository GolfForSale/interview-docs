import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Exercise } from '../types';
import { reactWorkspaces } from '../workspace';
import ErrorBoundary from './ErrorBoundary';

// Import solution components for the "reference demo"
import CarouselSolution from '../solutions/CarouselSolution';
import DebounceSolution from '../solutions/DebounceSolution';
import TicTacToeSolution from '../solutions/TicTacToeSolution';
import FetchingSolution from '../solutions/FetchingSolution';

const solutionComponents: Record<string, React.ComponentType> = {
  'carousel': CarouselSolution,
  'use-debounce': DebounceSolution,
  'tic-tac-toe': TicTacToeSolution,
  'fetching': FetchingSolution,
};

interface ReactExerciseProps {
  exercise: Exercise;
}

const ReactExercise: React.FC<ReactExerciseProps> = ({ exercise }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showReference, setShowReference] = useState(false);

  const WorkspaceComponent = reactWorkspaces[exercise.id];
  const SolutionComponent = solutionComponents[exercise.id];

  // Reset when exercise changes
  React.useEffect(() => {
    setShowSolution(false);
    setShowReference(false);
  }, [exercise.id]);

  return (
    <div className="exercise-workspace">
      <div className="exercise-header">
        <div>
          <h2 className="exercise-title">{exercise.title}</h2>
          <span className="exercise-badge react-badge">React</span>
        </div>
      </div>

      <p className="exercise-description">{exercise.description}</p>

      {/* File to edit */}
      <div className="file-path-box">
        <span className="file-path-label">📂 Edit in VS Code:</span>
        <code className="file-path-value">{exercise.filePath}</code>
      </div>

      {/* Your Component (live render from workspace file) */}
      <div className="demo-section">
        <div className="demo-header">
          <h3 className="demo-title">Your Component</h3>
        </div>
        <div className="demo-container">
          <ErrorBoundary exerciseId={exercise.id}>
            {WorkspaceComponent ? (
              <WorkspaceComponent />
            ) : (
              <p style={{ color: '#94a3b8' }}>No workspace component found.</p>
            )}
          </ErrorBoundary>
        </div>
      </div>

      {/* Reference Solution Demo */}
      {SolutionComponent && (
        <div className="demo-section">
          <div className="demo-header">
            <h3 className="demo-title">Reference Demo</h3>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setShowReference(!showReference)}
            >
              {showReference ? '🙈 Hide Reference' : '👁 Show Reference'}
            </button>
          </div>
          {showReference && (
            <div className="demo-container">
              <SolutionComponent />
            </div>
          )}
        </div>
      )}

      {/* Solution Code */}
      <div className="solution-section">
        <button
          className="btn btn-secondary"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? '🙈 Hide Solution Code' : '👁 Show Solution Code'}
        </button>

        {showSolution && (
          <div className="solution-editor">
            <Editor
              height="500px"
              defaultLanguage="typescript"
              value={exercise.solution}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                readOnly: true,
                wordWrap: 'on',
                padding: { top: 16 },
              }}
            />
          </div>
        )}
      </div>

      <div className="react-tip">
        <strong>💡 How it works:</strong> Edit{' '}
        <code>{exercise.filePath}</code> in VS Code and save.
        Your component renders live above. Use "Show Reference" to see the
        expected behavior and "Show Solution Code" to check the implementation.
      </div>
    </div>
  );
};

export default ReactExercise;
