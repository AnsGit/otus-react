import React from "react";
import _ from "lodash";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("Render App component with grid", () => {
    const [cols, rows] = [5, 4];

    render(<App size={{ cols, rows }} />);

    expect(screen.getByRole("app")).toBeInTheDocument();
    expect(screen.getByRole("field")).toBeInTheDocument();
    expect(screen.getByRole("grid")).toBeInTheDocument();

    expect(screen.getAllByRole("cell")).toHaveLength(cols * rows);
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
  test("Click to the cell =>  auto-filling cells around the clicked", () => {
    const [cols, rows] = [10, 10];
    const cellProps = { size: 20, color: "#fff" };

    render(<App size={{ cols, rows }} cell={cellProps} />);

    const cells = screen.getAllByRole("cell");

    // Center cell
    const cell = cells[45];
    const [x, y] = [
      Number(cell.getAttribute("x")),
      Number(cell.getAttribute("y")),
    ];

    fireEvent.click(cell, {});

    const filledCells = cells.filter((c) => {
      const [cX, cY] = [
        Number(c.getAttribute("x")),
        Number(c.getAttribute("y")),
      ];

      return (
        (Math.abs(cX - x) == cellProps.size ||
          Math.abs(cY - y) == cellProps.size) &&
        c.getAttribute("fill") == "#000"
      );
    });

    expect(filledCells.length).toBe(8);
  });
});
