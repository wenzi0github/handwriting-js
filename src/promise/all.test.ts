// import promiseAll from "./all";
const promiseAll = require('./all');

const sleep = (delay: number, type = 'fulfilled'): Promise<number> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });

describe('test Promise.all', () => {
  test('should return Promise empty list when param list length is 0', async () => {
    expect(await promiseAll([])).toEqual([]);
  });
  test('should get all Promise all', async () => {
    expect(await promiseAll([sleep(10), sleep(30), sleep(20)])).toEqual([10, 30, 20]);
  });
  test('should to catch fn when some one has been rejected', (done) => {
    // expect(await ).toEqual([10, 30, 20]);
    promiseAll([sleep(10), sleep(30, 'rejected'), sleep(20)]).catch((err: any) => {
      expect(err).toBe(30);
      done();
    });
  });
});
