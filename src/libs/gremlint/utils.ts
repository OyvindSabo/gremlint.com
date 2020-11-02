export const last = <T>(array: T[]) => array.slice(-1)[0];
export const pipe = (...fns: ((value: any) => any)[]) => (value: any) => {
  return fns.reduce((value, fn) => fn(value), value);
};

export const spaces = (numberOfSpaces: number) => {
  return Array(numberOfSpaces + 1).join(' ');
};
