export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperationType = (value: number) => number;

export const sqr: SingleOperationType = (value: number): number =>
  pow(value, 2);

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const mathOperators: { [key: string]: any } = {
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
