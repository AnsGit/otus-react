import React from "react";
import { render, screen } from "@testing-library/react";

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
});
