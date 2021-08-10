import React from "react";
import { render, screen } from "@testing-library/react";

import { Svg, Line } from "./";

describe("Line", () => {
  test("Render Line component", () => {
    render(
      <Svg>
        <Line x1={0} y1={0} x2={50} y2={50} />
      </Svg>
    );

    expect(screen.getByRole("line")).toBeInTheDocument();
  });
});
