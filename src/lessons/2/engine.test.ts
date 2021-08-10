import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
  calc,
} from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[24, -, 3**]", () => {
    expect(firstPrioritiesCalc([24, "-", "3**"])).toEqual([24, "-", 9]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[24, -, 9, *, 3, ^, 3]", () => {
    expect(secondPrioritiesCalc([24, "-", 9, "*", 3, "^", 3])).toEqual([
      24,
      "-",
      9,
      "*",
      27,
    ]);
  });
});

describe("thirdPrioritiesCalc simple cases", () => {
  it("[1, *, 32]", () => {
    expect(thirdPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(thirdPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, +, 32]", () => {
    expect(thirdPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("thirdPrioritiesCalc mixed with fourth priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(thirdPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("fourthPrioritiesCalc invalid cases", () => {
  it("[32, /, 32]", () => {
    expect(() => fourthPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("fourthPrioritiesCalc simple cases", () => {
  it("[32, +, 32]", () => {
    expect(fourthPrioritiesCalc([32, "+", 32])).toEqual([64]);
  });

  it("[32, -, 32]", () => {
    expect(fourthPrioritiesCalc([32, "-", 32])).toEqual([0]);
  });

  it("[32, -, 32, +, 10]", () => {
    expect(fourthPrioritiesCalc([32, "-", 32, "+", 10])).toEqual([10]);
  });
});

describe("calc cases", () => {
  it("[20, /, 2**, *, 10, /, 5, -, 3, ^, 2, +, 4**]", () => {
    expect(
      calc([
        "20",
        "/",
        "2**",
        "*",
        "10",
        "/",
        "5",
        "-",
        "3",
        "^",
        "2",
        "+",
        "4**",
      ])
    ).toEqual(17);
  });
});
