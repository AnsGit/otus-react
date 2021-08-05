import React from "react";

interface RectProps {
  x: number;
  y: number;
  width: number;
  height: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  style?: {};
}

const Rect: React.FC<RectProps> = ({
  x,
  y,
  width,
  height,
  strokeWidth = 1,
  stroke = "none",
  fill = "#ddd",
  style = {},
  ...props
}) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
      style={style}
      {...props}
    />
  );
};

export default Rect;
