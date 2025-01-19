import React from "react";
import "./trafic-lights.css";
interface LightsProps {
  // Add your props here
  glow: boolean;
  color: string;
  timer?: number;
  updateToNextColor?: () => void;
}

export const Lights: React.FC<LightsProps> = ({ color, glow }) => {
  // Add your component logic here

  return <div className={`lights ${glow ? "glow" : ""} ${color}`}></div>;
};
