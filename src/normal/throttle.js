/**
 * 节流，将高频操作优化成低频操作，
 * 一定时间内只执行一次
 * @param {Function} callback 回调函数
 * @param {number} limit 限制时间
 * @returns 
 */
const throttle = (callback, limit) => {
  let canRun = true; // 是否可以执行

  return (...args) => {
    if (!canRun) {
      return;
    }
    canRun = false; // 当前时间内已经可以执行一个了，其他的暂时不执行
    const timer = setTimeout(() => {
      callback.apply(null, args);
      canRun = true; // 执行完毕，重置为可以执行的状态
    }, limit);
  };
};