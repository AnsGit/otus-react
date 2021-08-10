import React from "react";

import { Rect } from "@/components/svg";

interface CellProps {
  x: number;
  y: number;
  color?: string;
  size?: 10 | 20 | 30;
  onClick?: (x: number, y: number) => void;
  style?: Record<string, string>;
}

const Cell: React.FC<CellProps> = ({
  x,
  y,
  color = "#fff",
  size = 20,
  onClick = (x: number, y: number) => [x, y],
  style = {},
  ...props
}) => {
  return (
    <Rect
      className="cell"
      role="cell"
      x={x * size}
      y={y * size}
      width={size}
      height={size}
      fill={color}
      onClick={() => {
        onClick(x, y);
      }}
      style={style}
    />
  );
};

export default Cell;
