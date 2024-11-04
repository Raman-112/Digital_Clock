import React, { useState, useEffect } from 'react';
import './Timer.css'; 

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [isActive, setIsActive] = useState(false); 
  const [isPaused, setIsPaused] = useState(false); 

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (isPaused) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="timer-container">
      <h2>Timer</h2>
      <div className="timer-display">{formatTime()}</div>
      <div className="timer-controls">
        {!isActive && time === 0 ? (
          <button className="timer-btn start" onClick={handleStart}>
            Start
          </button>
        ) : isPaused ? (
          <button className="timer-btn resume" onClick={handleStart}>
            Resume
          </button>
        ) : (
          <button className="timer-btn pause" onClick={handlePause}>
            Pause
          </button>
        )}
        <button className="timer-btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
