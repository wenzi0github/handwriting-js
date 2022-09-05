// get the last fulfilled or rejected promise

Promise.last = (promiseList) => {
  return new Promise((resolve, reject) => {
    let num = 0;
    let len = promiseList.length;
    let lastResolvedResult;

    const fn = () => {
      if (++num === len) {
        lastResolvedResult ? resolve(lastResolvedResult) : reject('all promises rejected');
      }
    };
    promiseList.forEach((pms) => {
      Promise.resolve(pms)
        .then((res) => {
          lastResolvedResult = res;
          fn();
        })
        .catch(fn);
    });
  });
};
