import { useEffect, useRef } from 'react';

/**
 * setInterval的hook实现方式
 * @param {Function} callback 回调函数
 * @param {number|null} delay 延迟时间，为null时停止执行
 */
const useInterval = (callback, delay) => {
  const saveCallbackRef = useRef();

  useEffect(() => {
    // 每次渲染后，保存新的回调到我们的 ref 里
    saveCallbackRef.current = callback;
  });

  useEffect(() => {
    function tick() {
      saveCallbackRef.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
export default useInterval;
