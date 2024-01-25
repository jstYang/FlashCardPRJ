import React, { useState, useEffect } from "react";
import './timer.css';
import { Link } from "react-router-dom";

function Timer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>{`${Math.floor(seconds / 60)}:${(seconds % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`}</p>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
      <Link to='/' style={{ color: 'whitesmoke', textDecoration: 'underline' }}>Back to main page</Link>
    </div>
  );
}

export default Timer;
