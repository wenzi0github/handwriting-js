/**
 * 递归实现数组扁平化
 * @param {any[]} arr 
 * @param {number} depth 
 * @returns 
 */
const arrayFlatByDepth = (arr, depth = 1) => {
  const result = [];

  arr.forEach(item => {
    if (depth >= 1 && Array.isArray(item)) {
      result.push(...arrayFlatByDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
};

/**
 * reduce实现数组扁平化，但实质上还是循环+递归的方式
 * @param {any[]} arr 
 * @param {number} depth 
 * @returns 
 */
const arrayFlatByReduce = (arr, depth = 1) => {
  if (depth <= 0) {
    return arr.slice();
  }
  return arr.reduce((prev, item) => {
    return prev.concat(Array.isArray(item) ? arrayFlatByReduce(item, depth - 1) : item);
  }, []);
};

console.log(arrayFlatByDepth([1, 2, [3, 4, [5, 6]], 7], Infinity));
console.log(arrayFlatByReduce([1, 2, [3, 4, [5, 6]], 7], Infinity));
