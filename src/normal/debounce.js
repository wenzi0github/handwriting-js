/**
 * 防抖，将多次高频操作优化为只在最后一次执行
 * @param {Function} callback 回调函数
 * @param {number} delay 一定时间内重复触发，则重新计时
 */
const debounce = (callback, delay) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
}

const fn = debounce(console.log, 200);
