import React from "react";
import { render, screen } from "@testing-library/react";

import Svg from "./Svg";

describe("Svg", () => {
  test("Render Svg component", () => {
    render(<Svg />);

    expect(screen.getByRole("svg")).toBeInTheDocument();
  });
});
