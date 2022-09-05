Array.prototype.forEach = function (callback: (value: any, index: number, array: any[]) => void, thisArg?: any) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
