// get the first fulfilled promise
Promise.first = (list) => {
  let hasRejected = 0; // finished promise num
  let iteratorIndex = 0; // for-of has no key, use extra index

  return new Promise((resolve, reject) => {
    for (const item of list) {
      iteratorIndex++;
      Promise.resolve(item)
        .then(resolve)
        .catch(() => {
          hasRejected++;
          if (hasRejected === iteratorIndex) {
            reject(new Error('all promises are rejected'));
          }
        });
    }
  });
};
