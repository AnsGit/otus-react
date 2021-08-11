import React from "react";
import _ from "lodash";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("Render App component with grid", () => {
    render(<App size={{ cols: 5, rows: 4 }} />);

    expect(screen.getByRole("app")).toBeInTheDocument();
    expect(screen.getByRole("field")).toBeInTheDocument();
    expect(screen.getByRole("grid")).toBeInTheDocument();

    expect(screen.getAllByRole("cell")).toHaveLength(20);
  });
  test("Render App component without grid", () => {
    render(<App size={{ cols: 5, rows: 4 }} toUseGrid={false} />);

    expect(screen.getByRole("app")).toBeInTheDocument();
    expect(screen.getByRole("field")).toBeInTheDocument();
    expect(screen.queryByRole("grid")).toBeNull();
  });
  test("Mouse enter to the cell", () => {
    const [cols, rows] = [5, 4];

    render(<App size={{ cols, rows }} />);

    expect(screen.getByText("Current cell: [null,null]")).toBeInTheDocument();

    const cells = screen.getAllByRole("cell");

    // Click on the first cell
    fireEvent.mouseEnter(cells[0], {});
    expect(screen.getByText("Current cell: [0,0]")).toBeInTheDocument();

    // Click on the last cell
    fireEvent.mouseEnter(_.last(cells), {});
    expect(
      screen.getByText(`Current cell: [${cols - 1},${rows - 1}]`)
    ).toBeInTheDocument();
  });
});
