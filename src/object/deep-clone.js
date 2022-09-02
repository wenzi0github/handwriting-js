/**
 * 深拷贝
 * @param {any} param 要深拷贝的参数
 * @param {WeakMap?} weakMap 存储数据，避免无限循环引用
 * @returns {any}
 */
const deepClone = (param, weakMap = new WeakMap()) => {
  if (typeof param !== "object") {
    return param;
  }
  if (weakMap.has(param)) {
    return weakMap.get(param);
  }
  const result = Array.isArray(param) ? [] : {};

  for (let key in param) {
    const value = param[key];
    if (typeof value === "object") {
      weakMap.set(value, param);
      result[key] = deepClone(value, weakMap);
    } else {
      result[key] = value;
    }
  }
  return result;
};
