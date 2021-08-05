import React from "react";
import _ from "lodash";

import { Svg, Line, Rect } from "@/components/svg";

interface GridProps {
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
  };
  /**
   * Line properties
   */
  line?: {
    /**
     * Line width
     */
    strokeWidth: 1 | 2;
    /**
     * Line color
     */
    stroke: string;
  };
  /**
   * Custom Styles
   */
  style?: {};
}

/**
 * Grid
 */
const Grid: React.FC<GridProps> = ({
  size = [40, 30],
  cell = {
    size: 20,
  },
  line = {
    strokeWidth: 1,
    stroke: "#ddd",
  },
  style = {},
  ...props
}) => {
  const [cols, rows] = size;

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  return (
    <Svg className="grid" width={width} height={height} style={style}>
      <Rect
        x={line.strokeWidth / 2}
        y={line.strokeWidth / 2}
        width={width - line.strokeWidth}
        height={height - line.strokeWidth}
        strokeWidth={line.strokeWidth}
        stroke={line.stroke}
        fill="none"
      />
      {_.range(1, cols).map((x: number) => {
        const left: number = x * cell.size;
        return (
          <Line key={x} x1={left} y1={0} x2={left} y2={height} {...line} />
        );
      })}
      {_.range(1, rows).map((y: number) => {
        const top: number = y * cell.size;
        return <Line key={y} x1={0} y1={top} x2={width} y2={top} {...line} />;
      })}
    </Svg>
  );
};

export default Grid;
