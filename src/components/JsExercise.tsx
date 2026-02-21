import React, { useState, useEffect, useCallback, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Exercise } from '../types';
import { jsWorkspaces, tsWorkspaces } from '../workspace';

interface JsExerciseProps {
  exercise: Exercise;
}

const JsExercise: React.FC<JsExerciseProps> = ({ exercise }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const mountedRef = useRef(true);

  const runFn = jsWorkspaces[exercise.id] ?? tsWorkspaces[exercise.id];

  const executeCode = useCallback(() => {
    const logs: string[] = [];
    const originalLog = console.log;
    const originalError = console.error;
    setError(null);
    setOutput([]);

    const formatArg = (arg: any): string => {
      if (arg === undefined) return 'undefined';
      if (arg === null) return 'null';
      if (typeof arg === 'object') {
        try { return JSON.stringify(arg); } catch { return String(arg); }
      }
      return String(arg);
    };

    const updateOutput = () => {
      if (mountedRef.current) {
        setOutput([...logs]);
      }
    };

    console.log = (...args: any[]) => {
      originalLog(...args);
      logs.push(args.map(formatArg).join(' '));
      updateOutput();
    };

    console.error = (...args: any[]) => {
      originalError(...args);
      logs.push('❌ ' + args.map(formatArg).join(' '));
      updateOutput();
    };

    try {
      if (!runFn) {
        logs.push('⚠️ No workspace function found for this exercise.');
        updateOutput();
        console.log = originalLog;
        console.error = originalError;
        return;
      }

      const result = runFn();

      if (result && typeof (result as any).then === 'function') {
        (result as Promise<void>).then(() => {
          // Wait a bit for any remaining async operations
          setTimeout(() => {
            console.log = originalLog;
            console.error = originalError;
            updateOutput();
          }, 2500);
        }).catch((err: any) => {
          console.log = originalLog;
          console.error = originalError;
          setError(err.message || String(err));
          updateOutput();
        });
      } else {
        // Sync code — keep capturing for a few seconds (for requestAnimationFrame / setTimeout)
        setTimeout(() => {
          console.log = originalLog;
          console.error = originalError;
          updateOutput();
        }, 3000);
      }
    } catch (err: any) {
      console.log = originalLog;
      console.error = originalError;
      setError(err.message || String(err));
      updateOutput();
    }
  }, [runFn]);

  useEffect(() => {
    mountedRef.current = true;
    setShowSolution(false);
    executeCode();
    return () => {
      mountedRef.current = false;
    };
  }, [executeCode]);

  return (
    <div className="exercise-workspace">
      <div className="exercise-header">
        <div>
          <h2 className="exercise-title">{exercise.title}</h2>
          <span className={`exercise-badge ${exercise.category === 'typescript' ? 'ts-badge' : 'js-badge'}`}>
            {exercise.category === 'typescript' ? 'TypeScript' : 'JavaScript'}
          </span>
        </div>
      </div>

      <p className="exercise-description">{exercise.description}</p>

      {/* File to edit */}
      <div className="file-path-box">
        <span className="file-path-label">📂 Edit in VS Code:</span>
        <code className="file-path-value">{exercise.filePath}</code>
      </div>

      {/* Expected results */}
      {exercise.testCases && exercise.testCases.length > 0 && (
        <div className="test-cases">
          <h3 className="test-cases-title">Expected Results</h3>
          <div className="test-cases-grid">
            {exercise.testCases.map((tc, i) => (
              <div key={i} className="test-case">
                <span className="test-input">Input: {tc.input}</span>
                <span className="test-arrow">→</span>
                <span className="test-output">{tc.expectedOutput}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Console Output */}
      <div className="output-section">
        <div className="output-header">
          <h3 className="output-title">Console Output</h3>
          <button className="btn btn-secondary btn-sm" onClick={executeCode}>
            ▶ Re-run
          </button>
        </div>
        <div className="output-panel">
          {error && (
            <div className="output-line error">
              <span className="output-prefix">&gt;</span> ❌ Error: {error}
            </div>
          )}
          {output.length === 0 && !error ? (
            <span className="output-placeholder">
              Implement the function in{' '}
              <strong>{exercise.filePath}</strong> and save — output will appear here automatically.
            </span>
          ) : (
            output.map((line, i) => (
              <div key={i} className={`output-line ${line.startsWith('❌') ? 'error' : ''}`}>
                <span className="output-prefix">&gt;</span> {line}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Solution */}
      <div className="solution-section">
        <button
          className="btn btn-secondary"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? '🙈 Hide Solution' : '👁 Show Solution'}
        </button>

        {showSolution && (
          <div className="solution-editor">
            <Editor
              height="400px"
              defaultLanguage="javascript"
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
    </div>
  );
};

export default JsExercise;
