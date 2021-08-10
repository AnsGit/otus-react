import React from "react";
import { render, screen } from "@testing-library/react";

import Field from "./Field";

describe("Field", () => {
  test("Render Field component", () => {
    render(
      <Field
        matrix={[
          ["#fff", "#fff"],
          ["#fff", "#fff"],
        ]}
      />
    );

    expect(screen.getByRole("field")).toBeInTheDocument();

    expect(screen.getAllByRole("cell")).toHaveLength(4);
  });
});
