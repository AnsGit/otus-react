import React, { useState, useEffect } from "react";

import { Field } from "./field";
import { Grid } from "./grid";

interface AppProps {
  /**
   * Field size ([cols, rows]). You can use this prop or matrix prop
   */
  size?: [number, number];
  /**
   * Cells matrix. You can use this prop or size prop
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
  size = [40, 30],
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
  const [cols, rows] = props.matrix
    ? [props.matrix[0].length, props.matrix.length]
    : size;

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  const [matrix, setMatrix] = useState(
    props.matrix ||
      _.range(rows).map((y: number) => {
        return _.range(cols).map((x: number) => cell.color);
      })
  );

  return (
    <div id="app" style={{ width, height, ...style }}>
      <Field matrix={matrix} cell={cell} {...field} />
      {toUseGrid && <Grid size={size} cell={cell} {...grid} />}
    </div>
  );
};

export default App;
