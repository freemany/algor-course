import { crystalBall } from './index.js';

QUnit.module('Crystal ball problem', () => {
  QUnit.test.each(
    'should get the floor',
    [
      [[false, false, false, true, true, true, true], 3],
      [[false, false, false, false, false, false, true], 6],
      [[false, false, false, false, false, false], -1],
      [[true, true], 0],
    ],
    (assert, [breaks, expected]) => {
      assert.equal(crystalBall(breaks), expected);
    },
  );
});
