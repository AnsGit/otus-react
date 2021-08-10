import { getUserOrderStates } from "./easy1";

describe("getUserOrderStates cases", () => {
  it("All props usage", () => {
    expect(
      getUserOrderStates([
        "initial",
        "inWork",
        "buyingSupplies",
        "producing",
        "fullfilled",
      ])
    ).toEqual(["initial", "inWork", "fullfilled"]);
  });
});
