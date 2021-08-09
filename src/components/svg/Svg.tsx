import React from "react";

interface SvgProps {
  width: number;
  height: number;
  style: {};
}

const Svg: React.FC<SvgProps> = ({
  width = 800,
  height = 600,
  style = {},
  ...props
}) => {
  return (
    <svg
      role="svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      {props.children}
    </svg>
  );
};

export default Svg;
