/**
 * [1,2,3].map();
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {*} callback
 */
Array.prototype.map = function (callback, thisArg) {
  const result = [];

  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this));
  }

  return result;
};
