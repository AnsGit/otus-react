import React from "react";
import { render, screen } from "@testing-library/react";

import Grid from "./Grid";

describe("Grid", () => {
  test("Render Grid component", () => {
    const [cols, rows] = [5, 4];

    render(<Grid size={{ cols, rows }} />);

    expect(screen.getByRole("grid")).toBeInTheDocument();

    expect(screen.getByRole("rect")).toBeInTheDocument();
    expect(screen.getAllByRole("line")).toHaveLength(cols - 1 + rows - 1);
  });
});
