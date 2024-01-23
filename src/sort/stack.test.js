import { Stack } from './stack.js';

QUnit.module('Stack', () => {
  QUnit.test('should stack', (assert) => {
    const s = new Stack();
    s.push(1).push(2).push(3);
    assert.deepEqual(s.length, 3);

    assert.deepEqual(s.pop(), 3);
    assert.deepEqual(s.pop(), 2);
    assert.deepEqual(s.pop(), 1);
    assert.deepEqual(s.length, 0);
    assert.deepEqual(s.pop(), undefined);

    s.push(4).push(5).push(6);
    assert.deepEqual(s.length, 3);
    assert.deepEqual(s.pop(), 6);
    assert.deepEqual(s.pop(), 5);
    assert.deepEqual(s.pop(), 4);
    assert.deepEqual(s.length, 0);
    assert.deepEqual(s.pop(), undefined);
  });
});
