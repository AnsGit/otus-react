import { parser, ParsedLineType } from "./parser";

import { calc } from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  return calc(stack);
};
