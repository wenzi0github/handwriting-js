export const isNullOrUndefined = (param) => {
  return param === null || param === undefined;
};

export const isPlainObject = (param) => {
  return !param && typeof param === 'object';
};

/**
 * 判断是否可以解析该参数为obj数据
 * @param {any} str
 */
export const isCanParseToJSON = (str) => {
  const type = typeof str;
  if (type === 'number' || type === 'boolean') {
    // 虽然 number 和boolean类型可以用JSON.parse解析，但解析后的不是obj类型
    return false;
  }
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
};
