import React, { useState, useEffect } from "react";
import _ from "lodash";

import style from "./App.scss";

import { Field } from "./field";
import { Grid } from "./grid";
import { Status } from "./status";

interface AppProps {
  size?: {
    cols: number;
    rows: number;
  };
  /**
   * Cells matrix
   */
  matrix?: string[][];
  cell?: {
    size: 10 | 20 | 30;
    color: string;
  };
  field?: Record<string, any>;
  toUseGrid?: boolean;
  grid?: {
    line: {
      strokeWidth: 1 | 2;
      stroke: string;
    };
  };
}

/**
 * App with Field and Grid
 */
const App: React.FC<AppProps> = ({
  size = {
    cols: 40,
    rows: 30,
  },
  cell = {
    size: 20,
    color: "#fff",
  },
  field = {},
  toUseGrid = true,
  grid = {
    line: {
      strokeWidth: 1,
      stroke: "#ddd",
    },
  },
  ...props
}) => {
  let cols: number, rows: number;

  if (props.matrix) {
    cols = props.matrix[0].length;
    rows = props.matrix.length;
  } else {
    cols = size.cols;
    rows = size.rows;
  }

  // Matrix of cells colors
  const [matrix, setMatrix] = useState(
    props.matrix ||
      _.range(rows).map(() => {
        return _.range(cols).map(() => cell.color);
      })
  );

  // Click to cell
  const onCellClick = (x: number, y: number) => {
    const newMatrix = [...matrix];
    newMatrix[y][x] = "#000";
    setMatrix(newMatrix);
  };

  // Current cell coords
  const [currentCell, setCurrentCell] = useState([null, null]);
  const onCellMouseEnter = (x: number, y: number) => {
    setCurrentCell([x, y]);
  };

  return (
    <div id="app" role="app">
      <div className={style.inner}>
        <Field
          matrix={matrix}
          cell={{
            ...cell,
            onClick: onCellClick,
            onMouseEnter: onCellMouseEnter,
          }}
          {...field}
        />
        {toUseGrid && <Grid size={{ cols, rows }} cell={cell} {...grid} />}
        <Status currentCell={currentCell} />
      </div>
    </div>
  );
};

export default App;
