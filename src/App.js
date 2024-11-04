import React from 'react';
import './App.css';
import DigitalClock from './components/DigitalClock';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the my DigiLock: Digital Clock App</h1>
      </header>

      <main className="App-main">
        <DigitalClock />
        <Timer /> 
      </main>

      <footer className="App-footer">
        <p>© 2024 My Digital Clock. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
