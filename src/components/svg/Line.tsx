import React from "react";

interface LineProps {
  /**
   * Start x
   */
  x1: number;
  /**
   * Start y
   */
  y1: number;
  /**
   * End x
   */
  x2: number;
  /**
   * End y
   */
  y2: number;
  /**
   * Line width
   */
  strokeWidth?: number;
  /**
   * Line color
   */
  stroke?: string;
  /**
   * Custom Styles
   */
  style?: {};
}

/**
 * Line
 */
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
