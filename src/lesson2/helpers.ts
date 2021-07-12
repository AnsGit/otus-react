export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const numberItemRexExp = /^([0-9]+)([^0-9]+)?$/;

export const isNumberItem = (item: string): boolean =>
  String(item).match(numberItemRexExp) !== null;
