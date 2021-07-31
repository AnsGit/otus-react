import React from "react";

import { Field } from "./field";
import { Grid } from "./grid";

interface AppProps {
  /**
   * Size (number of cols and rows) of the field
   */
  size?: [number, number];
  /**
   * Cell properties
   */
  cell?: {
    /**
     * Cell size (px)
     */
    size: 10 | 20 | 30;
    /**
     * Cell color
     */
    color: string;
  };
  /**
   * Field properties
   */
  field?: {};
  /**
   * To use grid?
   */
  toUseGrid?: boolean;
  /**
   * Grid properties
   */
  grid?: {
    line: {
      strokeWidth: 1 | 2;
      stroke: string;
    };
  };
  /**
   * Custom Styles
   */
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
}: AppProps) => {
  const [cols, rows] = size;

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  const matrix: string[][] = _.range(rows).map((y: number) => {
    return _.range(cols).map((x: number) => "#fff");
  });

  return (
    <div id="app" style={{ width, height, ...style }}>
      <Field size={size} cell={cell} matrix={matrix} {...field} />
      {toUseGrid && <Grid size={size} cell={cell} {...grid} />}
    </div>
  );
};

export default App;
