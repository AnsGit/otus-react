import React from "react";
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

interface AppState {
  size: {
    cols: number;
    rows: number;
  };
  matrix: string[][];
  currentCell: [number, number];
}

/**
 * App with Field and Grid
 */
class App extends React.Component<AppProps, AppState> {
  static defaultProps: AppProps = {
    size: {
      cols: 40,
      rows: 30,
    },
    cell: {
      size: 20,
      color: "#fff",
    },
    field: {},
    toUseGrid: true,
    grid: {
      line: {
        strokeWidth: 1,
        stroke: "#ddd",
      },
    },
  };

  props: AppProps;
  state: AppState;
  setState: React.SetStateAction<Partial<AppState>>;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      // Matrix of cells colors
      matrix:
        props.matrix ||
        _.range(props.size.rows).map(() => {
          return _.range(props.size.cols).map(() => props.cell.color);
        }),
      // Number of cols and rows in the matrix
      size: props.matrix
        ? {
            cols: props.matrix[0].length,
            rows: props.matrix.length,
          }
        : { ...props.size },
      // Cell under the cursor
      currentCell: [null, null],
    };

    this.onCellClick = this.onCellClick.bind(this);
    this.onCellMouseEnter = this.onCellMouseEnter.bind(this);
  }

  onCellClick(x: number, y: number) {
    const matrix = [...this.state.matrix];
    matrix[y][x] = "#000";
    this.setState({ matrix });
  }

  onCellMouseEnter(x: number, y: number) {
    this.setState({ currentCell: [x, y] });
  }

  render() {
    return (
      <div id="app" role="app">
        <div className={style.inner}>
          <Field
            matrix={this.state.matrix}
            cell={{
              ...this.props.cell,
              onClick: this.onCellClick,
              onMouseEnter: this.onCellMouseEnter,
            }}
            {...this.props.field}
          />
          {this.props.toUseGrid && (
            <Grid
              size={this.state.size}
              cell={this.props.cell}
              {...this.props.grid}
            />
          )}
          <Status currentCell={this.state.currentCell} />
        </div>
      </div>
    );
  }
}

export default App;
