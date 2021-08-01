import React from "react";

import { Svg } from "@/components/svg";
import Cell from "./Cell";

interface FieldProps {
  /**
   * Size (number of cols and rows)
   */
  size?: [number, number];
  /**
   * Cell properties
   */
  cell?: {
    /**
     * Cell size (px)
     */
    size: 10 | 20 | 30;
    /**
     * Cell color
     */
    color: string;
  };
  /**
   * Cells matrix
   */
  matrix?: string[][];
  /**
   * Custom Styles
   */
  style?: {};
}

/**
 * Field
 */
const Field: React.FC<FieldProps> = ({
  size = [8, 8],
  cell = {
    size: 20,
  },
  matrix = [
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
  ],
  style = {},
  ...props
}: FieldProps) => {
  const [cols, rows] = size;

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  return (
    <Svg className="field" width={width} height={height} style={style}>
      {matrix.map((row: string[], y: number) => {
        return row.map((color: string, x: number) => (
          <Cell key={`${x}_${y}`} x={x} y={y} color={color} {...cell} />
        ));
      })}
    </Svg>
  );
};

export default Field;
