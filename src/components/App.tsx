import React, { useState, useEffect } from "react";
import _ from "lodash";

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
  let cols: number, rows: number;

  if (props.matrix) {
    cols = props.matrix[0].length;
    rows = props.matrix.length;
  } else {
    cols = size.cols;
    rows = size.rows;
  }

  const width: number = cols * cell.size;
  const height: number = rows * cell.size;

  // Matrix of cells colors
  const [matrix, setMatrix] = useState(
    props.matrix ||
      _.range(rows).map(() => {
        return _.range(cols).map(() => cell.color);
      })
  );

  // Clicked cell coords
  let clickedCell: (number | null)[];
  let setClickedCell: React.SetStateAction<typeof clickedCell>;
  [clickedCell, setClickedCell] = useState([null, null]);

  const onCellClick = (x: number, y: number) => {
    const newMatrix = [...matrix];
    newMatrix[y][x] = "#000";
    setMatrix(newMatrix);

    setClickedCell([x, y]);
  };

  return (
    <div id="app" role="app" style={{ ...style, width, height }}>
      <Field
        matrix={matrix}
        cell={{ ...cell, onClick: onCellClick }}
        {...field}
      />
      {toUseGrid && <Grid size={{ cols, rows }} cell={cell} {...grid} />}
      <div
        style={{
          position: "absolute",
          height: 60,
          width: width,
          top: height,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontFamily: "monospace",
        }}
      >
        Clicked cell: {JSON.stringify(clickedCell)}
      </div>
    </div>
  );
};

export default App;
