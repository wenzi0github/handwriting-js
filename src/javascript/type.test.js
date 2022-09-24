import { isNullOrUndefined } from './type';

describe('test isNullOrUndefined', () => {
  test('should return true when param is null or undefind', () => {
    expect(isNullOrUndefined(null)).toBeTruthy();
    expect(isNullOrUndefined(undefined)).toBeTruthy();
  });
});
