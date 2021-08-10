import React from "react";

import { Svg } from "@/components/svg";
import Cell from "./Cell";

interface FieldProps {
  /**
   * Cells matrix
   */
  matrix?: string[][];
  cell?: {
    size: 10 | 20 | 30;
    onClick: (x: number, y: number) => void;
  };
  style?: {};
}

const Field: React.FC<FieldProps> = ({
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
  cell = {
    size: 20,
    onClick: (x: number, y: number) => {},
  },
  style = {},
  ...props
}) => {
  const [cols, rows] = [matrix[0].length, matrix.length];

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  return (
    <Svg
      className="field"
      role="field"
      width={width}
      height={height}
      style={style}
    >
      {matrix.map((row: string[], y: number) => {
        return row.map((color: string, x: number) => (
          <Cell
            key={`${x}_${y}`}
            x={x}
            y={y}
            color={color}
            size={cell.size}
            onClick={cell.onClick}
          />
        ));
      })}
    </Svg>
  );
};

export default Field;
