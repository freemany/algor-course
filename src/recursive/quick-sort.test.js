import { quickSort } from './quick-sort.js';

QUnit.module('Sort', () => {
  QUnit.test.each(
    'should quicker sort asc',
    [
      [[11, 10, 9, 8, 6, 7, 4, 2, 1, 3, 5], true, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
      [[11, 10, 9, 8, 6, 7, 4, 2, 1, 3, 5], false, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]],
    ],
    (assert, [number, isAcs, expected]) => {
      assert.deepEqual(quickSort(number, isAcs), expected, `test: ${number.join(', ')} => ${expected.join(', ')}`);
    },
  );
});
