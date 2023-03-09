import { quickSort } from './quick-sort';

describe('Sort', () => {
  it('should quicker sort asc', () => {
    const input = [11, 10, 9, 8, 6, 7, 4, 2, 1, 3, 5];
    expect(quickSort(input)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it('should quicker sort desc', () => {
    const input = [11, 10, 9, 8, 6, 7, 4, 2, 1, 3, 5];
    expect(quickSort(input, false)).toStrictEqual([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
