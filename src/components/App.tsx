import React, { useState, useEffect } from "react";

import { Field } from "./field";
import { Grid } from "./grid";

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
  field?: {};
  toUseGrid?: boolean;
  grid?: {
    line: {
      strokeWidth: 1 | 2;
      stroke: string;
    };
  };
  style?: {};
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
  field = {
    style: { position: "absolute" },
  },
  toUseGrid = true,
  grid = {
    line: {
      strokeWidth: 1,
      stroke: "#ddd",
    },
    style: { position: "absolute", pointerEvents: "none" },
  },
  style = {},
  ...props
}) => {
  let cols, rows;

  if (props.matrix) {
    cols = props.matrix[0].length;
    rows = props.matrix.length;
  } else {
    cols = size.cols;
    rows = size.rows;
  }

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  const [matrix, setMatrix] = useState(
    props.matrix ||
      _.range(rows).map((y: number) => {
        return _.range(cols).map((x: number) => cell.color);
      })
  );

  return (
    <div id="app" style={{ ...style, width, height }}>
      <Field matrix={matrix} cell={cell} {...field} />
      {toUseGrid && <Grid size={{ cols, rows }} cell={cell} {...grid} />}
    </div>
  );
};

export default App;
