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
  // TODO: remove after approval
  filledCellsStatisticsTimer: ReturnType<typeof setTimeout>;
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
      filledCellsStatisticsTimer: null,
    };

    this.onCellClick = this.onCellClick.bind(this);
    this.onCellMouseEnter = this.onCellMouseEnter.bind(this);
  }

  async componentDidMount() {
    // Getting info from server (TODO: remove after approval)
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // Output filled cells count to console (TODO: remove after approval)
    this.state.filledCellsStatisticsTimer = setInterval(() => {
      const filledCellsCount = this.state.matrix.reduce(
        (acc: number, row: string[]) => {
          return acc + row.filter((c: string) => c !== "#fff").length;
        },
        0
      );
      console.log(`FILLED CELLS COUNT: ${filledCellsCount}`);
    }, 10000);
  }

  shouldComponentUpdate(nextProps: AppProps, nextState: AppState) {
    const toUpdate =
      !_.isEqual(this.state.currentCell, nextState.currentCell) ||
      !_.isEqual(this.state.matrix, nextState.matrix) ||
      !_.isEqual(this.props, nextProps);

    return toUpdate;
  }

  componentDidUpdate() {
    // Fill all cells around every single filled (TODO: remove after approval)
    const matrix = JSON.parse(JSON.stringify(this.state.matrix));

    const cellsToFill = matrix.reduce(
      (acc: [number, number][], row: string[], y: number) => {
        return [
          ...acc,
          ...row.reduce((acc: [number, number][], c: string, x: number) => {
            if (c == "#000") {
              const closedCells: [number, number][] = [
                [x - 1, y - 1],
                [x, y - 1],
                [x + 1, y - 1],
                [x + 1, y],
                [x + 1, y + 1],
                [x, y + 1],
                [x - 1, y + 1],
                [x - 1, y],
              ];

              const toAddClosedCells: boolean = closedCells.every(
                ([cX, cY]) => {
                  return (
                    !matrix[cY] || !matrix[cY][cX] || matrix[cY][cX] != "#000"
                  );
                }
              );

              if (toAddClosedCells) {
                acc.push(...closedCells);
              }
            }

            return acc;
          }, []),
        ];
      },
      []
    );

    if (cellsToFill.length) {
      cellsToFill.forEach(([x, y]) => {
        if (matrix[y] && matrix[y][x]) {
          matrix[y][x] = "#000";
        }
      });

      this.setState({ matrix });
    }
  }

  componentWillUnmount() {
    // TODO: remove after approval
    clearInterval(this.state.filledCellsStatisticsTimer);
  }

  onCellClick(x: number, y: number) {
    const matrix = JSON.parse(JSON.stringify(this.state.matrix));
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
