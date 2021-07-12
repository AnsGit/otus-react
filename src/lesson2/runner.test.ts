import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });

  it("2 ^ 5", () => {
    expect(runner("2 ^ 5")).toEqual(32);
  });

  it("12**", () => {
    expect(runner("12**")).toEqual(144);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3 ^ 2", () => {
    expect(runner("2 + 2 * 3 ^ 2")).toEqual(20);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("20 / 2** * 10 / 5 - 3 ^ 2 + 4**", () => {
    expect(runner("20 / 2** * 10 / 5 - 3 ^ 2 + 4**")).toEqual(17);
  });
});
