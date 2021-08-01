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
  style = {},
  ...props
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {props.children}
    </svg>
  );
};

export default Svg;
