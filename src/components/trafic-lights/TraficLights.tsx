import React, { useCallback, useEffect, useRef, useState } from "react";
import { Lights } from "./Lights";
const lights = [
  { color: "red", timer: 10000 },
  { color: "yellow", timer: 5000 },
  { color: "green", timer: 15000 },
];

export const TraficLights: React.FC = () => {
  // Add your component logic here
  // const [timer];
  const interVal = useRef<number>();
  const [colorIndex, setColorIndex] = useState(0);
  const [delay, setDelay] = useState(lights[colorIndex].timer);

  const updateDelay = () => {
    clearInterval(interVal.current);
    setDelay(30000);
  };

  const updateToNextColor = useCallback(() => {
    const currentIndex = colorIndex === lights.length - 1 ? 0 : colorIndex + 1;
    console.log("called");
    setDelay(lights[currentIndex].timer);
    setColorIndex(currentIndex);
  }, [colorIndex]);

  useEffect(() => {
    // clearInterval(interVal.current);

    const startTimer = () => {
      console.log(delay);
      interVal.current = setInterval(() => {
        updateToNextColor();
      }, delay);
    };
    startTimer();
    return () => clearInterval(interVal.current);
  }, [delay, updateToNextColor]);

  return (
    <div>
      {lights.map(({ timer, color }, index) => (
        <Lights
          color={color}
          glow={colorIndex === index}
          updateToNextColor={updateToNextColor}
          timer={timer}
        ></Lights>
      ))}
      <div className='controller'>
        <button onClick={updateDelay}>add more time</button>
      </div>
      <div className='timer'></div>
    </div>
  );
};
