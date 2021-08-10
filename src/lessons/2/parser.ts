import { isNumberItem } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumberItem(prevItem) && isNumberItem(item);
    const isValidOperatorPush =
      isNumberItem(prevItem) &&
      !isNumberItem(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush || isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
