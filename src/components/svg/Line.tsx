import React from "react";

interface LineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeWidth?: number;
  stroke?: string;
  style?: {};
}

const Line: React.FC<LineProps> = ({
  x1,
  y1,
  x2,
  y2,
  strokeWidth = 1,
  stroke = "#ddd",
  style = {},
  ...props
}) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      strokeWidth={strokeWidth}
      stroke={stroke}
      style={style}
      {...props}
    />
  );
};

export default Line;
