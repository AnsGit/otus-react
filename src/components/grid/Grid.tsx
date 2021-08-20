import React from "react";
import _ from "lodash";

import style from "./Grid.scss";

import { Svg, Line, Rect } from "@/components/svg";

interface GridProps {
  size?: {
    cols: number;
    rows: number;
  };
  cell?: {
    size: 10 | 20 | 30;
  };
  line?: {
    strokeWidth: 1 | 2;
    stroke: string;
  };
}

class Grid extends React.PureComponent<GridProps> {
  static defaultProps: GridProps = {
    size: {
      cols: 40,
      rows: 30,
    },
    cell: {
      size: 20,
    },
    line: {
      strokeWidth: 1,
      stroke: "#ddd",
    },
  };

  props: GridProps;

  render() {
    const { cols, rows } = this.props.size;
    const { cell, line } = this.props;

    const width: number = cols * cell.size;
    const height: number = rows * cell.size;

    return (
      <Svg className={style.grid} role="grid" width={width} height={height}>
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
  }
}

export default Grid;
