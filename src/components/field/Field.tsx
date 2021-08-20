import React from "react";
import _ from "lodash";

import style from "./Field.scss";

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
    onMouseEnter: (x: number, y: number) => void;
  };
}

class Field extends React.Component<FieldProps> {
  static defaultProps = {
    matrix: [[]],
    cell: {
      size: 20,
      onClick: (x: number, y: number) => [x, y],
      onMouseEnter: (x: number, y: number) => [x, y],
    },
  };

  props: FieldProps;

  shouldComponentUpdate(newProps: FieldProps) {
    const toUpdate =
      // Checking of the matrix changing is more priority
      !_.isEqual(this.props.matrix, newProps.matrix) ||
      !_.isEqual(this.props.cell, newProps.cell);

    return toUpdate;
  }

  render() {
    const { cell, matrix } = this.props;
    const [cols, rows] = [matrix[0].length, matrix.length];

    const width: number = cols * cell.size;
    const height: number = rows * cell.size;

    return (
      <Svg className={style.field} role="field" width={width} height={height}>
        {matrix.map((row: string[], y: number) => {
          return row.map((color: string, x: number) => (
            <Cell
              key={`${x}_${y}`}
              x={x}
              y={y}
              color={color}
              size={cell.size}
              onClick={cell.onClick}
              onMouseEnter={cell.onMouseEnter}
            />
          ));
        })}
      </Svg>
    );
  }
}

export default Field;
