export type ScalarOperationType = (num1: number, num2: number) => number;
export type SingleOperationType = (value: number) => number;

export const sqr: SingleOperationType = (num: number): number => pow(num, 2);

export const pow: ScalarOperationType = (num1: number, num2: number): number =>
  num1 ** num2;

export const mul: ScalarOperationType = (num1: number, num2: number): number =>
  num1 * num2;

export const div: ScalarOperationType = (num1: number, num2: number): number =>
  num1 / num2;

export const add: ScalarOperationType = (num1: number, num2: number): number =>
  num1 + num2;

export const minus: ScalarOperationType = (
  num1: number,
  num2: number
): number => num1 - num2;

export const mathOperators: {
  [key: string]: any;
} = {
  "**": sqr,
  "^": pow,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": FIRST,
  "^": SECOND,
  "*": THIRD,
  "/": THIRD,
  "+": FOURTH,
  "-": FOURTH,
};
