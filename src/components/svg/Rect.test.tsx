import React from "react";
import { render, screen } from "@testing-library/react";

import { Svg, Rect } from "./";

describe("Rect", () => {
  test("Render Rect component", () => {
    render(
      <Svg>
        <Rect x={0} y={0} width={50} height={50} />
      </Svg>
    );

    expect(screen.getByRole("rect")).toBeInTheDocument();
  });
});
