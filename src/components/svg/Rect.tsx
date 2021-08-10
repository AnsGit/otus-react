import React from "react";

interface RectProps {
  x: number;
  y: number;
  width: number;
  height: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  onClick?: () => void;
  style?: Record<string, string>;
}

const Rect: React.FC<RectProps> = ({
  x,
  y,
  width,
  height,
  strokeWidth = 1,
  stroke = "none",
  fill = "#ddd",
  onClick = () => null,
  style = {},
  ...props
}) => {
  return (
    <rect
      role="rect"
      x={x}
      y={y}
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
      style={style}
      onClick={onClick}
      {...props}
    />
  );
};

export default Rect;
