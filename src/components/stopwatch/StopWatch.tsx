// Create a stopwatch application through which
//users can start, pause and reset the timer.
//Use React state, event handlers and the setTimeout or setInterval
//functions to manage the timer’s state and actions.

import React, { useEffect, useRef } from "react";
// interface StopWatchProps {
//   // Add your props here
// }

export const StopWatch: React.FC = () => {
  const [time, setTime] = React.useState(0);
  const [start, setStart] = React.useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>();
  useEffect(() => {
    if (start) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    } else {
      clearInterval(timer.current);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [start]);
  const resetTime = () => {
    setTime(0);
    clearInterval(timer.current);
    setStart(false);
  };
  const formatTime = (time: number) => {
    const microseconds = time % 100;
    const seconds = Math.floor(time / 10) % 60;
    const minutes = Math.floor(time / 600);
    return `${minutes}:${seconds}:${microseconds}`;
  };
  return (
    <div>
      <div>{formatTime(time)}</div>
      <div>
        <button onClick={resetTime}>reset</button>
        <button onClick={() => setStart(true)}>start</button>
        <button onClick={() => setStart(false)}>pause</button>
      </div>
    </div>
  );
};
