import { binarySearch } from '.';

describe('Binary search', () => {
  it.each([
    [[1, 2, 3], 2, true],
    [[1, 2, 3, 7, 9, 10, 24], 24, true],
    [[1, 2, 3, 7, 9, 10, 24], 1, true],
    [[1, 2, 3, 7, 9, 10, 24], 9, true],
    [[1, 2, 3, 7, 9, 10, 24], 8, false],
  ])('should binary search', (arr, n, expected) => {
    expect(binarySearch(arr, n)).toBe(expected);
  });
});
