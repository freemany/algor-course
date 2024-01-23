import { bubbleSort } from './bubble-sort.js';

QUnit.module('Bubble sort', () => {
  QUnit.test.each(
    'should bubble sort',
    [
      [[3, 2, 1], true, [1, 2, 3]],
      [[1, 2, 3], false, [3, 2, 1]],
    ],
    (assert, [numbers, order, expected]) => {
      assert.deepEqual(bubbleSort(numbers, order), expected);
    },
  );
});
