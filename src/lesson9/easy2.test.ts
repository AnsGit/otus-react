import { getOrderState } from "./easy2";

describe("getOrderState cases", () => {
  it("Simple checking of result", () => {
    expect(
      getOrderState({
        state: "fullfilled",
        sum: 10,
        workerId: 8,
        suppliesSum: 5,
        produceEstimate: new Date(),
        fullfillmentDate: new Date(),
      })
    ).toEqual("fullfilled");
  });
});
