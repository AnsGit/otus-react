import React from "react";

interface RectProps {
  /**
   * start x
   */
  x: number;
  /**
   * start y
   */
  y: number;
  /**
   * Rect width
   */
  width: number;
  /**
   * Rect height
   */
  height: number;
  /**
   * Rect line width
   */
  strokeWidth?: number;
  /**
   * Rect line color
   */
  stroke?: string;
  /**
   * Rect fill color
   */
  fill?: string;
  /**
   * Custom Styles
   */
  style?: {};
}

/**
 * Rect
 */
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
