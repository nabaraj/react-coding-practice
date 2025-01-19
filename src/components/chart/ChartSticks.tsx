import React, { useEffect } from "react";
interface ChartStickProps {
  // Add your props here
  style: { maxHeight: string; backgroundColor: string; width: string };
  toolTipText: string;
  toggleAnimation?: boolean;
  resetToggleAnimation: () => void;
}

export const ChartStick: React.FC<ChartStickProps> = ({
  style,
  toolTipText,
  toggleAnimation = false,
  resetToggleAnimation,
}) => {
  // Add your component logic here
  const addedHeight = style.maxHeight;
  console.log(addedHeight);
  const [height, setHeight] = React.useState(0 + "%");
  useEffect(() => {
    const interval = setTimeout(() => {
      if (toggleAnimation) {
        setHeight(addedHeight);
        resetToggleAnimation();
      }
    }, 100);
    return () => clearTimeout(interval);
  }, [addedHeight, toggleAnimation]);
  return (
    <div
      className='chart-stick'
      style={{
        height,
        backgroundColor: style.backgroundColor,
        width: style.width,
      }}
    >
      <div className='toolTip'>{toolTipText}</div>
    </div>
  );
};
