import React from "react";

import { Rect } from "@/components/svg";

import style from "./Cell.scss";

interface CellProps {
  x: number;
  y: number;
  color?: string;
  size?: 10 | 20 | 30;
  onClick?: (x: number, y: number) => void;
}

const Cell: React.FC<CellProps> = ({
  x,
  y,
  color = "#fff",
  size = 20,
  onClick = (x: number, y: number) => [x, y],
  ...props
}) => {
  return (
    <Rect
      className={style.cell}
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
