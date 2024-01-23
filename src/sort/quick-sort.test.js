import { quickSort, quickerSort } from './quick-sort.js';

QUnit.module('Sort', () => {
  QUnit.test('should quick sort', (assert) => {
    const input = [3, 5, 6, 8, 1, 34, 10, 2];
    assert.deepEqual(quickSort(input), [1, 2, 3, 5, 6, 8, 10, 34]);
  });

  QUnit.test('should quicker sort asc', (assert) => {
    const input = [11, 10, 9, 8, 6, 7, 4, 2, 1, 3, 5];
    assert.deepEqual(quickerSort(input), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  QUnit.test('should quicker sort desc', (assert) => {
    const input = [11, 10, 9, 8, 6, 7, 4, 2, 1, 3, 5];
    assert.deepEqual(quickerSort(input, false), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
