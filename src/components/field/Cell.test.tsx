import React from "react";
import { render, screen } from "@testing-library/react";

import { Svg } from "@/components/svg";
import Cell from "./Cell";

describe("Cell", () => {
  test("Render Cell component", () => {
    render(
      <Svg>
        <Cell x={0} y={0} />
      </Svg>
    );

    expect(screen.getByRole("cell")).toBeInTheDocument();
  });
});
