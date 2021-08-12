import React from "react";
import _ from "lodash";

import { Rect } from "@/components/svg";

import style from "./Cell.scss";

interface CellProps {
  x: number;
  y: number;
  color?: string;
  size?: 10 | 20 | 30;
  onClick?: (x: number, y: number) => void;
  onMouseEnter?: (x: number, y: number) => void;
}

class Cell extends React.Component<CellProps> {
  static defaultProps = {
    color: "#fff",
    size: 20,
    onClick: (x: number, y: number) => [x, y],
    onMouseEnter: (x: number, y: number) => [x, y],
  };

  props: CellProps;

  shouldComponentUpdate(newProps: CellProps) {
    // Checking of the color changing is more priority
    const toUpdate =
      this.props.color !== newProps.color || !_.isEqual(this.props, newProps);

    return toUpdate;
  }

  render() {
    const { x, y, color, size, onClick, onMouseEnter } = this.props;

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
        onMouseEnter={() => {
          onMouseEnter(x, y);
        }}
      />
    );
  }
}

export default Cell;
