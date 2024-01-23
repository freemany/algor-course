import { binarySearch } from './index.js';

QUnit.module('Binary search', () => {
  QUnit.test.each(
    'should double linked list',
    [
      [[1, 2, 3], 2, true],
      [[1, 2, 3, 7, 9, 10, 24], 24, true],
      [[1, 2, 3, 7, 9, 10, 24], 1, true],
      [[1, 2, 3, 7, 9, 10, 24], 9, true],
      [[1, 2, 3, 7, 9, 10, 24], 8, false],
    ],
    (assert, [arr, n, expected]) => {
      assert.equal(binarySearch(arr, n), expected);
    },
  );
});
