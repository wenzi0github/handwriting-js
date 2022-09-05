/**
 *
 * @param {Promise[]} list
 */
Promise.all = (list) => {
  const result = [];

  let hasResolved = 0; // finished promise num
  let iteratorIndex = 0; // for-of has no key, use extra index

  return new Promise((resolve, reject) => {
    for (const item of list) {
      const curIndex = iteratorIndex;
      iteratorIndex++;
      Promise.resolve(item)
        .then((res) => {
          hasResolved++;
          result[curIndex] = res;

          if (hasResolved >= iteratorIndex) {
            resolve(result);
          }
        })
        .catch(reject);
    }
    if (iteratorIndex === 0) {
      // list is empty
      resolve(result);
    }
  });
};

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

export default Promise.all;

const reject1 = () => Promise.reject(2);

Promise.all([]).then(console.log);
Promise.all([sleep(100), sleep(300), sleep(200)]).then(console.log);
Promise.all([sleep(100), reject1(), sleep(200)])
  .then(console.log)
  .catch(console.error);
