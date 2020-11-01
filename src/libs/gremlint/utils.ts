export const last = (array) => array.slice(-1)[0];
export const pipe = (...fns) => (value) => fns.reduce((value, fn) => fn(value), value);
export const spaces = (numberOfSpaces) => Array(numberOfSpaces + 1).join(' ');
