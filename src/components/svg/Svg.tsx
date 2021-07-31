import React from "react";

interface SvgProps {
  /**
   * Svg width
   */
  width: number;
  /**
   * Svg height
   */
  height: number;
  /**
   * Svg fill color
   */
  fill?: string;
  /**
   * Custom Styles
   */
  style: {};
}

/**
 * Svg
 */
const Svg: React.FC<SvgProps> = ({
  width = 800,
  height = 600,
  fill = "none",
  style = {},
  ...props
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {props.children}
    </svg>
  );
};

export default Svg;
