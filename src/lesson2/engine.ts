import { ParsedLineType } from "./parser";
import { isNumber, numberItemRexExp } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  let match: Array<string> | null;
  let value: number, operation: string | undefined;

  return stack.map((item) => {
    match = String(item).match(numberItemRexExp);

    if (match === null) {
      return item;
    }

    [value, operation] = [Number(match[1]), match[2]];

    if (
      operation === undefined ||
      mathOperatorsPriorities[operation] !== FIRST
    ) {
      return item;
    } else {
      if (!mathOperators[operation]) {
        throw new TypeError("Unexpected stack!");
      }

      return mathOperators[operation](value);
    }
  });
};

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  return stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);
};

export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  return stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);
};

export const fourthPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  return [
    stack.reduce<number>((result, nextItem, key) => {
      const item = stack[key - 1];

      if (mathOperatorsPriorities[item] === THIRD) {
        throw new TypeError("Unexpected stack!");
      }

      if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FOURTH) {
        result = mathOperators[item](Number(result), Number(nextItem));
      }
      return result;
    }, Number(stack[0])),
  ];
};

export const calc = (
  stack: ParsedLineType,
  funcs: Array<(stack: ParsedLineType) => ParsedLineType> = [
    firstPrioritiesCalc,
    secondPrioritiesCalc,
    thirdPrioritiesCalc,
    fourthPrioritiesCalc,
  ]
): number => {
  const func = funcs.shift();

  if (func === undefined) {
    throw new TypeError("Function Calc is undefined");
  }

  stack = func(stack);

  if (stack.length === 1) {
    return Number(stack[0]);
  } else {
    return calc(stack, funcs);
  }
};
