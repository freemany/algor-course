import { bubbleSort } from './bubble-sort';

describe('Bubble sort', () => {
  it.each([
    [[3, 2, 1], true, [1, 2, 3]],
    [[1, 2, 3], false, [3, 2, 1]],
  ])('should bubble sort', (numbers, order, expected) => {
    expect(bubbleSort(numbers, order)).toStrictEqual(expected);
  });
});
