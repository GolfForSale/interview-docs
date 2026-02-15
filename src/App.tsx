import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import JsExercise from './components/JsExercise';
import ReactExercise from './components/ReactExercise';
import { exercises } from './data/exercises';
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [selectedId, setSelectedId] = useState(exercises[0].id);

  const selectedExercise = exercises.find(e => e.id === selectedId);

  if (!selectedExercise) return null;

  return (
    <div className="app">
      <Analytics />
      <Sidebar
        exercises={exercises}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <main className="main-content">
        {selectedExercise.category === 'javascript' ? (
          <JsExercise key={selectedExercise.id} exercise={selectedExercise} />
        ) : (
          <ReactExercise key={selectedExercise.id} exercise={selectedExercise} />
        )}
      </main>
    </div>
  );
}

export default App;
