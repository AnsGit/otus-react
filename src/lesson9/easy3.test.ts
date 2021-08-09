import { omit } from "./easy3";

describe("omit cases", () => {
  it("Simple checking of result", () => {
    expect(omit({ a: 1, b: 2, c: 3 }, "b")).toEqual({ a: 1, c: 3 });
  });
});
