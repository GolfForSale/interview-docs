import React from 'react';

interface Props {
  children: React.ReactNode;
  exerciseId: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.exerciseId !== this.props.exerciseId) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 24,
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: 10,
          color: '#fca5a5',
          fontFamily: 'monospace',
          fontSize: 14,
          lineHeight: 1.8,
        }}>
          <strong style={{ color: '#ef4444', fontSize: 16 }}>❌ Rendering Error</strong>
          <pre style={{ marginTop: 12, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {this.state.error?.message}
          </pre>
          <p style={{ marginTop: 16, color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>
            Fix the error in your workspace file and save — the app will auto-reload.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
