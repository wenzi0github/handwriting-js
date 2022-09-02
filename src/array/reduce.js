Array.prototype.reduce = (callback, initialValue) => {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }
  const { length } = this;
  let i = 0;
  let prevValue = initialValue;
  if (typeof prevValue === "undefined" && length) {
    i++;
    prevValue = this[0];

    if (i >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  }
  while (i < length) {
    prevValue = callback.call(null, prevValue, this[i], i, this);
    i++;
  }
  return prevValue;
};
