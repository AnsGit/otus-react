import React from "react";

import { Rect } from "@/components/svg";

interface CellProps {
  /**
   * x
   */
  x: number;
  /**
   * y
   */
  y: number;
  /**
   * Color
   */
  color?: string;
  /**
   * Size (px) of one cell
   */
  size?: 10 | 20 | 30;
  /**
   * Custom Styles
   */
  style?: {};
}

/**
 * Cell
 */
const Cell: React.FC<CellProps> = ({
  x,
  y,
  color = "#fff",
  size = 20,
  style = {},
  ...props
}: CellProps) => {
  return (
    <Rect
      x={x * size}
      y={y * size}
      width={size}
      height={size}
      fill={color}
      style={style}
    />
  );
};

export default Cell;
