export const isNullOrUndefined = (param) => {
  return param === null || param === undefined;
};

export const isPlainObject = (param) => {
  return !param && typeof param === 'object';
};
