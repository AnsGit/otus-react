import React from "react";
import { render, screen } from "@testing-library/react";

import Status from "./Status";

describe("Status", () => {
  test("Render Status component", () => {
    render(<Status />);
    expect(screen.getByText("Current cell: [0,0]")).toBeInTheDocument();

    render(<Status currentCell={[10, 15]} />);
    expect(screen.getByText("Current cell: [10,15]")).toBeInTheDocument();
  });
});
