import React from "react";
import _ from "lodash";

import { render, screen, fireEvent } from "@testing-library/react";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

const createFetch = (result) => {
  return jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(result),
    })
  );
};

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

    expect(screen.getByText("Current cell: [0,0]")).toBeInTheDocument();

    const cells = screen.getAllByRole("cell");

    // Mouse enter to the first cell
    fireEvent.mouseEnter(cells[0], {});
    expect(screen.getByText("Current cell: [0,0]")).toBeInTheDocument();

    // Mouse enter to the last cell
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
  test("Check filledCellsStatisticsTimer init", () => {
    const app = shallow(<App />);
    expect(app.instance().filledCellsStatisticsTimer).toBeGreaterThan(0);
  });
  test("Check user info getting", async () => {
    global.fetch = createFetch({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });

    const app = shallow(<App />);
    expect(app.state().userInfo).toBeNull();

    await app.instance().getUserInfo();
    expect(fetch).toHaveBeenCalledTimes(2);

    const { userInfo } = app.state();
    [
      "address.city",
      "address.geo.lat",
      "address.geo.lng",
      "address.street",
      "address.suite",
      "address.zipcode",
      "company.bs",
      "company.catchPhrase",
      "company.name",
      "email",
      "id",
      "name",
      "phone",
      "username",
    ].forEach((prop) => {
      expect(userInfo).toHaveProperty(prop);
    });
  });
});
