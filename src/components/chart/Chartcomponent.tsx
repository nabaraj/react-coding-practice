import React, { useState } from "react";
import "./chart.css";
import { useChartGenerator } from "./hooks";
import { ChartStick } from "./ChartSticks";

export const ChartComponent: React.FC = () => {
  // Add your component logic here
  const { updatedData } = useChartGenerator();
  const [toggleAnimation, setToggleAnimation] = useState(true);
  const rerunChart = () => {
    setToggleAnimation(true);
  };

  return (
    <div>
      <div className={"chartBlock" + (toggleAnimation ? " animate" : "")}>
        {updatedData.map(({ id, name, ticketCount, style }) => {
          const toolTipText = `${name}:${ticketCount}`;
          return (
            <ChartStick
              style={style}
              key={id}
              toolTipText={toolTipText}
              toggleAnimation={toggleAnimation}
              resetToggleAnimation={() => setToggleAnimation(false)}
            />
          );
        })}
      </div>
      <button onClick={rerunChart}>rerun chart</button>
    </div>
  );
};
