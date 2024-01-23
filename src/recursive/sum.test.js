import { getFibonacci, getFibonacciNumber, sum } from './sum.js';

QUnit.module('Sum up recursive', () => {
  QUnit.test.each(
    'should resursively sum',
    [
      [[1], 1],
      [[1, 2, 3, 4, 5], 15],
    ],
    (assert, [number, expected]) => {
      assert.equal(sum(number), expected, `test: ${number.join(', ')} => ${expected}`);
    },
  );

  QUnit.test.each(
    'should have Ficonacci series',
    [
      [1, [0]],
      [2, [0, 1]],
      [4, [0, 1, 1, 2]],
      [15, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]],
    ],
    (assert, [number, expected]) => {
      assert.deepEqual(getFibonacci(number), expected, `test: ${number} => ${expected.join(', ')}`);
    },
  );

  QUnit.test.each(
    'should have Ficonacci number',
    [
      [0, 0],
      [1, 1],
      [3, 2],
      [14, 377],
    ],
    (assert, [number, expected]) => {
      assert.deepEqual(getFibonacciNumber(number), expected, `test: ${number} => ${expected}`);
    },
  );
});
