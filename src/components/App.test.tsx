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
  test("Render App component without grid", async () => {
    render(<App size={{ cols: 5, rows: 4 }} toUseGrid={false} />);

    expect(screen.getByRole("app")).toBeInTheDocument();
    expect(screen.getByRole("field")).toBeInTheDocument();
    expect(screen.queryByRole("grid")).toBeNull();
  });
  test("Click on cell", () => {
    const [cols, rows] = [5, 4];

    render(<App size={{ cols, rows }} />);

    expect(screen.getByText("Clicked cell: [null,null]")).toBeInTheDocument();

    const cells = screen.getAllByRole("cell");

    // Click on the first cell
    fireEvent.click(cells[0], {});
    expect(screen.getByText("Clicked cell: [0,0]")).toBeInTheDocument();

    // Click on the last cell
    fireEvent.click(_.last(cells), {});
    expect(
      screen.getByText(`Clicked cell: [${cols - 1},${rows - 1}]`)
    ).toBeInTheDocument();
  });
});
