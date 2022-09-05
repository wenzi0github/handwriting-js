import promiseAll from "./all";

describe("test Promise.all", () => {
  test("should return Promise empty list when param list length is 0", async () => {
    expect(await promiseAll([])).toEqual([]);
  });
});
